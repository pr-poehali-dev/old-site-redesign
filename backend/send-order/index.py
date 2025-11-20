import json
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send order request email from contact form
    Args: event - dict with httpMethod, body, headers
          context - object with request_id, function_name
    Returns: HTTP response dict with status
    '''
    method: str = event.get('httpMethod', 'POST')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError as e:
        print(f"JSON decode error: {str(e)}")
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid JSON in request body'}),
            'isBase64Encoded': False
        }
    
    name = body_data.get('name', '').strip()
    phone = body_data.get('phone', '').strip()
    detail = body_data.get('detail', '').strip()
    message = body_data.get('message', '').strip()
    
    print(f"Received form data: name={name}, phone={phone}, detail={detail}")
    
    if not name or not phone:
        print("Validation failed: name or phone missing")
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'}),
            'isBase64Encoded': False
        }
    
    smtp_host = os.environ.get('SMTP_HOST', 'smtp.yandex.ru')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    
    print(f"SMTP config: host={smtp_host}, port={smtp_port}, user={smtp_user}, password={'***' if smtp_password else 'NOT SET'}")
    
    if not smtp_user or not smtp_password:
        print("ERROR: SMTP credentials not configured")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'SMTP credentials not configured'}),
            'isBase64Encoded': False
        }
    
    email_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #48BB78;">Новая заявка с сайта МегаШлиц</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Имя:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{name}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Телефон:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{phone}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Деталь:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{detail if detail else 'Не указана'}</td>
            </tr>
            <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9; font-weight: bold;">Сообщение:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">{message if message else 'Не указано'}</td>
            </tr>
        </table>
    </body>
    </html>
    """
    
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка: {name}'
    msg['From'] = smtp_user
    msg['To'] = smtp_user
    
    html_part = MIMEText(email_body, 'html', 'utf-8')
    msg.attach(html_part)
    
    try:
        print(f"Connecting to SMTP server {smtp_host}:{smtp_port}")
        server = smtplib.SMTP(smtp_host, smtp_port, timeout=30)
        print("Starting TLS")
        server.starttls()
        print("Logging in")
        server.login(smtp_user, smtp_password)
        print("Sending message")
        server.send_message(msg)
        print("Closing connection")
        server.quit()
        print("Email sent successfully")
    except smtplib.SMTPAuthenticationError as e:
        print(f"SMTP Authentication Error: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Email authentication failed. Check SMTP credentials.'}),
            'isBase64Encoded': False
        }
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': f'Failed to send email: {str(e)}'}),
            'isBase64Encoded': False
        }
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'success': True, 'message': 'Order sent successfully'}),
        'isBase64Encoded': False
    }
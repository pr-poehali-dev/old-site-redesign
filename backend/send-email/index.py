import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from typing import Dict, Any
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send form submissions via email to company inbox
    Args: event - dict with httpMethod, body containing form data
          context - object with request_id, function_name attributes
    Returns: HTTP response dict with statusCode, headers, body
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    try:
        body_data = json.loads(event.get('body', '{}'))
        
        form_type = body_data.get('type', 'unknown')
        name = body_data.get('name', '').strip()
        phone = body_data.get('phone', '').strip()
        detail = body_data.get('detail', '').strip()
        message = body_data.get('message', '').strip()
        
        if not name or not phone:
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Name and phone are required'})
            }
        
        smtp_user = os.environ.get('SMTP_USER', 'megashlic@yandex.ru').strip()
        smtp_password = os.environ.get('SMTP_PASSWORD', 'towjicbapblkfhen').strip()
        
        msg = MIMEMultipart('alternative')
        msg['From'] = smtp_user
        msg['To'] = 'megashlic@yandex.ru'
        msg['Subject'] = f'Новая заявка с сайта Мега Шлиц - {form_type}'
        
        timestamp = datetime.now().strftime('%d.%m.%Y %H:%M:%S')
        
        html_body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h2 style="color: #22c55e; margin-bottom: 20px;">📧 Новая заявка с сайта</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                    <strong>Тип заявки:</strong>
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    {form_type}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                    <strong>Имя:</strong>
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    {name}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                    <strong>Телефон:</strong>
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    <a href="tel:{phone}" style="color: #22c55e; text-decoration: none;">{phone}</a>
                  </td>
                </tr>
        """
        
        if detail:
            html_body += f"""
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #ddd;">
                    <strong>Деталь:</strong>
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    {detail}
                  </td>
                </tr>
            """
        
        if message:
            html_body += f"""
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9; border-bottom: 1px solid #ddd; vertical-align: top;">
                    <strong>Сообщение:</strong>
                  </td>
                  <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                    {message}
                  </td>
                </tr>
            """
        
        html_body += f"""
                <tr>
                  <td style="padding: 10px; background-color: #f9f9f9;">
                    <strong>Время:</strong>
                  </td>
                  <td style="padding: 10px;">
                    {timestamp}
                  </td>
                </tr>
              </table>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
                <p style="margin: 0; color: #16a34a;">
                  <strong>💡 Рекомендация:</strong> Свяжитесь с клиентом в течение 15 минут для повышения конверсии.
                </p>
              </div>
            </div>
          </body>
        </html>
        """
        
        msg.attach(MIMEText(html_body, 'html', 'utf-8'))
        
        smtp_server = 'smtp.yandex.ru' if 'yandex' in smtp_user else 'smtp.gmail.com'
        smtp_port = 465
        
        with smtplib.SMTP_SSL(smtp_server, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
        
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'isBase64Encoded': False,
            'body': json.dumps({
                'success': True,
                'message': 'Email sent successfully',
                'request_id': context.request_id
            })
        }
        
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Invalid JSON in request body'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({
                'error': 'Internal server error',
                'details': str(e)
            })
        }
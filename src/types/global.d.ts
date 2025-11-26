export {};

declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      goal: string,
      params?: Record<string, any>
    ) => void;
  }
}

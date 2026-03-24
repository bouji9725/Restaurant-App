export {};

declare global {
  interface Window {
    fetchAPI?: (date: Date) => string[];
    submitAPI?: (formData: {
      date: string;
      time: string;
      guests: number;
      occasion: string;
    }) => boolean;
  }
}
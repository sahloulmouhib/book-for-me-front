export interface Service {
  id: string;
  title: string;
  description?: string;
  price: number;
  duration: number;
}

export interface ServicePayload {
  title: string;
  description?: string;
  price: number;
  duration: number;
}

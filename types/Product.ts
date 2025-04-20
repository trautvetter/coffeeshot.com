export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  images: string[];
  thumbnail: string;
}

export type ProductInfoProps = {
  id: number; // or `string`, if the API accepts it — but convert to number if needed
};

import {ProductInfoProps} from "@/types/Product";
import {useGetProductQuery} from "@/services/api";
import React from "react";

export function ProductInfo({id}: ProductInfoProps) {
  const {data, isLoading, error} = useGetProductQuery(id); // example product ID

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading product</p>;

  const {rating, description, title, thumbnail, price} = data;
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>${price}</strong> | Rating: {rating}</p>
      <img src={thumbnail} alt={title} width={200}/>
    </div>
  );
}

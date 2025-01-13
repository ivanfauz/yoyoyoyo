import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://api.platzi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductDetailPage;


import React, { useEffect, useState } from 'react';


//components
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories] = useState<string[]>(['All', 'Category 1', 'Category 2']);
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.platzi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    };
    
    fetchProducts();
  }, []);

  const filterByCategory = (category: string) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div>
      <CategoryFilter categories={categories} onChange={filterByCategory} />
      <div>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

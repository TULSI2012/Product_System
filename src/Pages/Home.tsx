import { useState, useEffect } from "react";
import { getAllProducts } from "../API/ProductApi";
import ProductCard from "../Components/ProductCard";
import { ProductType } from "./Products";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        console.log("Fetching Data");
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            //description={product.description}
            price={product.price}
            //rating={product.rating}
            //category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

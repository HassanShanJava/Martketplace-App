import Image from "next/image";
import P1 from "/public/product1.webp";
import ProductCard from "@/components/ProductCard";

const ProductList = () => {
  return (
    <section>
      <div className="flex justify-around gap-3 mt-16">
        <ProductCard title="abc" price={100} img={P1} />
        <ProductCard title="awsd" price={130} img={P1} />
        <ProductCard title="xyz" price={100} img={P1} />
        <ProductCard title="jacket" price={1000} img={P1} />
      </div>
    </section>
  );
};

export default ProductList;

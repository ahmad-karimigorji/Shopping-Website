import { productsData } from "../data";

const Shop = () => {
  const products = productsData;
  console.log(products);
  return (
    <section className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,290px))] justify-center gap-y-10 gap-x-6">
        {products.map((product) => (
          <div className="border border-gray-200" key={product.id}>
            <img src={product.imageURL} alt={product.name} />
            <div className="flex justify-between items-center px-2 h-20">
              <div className="font-semibold	">
                <p>{product.name}</p>
                <p className="text-indigo-600">$ {product.price}</p>
              </div>
              <button className="bg-indigo-600 rounded-md text-white px-2 py-1.5">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;

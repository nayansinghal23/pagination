import Image from "next/image";

interface IProductList {
  products: any[];
}

const ProductList = ({ products }: IProductList) => {
  return (
    <div className="flex flex-col gap-2">
      {products.map((product: any) => (
        <div key={product.id} className="flex flex-col gap-1 items-center">
          <div className="w-[100px] h-[100px] border border-gray-200 rounded-md bg-gray-50 flex items-center justify-center">
            {product.images && product.images.length && (
              <Image
                src={product.images[0]}
                alt={`product-${product.id}`}
                width={100}
                height={10}
                className="w-full h-full"
                decoding="async"
                loading="lazy"
              />
            )}
          </div>
          <p className="text-xl font-bold text-gray-900">{product.title}</p>
          <p className="text-sm font-normal text-gray-500">
            {product.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

import { getData } from "@/services/products";
import Image from "next/image";
import Link from "next/link";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  const products = await getData("http://localhost:3000/api/product");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>Product slug</h1>
      {products.data.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5">
          {products.data.map((product: any) => (
            <Link
              href={`/product/detail/${product.id}`}
              key={product.id}
              className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
            >
              <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <Image
                  className="w-full object-cover"
                  src={product.image}
                  alt={product.title}
                  width={700}
                  height={700}
                  loading="lazy"
                />
              </div>
              <div className="mt-4 px-5 pb-5">
                <h5 className="text-xl tracking-tight text-slate-900 truncate">
                  {product.title}
                </h5>
                <div className="mt-2 mb-5 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-bold text-slate-900">
                      $ {product.price}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}
      {params.slug && <p>Slug: {params.slug}</p>}
    </div>
  );
}

import { getData } from "@/services/products";
import dynamic from "next/dynamic";
import Image from "next/image";
const Modal = dynamic(() => import("@/components/layouts/Modal"));

export default async function ProductDetailPage(props: any) {
  const { params } = props;
  const product = await getData(
    `http://localhost:3000/api/product?id=${params.id}`
  );

  return (
    <Modal>
      <div className="h-[350px] sm:h-[450px]">
        <Image
          src={product.data.image}
          alt={product.data.title}
          className="h-full w-full object-cover rounded-t"
          width={500}
          height={500}
        />
      </div>
      <div className="relative bg-white p-3 rounded-b">
        <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
          {product.data.title}
        </h3>

        <div className="mt-1.5 flex items-center justify-between text-gray-900">
          <p className="tracking-wide">${product.data.price}</p>
        </div>
      </div>
    </Modal>
  );
}

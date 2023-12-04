import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Nike Court Vision Low Next Nature",
    price: 10000,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d4776188-7104-419e-a1c8-f055737b9e6e/court-vision-low-next-nature-shoes-N2fFHb.png",
  },
  {
    id: 2,
    title: "Nike Air Force 1 '07",
    price: 200000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png",
  },
  {
    id: 3,
    title: "Nike Air Force 1 black red",
    price: 150000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/air-jordan-1-low-shoes-6Q1tFM.png",
  },
  {
    id: 4,
    title: "Nike Air Force 1 black red",
    price: 150000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32b0f17a-38ba-40fa-9de7-31c5bb1661e3/air-jordan-1-low-shoes-6Q1tFM.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const singleData = data.find((item) => item.id === Number(id));
    if (singleData) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: singleData,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "data not found",
      data: {},
    });
  }

  return NextResponse.json({ status: 200, message: "success", data: data });
}

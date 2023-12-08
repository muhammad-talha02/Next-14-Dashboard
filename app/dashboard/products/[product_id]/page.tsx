import { getProduct, updateProduct } from "@/app/lib/api/products";
import Input from "@/app/ui/form/Input";
import Select from "@/app/ui/form/Select";
import TextArea from "@/app/ui/form/TextArea";
import Image from "next/image";
import React from "react";

const SingleProductPage = async ({ params }: any) => {
  const { product_id } = params;
  const product = await getProduct(product_id);
  console.log(product)
  return (
    <div className="flex gap-5">
      <div className="info flex flex-col gap-2 p-4 bg-[--bgSoft] rounded-lg items-center h-max">
        <div className="">
          <Image src={"/noavatar.png"} width={250} height={250} alt="Avatar" />
        </div>
        {product.title}
      </div>
      <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg flex-[3]">
        <form action={updateProduct} className="w-full">
          <input type="hidden" name="id" value={product?._id.toString()} />
          <div className="grid grid-cols-1 gap-x-3 gap-y-4">
            <div>
              <Input
                type="text"
                placeholder={product.title}
                label="Title"
                name="title"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder={product.price}
                label="Price"
                name="price"
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder={product.stock}
                label="Stock"
                name="stock"
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder={product.color}
                label="Color"
                name="color"
              />
            </div>
            <div>
              <Input type="text" placeholder={product.size} label="Size" name="size" />
            </div>
            <div>
              <Select
                options={[
                  { label: "Phone", value: "phone", selected:product.category === "phone"},
                  { label: "Computer", value: "computer" , selected:product.category === "computer"},
                  { label: "Kitchen", value: "kitchen", selected:product.category === "kitchen" },
                ]}
                placeholder="Choose Category"
                label="Choose Category"
                name="category"
              />
            </div>
            <div className="">
              <TextArea placeholder="Description" name="desc" label="Description"/>
            </div>
          </div>
          <button
            type="submit"
            className="w-[200px] bg-green-700 hover:bg-green-900 rounded-sm p-3 my-4 self-center"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

const options = [
  { label: "Phone", value: "phone" },
  { label: "Computer", value: "computer" },
  { label: "Kitchen", value: "kitchen" },
];
export default SingleProductPage;

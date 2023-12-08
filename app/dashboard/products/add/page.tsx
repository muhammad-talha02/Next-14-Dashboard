import { addProduct } from "@/app/lib/api/products";
import Input from "@/app/ui/form/Input";
import Select from "@/app/ui/form/Select";
import TextArea from "@/app/ui/form/TextArea";

const Page = () => {
  const options = [
    { label: "Phone", value: "phone" },
    { label: "Computer", value: "computer" },
    { label: "Kitchen", value: "kitchen" },
  ];
  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <form action={addProduct} className="w-full">
        <div className="grid grid-cols-2 gap-x-3 gap-y-8">
          <div>
            <Input type="text" placeholder="Title" name="title"/>
          </div>
          <div>
            <Select options={options} placeholder="Choose a category" name="category"/>
          </div>
          <div>
            <Input type="number" placeholder="Price" name="price"/>
          </div>
          <div>
            <Input type="number" placeholder="Stock" name="stock"/>
          </div>
          <div>
            <Input type="text" placeholder="Color" name="color"/>
          </div>
          <div>
            <Input type="text" placeholder="Size" name="size"/>
          </div>
          <div className="col-span-2">
            <TextArea name="desc"/>
          </div>
        </div>
        <button
          type="submit"
          className="w-[200px] bg-green-700 hover:bg-green-900 rounded-sm p-3 my-3 self-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;

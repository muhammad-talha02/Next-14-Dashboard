import { deleteProduct, fetchProducts } from "@/app/lib/api/products";
import { Pagination, Search } from "@/app/ui/components";
import Image from "next/image";
import Link from "next/link";

const Products = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";

  const { products, count } = await fetchProducts(q, page);

  return (
    <div className="bg-[--bgSoft] p-5 mt-5 rounded-lg">
      <div className="top flex justify-between items-center">
        <Search placeholder="Search product..." />
        <Link href="/dashboard/products/add">
          <button className="p-2.5 bg-purple-700 rounded-md text-[15px]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className={tdStyle}>Title</td>
            <td className={tdStyle}>Description</td>
            <td className={tdStyle}>Price</td>
            <td className={tdStyle}>Created At</td>
            <td className={tdStyle}>Stock</td>
            <td className={tdStyle}>Action</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr  key={product._id}>
              <td className={tdStyle}>
                <div className="flex gap-2.5 items-center">
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    width={40}
                    height={40}
                    alt="image"
                    className="rounded-3xl object-cover w-[40px] h-[40px]"
                  />
                  {product.title}
                </div>
              </td>
              <td className={tdStyle}>{product.desc}</td>
              <td className={tdStyle}>$ {product.price}</td>
              <td className={tdStyle}>10.09.2023</td>
              <td className={tdStyle}>{product.stock}</td>
              <td className={tdStyle}>
                <div className="flex gap-2 5 items-center">
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className="py-1 px-2.5 bg-teal-600 rounded-md text-[16px]">
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product._id?.toString()} />
                    <button className="py-1 px-2.5 bg-red-600 rounded-md text-[16px]">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

const tdStyle = "p-2.5";

export default Products;

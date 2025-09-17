import { CategoryResponseSchema, Product } from "@/src/schemas"
import UploadProductImage from "./UploadProductImage"

async function getCategories() {
  const url = `${process.env.API_URL}/categories`
  const req = await fetch(url)
  const json = await req.json()
  const categories = CategoryResponseSchema.parse(json)
  return categories
}

export default async function ProductForm({ product }: { product?: Product }) {
  const categories = await getCategories()

  return (
    <>
      <div className="space-y-2 ">
        <label
          htmlFor="name"
          className="block"
        >Product's Name</label>
        <input
          id="name"
          type="text"
          placeholder="Green shirt"
          className="border border-gray-300 w-full p-2"
          name="name"
          defaultValue={product?.name}
        />
      </div>

      <div className="space-y-2 ">
        <label
          htmlFor="price"
          className="block"
        >Price</label>
        <input
          id="price"
          type="number"
          placeholder="50$"
          className="border border-gray-300 w-full p-2"
          name="price"
          min={0}
          defaultValue={product?.price}
        />
      </div>

      <div className="space-y-2 ">
        <label
          htmlFor="inventory"
          className="block"
        >Inventory</label>
        <input
          id="inventory"
          type="number"
          placeholder="10"
          className="border border-gray-300 w-full p-2"
          name="inventory"
          min={0}
          defaultValue={product?.inventory}
        />
      </div>

      <div className="space-y-2 ">
        <label
          htmlFor="categoryId"
          className="block"
        >Category</label>
        <select
          id="categoryId"
          className="border border-gray-300 w-full p-2 bg-white"
          name="categoryId"
          defaultValue={product?.categoryId}
        >
          <option value="">Select Category </option>
          {categories.map(category => (
            <option
              key={category.id}
              value={category.id}
            >
              {category.name}
            </option>
          ))}

        </select>
      </div>

      <UploadProductImage
        currentImage={product?.image}
      />
    </>
  )
}
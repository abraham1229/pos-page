import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { ProductsResponseSchema } from "@/src/schemas";

async function getProducts() {
  const url = `${process.env.API_URL}/products`
  const req = await fetch(url)
  const json = await req.json()
  const data = ProductsResponseSchema.parse(json)
  return {
    products: data.products,
    total: data.total
  }
}

export default async function ProductsPage() {
  const { products, total } = await getProducts()

  return (
    <>
      <Heading>Manage Products</Heading>
      <ProductsTable
        products={products}
      />
    </>
  )
}

import { CategoryWithProductsResponseSchema } from "@/app/src/schemas"

type Params = Promise<{ categoryId: string }>

async function getProducts(categoryId: string) {
  const url = `${process.env.API_URL}/categories/${categoryId}?products=true`

  const res = await fetch(url)
  const json = await res.json()

  const products = CategoryWithProductsResponseSchema.parse(json)
  
  return products
}

export default async function StorePage({ params }: { params: Params }) {
  const { categoryId } = await params

  const products = await getProducts(categoryId)

  return (
    <div>Storepage</div>
  )
}

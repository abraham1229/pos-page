import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";
import { ProductSchema } from "@/src/schemas";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getProduct(id: string) {
  const url = `${process.env.API_URL}/products/${id}`
  const res = await fetch(url)
  const json = await res.json()

  if (!res.ok) {
    notFound()
  }

  const product = ProductSchema.parse(json)

  return product
}

type Params = Promise<{ id: string }>

export default async function EditProductPage({ params }: { params: Params }) {

  const { id } = await params

  const product = await getProduct(id)

  return (
    <>
      <Link
        className="rounded bg-green-400 font-bold py-2 px-10"
        href={'/admin/products'}
      >
        Return
      </Link>

      <Heading>Editar Producto: { product.name }</Heading>

      <EditProductForm>
        <ProductForm
          product={product}
        />
      </EditProductForm>
    </>
  )
}

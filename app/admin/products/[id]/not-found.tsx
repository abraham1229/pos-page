import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>Product not found</Heading>
      <p>
        Go back to {' '}
        <Link
          className="text-green-400"
          href="/admin/products"
        >
          products
        </Link></p>
    </div>
  )
}

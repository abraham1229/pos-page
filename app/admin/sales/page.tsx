import TransactionFilter from "@/components/transactions/TransactionFilter";
import Heading from "@/components/ui/Heading";

export default function SalesPage() {
  return (
    <>
      <Heading>Sales</Heading>
      <p className="text-lg"> This section displays your sales. Use the calendar to filter by date </p>
      <TransactionFilter />
    </>
  )
}

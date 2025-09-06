import TransactionFilter from "@/components/transactions/TransactionFilter";
import Heading from "@/components/ui/Heading";
import { getSalesByDate } from "@/src/api";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { format } from 'date-fns'

export default async function SalesPage() {
  const queryClient = new QueryClient()

  const formattedDate = format(new Date(), 'yyyy-MM-dd')

  await queryClient.prefetchQuery({
    queryKey: ['sales', formattedDate],
    queryFn: () => getSalesByDate(formattedDate)
  })

  return (
    <>
      <Heading>Sales</Heading>
      <p className="text-lg"> This section displays your sales. Use the calendar to filter by date </p>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <TransactionFilter />
      </HydrationBoundary>
    </>
  )
}

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllTransactions } from "@/services/hooks/useGetAllTransactions";

function AllTransactions() {
  const {
    data: transactions,
    isLoading,
    error,
    refetch,
  } = useGetAllTransactions({
    limit: 50,
    page: 1,
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return (
      <div>{`Something went wrong while fetching transactions. Please refresh to try again.`}</div>
    );
  }
  return (
    <>
      <div className="flex justify-between">
        <p className="leading-10">A list of your recent transactions.</p>
        <Button size={"sm"} variant={"outline"} onClick={() => refetch()}>
          Refresh
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions?.data.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.timestamp}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell className="text-right">{transaction.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default AllTransactions;

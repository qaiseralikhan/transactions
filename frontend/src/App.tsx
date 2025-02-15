import QueryClientProvider from "./store/providers/QueryClientProvider";
import Transactions from "./pages/transactions";

function App() {
  return (
    <QueryClientProvider>
      <div className="flex justify-center py-5">
        <div className="container">
          <Transactions />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

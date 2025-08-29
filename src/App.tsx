import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PersonsPage from "./pages/PersonsPage";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PersonsPage />
    </QueryClientProvider>
  );
}

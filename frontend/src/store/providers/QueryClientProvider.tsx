import {
  QueryClient,
  QueryClientProvider as QueryClientProviderLib,
} from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

const queryClient = new QueryClient();

const QueryClientProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProviderLib client={queryClient}>
      {children}
    </QueryClientProviderLib>
  );
};

export default QueryClientProvider;

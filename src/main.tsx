import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { networkConfig } from "./networkConfig.ts";
import { BrowserRouter } from "react-router-dom";


const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
              <SuiClientProvider networks={networkConfig} defaultNetwork="testnet">
                  <WalletProvider>
                      <App />
                  </WalletProvider>
              </SuiClientProvider>
          </QueryClientProvider>
      </BrowserRouter>
  </StrictMode>,    
)

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRoutes from "./routes";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen bg-slate-950 text-slate-100">
          <Navbar />

          <div className="mx-auto w-full max-w-6xl">
            <div className="flex">
              <Sidebar />
              <div className="flex-1 p-4">
                <AppRoutes />
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

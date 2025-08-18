import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import Index from './pages/Index';
import Login from './pages/Login';
import AssistantDetail from './pages/AssistantDetail';
import EstudiantePanel from './pages/EstudiantePanel';
import AcademiaPanel from './pages/AcademiaPanel';
import AdminPanel from './pages/admin/AdminPanel';
import Assistants from './pages/admin/Assistants';
import FamilyPacks from './pages/admin/FamilyPacks';
import Referrals from './pages/admin/Referrals';
import TemarioAcademicoSimple from './pages/TemarioAcademicoSimple';
import CheckoutSuccess from './pages/CheckoutSuccess';
import CheckoutCancel from './pages/CheckoutCancel';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/assistant/:slug" element={<AssistantDetail />} />
              <Route path="/estudiante" element={<EstudiantePanel />} />
              <Route path="/academia" element={<AcademiaPanel />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/assistants" element={<Assistants />} />
              <Route path="/admin/family-packs" element={<FamilyPacks />} />
              <Route path="/admin/referrals" element={<Referrals />} />
              <Route path="/temario/:slug" element={<TemarioAcademicoSimple />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="/checkout/cancel" element={<CheckoutCancel />} />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
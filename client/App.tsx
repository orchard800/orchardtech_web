import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import CmsPage from "./pages/CmsPage";
import { Analytics } from "@vercel/analytics/react";

const App = () => (
  <>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<CmsPage forcedSlug="home" />} />
          <Route path="/:slug" element={<CmsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    <Analytics />
  </>
);

export default App;

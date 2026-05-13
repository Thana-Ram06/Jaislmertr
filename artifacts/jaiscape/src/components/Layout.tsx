import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { DisclaimerModal } from "./AiDisclaimer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#0B0B0B] text-foreground">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <DisclaimerModal />
    </div>
  );
}

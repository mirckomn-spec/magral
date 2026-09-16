import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingContact } from "./FloatingContact";
import { StickyBottomBar } from "./StickyBottomBar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col overflow-x-clip">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyBottomBar />
      <FloatingContact />
    </div>
  );
}

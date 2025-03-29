import { NavHeader } from "@/components/marketing/nav-header";
import { Footer } from "@/components/marketing/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavHeader />
      <main>{children}</main>
      <Footer />
    </>
  )
} 
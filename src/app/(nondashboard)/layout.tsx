import NonDashboardNavbar from "@/components/NonDashboardNavbar";
import Footer from "../../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.");
          } } children={undefined} />
      <main className="nondashboard-layout__main">{children}</main>
      <Footer />
    </div>
  );
}
import NonDashboardNavbar from "../components/NonDashboardNavbar";
import Landing from "./(nondashboard)/landing/page";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="nondashboard-layout">
      <NonDashboardNavbar isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.");
          } } children={undefined} />
      <main className="nondashboard-layout__main">
        <Landing />
      </main>
      <Footer />
    </div>
  );
}
import Footer from "@/components/layout/Footer";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-kinetic">
      {children}
      <Footer />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
}

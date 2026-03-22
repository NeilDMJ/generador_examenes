import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex-1 flex max-w-7xl w-full mx-auto px-6 py-8 gap-8">
        <AdminSidebar />
        {children}
      </div>
      <Footer />
    </>
  );
}

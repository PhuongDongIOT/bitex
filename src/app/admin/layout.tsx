import { Metadata } from "next";
import AdminSidebar from "@/components/admin/sideBar";
import { authOptions } from "@/lib/authOptions";


export const metadata: Metadata = {
  title: "Admin",
};

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="styles.adminLayout flex min-h-screen">
      <AdminSidebar />
      <div className="w-full p-6">
        <h1 className="w-full block text-gray-700 text-2xl font-light pb-5 mb-2 border-b border-gray-300">Page Name</h1>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;

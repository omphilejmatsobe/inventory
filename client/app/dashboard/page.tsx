import Image from "next/image";
import SideNav from "../ui/sideNav";
import DashTopNav from "../ui/dashTopNav";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <SideNav/>
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <DashTopNav/>
        {children}
      </main>
    </div>
  );
}
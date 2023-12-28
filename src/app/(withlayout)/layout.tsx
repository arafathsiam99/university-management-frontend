import SideBar from "@/components/ui/Sidebar";
import Contents from "@/components/ui/Contents";
import { Layout } from "antd";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <SideBar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashBoardLayout;

import { SidebarLayout } from "@/components/SidebarLayout";

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SidebarLayout>{children}</SidebarLayout>;
}

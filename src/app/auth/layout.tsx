import Header from "@/components/header";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex justify-center py-20">{children}</div>
    </>
  );
}

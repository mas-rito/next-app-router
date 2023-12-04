export default function Layout({
  children,
  products,
  analytics,
  payments,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen pt-24 p-5">
      <div>{children}</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
        <div>{products}</div>
        <div>{analytics}</div>
      </div>
      <div>{payments}</div>
    </div>
  );
}

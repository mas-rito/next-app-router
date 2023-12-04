export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="fixed left-0 top-0 pt-20 px-4 z-10 h-screen w-60 bg-slate-600 text-white">
        <h1>About Layout</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}

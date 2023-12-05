"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Error</h1>
      <p>{error.message}</p>
    </div>
  );
}

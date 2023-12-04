"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=123123",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidated successfully");
      }
    }
  };

  return (
    <div className="w-full h-96 bg-slate-200 flex flex-col justify-center items-center rounded-lg">
      <h1>{status}</h1>
      <button
        className="bg-red-500 text-white rounded p-3"
        onClick={() => revalidate()}
      >
        Click me
      </button>
    </div>
  );
}

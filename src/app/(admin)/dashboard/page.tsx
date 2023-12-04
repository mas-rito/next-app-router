"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Dashboard() {
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [router, status, session]);

  return (
    <div className="w-full h-96 bg-slate-200 flex flex-col justify-center items-center rounded-lg">
      <h1 className="text-black">Dashboard</h1>
    </div>
  );
}

"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session }: { data: any } = useSession();

  return (
    <div className="flex flex-col justify-center items-center text-white min-h-screen">
      <h1>Profile</h1>
      <h2>{session?.user?.fullname}</h2>
    </div>
  );
}

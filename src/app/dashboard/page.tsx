import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import LogoutButton from "../components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  console.log("!");

  if (!session) {
    redirect("auth/signin");
  }

  return (
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <LogoutButton/>
    </div>
  );
}

import { getServerSession } from "next-auth";
import LogoutButton from "../components/LogoutButton";
import { redirect } from "next/navigation";
import { LinkWithStyles } from "../components/LinkWithStyles";
import { Box } from "../components/Box";
import { authOptions } from "@/utils/authOptions";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  if (session) {
    return (
      <Box>
        <h1>Welcome, {session.user?.name}</h1>
        <LogoutButton />
        <LinkWithStyles href="/" text="Back to Home Page"/>
      </Box>
    );
  }
}

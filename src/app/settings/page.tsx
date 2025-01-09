import SettingsForm from "@/components/settingsForm";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";

const Setings = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  return <SettingsForm defaultValues={session?.user} />;
};

export default Setings;

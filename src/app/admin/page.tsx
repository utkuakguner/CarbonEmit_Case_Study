import React from "react";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";

const Admin: React.FC = async () => {
  const userData = await getServerSession();

  if (!userData || !userData.admin) return <Unauthorized />

  return (
    <div>
      Admin
    </div>
  );
}


export default Admin
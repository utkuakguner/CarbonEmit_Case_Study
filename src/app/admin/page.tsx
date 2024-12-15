import React from "react";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";
import { sendActorsRequest } from "@/utils/helper/request/actors";

interface Props {
  searchParams: {
    limit?: string;
  };
}

const Admin: React.FC<Props> = async ({ searchParams }) => {
  const userData = await getServerSession();

  if (!userData || !userData.admin) return <Unauthorized />

  const limit = parseInt(searchParams.limit || '10', 10);

  const actors = await sendActorsRequest(limit);

  console.log(actors)

  return (
    <div>
      Admin
    </div>
  );
}


export default Admin
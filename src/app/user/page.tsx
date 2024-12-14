import React from "react";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";

const User: React.FC = async () => {
    const userData = await getServerSession();

    if (!userData) return <Unauthorized />

    return (
        <div>
            User
        </div>
    );
}


export default User
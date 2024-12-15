import React from "react";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";
import { sendMoviesRequest } from "@/utils/helper/request/movies";

interface Props {
    searchParams: {
       limit?: string;
    };
  }

const User: React.FC<Props> = async ({ searchParams }) => {
    const userData = await getServerSession();

    if (!userData) return <Unauthorized />
    
    const limit = parseInt(searchParams.limit || '10', 10);

    const movies = await sendMoviesRequest(limit);

    console.log(movies)

    return (
        <div>
            User
        </div>
    );
}


export default User
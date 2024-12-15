import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import Heading from "@/components/reusable/Heading";
import Link from "next/link";
import LogoutButton from "@/components/reusable/LogoutButton";
import React from "react";
import { TbUser } from "react-icons/tb";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";
import { getServerTranslations } from "@/utils/helper/translation";
import pages from "@/constants/pages";
import { sendMoviesRequest } from "@/utils/helper/request/movies";

interface Props {
    searchParams: {
        limit?: string;
    };
}

const User: React.FC<Props> = async ({ searchParams }) => {
    const t = await getServerTranslations()

    const userData = await getServerSession();

    if (!userData) return <Unauthorized />

    const limit = parseInt(searchParams.limit || '10', 10);

    const movies = await sendMoviesRequest(limit);

    console.log(movies)

    return (
        <Center>
            <Card className="max-w-2xl	w-full">
                <div className="flex justify-between items-center">
                    <Heading title={t('user')} icon={<TbUser />} />
                    <div className="flex gap-6 items-center">
                        <Link href={pages.admin} className="underline">
                            {t('admin')}
                        </Link>
                        <LogoutButton />
                    </div>
                </div>
            </Card>
        </Center>
    );
}


export default User
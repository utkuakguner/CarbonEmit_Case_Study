import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import Heading from "@/components/reusable/Heading";
import LimitSelect from "@/components/reusable/LimitSelect";
import Link from "next/link";
import LogoutButton from "@/components/reusable/LogoutButton";
import React from "react";
import Table from "@/components/reusable/Table";
import { TbUser } from "react-icons/tb";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";
import { getServerTranslations } from "@/utils/helper/translation";
import pages from "@/constants/pages";
import { sendMoviesRequest } from "@/utils/helper/request/movies";

interface Props {
    searchParams?: { [key: string]: string | undefined }
}

const User: React.FC<Props> = async ({ searchParams }) => {
    const t = await getServerTranslations()

    const userData = await getServerSession();

    if (!userData) return <Unauthorized />

    const limit = parseInt(searchParams?.limit || '5');

    const movies = await sendMoviesRequest(limit);

    const columns = ['title', 'year', 'genre', 'rating', 'director']

    return (
        <Center>
            <Card className="max-w-4xl	w-full">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <Heading title={t('user')} icon={<TbUser />} />
                        <div className="flex gap-6 items-center">
                            <Link href={pages.admin} className="underline">
                                {t('admin')}
                            </Link>
                            <LogoutButton />
                        </div>
                    </div>
                    <LimitSelect limit={limit} />
                    <Table data={movies} columns={columns} />
                </div>
            </Card>
        </Center>
    );
}


export default User
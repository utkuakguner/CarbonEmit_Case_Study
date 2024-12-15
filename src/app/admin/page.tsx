import Card from "@/components/reusable/Card";
import Center from "@/components/reusable/Center";
import Heading from "@/components/reusable/Heading";
import LimitSelect from "@/components/reusable/LimitSelect";
import Link from "next/link";
import LogoutButton from "@/components/reusable/LogoutButton";
import React from "react";
import { TbUserBolt } from "react-icons/tb";
import Unauthorized from "@/components/reusable/Unauthorized";
import { getServerSession } from "@/utils/helper/session";
import { getServerTranslations, } from "@/utils/helper/translation";
import pages from "@/constants/pages";
import { sendActorsRequest } from "@/utils/helper/request/actors";

interface Props {
  searchParams: {
    limit?: string;
  };
}

const Admin: React.FC<Props> = async ({ searchParams }) => {
  const t = await getServerTranslations()

  const userData = await getServerSession();

  if (!userData || !userData.admin) return <Unauthorized />

  const limit = parseInt(searchParams.limit || '5');

  const actors = await sendActorsRequest(limit);

  console.log(actors)

  return (
    <Center>
      <Card className="max-w-2xl w-full">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Heading title={t('admin')} icon={<TbUserBolt />} />
            <div className="flex gap-6 items-center">
              <Link href={pages.user} className="underline">
                {t('user')}
              </Link>
              <LogoutButton />
            </div>
          </div>
          <LimitSelect limit={limit} />
        </div>
      </Card>
    </Center>
  );
}


export default Admin
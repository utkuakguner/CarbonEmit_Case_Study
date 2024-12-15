import React from 'react';
import { TbUserBolt } from 'react-icons/tb';
import { Card, CardBody } from '@nextui-org/card';

import Center from '@/components/reusable/Center';
import Heading from '@/components/reusable/Heading';
import LimitSelect from '@/components/reusable/LimitSelect';
import { SearchParams } from '@/types/common';
import Table from '@/components/reusable/Table';
import Unauthorized from '@/components/reusable/Unauthorized';
import { getServerSession } from '@/utils/helper/session';
import { getServerTranslations } from '@/utils/helper/translation';
import { sendActorsRequest } from '@/utils/helper/request/actors';

interface Props {
  searchParams?: Promise<SearchParams> | undefined;
}

const Admin: React.FC<Props> = async ({ searchParams }) => {
  const t = await getServerTranslations();

  const userData = await getServerSession();

  if (!userData || !userData.admin) return <Unauthorized />;

  const limit = parseInt((await searchParams)?.limit || '5');

  const actors = await sendActorsRequest(limit);

  const columns = ['name', 'birth_year', 'death_year', 'nationality'];

  return (
    <Center>
      <Card className="max-w-5xl w-full p-4">
        <CardBody>
          <div className="flex flex-col gap-4">
            <Heading icon={<TbUserBolt />} title={t('admin')} />
            <LimitSelect limit={limit} />
            <Table columns={columns} data={actors} />
          </div>
        </CardBody>
      </Card>
    </Center>
  );
};

export default Admin;

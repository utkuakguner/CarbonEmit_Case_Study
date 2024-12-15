import { Card, CardBody } from '@nextui-org/card';
import React from 'react';
import { TbUser } from 'react-icons/tb';

import Center from '@/components/reusable/Center';
import Heading from '@/components/reusable/Heading';
import LimitSelect from '@/components/reusable/LimitSelect';
import { SearchParams } from '@/types/common';
import Table from '@/components/reusable/Table';
import Unauthorized from '@/components/reusable/Unauthorized';
import { getServerSession } from '@/utils/helper/session';
import { getServerTranslations } from '@/utils/helper/translation';
import { sendMoviesRequest } from '@/utils/helper/request/movies';

interface Props {
  searchParams?: Promise<SearchParams> | undefined;
}

const User: React.FC<Props> = async ({ searchParams }) => {
  const t = await getServerTranslations();

  const userData = await getServerSession();

  if (!userData) return <Unauthorized />;

  const limit = parseInt((await searchParams)?.limit || '5');

  const movies = await sendMoviesRequest(limit);

  const columns = ['title', 'year', 'genre', 'rating', 'director'];

  return (
    <Center>
      <Card className="max-w-5xl w-full p-4">
        <CardBody>
          <div className="flex flex-col gap-4">
            <Heading icon={<TbUser />} title={t('user')} />
            <LimitSelect limit={limit} />
            <Table columns={columns} data={movies} />
          </div>
        </CardBody>
      </Card>
    </Center>
  );
};

export default User;

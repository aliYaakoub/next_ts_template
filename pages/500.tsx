import React from 'react';
import { ServerErrorComponent } from 'components/ServerErrorComponent/Loadable';
import { useRouter } from 'next/router';

const ServerError = () => {
  const router = useRouter();
  return (
    <div className='h-screen flex items-center justify-center bg-white'>
      <ServerErrorComponent title='Reload' onPress={() => router.reload()} />
    </div>
  );
};

export default ServerError;

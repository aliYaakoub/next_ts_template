import type { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import WelcomeIcon from 'public/assets/welcome_icon.svg';
import Link from 'next/link';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <main className='min-h-screen flex-col-center p-3'>
      <div className='w-full max-w-[500px] flex-col-center'>
        <WelcomeIcon />
        <p className='pt-[25px] sm:text-xl'>
          {t('startByEditing') + ' '}
          <span className='bg-[#e6e6e6] p-[6px] rounded text-[#6C63FF]'>
            {t('indexPath')}
          </span>
        </p>
        <p className='py-5'>
          {t('forMoreInfo') + ' '}
          <a
            target='blank'
            className='border-b border-black font-medium'
            href='https://github.com/aliYaakoub/next_ts_template#readme'
          >
            {t('repo')}
          </a>
        </p>
        <Link href='/redux-example'>
          <a className='border-b border-black font-medium'>
            {t('reduxExample')}
          </a>
        </Link>
      </div>
    </main>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

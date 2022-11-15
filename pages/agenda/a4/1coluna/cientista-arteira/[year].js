import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import dynamic from 'next/dynamic';
import Loading from '../../../../../src/components/Loading';

const AgendaA4 = dynamic(
  () => import('../../../../../src/components/Agenda/A4/index'),
  {
    ssr: false,
    loading: Loading,
  }
);

export async function getStaticPaths() {
  const files = fs.readdirSync('public/years');
  const paths = files.map((fileName) => ({
    params: {
      year: fileName.replace('.json', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const year = JSON.parse(
    fs.readFileSync(`public/years/${params.year}.json`, 'utf-8')
  );

  let lastYear = '';
  let nextYear = '';

  if (fs.existsSync(`public/years/${Number(params.year) - 1}.json`)) {
    lastYear = JSON.parse(
      fs.readFileSync(`public/years/${Number(params.year) - 1}.json`, 'utf-8')
    );
  }

  if (fs.existsSync(`public/years/${Number(params.year) + 1}.json`)) {
    nextYear = JSON.parse(
      fs.readFileSync(`public/years/${Number(params.year) + 1}.json`, 'utf-8')
    );
  }

  return {
    props: {
      year,
      lastYear,
      nextYear,
    },
  };
}

export default function Agenda({ year, lastYear, nextYear }) {
  return (
    <AgendaA4
      year={year.year}
      holidays={year.holidays}
      lastYear={lastYear}
      nextYear={nextYear}
      columns={1}
      theme="cientista"
    />
  );
}

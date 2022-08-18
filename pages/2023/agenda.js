import Head from 'next/head';
import Image from 'next/image';
import { year2023 } from '../../src/years/2023';
import dynamic from 'next/dynamic';

const Agenda = dynamic(() => import('../../src/components/Agenda/index'), {
  ssr: false,
});

export default function Agenda2023() {
  return <Agenda year={year2023.year} holidays={year2023.holidays} />;
}

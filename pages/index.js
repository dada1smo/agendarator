import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Viewer from '../src/components/PDF';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Link href="/agenda/a5/2023">Agenda 2023</Link>
      <Link href="/agenda/a5/2024">Agenda 2024</Link>
    </>
  );
}

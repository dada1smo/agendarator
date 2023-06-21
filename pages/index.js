import Link from 'next/link';
import fs from 'fs';

export async function getStaticProps() {
  const files = fs.readdirSync('public/years');
  const years = files.map((fileName) => fileName.replace('.json', ''));
  return {
    props: {
      years,
    },
  };
}

export default function Home({ years }) {
  return (
    <div className="container">
      <h1>Agendas</h1>
      <h2>A5</h2>
      <div className="linkRow">
        {years.map((y) => {
          return <Link key={y} href={`/agenda/a5/${y}`}>{`Agenda ${y}`}</Link>;
        })}
      </div>
      <h2>A4</h2>
      <h3>1 coluna</h3>
      <div className="linkRow">
        {years.map((y) => {
          return (
            <Link
              key={y}
              href={`/agenda/a4/1coluna/${y}`}
            >{`Agenda ${y}`}</Link>
          );
        })}
      </div>
      <h4>Cientista Arteira</h4>
      <div className="linkRow">
        {years.map((y) => {
          return (
            <Link
              key={y}
              href={`/agenda/a4/1coluna/cientista-arteira/${y}`}
            >{`Agenda ${y}`}</Link>
          );
        })}
      </div>
      <h3>2 colunas</h3>
      <div className="linkRow">
        {years.map((y) => {
          return (
            <Link
              key={y}
              href={`/agenda/a4/2coluna/${y}`}
            >{`Agenda ${y}`}</Link>
          );
        })}
      </div>
      <style jsx>{`
        .linkRow {
          display: flex;
          gap: 12px;
        }
      `}</style>
    </div>
  );
}

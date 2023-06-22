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
      <div className="variant">
        <h3>Modelo Clássico</h3>
        <div className="linkRow">
          <span>→</span>
          {years.map((y) => {
            return (
              <Link key={y} href={`/agenda/a5/${y}`}>{`Agenda ${y}`}</Link>
            );
          })}
        </div>
        <h3>Modelo Neutro</h3>
        <div className="linkRow">
          <span>→</span>
          {years.map((y) => {
            return (
              <Link
                key={y}
                href={`/agenda/a5/neutral/${y}`}
              >{`Agenda ${y}`}</Link>
            );
          })}
        </div>
      </div>
      <h2>A4</h2>
      <div className="variant">
        <h3>1 coluna</h3>
        <div className="linkRow">
          <span>→</span>
          {years.map((y) => {
            return (
              <Link
                key={y}
                href={`/agenda/a4/1coluna/${y}`}
              >{`Agenda ${y}`}</Link>
            );
          })}
        </div>
        <div className="variant">
          <h4>Cientista Arteira</h4>
          <div className="linkRow">
            <span>→</span>
            {years.map((y) => {
              return (
                <Link
                  key={y}
                  href={`/agenda/a4/1coluna/cientista-arteira/${y}`}
                >{`Agenda ${y}`}</Link>
              );
            })}
          </div>
        </div>
        <h3>2 colunas</h3>
        <div className="linkRow">
          <span>→</span>
          {years.map((y) => {
            return (
              <Link
                key={y}
                href={`/agenda/a4/2colunas/${y}`}
              >{`Agenda ${y}`}</Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .container {
          padding: 12px 60px;
        }

        .linkRow {
          display: flex;
          gap: 12px;
          margin-bottom: 40px;
          padding-bottom: 12px;
          border-bottom: 1px solid #fff;
        }

        .variant {
          padding-left: 40px;
        }
      `}</style>
    </div>
  );
}

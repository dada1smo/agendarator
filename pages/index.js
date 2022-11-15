import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Agendas</h1>
      <h2>A5</h2>
      <div className="linkRow">
        <Link href="/agenda/a5/2023">Agenda 2023</Link>
        <Link href="/agenda/a5/2023">Agenda 2024</Link>
      </div>
      <h2>A4</h2>
      <h3>1 coluna</h3>
      <div className="linkRow">
        <Link href="/agenda/a4/1coluna/2023">Agenda 2023</Link>
        <Link href="/agenda/a4/1coluna/2024">Agenda 2024</Link>
      </div>
      <h4>Cientista Arteira</h4>
      <div className="linkRow">
        <Link href="/agenda/a4/1coluna/2023">Agenda 2023</Link>
        <Link href="/agenda/a4/1coluna/2024">Agenda 2024</Link>
      </div>
      <h3>2 colunas</h3>
      <div className="linkRow">
        <Link href="/agenda/a4/2colunas/2023">Agenda 2023</Link>
        <Link href="/agenda/a4/2colunas/2024">Agenda 2024</Link>
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

import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../Agenda/index'), {
  ssr: false,
});

export default function Viewer() {
  return <PDFViewer />;
}

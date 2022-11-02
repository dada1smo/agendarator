import dynamic from 'next/dynamic';

const PDFViewer = dynamic(() => import('../Agenda/A5/index'), {
  ssr: false,
});

export default function Viewer() {
  return <PDFViewer />;
}

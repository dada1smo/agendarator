import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <style jsx global>{`
        .container {
          padding: 12px;
          overflow: auto;
          height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default MyApp;

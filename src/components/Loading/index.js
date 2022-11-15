function Loading({ message = 'Gerando agenda...' }) {
  return (
    <div className="loadingContainer">
      <h1>{message}</h1>
      <style jsx>
        {`
          .loadingContainer {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 100vw;
          }

          h1 {
            animation: blinker 2s linear infinite;
          }

          @keyframes blinker {
            50% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loading;

// import { useEffect } from 'react';
// import NProgress from 'nprogress';

function SuspenseLoader() {
//   useEffect(() => {
//     NProgress.start();

//     return () => {
//       NProgress.done();
//     };
//   }, []);

  return (
    <div>
        <p>Loading...</p>
    </div>
  );
}

export default SuspenseLoader;
import { MainLayout } from '../src/components/layout/main-layout';
import '../styles/globals.css';
import '../styles/general.sass';

function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App; 
import Head from 'next/head';
import { requests } from '../utils';
import { Footer, MainHeader, ModalUI, Row } from '@/components';
import { Movie } from '../../types';
import { useRecoilValue } from 'recoil';
import { modalTrailerState } from '@/atoms';
import { useAuth, useSubscription } from '@/hooks';
import { useRouter } from 'next/router';

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

export default function Home({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: // products,
Props) {
  const { loading, user } = useAuth();
  const showModal = useRecoilValue(modalTrailerState);
  const subscription = useSubscription(user);

  const router = useRouter();
  if (loading || subscription === null) return null;
  if (!subscription) {
    router.push('/signup');
  }
  console.log(subscription);

  return (
    <>
      <Head>
        <title>Netflix-clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-[100%] bg-[#141414] relative overflow-hidden  ">
        <MainHeader netflixOgirinals={netflixOriginals} />
        <section className=" pl-[114px] -mr-20 animation duration-500 ">
          <Row title="Trending Now" movie={trendingNow} />
          <Row title="Netflix Originals" movie={netflixOriginals} />
          <Row title="TopRated" movie={topRated} />
          <Row title="Action Movies" movie={actionMovies} />
          <Row title="Comedy Movies" movie={comedyMovies} />
          <Row title="Horror Movies" movie={horrorMovies} />
          <Row title="Romance Movies" movie={romanceMovies} />
          <Row title="Documentaries" movie={documentaries} />
        </section>

        {showModal && <ModalUI />}
        <footer className="w-[80%] ml-10 xl:ml-20 text-sm">
          <Footer />
        </footer>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
      
    },
  };
};

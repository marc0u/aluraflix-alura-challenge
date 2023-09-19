"use client";
import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import Row from "@/components/Row";

export default function Home() {
  return (
    <div className="browseScreen">
      <Nav />
      <Banner />
      <Row title="Trending" fetchURL={"fetchTrending"} />
      <Row title="Top Rated" fetchURL={"fetchTopRated"} />
      <Row title="Netflix Originals" fetchURL={"fetchNetflixOriginals"} isLargeRow />
      <Row title="Action Movies" fetchURL={"fetchActionMovies"} />
      <Row title="Comedy Movies" fetchURL={"fetchComedyMovies"} />
      <Row title="Horror Movies" fetchURL={"fetchHorrorMovies"} />
      <Row title="Romance Movies" fetchURL={"fetchRomanceMovies"} />
      <Row title="Documentaries" fetchURL={"fetchDocumentaries"} />
    </div>
  );
}

import "./App.css";
import Row from "./components/Row/Row.jsx";
import requests from "./helper/request.jsx";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      {/* <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentries" fetchURL={requests.fetchDocumentaries} /> */}
      <Footer />
    </div>
  );
}

export default App;

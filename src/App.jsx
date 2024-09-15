import Header from "./components/haeder/Header";
import Banner from "./components/banner/Banner";
import Container from "./components/container/Conatiner";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="px-5 max-w-screen-2xl mx-auto">
        <Header />
        <Banner />
        <Container />
        <br /><br /><hr /><br /><b></b>
        <Footer />
      </main>
    </>
  );
}

export default App;

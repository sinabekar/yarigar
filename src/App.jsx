import Header from "./components/haeder/Header";
import Banner from "./components/banner/Banner";
import Container from "./components/container/Conatiner";

function App() {
  return (
    <>
      <main className="px-5 max-w-screen-2xl mx-auto">
        <Header />
        <Banner />
        <Container />
      </main>
    </>
  );
}

export default App;

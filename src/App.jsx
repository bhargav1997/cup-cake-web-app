import "./App.css";
import CupcakeList from "./components/CupcakeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
   return (
      <>
         <Header />
         <Hero />
         <CupcakeList />
         <Footer />
      </>
   );
}

export default App;

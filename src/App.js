import Footer from './components/Footer';
import Header from './components/Header';
import ProductDescription from './components/ProductDescription';
import ProductPage from './components/ProductPage';
import "./styles/index.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ProductPage />
      <ProductDescription />
      <Footer />
    </div>
  );
}

export default App;

import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Services from './components/layout/Services';
import HowWeWork from './components/layout/HowWeWork';
import OrderForm from './components/layout/OrderForm';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
    <Navbar/>
    
      <Showcase/>
      <Services/>
      <div className="container">
      <HowWeWork/>
      </div>
    <OrderForm/>
    <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import DisclaimerSection from './components/disclaimer-section/disclaimer-section';
import HeaderSection from './components/header-section/header-section';
import FooterSection from './components/footer-section/footer-section';
import ContentSectionSixLayout from './components/content-section/content-section-six-layout';
import ContentSectionOneLayout from './components/content-section/content-section-one-layout';
import CheckoutForm from './components/checkout-form-section/checkout-form';

function App() {
  return (
    <div className="App">
      <DisclaimerSection />
      <HeaderSection />
      <ContentSectionOneLayout/>
      <ContentSectionSixLayout />
      <CheckoutForm/>
      <FooterSection />
    </div>
  );
}

export default App;

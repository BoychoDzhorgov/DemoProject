import './App.css';
import DisclaimerSection from './components/disclaimer-section/disclaimer-section';
import HeaderSection from './components/header-section/header-section';
import FooterSection from './components/footer-section/footer-section';
import ContentSection from './components/content-section/content-section';

function App() {
  return (
    <div className="App">
      <DisclaimerSection />
      <HeaderSection />
      <ContentSection />
      <ContentSection />
      <ContentSection />
      <FooterSection />
    </div>
  );
}

export default App;

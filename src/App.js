import './App.css';
import DisclaimerSection from './components/disclaimer-section/disclaimer-section';
import HeaderSection from './components/header-section/header-section';
import FooterSection from './components/footer-section/footer-section';
import ContentSectionSixLayout from './components/content-section/content-section-six-layout';
import ContentSectionOneLayout from './components/content-section/content-section-one-layout';

function App() {
  return (
    <div className="App">
      <DisclaimerSection />
      <HeaderSection />
      <ContentSectionOneLayout/>
      <ContentSectionSixLayout />
      <FooterSection />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './Components/Header/header';
import About from './Components/Section/Pages/About/about';
import Team from './Components/Section/Pages/Team/team';
import OurMission from './Components/Section/Pages/OurMission/ourMission';
import OurValues from './Components/Section/Pages/OurValues/ourValues';
import OurLenses from './Components/Section/Pages/OurLense/ourLense';
import VideoTextComponent from './Components/TextAndVideoComponents/VideoTextComponent/videoTextComponent';
import CollectiveSection from './Components/Section/Pages/OurCollective/ourCollective';
import Contact from './Components/Section/Pages/Contact/contact';
import Footer from './Components/Footer/footer';
import BackToTopButton from './Components/BackButton/backButton';
import VideoSection from './Components/Section/Pages/VideoSection/videoSection';
import GlobalStyles from './GlobalStyles';
import ServicesSection from './Components/Section/Pages/ServicesSection/servicesPage';
import { ourLensesData, VideoParagraphs, ForceStaring, ForceMusic, ourValuesData } from './TextData';



const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
      <Header />
      <main>
        <VideoSection section={'logo'} />
        <OurMission />
        <OurLenses ourLensesItems={ourLensesData} />
        <ServicesSection />
        {/* <VideoTextComponent   
          sectionTitle='Work'
          section='everyDropCounts'   
          video='image' 
          title="Every Drop Counts Blurb"
          paragraphs={VideoParagraphs}
          firstreditsTitle="Film Credits"
          firstCredits={ForceStaring}
        /> */}
        <VideoTextComponent   
          section='unifiedField'   
          video='image' 
          title="Unified Fields"
          paragraphs={VideoParagraphs}
          firstreditsTitle="Film Credits"
          firstCredits={ForceStaring}
        />
        {/* <VideoTextComponent   
          section='theForce'   
          video={'https://vimeo.com/843867279'}
          title="The Force"
          paragraphs={['An experimental dance music video, which explores the "selves" that one may encounter, on an introspective journey.']}
          firstreditsTitle="Staring"
          firstCredits={ForceStaring}
          secondCreditsTitle={'Music'}
          secondCredits={ForceMusic}
        /> */}
        <About />
        <OurValues ourValueItems={ourValuesData}/>
        <Team />
        <CollectiveSection />
        <Contact />
        <BackToTopButton />
        <Footer />
      </main>
    </>
  );
};

export default App;
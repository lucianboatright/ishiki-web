import React from 'react';
import Header from './Components/Header/header';
import About from './Components/Section/Sections/About/about';
import Team from './Components/Section/Sections/Team/team';
import OurMission from './Components/Section/Sections/OurMission/ourMission';
import OurValues from './Components/Section/Sections/OurValues/ourValues';
import OurLenses from './Components/Section/Sections/OurLense/ourLense';
import VideoTextComponent from './Components/TextComponents/VideoTextComponent/videoTextComponent';
import CollectiveSection from './Components/Section/Sections/OurCollective/ourCollective';
import Contact from './Components/Section/Sections/Contact/contact';
import Footer from './Components/Footer/footer';
import BackToTopButton from './Components/BackButton/backButton';

  const ourValuesData = [
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage2',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
  ];
  const ourLensesData = [
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
    {
      img: 'exampleImage1',
      text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur fugit, sed quia consequuntur magni dolores eos qui ratione sequi nesciunt. Neque porro quisquam est, qui dolorem',
    },
  ];

  const VideoParagraphs = [
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
    'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  ];

  const VideoCredits = [
    { role: 'Director', name: 'Lorem Ipsum' },
    { role: 'Cinematographer', name: 'Lorem Ipsum' },
    { role: 'Editor', name: 'Lorem Ipsum' },
    { role: 'Colorist', name: 'Lorem Ipsum' },
    { role: 'Sound Designer', name: 'Lorem Ipsum' },
    { role: 'Graphics', name: 'Lorem Ipsum' },
  ];


const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <OurMission />
        <OurValues title='Our Values' ourValueItems={ourValuesData}/>
        <OurLenses title='Our Lenses' ourLensesItems={ourLensesData} />
        <VideoTextComponent   
          sectionTitle='Work'
          section='everyDropCounts'   
          image='image' 
          title="Every Drop Counts Blurb"
          paragraphs={VideoParagraphs}
          creditsTitle="Film Credits"
          credits={VideoCredits}
        />
        <VideoTextComponent   
          section='unifiedField'   
          image='image' 
          title="Unified Fields"
          paragraphs={VideoParagraphs}
          creditsTitle="Film Credits"
          credits={VideoCredits}
        />
        <VideoTextComponent   
          section='theForce'   
          image='image' 
          title="The Force"
          paragraphs={VideoParagraphs}
          creditsTitle="Film Credits"
          credits={VideoCredits}
        />
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
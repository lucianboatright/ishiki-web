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
import VideoSection from './Components/Section/Sections/VideoSection/videoSection';
import GlobalStyles from './GlobalStyles';
import ReactPlayer from 'react-player';

  const ourValuesData = [
    {
      img: '',
      text: 'Approach filmmaking with deep awareness and purpose.',
      letter: 'I',
      colorLeft: 'black',
      colorRight: 'grey',
    },
    {
      img: '',
      text: 'Ensure technology and creativity grow together.',
      letter: 'S',
      colorLeft: 'rgba(0, 74, 173, 1)',
      colorRight: 'rgba(83, 113, 255, 1)',
    },
    {
      img: '',
      text: 'Create with integrity, truth, and emotional depth.',
      letter: 'H',
      colorLeft: 'rgba(75, 46, 143, 1)',
      colorRight: ' rgba(149, 35, 140, 1)',
    },
    {
      img: '',
      text: 'Welcome diverse voices and perspectives. We value our relationships.',
      letter: 'I',
      colorLeft: 'rgba(233, 23, 126, 1)',
      colorRight: 'rgba(234, 37, 74, 1)',
    },
    {
      img: '',
      text: 'Work with care, respect, and empathy for people and the planet.',
      letter: 'K',
      colorLeft: 'rgba(222, 109, 4, 1)',
      colorRight: 'rgba(249, 218, 90, 1)',
    },
    {
      img: '',
      text: 'Create stories that challenge, inspire, and transform.',
      letter: 'I',
      colorLeft: 'rgba(128, 196, 63, 1)',
      colorRight: 'rgba(66, 178, 72, 1)',
    },
  ];
  const ourLensesData = [
    {
      sectionTitle: 'PRANA',
      img: '',
      colorTop: 'rgba(0, 74, 173, 1)',
      colorBottom: 'rgba(83, 113, 255, 1)',
      text: 'Empowering ourselves with knowledge on personal wellness & self development',
    },
    {
      sectionTitle: 'SYNAPSE',
      img: '',
      colorTop: 'rgba(75, 46, 143, 1)',
      colorBottom: ' rgba(149, 35, 140, 1)',
      text: 'Exploring ways to ethically blend the evolution of humanity, AI & technology',
    },
    {
      sectionTitle: 'RISE',
      img: '',
      colorTop: 'rgba(233, 23, 126, 1)',
      colorBottom: 'rgba(234, 37, 74, 1)',
      text: 'Mobilizing action for marginalized voices & humanitarian agendas',
    },
    {
      sectionTitle: 'ANCESTOR',
      img: '',
      colorTop: 'rgba(222, 109, 4, 1)',
      colorBottom: 'rgba(249, 218, 90, 1)',
      text: 'Valuing Ancestral & Indigenous Wisdom & storytelling to further sustainable development ',
    },
    {
      sectionTitle: 'BIOSPHERE',
      img: '',
      colorTop: 'rgba(128, 196, 63, 1)',
      colorBottom: 'rgba(66, 178, 72, 1)',
      text: 'Connecting to nature and sustainable solutions for the planet',
    },
  ];

  const VideoParagraphs = [
    'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
    'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.',
  ];

  const ForceStaring = [
    { role: 'Natálie Paulásova', name: 'as Shakti (fire)' },
    { role: 'Jakub Rašek', name: 'as Self, Shadow, Shiva (water)' },
    { role: 'Fraser Roach', name: 'as Shadow Double' },

  ];
  const ForceMusic = [
    { role: 'Son of Dathomir', name: 'by Nior' },
    { role: 'Written & Directed by', name: 'Elena Omura' },
    { role: 'Choreography by', name: 'Natálie Paulásova, Jakub Rašek, Fraser Roach' },
    { role: 'Cinematography by ', name: 'Anisha Lanewala' },
    { role: 'Production Design by', name: 'Prarthana Gupta' },
    { role: 'Costume by', name: "Lena d’ Helena" },
    { role: 'Make-up by ', name: 'Elise Ann Brady' },
    { role: 'Edit & Colour Grade by', name: 'Nicole Goode' },
    { role: 'Music Mastered by', name: 'David Třebický (YOGA Studio)' },
  ];


const App: React.FC = () => {
  return (
    <>
    <GlobalStyles />
      <Header />
      <main>
        <VideoSection section={'logo'} />
        <ReactPlayer
  url="https://vimeo.com/843867279"
  controls
  width="100%"
/>
        <OurMission />
        <About />
        <OurValues title='Our Values' ourValueItems={ourValuesData}/>
        <OurLenses title='Our Lenses' ourLensesItems={ourLensesData} />
        <VideoTextComponent   
          sectionTitle='Work'
          section='everyDropCounts'   
          video='image' 
          title="Every Drop Counts Blurb"
          paragraphs={VideoParagraphs}
          firstreditsTitle="Film Credits"
          firstCredits={ForceStaring}
        />
        <VideoTextComponent   
          section='unifiedField'   
          video='image' 
          title="Unified Fields"
          paragraphs={VideoParagraphs}
          firstreditsTitle="Film Credits"
          firstCredits={ForceStaring}
        />
        <VideoTextComponent   
          section='theForce'   
          video={'https://vimeo.com/843867279'}
          title="The Force"
          paragraphs={['An experimental dance music video, which explores the "selves" that one may encounter, on an introspective journey.']}
          firstreditsTitle="Staring"
          firstCredits={ForceStaring}
          secondCreditsTitle={'Music'}
          secondCredits={ForceMusic}
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
import Head from 'next/head'
import Header from '../components/Header'
import Intro from '../components/Intro'
import HeroSection from '../components/HeroSection';
import Eq from '../components/Eq';
import Wonder from '../components/Wonder';
import Test from '../components/Test';
import TheBestEq from '../components/TheBestEq';
import WorkWithUs from '../components/WorkWithUs';
import CardSection from '../components/CardSection';
import Vacancies from '../components/Vacancies';
import Footer from '../components/Footer';
import FeatureSection from '../components/FeatureSection';
// import '../styles/home.module.css';
import InfiniteScrollList from '../components/InfiniteScrollList';

// import Eq from '../components/Eq';
// import Scroll from '../components/Scroll';
const contentItems = [
  { id: 1, content: "It's not as easy as 1-2-3." },
  { id: 2, content: 'Old habits are hard to break.' },
  { id: 3, content: "You and your motivation don't have a long-term relationship." },
  { id: 4, content: "Books just don't offer practical solutions." },

];

export default function Home() {
  return (
    <div className="bg-[#fff] min-h-screen"> 
      <Header />
      <Head>
        <title>Mahesh Dasika</title>
        <meta name="description" content="Master your life by mastering emotions with Your App Name." />
      </Head>
      

      <HeroSection />
      
      {/* <Intro /> */}
      {/* <Scroll /> */}

      <section id="emotions">
        <Eq />
      </section>

      <section id="manifesto">
        <div className="container mx-auto">
          <CardSection />
        </div>
      </section>

      <FeatureSection />
      <InfiniteScrollList />



      <TheBestEq />
      <Wonder />
      <section id="self-awareness-test">
        <Test />
      </section>

      <section id="work-with-us">
        <WorkWithUs />
      </section>

      <Vacancies />
      <Footer />
    </div>
  )
}
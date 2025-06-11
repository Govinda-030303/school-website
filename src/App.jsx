import SchoolCard from './components/card-type/SchoolCard'
import Footer from './components/footer/Footer'
import EBrochure from './components/forms-components/EBrochure'
import  HeroSection  from './components/HeroSection'
import FeatureSection from './components/main-sections/FeatureSection'
import GuideSection from './components/main-sections/GuideSection'
import InteractiveFeaturesShowcase from './components/main-sections/InteractiveFeaturesShowcase'
import MobileStorySection from './components/main-sections/MobileStorySection'
import RatingSection from './components/main-sections/RatingSection'
import ReviewCarousel from './components/main-sections/ReviewCarousel'
import StatisticsSection from './components/main-sections/StatisticsSection'
import StorySection from './components/main-sections/StorySection'
import WhatsappStorySection from './components/main-sections/WhatsappStorySection'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='font-bold text-5xl m-1'>
      <Navbar/>
      <HeroSection/>
      <SchoolCard/>
      {/* <StatisticsCard data="goivnda" description="hello"/> */}
      <StatisticsSection/>
      <StorySection/>
      <FeatureSection/>
      <MobileStorySection/>
      <WhatsappStorySection/>
      <ReviewCarousel/>
      <GuideSection/>
      <RatingSection/>
      <EBrochure/>
      <InteractiveFeaturesShowcase/>
      <Footer/>
    </div>
  )
}

export default App
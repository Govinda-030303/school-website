import SchoolCard from './components/card-type/SchoolCard'
import StatisticsCard from './components/card-type/StatisticsCard'
import Footer from './components/footer/Footer'
import FeatureSection from './components/main-sections/FeatureSection'
import ReviewCarousel from './components/main-sections/ReviewCarousel'
import StatisticsSection from './components/main-sections/StatisticsSection'
import Navbar from './components/navbar/Navbar'

const App = () => {
  return (
    <div className='font-bold text-5xl m-1'>
      <Navbar/>
      <SchoolCard/>
      {/* <StatisticsCard data="goivnda" description="hello"/> */}
      <StatisticsSection/>
      <FeatureSection/>
      <ReviewCarousel/>
      <Footer/>
    </div>
  )
}

export default App
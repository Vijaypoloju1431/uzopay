
import './App.css'
import ExceptionalSupport from './components/ExceptionalSupport'
import FinanceFuture from './components/FinanceFuture'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import OurExpertise from './components/OurExpertise'
import PaymentCard from './components/PaymentCard'
import PaymentProcessSection from './components/PaymentProcessSection'
import PaymentsSection from './components/PaymentsSection'
import PayoutSection from './components/PayoutSection'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <div className='bg-black text-white pb-5'>
      <div className='shadow-custom-box-shadow pb-5'>
        <Navbar />
      </div>
      <HeroSection />
      <OurExpertise />
      <PayoutSection />
      <ExceptionalSupport />
      <PaymentProcessSection />
      <PaymentsSection/>
      <FinanceFuture />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App

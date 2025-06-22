import React from 'react'
import ExceptionalSupport from '../components/ExceptionalSupport'
import FinanceFuture from '../components/FinanceFuture'
import HeroSection from '../components/HeroSection'
import OurExpertise from '../components/OurExpertise'
import PaymentProcessSection from '../components/PaymentProcessSection'
import PaymentsSection from '../components/PaymentsSection'
import PayoutSection from '../components/PayoutSection'
import Testimonials from '../components/Testimonials'

function HomeLayout() {
    return (
        <>
            <HeroSection />
            <OurExpertise />
            <PayoutSection />
            <ExceptionalSupport />
            <PaymentProcessSection />
            <PaymentsSection />
            <FinanceFuture />
            <Testimonials />
        </>
    )
}

export default HomeLayout
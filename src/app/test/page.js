'use client'

import Image from "next/image";
// import '@/styles/style.css'
import AboutSection from '../components/sections/about/AboutSection'
import AchievementsSection from '../components/sections/achievements/AchievementsSection'
import BlogsSection from '../components/sections/blogs/BlogsSection'
import EmployeesSection from '../components/sections/employees/EmployeesSection'
import FeedbackSection from '../components/sections/feedback/FeedbackSection'
import HeroSection from '../components/sections/hero/HeroSection'
import ProjectsSection from '../components/sections/projects/ProjectsSection'
import RateSection from '../components/sections/rate/RateSection'
import ServicesSection from '../components/sections/services/ServicesSection'
import Modal from '../components/shared/modal/modal-hello/ModalHello'
import { useState } from "react";

export default function Home() {

  const [isMmodalOpen, setIsMmodalOpen] = useState(true);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
       <RateSection />
      <EmployeesSection />
      <ProjectsSection />
      <AchievementsSection />
      <BlogsSection />
      <FeedbackSection modalOpen={() => setIsMmodalOpen(true)} />
      {/* <ModalLogin isOpen={isMmodalOpen} onClose={() => setIsMmodalOpen(false)} /> */}
      <Modal isOpen={isMmodalOpen} onClose={() => setIsMmodalOpen(false)} />
    </>
  );
}

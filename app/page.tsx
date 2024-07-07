"use client"
import HeroSection from "@/components/HeroSection/HeroSection";
import NavBar from "@/components/NavBar/NavBar";
import styles from "./Home.module.css";
import React from "react";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${styles.mainContent} ${isSidebarOpen ? styles.shifted : ""}`}>
      <NavBar toggleSidebar={handleToggleSidebar} /> 
      <HeroSection />
    </div>
  );
}

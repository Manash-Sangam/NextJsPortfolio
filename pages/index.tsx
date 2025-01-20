import { useState, useEffect, useRef } from 'react';
import TypeWriter from '../components/TypeWriter';
import ProfileImage from '../components/ProfileImage';
import SkillsGrid from '../components/SkillsGrid';
import FloatingDockMobile from '../components/FloatingDockMobile';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { dockItems } from '../data/dockItems';

export default function Home() {
  const staticText = ["Hello, I'm Manash.", 'A'];
  const words = ['Software\nEngineer', 'Web\nDeveloper', 'Tech\nEnthusiast'];

  return (
    <div>
      <main className="home-container">
        <div className="typerwriter-container mx-auto flex flex-col md:flex-row">
          <TypeWriter staticText={staticText} words={words} />
          <ProfileImage />
        </div>
        <SkillsGrid />
        <FloatingDockMobile items={dockItems} />
      </main>
    </div>
  );
}
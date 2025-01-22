import Head from 'next/head';
import TypeWriter from '../components/TypeWriter';
import ProfileImage from '../components/ProfileImage';
import SkillsGrid from '../components/SkillsGrid';
import FloatingDockMobile from '../components/FloatingDockMobile';
import { dockItems } from '../data/dockItems';

export default function Home() {
  const staticText = ["Hello, I'm Manash.", 'A'];
  const words = ['Software\nEngineer', 'Web\nDeveloper', 'Tech\nEnthusiast'];

  return (
    <div>
      <Head>
        <title>Home - My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website. My name is Manash Sangam. I am a software engineer, web developer, and tech enthusiast." />
        <meta name="keywords" content="Manash Sangam, portfolio, web developer, software engineer, tech enthusiast, projects, Smart Irrigation, OSRT, Organic Karnali" />
        <meta name="author" content="Manash Sangam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Manash Sangam - My Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. My name is Manash Sangam. I am a software engineer, web developer, and tech enthusiast." />
        <meta property="og:image" content="/assets/resumeimagecropped.jpeg" />
        <meta property="og:url" content="https://manash-sangam.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manash Sangam - My Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. My name is Manash Sangam. I am a software engineer, web developer, and tech enthusiast." />
        <meta name="twitter:image" content="/assets/resumeimagecropped.jpeg" />
        <link rel="canonical" href="https://manash-sangam.com.np" />
      </Head>
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
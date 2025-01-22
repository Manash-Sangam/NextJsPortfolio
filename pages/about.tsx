import Timeline from '../components/Timeline';
import Head from 'next/head';
import timelineData from '../data/timelineData';

export default function About() {
  return (
    <div className="about-container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>About - My Portfolio</title>
        <meta name="description" content="Learn more about me, my journey, and my professional milestones." />
        <meta name="keywords" content="about, portfolio, web developer, software engineer" />
        <meta name="author" content="Manash Sangam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Manash Sangam - About" />
        <meta property="og:description" content="Learn more about me, my journey, and my professional milestones." />
        <meta property="og:image" content="/assets/resumeimagecropped.jpeg" />
        <meta property="og:url" content="https://manash-sangam.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manash Sangam - About" />
        <meta name="twitter:description" content="Learn more about me, my journey, and my professional milestones." />
        <meta name="twitter:image" content="/assets/resumeimagecropped.jpeg" />
      </Head>
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <p className="text-neutral-700 text-sm md:text-base max-w-prose text-justify">
      Hello, and thank you for stopping by! This page is a glimpse into the milestones that have shaped my professional and personal growth. From the early days of exploration to the exciting challenges I face today, each chapter tells a story of learning, passion, and perseverance.
      </p>
      <p className="text-neutral-700 text-sm md:text-base max-w-prose text-justify">
      Feel free to scroll through and explore the moments that have brought me here&mdash;projects I&apos;ve worked on, lessons I&apos;ve learned, and memories I&apos;ve cherished. I hope you enjoy this journey as much as I&apos;ve enjoyed living it!
      </p>
      <Timeline data={timelineData} />
    </div>
  );
}
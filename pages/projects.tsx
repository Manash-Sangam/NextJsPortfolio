import React from 'react';
import Head from 'next/head';
import ProjectsGrid from '../components/ProjectsGrid';

export default function Projects() {
  return (
    <div className="project-container mx-auto p-8">
      <Head>
        <title>Projects - My Portfolio</title>
        <meta name="description" content="Explore my projects and see what I've been working on as a software engineer and web developer." />
        <meta name="keywords" content="projects, portfolio, web developer, software engineer" />
        <meta name="author" content="Manash Sangam" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Manash Sangam - Projects" />
        <meta property="og:description" content="Explore my projects and see what I've been working on as a software engineer and web developer." />
        <meta property="og:image" content="/assets/resumeimagecropped.jpeg" />
        <meta property="og:url" content="https://manash-sangam.com.np" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manash Sangam - Projects" />
        <meta name="twitter:description" content="Explore my projects and see what I've been working on as a software engineer and web developer." />
        <meta name="twitter:image" content="/assets/resumeimagecropped.jpeg" />
      </Head>
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <ProjectsGrid />
    </div>
  );
}
import { useState, useEffect, useRef } from 'react';
import TypeWriter from '../components/TypeWriter';
import ProfileImage from '../components/ProfileImage';

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
      </main>
    </div>
  );
}
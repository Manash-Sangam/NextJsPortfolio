import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import TypeWriter from '../components/TypeWriter';

export default function Home() {
  const staticText = ["Hello, I'm Manash.", 'A'];
  const words = ['Software\nEngineer', 'Web\nDeveloper', 'Tech\nEnthusiast'];

  return (
    <div>
      <main className="typerwriter-container mx-auto flex flex-col items-start">
        <TypeWriter staticText={staticText} words={words} />
      </main>
    </div>
  );
}
import React from 'react';
import { FloatingDock } from './FloatingDock'; // Adjust the import path as necessary
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const dockItems = [
  { title: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com' },
  { title: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com' },
  { title: 'Twitter', icon: <FaTwitter />, href: 'https://twitter.com' },
  { title: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com' },
  { title: 'GitHub', icon: <FaGithub />, href: 'https://github.com' },
];

const DockItems = ({ className }: { className?: string }) => {
  return <FloatingDock items={dockItems} className={className} />;
};

export default DockItems;

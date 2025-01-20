import React from 'react';
import { FloatingDock } from './FloatingDock'; // Adjust the import path as necessary
import { dockItems } from '../data/dockItems';

const DockItems = ({ className }: { className?: string }) => {
  return <FloatingDock items={dockItems} className={className} />;
};

export default DockItems;

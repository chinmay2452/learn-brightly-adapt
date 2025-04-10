
import React from 'react';
import DyslexiaHeader from '@/components/DyslexiaHeader';
import { GraduationCap } from 'lucide-react';
import ResourcesTabs from '@/components/resources/ResourcesTabs';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pastel-green/30 pb-24">
      <DyslexiaHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <GraduationCap className="mr-2 text-primary" />
          Learning Resources
        </h1>
        
        <ResourcesTabs />
      </main>
    </div>
  );
};

export default Resources;

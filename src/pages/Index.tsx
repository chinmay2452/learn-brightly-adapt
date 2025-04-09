
import React from 'react';
import { Button } from "@/components/ui/button";
import DyslexiaHeader from '@/components/DyslexiaHeader';
import ProgressTracker from '@/components/ProgressTracker';
import LearningCategories from '@/components/LearningCategories';
import LearningModules from '@/components/LearningModules';
import { Lightbulb } from 'lucide-react';
import AnimatedIcon from '@/components/AnimatedIcon';
import ReadingText from '@/components/ReadingText';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pastel-blue/30">
      <DyslexiaHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        {/* Welcome Message */}
        <div className="bg-pastel-peach rounded-2xl p-6 mb-8 shadow-lg flex flex-col md:flex-row items-center gap-6 animate-pop">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Welcome back, Alex!</h1>
            <ReadingText size="lg">
              Ready to continue your learning adventure? 
              We've got some fun activities just for you today!
            </ReadingText>
            <Button className="mt-4 rounded-xl py-6 px-8 text-lg font-bold shadow-md hover:shadow-lg">
              Continue Learning
            </Button>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <AnimatedIcon animation="float" size="xl" className="text-8xl">
              <Lightbulb className="text-amber-500 h-24 w-24" />
            </AnimatedIcon>
          </div>
        </div>
        
        {/* Progress Section */}
        <ProgressTracker />
        
        {/* Categories */}
        <LearningCategories />
        
        {/* Learning Modules */}
        <LearningModules />
        
        {/* Tips Section */}
        <div className="bg-pastel-green rounded-2xl p-6 mt-8 shadow-md">
          <h2 className="text-xl font-bold mb-2">Reading Tip of the Day</h2>
          <ReadingText>
            Try using a ruler or bookmark under each line as you read. 
            This helps your eyes focus on one line at a time!
          </ReadingText>
        </div>
      </main>
      
      <footer className="bg-pastel-purple mt-12 py-6 rounded-t-2xl">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="font-bold">Learn Brightly - Making learning fun for everyone!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

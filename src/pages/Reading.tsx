
import React from 'react';
import DyslexiaHeader from '@/components/DyslexiaHeader';
import ReadingText from '@/components/ReadingText';
import { Book, ArrowRight, Volume2, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AnimatedIcon from '@/components/AnimatedIcon';

const Reading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pastel-blue/30 pb-24">
      <DyslexiaHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <Book className="mr-2 text-primary" />
          Reading Practice
        </h1>
        
        <div className="bg-pastel-yellow rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Today's Story</h2>
            <Button variant="ghost" size="sm" className="flex items-center">
              <Volume2 className="mr-2" /> Read Aloud
            </Button>
          </div>
          
          <div className="bg-white/70 rounded-xl p-4 shadow-inner mb-4">
            <ReadingText size="lg">
              <span className="reading-highlight">Once upon a time</span>, there was a brave astronaut named Mia. 
              She loved to explore space in her shiny rocket ship.
            </ReadingText>
            
            <div className="my-4 flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80" 
                alt="Space scene with stars and planets" 
                className="rounded-xl shadow-md max-h-64 object-cover"
              />
            </div>
            
            <ReadingText size="lg">
              One day, Mia found a <span className="reading-highlight">new planet</span> with purple trees and blue grass. 
              She made friends with a small green alien who showed her around.
            </ReadingText>
          </div>
          
          <div className="flex justify-between mt-4">
            <Button variant="outline" className="rounded-xl">Previous Page</Button>
            <Button className="rounded-xl flex items-center">Next Page <ArrowRight className="ml-2" /></Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pastel-green rounded-xl p-4 shadow-md">
            <h3 className="font-bold text-lg mb-2">New Words</h3>
            <ul className="space-y-2">
              <li className="bg-white/50 rounded-lg p-2 flex justify-between">
                Astronaut <Button size="sm" variant="ghost"><Volume2 className="h-4 w-4" /></Button>
              </li>
              <li className="bg-white/50 rounded-lg p-2 flex justify-between">
                Explorer <Button size="sm" variant="ghost"><Volume2 className="h-4 w-4" /></Button>
              </li>
              <li className="bg-white/50 rounded-lg p-2 flex justify-between">
                Planet <Button size="sm" variant="ghost"><Volume2 className="h-4 w-4" /></Button>
              </li>
            </ul>
          </div>
          
          <div className="bg-pastel-pink rounded-xl p-4 shadow-md">
            <h3 className="font-bold text-lg mb-2">Comprehension</h3>
            <div className="space-y-3">
              <ReadingText>Who is the main character in our story?</ReadingText>
              <Button className="w-full text-left justify-start bg-white/50 hover:bg-white/70">Mia the astronaut</Button>
              <Button className="w-full text-left justify-start bg-white/50 hover:bg-white/70">Tom the alien</Button>
              <Button className="w-full text-left justify-start bg-white/50 hover:bg-white/70">Luna the teacher</Button>
            </div>
          </div>
          
          <div className="bg-pastel-purple rounded-xl p-4 shadow-md">
            <h3 className="font-bold text-lg mb-2">Your Reading Stats</h3>
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-3">
                <div className="text-sm">Books Read This Week</div>
                <div className="text-2xl font-bold flex items-center">
                  <BookOpen className="mr-2 text-primary" /> 3
                </div>
              </div>
              <div className="bg-white/50 rounded-lg p-3">
                <div className="text-sm">Current Streak</div>
                <div className="text-2xl font-bold">5 days</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reading;

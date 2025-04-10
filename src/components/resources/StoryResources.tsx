
import React from 'react';
import { BookOpen } from 'lucide-react';
import ReadingText from '@/components/ReadingText';
import LearningCard from '@/components/LearningCard';
import { Button } from "@/components/ui/button";

const StoryResources = () => {
  return (
    <div className="space-y-6">
      <div className="bg-pastel-peach rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Reading Stories</h2>
        <ReadingText size="lg">
          Enjoy these dyslexia-friendly stories that are designed to be easier to read.
        </ReadingText>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningCard title="The Magic Tree" icon={<BookOpen />} color="green">
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Magic Tree" 
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <ReadingText>
            A story about a magical tree that grants wishes to those who are kind.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Read Story</Button>
        </LearningCard>
        
        <LearningCard title="Space Adventure" icon={<BookOpen />} color="blue">
          <img 
            src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Space Adventure" 
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <ReadingText>
            Join astronaut Mia on her exciting adventure to a new planet.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Read Story</Button>
        </LearningCard>
        
        <LearningCard title="The Brave Puppy" icon={<BookOpen />} color="yellow">
          <img 
            src="https://images.unsplash.com/photo-1583511655826-05700a52f0ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Brave Puppy" 
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <ReadingText>
            The story of Max, a small puppy who saved his family during a storm.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Read Story</Button>
        </LearningCard>
        
        <LearningCard title="Ocean Friends" icon={<BookOpen />} color="pink">
          <img 
            src="https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Ocean Friends" 
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <ReadingText>
            Discover the amazing friendships between different sea creatures.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Read Story</Button>
        </LearningCard>
      </div>
    </div>
  );
};

export default StoryResources;


import React from 'react';
import LearningCard from './LearningCard';
import ReadingText from './ReadingText';
import { BookOpen, Video, Mic, Puzzle } from 'lucide-react';

const LearningModules = () => {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-6">Today's Learning</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningCard 
          title="Reading Practice" 
          icon={<BookOpen />} 
          color="blue"
        >
          <ReadingText>
            Let's practice reading with a fun story about space explorers! 
            Click to start your reading adventure.
          </ReadingText>
          <button className="w-full mt-2 bg-white/50 hover:bg-white/70 transition-colors rounded-xl py-2 font-bold">
            Start Reading
          </button>
        </LearningCard>
        
        <LearningCard 
          title="Video Lesson" 
          icon={<Video />}
          color="yellow"
        >
          <ReadingText>
            Watch a 5-minute video about animals in the rainforest. 
            Learn amazing facts with colorful animations!
          </ReadingText>
          <button className="w-full mt-2 bg-white/50 hover:bg-white/70 transition-colors rounded-xl py-2 font-bold">
            Play Video
          </button>
        </LearningCard>
        
        <LearningCard 
          title="Pronunciation Practice" 
          icon={<Mic />}
          color="pink"
        >
          <ReadingText>
            Practice saying tricky words out loud. Listen to the correct 
            pronunciation and then try it yourself!
          </ReadingText>
          <button className="w-full mt-2 bg-white/50 hover:bg-white/70 transition-colors rounded-xl py-2 font-bold">
            Try Speaking
          </button>
        </LearningCard>
        
        <LearningCard 
          title="Word Games" 
          icon={<Puzzle />}
          color="green"
        >
          <ReadingText>
            Play fun word games to improve your spelling and vocabulary. 
            Earn stars for every game you complete!
          </ReadingText>
          <button className="w-full mt-2 bg-white/50 hover:bg-white/70 transition-colors rounded-xl py-2 font-bold">
            Play Games
          </button>
        </LearningCard>
      </div>
    </div>
  );
};

export default LearningModules;

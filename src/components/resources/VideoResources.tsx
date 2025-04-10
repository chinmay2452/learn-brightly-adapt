
import React from 'react';
import { VideoIcon } from 'lucide-react';
import ReadingText from '@/components/ReadingText';
import LearningCard from '@/components/LearningCard';

const VideoResources = () => {
  return (
    <div className="space-y-6">
      <div className="bg-pastel-yellow rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Educational Videos</h2>
        <ReadingText size="lg">
          Watch these helpful videos to learn more about dyslexia and improve your reading skills.
        </ReadingText>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LearningCard title="Understanding Dyslexia" icon={<VideoIcon />} color="blue">
          <div className="aspect-video bg-black/10 rounded-lg mb-3 overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/zafiGBrFkRM" 
              title="Understanding Dyslexia" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <ReadingText>
            Learn about what dyslexia is and how it affects learning.
          </ReadingText>
        </LearningCard>
        
        <LearningCard title="Reading Strategies" icon={<VideoIcon />} color="purple">
          <div className="aspect-video bg-black/10 rounded-lg mb-3 overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/JgQViZpK5jY" 
              title="Reading Strategies" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <ReadingText>
            Discover effective strategies to improve your reading skills.
          </ReadingText>
        </LearningCard>
        
        <LearningCard title="Phonics Practice" icon={<VideoIcon />} color="pink">
          <div className="aspect-video bg-black/10 rounded-lg mb-3 overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/xIBjAWkPzNA" 
              title="Phonics Practice" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <ReadingText>
            Practice phonics with fun activities and exercises.
          </ReadingText>
        </LearningCard>
        
        <LearningCard title="Dyslexia Success Stories" icon={<VideoIcon />} color="green">
          <div className="aspect-video bg-black/10 rounded-lg mb-3 overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/6Zvlz0U8mPo" 
              title="Dyslexia Success Stories" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <ReadingText>
            Listen to success stories from people with dyslexia.
          </ReadingText>
        </LearningCard>
      </div>
    </div>
  );
};

export default VideoResources;

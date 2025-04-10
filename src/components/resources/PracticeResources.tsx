
import React from 'react';
import { GraduationCap, ExternalLink } from 'lucide-react';
import ReadingText from '@/components/ReadingText';
import LearningCard from '@/components/LearningCard';
import { Button } from "@/components/ui/button";

const PracticeResources = () => {
  return (
    <div className="space-y-6">
      <div className="bg-pastel-purple rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Practice Sessions</h2>
        <ReadingText size="lg">
          Regular practice helps improve your reading and writing skills. Try these interactive exercises!
        </ReadingText>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LearningCard title="Daily Word Practice" icon={<GraduationCap />} color="blue">
          <ReadingText>
            Practice reading and spelling frequently used words. 10 minutes daily.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
        
        <LearningCard title="Letter Reversals" icon={<GraduationCap />} color="pink">
          <ReadingText>
            Practice with commonly reversed letters like b/d and p/q. 15 minutes.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
        
        <LearningCard title="Speed Reading" icon={<GraduationCap />} color="yellow">
          <ReadingText>
            Gradually increase your reading speed while maintaining comprehension.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
        
        <LearningCard title="Phonemic Awareness" icon={<GraduationCap />} color="green">
          <ReadingText>
            Practice identifying and manipulating sounds in words. 20 minutes.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
        
        <LearningCard title="Word Families" icon={<GraduationCap />} color="peach">
          <ReadingText>
            Learn patterns in words that share the same ending sounds. 15 minutes.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
        
        <LearningCard title="Handwriting" icon={<GraduationCap />} color="purple">
          <ReadingText>
            Improve your handwriting with guided practice exercises. 15 minutes.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Practice</Button>
        </LearningCard>
      </div>
      
      <div className="bg-pastel-green/30 rounded-xl p-6 mt-8">
        <h3 className="text-xl font-bold mb-4">External Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button variant="outline" className="justify-start" onClick={() => window.open('https://www.understood.org', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" /> Understood.org
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => window.open('https://dyslexiaida.org', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" /> International Dyslexia Association
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => window.open('https://www.readingrockets.org', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" /> Reading Rockets
          </Button>
          <Button variant="outline" className="justify-start" onClick={() => window.open('https://www.dyslexicadvantage.org', '_blank')}>
            <ExternalLink className="mr-2 h-4 w-4" /> Dyslexic Advantage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PracticeResources;

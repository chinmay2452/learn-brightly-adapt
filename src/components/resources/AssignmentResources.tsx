
import React from 'react';
import { FileText } from 'lucide-react';
import ReadingText from '@/components/ReadingText';
import LearningCard from '@/components/LearningCard';
import { Button } from "@/components/ui/button";

const AssignmentResources = () => {
  return (
    <div className="space-y-6">
      <div className="bg-pastel-blue rounded-2xl p-6 shadow-lg mb-6">
        <h2 className="text-2xl font-bold mb-4">Test Assignments</h2>
        <ReadingText size="lg">
          Complete these assignments to practice your skills and track your progress.
        </ReadingText>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LearningCard title="Word Recognition" icon={<FileText />} color="yellow">
          <ReadingText>
            Practice recognizing common words quickly. Complete 3 exercises.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
        
        <LearningCard title="Spelling Practice" icon={<FileText />} color="pink">
          <ReadingText>
            Test your spelling skills with commonly misspelled words.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
        
        <LearningCard title="Reading Comprehension" icon={<FileText />} color="green">
          <ReadingText>
            Read a short passage and answer questions about it.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
        
        <LearningCard title="Letter Sequencing" icon={<FileText />} color="blue">
          <ReadingText>
            Practice putting letters in the correct order to form words.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
        
        <LearningCard title="Sound Blending" icon={<FileText />} color="purple">
          <ReadingText>
            Listen to sounds and blend them together to make words.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
        
        <LearningCard title="Weekly Challenge" icon={<FileText />} color="peach">
          <ReadingText>
            Take on our weekly challenge combining various skills.
          </ReadingText>
          <Button className="w-full mt-4 bg-white/50 hover:bg-white/70">Start Assignment</Button>
        </LearningCard>
      </div>
    </div>
  );
};

export default AssignmentResources;

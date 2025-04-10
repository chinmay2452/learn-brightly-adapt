
import React from 'react';
import { VideoIcon, FileText, BookOpen, GraduationCap } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VideoResources from './VideoResources';
import AssignmentResources from './AssignmentResources';
import StoryResources from './StoryResources';
import PracticeResources from './PracticeResources';

const ResourcesTabs = () => {
  return (
    <Tabs defaultValue="videos" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="videos" className="flex items-center gap-2">
          <VideoIcon className="h-4 w-4" /> Videos
        </TabsTrigger>
        <TabsTrigger value="assignments" className="flex items-center gap-2">
          <FileText className="h-4 w-4" /> Assignments
        </TabsTrigger>
        <TabsTrigger value="stories" className="flex items-center gap-2">
          <BookOpen className="h-4 w-4" /> Stories
        </TabsTrigger>
        <TabsTrigger value="practice" className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" /> Practice
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="videos">
        <VideoResources />
      </TabsContent>
      
      <TabsContent value="assignments">
        <AssignmentResources />
      </TabsContent>
      
      <TabsContent value="stories">
        <StoryResources />
      </TabsContent>
      
      <TabsContent value="practice">
        <PracticeResources />
      </TabsContent>
    </Tabs>
  );
};

export default ResourcesTabs;

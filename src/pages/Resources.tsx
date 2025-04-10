
import React from 'react';
import DyslexiaHeader from '@/components/DyslexiaHeader';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoIcon, FileText, BookOpen, GraduationCap, External } from 'lucide-react';
import ReadingText from '@/components/ReadingText';
import LearningCard from '@/components/LearningCard';
import AnimatedIcon from '@/components/AnimatedIcon';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pastel-green/30 pb-24">
      <DyslexiaHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6 flex items-center">
          <GraduationCap className="mr-2 text-primary" />
          Learning Resources
        </h1>
        
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
          
          <TabsContent value="videos" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="assignments" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="stories" className="space-y-6">
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
          </TabsContent>
          
          <TabsContent value="practice" className="space-y-6">
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
                  <External className="mr-2 h-4 w-4" /> Understood.org
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => window.open('https://dyslexiaida.org', '_blank')}>
                  <External className="mr-2 h-4 w-4" /> International Dyslexia Association
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => window.open('https://www.readingrockets.org', '_blank')}>
                  <External className="mr-2 h-4 w-4" /> Reading Rockets
                </Button>
                <Button variant="outline" className="justify-start" onClick={() => window.open('https://www.dyslexicadvantage.org', '_blank')}>
                  <External className="mr-2 h-4 w-4" /> Dyslexic Advantage
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Resources;

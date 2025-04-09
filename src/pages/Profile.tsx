
import React from 'react';
import DyslexiaHeader from '@/components/DyslexiaHeader';
import { User, Award, BookOpen, Settings, Bell, Puzzle, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ReadingText from '@/components/ReadingText';
import AnimatedIcon from '@/components/AnimatedIcon';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-pastel-purple/30 pb-24">
      <DyslexiaHeader />
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-pastel-blue rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-white/70 rounded-full flex justify-center items-center shadow-md">
              <User className="h-16 w-16 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">Alex Johnson</h1>
              <p className="text-lg">3rd Grade • Reading Level: Improving</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="bg-pastel-yellow px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" /> Reading Star
                </span>
                <span className="bg-pastel-green px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Puzzle className="h-4 w-4 mr-1" /> Game Master
                </span>
                <span className="bg-pastel-pink px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Calendar className="h-4 w-4 mr-1" /> 7-Day Streak
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-pastel-green rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Award className="mr-2" /> Your Achievements
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <AnimatedIcon animation="float" size="lg">
                  <Award className="h-10 w-10 text-amber-500 mx-auto" />
                </AnimatedIcon>
                <div className="mt-2 text-sm font-bold">Reading Pro</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <AnimatedIcon animation="float" size="lg">
                  <Award className="h-10 w-10 text-purple-500 mx-auto" />
                </AnimatedIcon>
                <div className="mt-2 text-sm font-bold">Spelling Bee</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center opacity-50">
                <Award className="h-10 w-10 text-gray-400 mx-auto" />
                <div className="mt-2 text-sm font-bold">Word Master</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center">
                <AnimatedIcon animation="float" size="lg">
                  <Award className="h-10 w-10 text-blue-500 mx-auto" />
                </AnimatedIcon>
                <div className="mt-2 text-sm font-bold">Story Maker</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center opacity-50">
                <Award className="h-10 w-10 text-gray-400 mx-auto" />
                <div className="mt-2 text-sm font-bold">Game Wizard</div>
              </div>
              <div className="bg-white/50 rounded-lg p-3 text-center opacity-50">
                <Award className="h-10 w-10 text-gray-400 mx-auto" />
                <div className="mt-2 text-sm font-bold">Math Hero</div>
              </div>
            </div>
          </div>
          
          <div className="bg-pastel-yellow rounded-xl p-6 shadow-md">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Calendar className="mr-2" /> Weekly Progress
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold">Reading Time</span>
                  <span className="text-sm font-bold">3.5 hours</span>
                </div>
                <div className="w-full bg-white/50 h-4 rounded-full">
                  <div className="bg-blue-500 h-4 rounded-full w-3/4"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold">Games Completed</span>
                  <span className="text-sm font-bold">12/15</span>
                </div>
                <div className="w-full bg-white/50 h-4 rounded-full">
                  <div className="bg-pink-500 h-4 rounded-full w-4/5"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-bold">New Words Learned</span>
                  <span className="text-sm font-bold">18/20</span>
                </div>
                <div className="w-full bg-white/50 h-4 rounded-full">
                  <div className="bg-green-500 h-4 rounded-full w-[90%]"></div>
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 rounded-xl">View Full Report</Button>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="bg-white/70 rounded-xl p-6 shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-100/50 rounded-lg">
              <div className="flex items-center">
                <Settings className="mr-3" />
                <span className="font-bold">Reading Preferences</span>
              </div>
              <Button variant="outline" size="sm">Adjust</Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-100/50 rounded-lg">
              <div className="flex items-center">
                <Bell className="mr-3" />
                <span className="font-bold">Notifications</span>
              </div>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-100/50 rounded-lg">
              <div className="flex items-center">
                <User className="mr-3" />
                <span className="font-bold">Account Settings</span>
              </div>
              <Button variant="outline" size="sm">Edit</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;

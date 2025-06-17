
import { Button } from '@/components/ui/button';
import { Star, Users, Award, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-4 bg-gray-800 rounded-sm"></div>
              <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
              <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
              <span className="text-sm text-gray-600 ml-2">🇮🇳 Made for Indians</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Learn German from
              <span className="text-red-600"> A1 to B1</span>
              <br />
              <span className="text-gray-700">Affordable, Expert, Indian-Friendly</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Master German with personalized 1:1 tutoring, flexible timings, and expert guidance. 
              From complete beginner to B1 proficiency - we've got you covered!
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-white rounded-lg shadow-sm">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-red-600 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">500+</span>
                </div>
                <p className="text-sm text-gray-600">Happy Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">95%</span>
                </div>
                <p className="text-sm text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="text-2xl font-bold text-gray-900">4.8★</span>
                </div>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
                View Courses
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg">
                Book Free Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="lg:pl-12">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">DE</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Start Your German Journey</h3>
                  <p className="text-gray-600">Choose your level and begin today!</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">A1 - Beginner</span>
                    <span className="text-red-600 font-bold">₹1,999</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">A2 - Elementary</span>
                    <span className="text-red-600 font-bold">₹3,999</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">B1 - Intermediate</span>
                    <span className="text-red-600 font-bold">₹4,999</span>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-600 text-white">
                  Get Started Now
                </Button>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                🎯 Expert Tutors
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                ✅ Certified Course
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

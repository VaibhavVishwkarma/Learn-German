
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Users, Award, Star } from 'lucide-react';

const CourseLevels = () => {
  const [selectedLevel, setSelectedLevel] = useState('A1');

  const courses = [
    {
      id: 'A1',
      title: 'A1 - Beginner Level',
      price: '₹1,999',
      duration: '8 weeks',
      description: 'Perfect for complete beginners. Learn basic German grammar, vocabulary, and conversation skills.',
      features: [
        'Basic German alphabet and pronunciation',
        'Essential vocabulary (200+ words)',
        'Present tense grammar',
        'Simple conversations',
        'Numbers, dates, and time',
        'Family and personal information'
      ],
      color: 'bg-green-500',
      popular: false
    },
    {
      id: 'A2',
      title: 'A2 - Elementary Level',
      price: '₹3,999',
      duration: '12 weeks',
      description: 'Build on your A1 knowledge. Improve speaking confidence and expand vocabulary.',
      features: [
        'Past and future tenses',
        'Extended vocabulary (500+ words)',
        'Travel and shopping conversations',
        'Writing simple texts',
        'Modal verbs usage',
        'Cultural insights about Germany'
      ],
      color: 'bg-blue-500',
      popular: true
    },
    {
      id: 'B1',
      title: 'B1 - Intermediate Level',
      price: '₹4,999',
      duration: '16 weeks',
      description: 'Advanced grammar, complex conversations, and exam preparation for Goethe B1.',
      features: [
        'Complex grammar structures',
        'Advanced vocabulary (1000+ words)',
        'Business German basics',
        'Exam preparation (Goethe B1)',
        'Debate and discussion skills',
        'German culture and literature'
      ],
      color: 'bg-purple-500',
      popular: false
    }
  ];

  const selectedCourse = courses.find(course => course.id === selectedLevel);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your German Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From complete beginner to intermediate proficiency. Each course is designed 
            with Indian students in mind, making German learning easier and more effective.
          </p>
        </div>

        {/* Course Level Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-2 rounded-lg inline-flex">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setSelectedLevel(course.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  selectedLevel === course.id
                    ? 'bg-white text-red-600 shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {course.id} Level
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
                course.popular 
                  ? 'border-red-500 shadow-lg' 
                  : selectedLevel === course.id 
                    ? 'border-red-300' 
                    : 'border-gray-200'
              }`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-red-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${course.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white text-2xl font-bold">{course.id}</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <div className="text-3xl font-bold text-red-600">{course.price}</div>
                <p className="text-sm text-gray-600 flex items-center justify-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">{course.description}</p>
                <Button 
                  className={`w-full ${
                    course.popular 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  } text-white`}
                  onClick={() => setSelectedLevel(course.id)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Course Information */}
        {selectedCourse && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 ${selectedCourse.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xl font-bold">{selectedCourse.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h3>
                    <p className="text-gray-600">{selectedCourse.duration} • {selectedCourse.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{selectedCourse.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-red-600" />
                    <span className="text-sm">1:1 Personal Tutor</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Flexible Timing</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Certificate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-600" />
                    <span className="text-sm">Exam Prep</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white">
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="flex-1 border-red-600 text-red-600 hover:bg-red-50">
                    Book Free Demo
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6">What You'll Learn</h4>
                <div className="space-y-3">
                  {selectedCourse.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseLevels;

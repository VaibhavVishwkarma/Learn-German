
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Clock, FileText, Award, MessageSquare, BookOpen } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: User,
      title: 'Personal 1:1 Tutor',
      description: 'Get dedicated attention from certified German tutors with personalized learning plans.',
      color: 'text-red-600 bg-red-100'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Choose class timings that fit your schedule. Evening and weekend slots available.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: FileText,
      title: 'Practice Materials',
      description: 'Access comprehensive worksheets, grammar guides, and vocabulary lists.',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Award,
      title: 'Exam Preparation',
      description: 'Complete preparation for Goethe Institute and TestDaF examinations.',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: MessageSquare,
      title: 'Speaking Practice',
      description: 'Regular conversation sessions with native pronunciation training.',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: BookOpen,
      title: 'Recorded Classes',
      description: 'Access all your classes anytime with our comprehensive recording system.',
      color: 'text-indigo-600 bg-indigo-100'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ApnaGerman?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the most effective way to learn German with our unique blend of 
            traditional teaching methods and modern technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-yellow-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What Makes Us Different?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-700">Indian Context Teaching</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Doubt Clearing Support</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">₹50/hr</div>
              <p className="text-gray-700">Starting From</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">30 Days</div>
              <p className="text-gray-700">Money Back Guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

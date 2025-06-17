
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      age: 24,
      level: 'A2 Graduate',
      rating: 5,
      text: 'ApnaGerman made learning German so easy! The personal tutor understood my learning pace and helped me clear A2 in just 4 months. Now I\'m confident about my Germany plans!',
      avatar: '👩‍💼',
      location: 'Mumbai'
    },
    {
      name: 'Rajesh Kumar',
      age: 28,
      level: 'B1 Graduate',
      rating: 5,
      text: 'Best investment ever! The flexible timings allowed me to learn while working. Got my B1 certificate and landed a job in Berlin. Thank you ApnaGerman team!',
      avatar: '👨‍💻',
      location: 'Delhi'
    },
    {
      name: 'Ananya Patel',
      age: 22,
      level: 'A1 Graduate',
      rating: 5,
      text: 'I was scared of learning a new language, but the teachers here are so supportive. They explain everything in Hindi when needed. Now I love speaking German!',
      avatar: '👩‍🎓',
      location: 'Pune'
    },
    {
      name: 'Vikram Singh',
      age: 26,
      level: 'B1 Graduate',
      rating: 5,
      text: 'The exam preparation was excellent. Passed Goethe B1 on my first attempt! The mock tests and practice materials were spot on. Highly recommended!',
      avatar: '👨‍🔬',
      location: 'Bangalore'
    },
    {
      name: 'Shruti Jain',
      age: 23,
      level: 'A2 Graduate',
      rating: 5,
      text: 'Affordable pricing and excellent quality. The recorded classes feature helped me revise concepts anytime. Perfect for working professionals like me!',
      avatar: '👩‍⚕️',
      location: 'Chennai'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of successful German learners who achieved their goals with ApnaGerman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-red-200 mb-4" />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-yellow-100 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years, {testimonial.location}</p>
                    <p className="text-sm font-medium text-red-600">{testimonial.level}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Happy Students</p>
              <p className="text-sm text-gray-500">Across India</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-700 font-medium">Success Rate</p>
              <p className="text-sm text-gray-500">In Exams</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.8★</div>
              <p className="text-gray-700 font-medium">Average Rating</p>
              <p className="text-sm text-gray-500">Student Reviews</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">3+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
              <p className="text-sm text-gray-500">Teaching Germans</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our success stories?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Start Your Journey
            </button>
            <button className="border border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

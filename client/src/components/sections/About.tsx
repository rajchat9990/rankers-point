import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Proven Excellence",
      description: "Consistent top ranks in competitive exams year after year."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Expert Faculty",
      description: "Learn from highly experienced educators dedicated to your success."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Comprehensive Material",
      description: "Updated and thoroughly researched study materials."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">About Ranker's Point</h2>
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                Where Ambition Meets Opportunity
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Ranker's Point was established with a singular vision: to provide quality education and correct guidance to students aspiring for success in competitive exams. We believe that every student has the potential to excel when provided with the right environment and mentorship.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Personalized attention for every student",
                  "Regular assessment and performance tracking",
                  "Doubt clearing sessions and motivational workshops",
                  "Modern infrastructure with a conducive learning environment"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

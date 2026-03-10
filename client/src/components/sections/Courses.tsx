import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Clock, BookText } from "lucide-react";
import foundationImg from "@/assets/images/course-foundation.png";
import competitiveImg from "@/assets/images/course-competitive.png";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Foundation Batches",
      target: "Class IX & X",
      description: "Build a strong base in Science and Mathematics early on. Focus on conceptual clarity to prepare for future competitive exams and board excellence.",
      image: foundationImg,
      features: ["NCERT Coverage", "Olympiad Prep", "Regular Tests"]
    },
    {
      id: 2,
      title: "Target Batches",
      target: "Class XI & XII",
      description: "Rigorous preparation for Board exams simultaneously with specialized coaching for competitive engineering and medical entrance exams.",
      image: competitiveImg,
      features: ["Board Exam Focus", "JEE/NEET Prep", "Doubt Sessions"]
    },
    {
      id: 3,
      title: "Dropper's Batch",
      target: "12th Pass Students",
      description: "Intensive, highly-focused 1-year program designed specifically for students dedicating a year solely to cracking top competitive exams.",
      image: foundationImg, // Reusing for prototype
      features: ["Intensive Curriculum", "Mock Test Series", "Personal Mentoring"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Our Programs</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-6">
              Tailored Courses for Every Stage
            </h3>
            <p className="text-slate-600 text-lg">
              Choose the perfect program designed to match your current academic level and future aspirations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {course.target}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-2xl font-bold font-heading text-slate-900 mb-3">{course.title}</h4>
                <p className="text-slate-600 mb-6 line-clamp-3">{course.description}</p>
                
                <div className="space-y-2 mb-8">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-slate-900 hover:bg-primary text-white group-hover:bg-primary transition-colors">
                  View Details <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple icon component for this file
function CheckCircle2(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
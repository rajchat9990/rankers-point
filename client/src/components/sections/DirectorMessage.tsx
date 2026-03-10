import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import raniMaam from "@/assets/images/rani-maam.png";

export default function DirectorMessage() {
  return (
    <section id="director" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
          <div className="flex flex-col md:flex-row">
            
            <div className="md:w-2/5 relative">
              <div className="absolute inset-0 bg-primary/10"></div>
              <img 
                src={raniMaam} 
                alt="Director Rani Tiwari" 
                className="w-full h-full object-cover object-top min-h-[400px]"
              />
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 mb-4 text-primary font-semibold uppercase tracking-wider text-sm">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  Director's Message
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">
                  "Education is the most powerful weapon which you can use to change the world."
                </h3>
                
                <div className="prose prose-lg text-slate-600 mb-8 space-y-4">
                  <p>
                    Welcome to Ranker's Point. When we started this institute, our goal was not just to teach, but to inspire. We understand that preparing for competitive exams can be a daunting journey, and students need more than just textbooks—they need a mentor.
                  </p>
                  <p>
                    My pedagogical philosophy is simple: simplify the complex, focus on the fundamentals, and practice with purpose. We have curated an environment where questions are encouraged, and curiosity is nurtured. Our results speak for themselves, but our true success lies in the confidence we instill in our students.
                  </p>
                  <p>
                    I personally invite you to join our family and embark on a transformative educational journey. Let's work together to make your aspirations a reality.
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 font-heading">Rani Tiwari (Rani Ma'am)</h4>
                    <p className="text-primary font-medium">Founder & Director</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

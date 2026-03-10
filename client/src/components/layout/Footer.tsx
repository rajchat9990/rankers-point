import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <BookOpen size={20} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Ranker's Point
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              Premier coaching institute dedicated to nurturing young minds and guiding them towards academic excellence under the leadership of Rani Ma'am.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#director" className="hover:text-primary transition-colors">Director's Message</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ranker's Point. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}

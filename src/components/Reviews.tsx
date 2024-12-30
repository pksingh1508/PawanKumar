import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

export function Reviews() {
  const testimonials = [
    {
      quote:
        "Learning web development with Pawan has been an incredible experience. His teaching style is clear and makes even tough concepts easy to understand.",
      name: "Riya Sharma",
      designation: "Computer Science Undergraduate",
    },
    {
      quote:
        "Pawan's guidance helped me land my first internship. His projects are not only educational but also fun to work on.",
      name: "Kunal Patel",
      designation: "Engineering Student",
    },
    {
      quote:
        "The personalized feedback and hands-on exercises were a game-changer for my coding skills. I can't thank Pawan enough!",
      name: "Aditi Verma",
      designation: "Final Year IT Student",
    },
    {
      quote:
        "I was struggling with React Native, but Pawan's resources and mentorship helped me build my first mobile app in just a few weeks.",
      name: "Manish Gupta",
      designation: "Self-taught Developer",
    },
    {
      quote:
        "Pawan has an amazing ability to break down complex topics into simple, digestible parts. His tutorials are the best I’ve ever come across.",
      name: "Anjali Deshmukh",
      designation: "Fresh Graduate in Computer Applications",
    },
    {
      quote:
        "His mentorship helped me create a portfolio that stands out. The practical projects we worked on gave me real-world experience.",
      name: "Rahul Nair",
      designation: "Third-Year CS Student",
    },
    {
      quote:
        "The reverse engineering sessions Pawan organized were eye-opening. He always encourages us to think outside the box.",
      name: "Siddharth Jain",
      designation: "Ethical Hacking Enthusiast",
    },
    {
      quote:
        "I built a solid foundation in JavaScript thanks to Pawan’s beginner-friendly approach. He’s a true mentor for aspiring developers.",
      name: "Sneha Roy",
      designation: "First-Year Engineering Student",
    },
    {
      quote:
        "The project-based learning method Pawan follows is highly effective. I was able to showcase my skills during campus placements confidently.",
      name: "Vivek Kumar",
      designation: "Fourth-Year Computer Science Student",
    },
    {
      quote:
        "Pawan's dedication to helping students grow is unmatched. He always goes the extra mile to ensure we understand the concepts thoroughly.",
      name: "Neha Agarwal",
      designation: "Freelance Web Developer",
    },
  ];
  
  return (
    <BackgroundBeamsWithCollision className="h-[99%] md:h-screen">
      <AnimatedTestimonials testimonials={testimonials} />;
    </BackgroundBeamsWithCollision>
  )
}

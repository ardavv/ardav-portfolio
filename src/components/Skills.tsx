
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const frontendSkills = [
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 85 }
  ];
  
  const backendSkills = [
    { name: "Supabase", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 75 },
    { name: "RESTful API", level: 80 }
  ];
  
  const tools = ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Netlify"];
  const languages = ["JavaScript", "TypeScript", "Python", "Java", "SQL"];
  
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title text-center">Keahlian Saya</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 text-portfolio-darkPurple">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-portfolio-purple" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-portfolio-darkPurple">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-portfolio-purple" />
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-portfolio-darkPurple">Tools & Bahasa Pemrograman</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-portfolio-purple/10 text-portfolio-darkPurple border-portfolio-purple">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Bahasa Pemrograman</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="outline" className="bg-portfolio-purple/10 text-portfolio-darkPurple border-portfolio-purple">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


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
    <section id="skills" className="py-20 bg-black text-green-400">
      <div className="section-container">
        <h2 className="section-title text-center text-green-300">Keahlian Saya</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-200">Frontend Development</h3>
            <div className="space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-green-100">{skill.name}</span>
                    <span className="text-sm text-green-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-green-800" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-green-200">Backend Development</h3>
            <div className="space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-green-100">{skill.name}</span>
                    <span className="text-sm text-green-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-green-800" />
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-green-200">Tools & Bahasa Pemrograman</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-3 text-green-300">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="bg-green-900/50 text-green-300 border-green-700">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-green-300">Bahasa Pemrograman</h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language} variant="outline" className="bg-green-900/50 text-green-300 border-green-700">
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

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/me.jpg";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "UI/UX Design",
    "Responsive Design",
    "Web Animation",
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-glow">
          About Me
        </h1>

        <Card className="p-8 mb-12 bg-card border-border hover-glow">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-accent box-glow"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 text-accent">
                Forest Explorer & Developer
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I'm a passionate web developer who finds inspiration in nature's beauty.
                I combine my love for coding with creativity to build magical digital experiences.
                 I'm coders. I'm From Toyamas and like naspad and sate padang my name is Wildan Nur Awaludin Sekian Matur Nuwun
              </p>
            </div>
          </div>
        </Card>

        <section className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-accent">My Journey</h3>
          <Card className="p-6 bg-card border-border">
            <p className="text-foreground/90 leading-relaxed mb-4">
              My journey into web development started with a simple curiosity about how websites work.
              Over the years, I've grown to appreciate the artistry behind creating seamless user experiences.
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              I believe in the power of clean code, beautiful design, and the importance of accessibility.
              Every project I work on is an opportunity to learn something new and push the boundaries
              of what's possible on the web.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Nature, particularly forests, has always been my greatest source of inspiration. The way
              light filters through trees, the organic patterns in leaves, and the peaceful atmosphere
              of the woods all influence my design philosophy.
            </p>
          </Card>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-6 text-accent">Skills & Technologies</h3>
          <Card className="p-6 bg-card border-border">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-base px-4 py-2 bg-primary/20 text-accent border border-accent/30 hover:bg-primary/30 hover-glow cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const imageMap: { [key: string]: string } = {
  "project1.jpg": project1,
  "project2.jpg": project2,
  "project3.jpg": project3,
};

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold mb-4 text-center text-glow">
          Portfolio
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          A collection of my recent projects and creative work
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-border overflow-hidden hover-glow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={imageMap[project.image]}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardHeader>
                <CardTitle className="text-accent">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-primary/20 text-accent border border-accent/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

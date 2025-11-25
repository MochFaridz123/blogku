import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import blogData from "@/data/blog.json";
import hobby1 from "@/assets/hobby1.jpg";
import hobby2 from "@/assets/hobby2.jpg";
import project1 from "@/assets/project1.jpg";

const imageMap: { [key: string]: string } = {
  "hobby1.jpg": hobby1,
  "hobby2.jpg": hobby2,
  "project1.jpg": project1,
};

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto py-12">
        <h1 className="text-5xl font-bold mb-4 text-center text-glow">
          Blog
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Stories, insights, and adventures from the forest
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {blogData.map((post) => (
            <Card
              key={post.id}
              className="bg-card border-border overflow-hidden hover-glow group cursor-pointer"
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative overflow-hidden">
                  <img
                    src={imageMap[post.image]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="md:w-2/3">
                  <CardHeader>
                    <CardTitle className="text-2xl text-accent group-hover:text-glow">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        {post.author}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

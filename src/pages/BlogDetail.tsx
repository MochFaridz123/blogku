import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";
import blogData from "@/data/blog.json";
import hobby1 from "@/assets/hobby1.jpg";
import hobby2 from "@/assets/hobby2.jpg";
import project1 from "@/assets/project1.jpg";
import ReactMarkdown from "react-markdown";

const imageMap: { [key: string]: string } = {
  "hobby1.jpg": hobby1,
  "hobby2.jpg": hobby2,
  "project1.jpg": project1,
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4">
      <article className="container mx-auto max-w-4xl py-12">
        <Button
          variant="outline"
          onClick={() => navigate("/blog")}
          className="mb-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Button>

        <img
          src={imageMap[post.image]}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8 box-glow"
        />

        <h1 className="text-5xl font-bold mb-4 text-glow">{post.title}</h1>

        <div className="flex flex-wrap gap-4 text-muted-foreground mb-8 pb-8 border-b border-border">
          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {new Date(post.date).toLocaleDateString("id-ID", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
          <div className="flex items-center gap-2">
            <User size={18} />
            {post.author}
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-4 text-accent">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-3xl font-bold mb-3 mt-8 text-accent">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-2xl font-bold mb-2 mt-6 text-accent">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-foreground/90 leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside mb-4 space-y-2 text-foreground/90">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground/90">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="ml-4">{children}</li>,
              strong: ({ children }) => (
                <strong className="text-accent font-semibold">{children}</strong>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Thank you for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
    { icon: Mail, label: "Email", url: "mailto:contact@example.com" },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="container mx-auto max-w-4xl py-12">
        <h1 className="text-5xl font-bold mb-4 text-center text-glow">
          Get In Touch
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Let's connect and create something magical together
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border hover-glow">
            <h2 className="text-2xl font-bold mb-6 text-accent">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-accent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 hover-glow"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 bg-card border-border hover-glow">
              <h2 className="text-2xl font-bold mb-6 text-accent">Connect With Me</h2>
              <p className="text-foreground/90 mb-6">
                Feel free to reach out through any of these platforms. I'm always excited to
                discuss new projects, ideas, or opportunities to collaborate.
              </p>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-background border border-border hover:border-accent transition-colors hover-glow"
                  >
                    <link.icon size={24} className="text-accent" />
                    <span className="text-foreground">{link.label}</span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-card border-border hover-glow">
              <h2 className="text-2xl font-bold mb-4 text-accent">Location</h2>
              <p className="text-foreground/90">
                📍 Somewhere in the enchanted forest
                <br />
                🌍 Available for remote work worldwide
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

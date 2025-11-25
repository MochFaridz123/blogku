import BouncingMarquee from "@/components/animations/BouncingMarquee";
import CircularText from "@/components/animations/CircularText";
import MeteorRain from "@/components/animations/MeteorRain";
import FallingLeaves from "@/components/animations/FallingLeaves";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroForest from "@/assets/hero-forest.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <MeteorRain />
      <CircularText />
      <FallingLeaves />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroForest})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in text-glow">
            Welcome to the
            <span className="text-accent"> Enchanted Forest</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 animate-fade-in">
            Discover my journey through code, creativity, and nature
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button
              onClick={() => navigate("/portfolio")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-glow"
            >
              View Projects
            </Button>
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover-glow"
            >
              About Me
            </Button>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <BouncingMarquee />

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-glow">
            Explore the Forest
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              onClick={() => navigate("/portfolio")}
              className="bg-card border border-border rounded-lg p-6 hover-glow cursor-pointer transition-all"
            >
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Portfolio</h3>
              <p className="text-muted-foreground">
                Discover my latest projects and creative work
              </p>
            </div>

            <div
              onClick={() => navigate("/blog")}
              className="bg-card border border-border rounded-lg p-6 hover-glow cursor-pointer transition-all"
            >
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Blog</h3>
              <p className="text-muted-foreground">
                Read about my adventures and insights
              </p>
            </div>

            <div
              onClick={() => navigate("/gallery")}
              className="bg-card border border-border rounded-lg p-6 hover-glow cursor-pointer transition-all"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Gallery</h3>
              <p className="text-muted-foreground">
                Explore my hobbies and passions through photos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import UserProfile from "@/components/UserProfile";
import WellnessStats from "@/components/WellnessStats";
import HealthMetrics from "@/components/HealthMetrics";
import MusicHub from "@/components/MusicHub";
import GamesSection from "@/components/GamesSection";
import RewardsSection from "@/components/RewardsSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-wellness-primary">WellnessHub</h1>
            <div className="text-sm text-muted-foreground">
              Welcome back, Sarah! 🌟
            </div>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - User Profile & Calendar */}
          <div className="lg:col-span-3">
            <UserProfile />
          </div>

          {/* Middle Panel - Wellness Stats */}
          <div className="lg:col-span-4">
            <WellnessStats />
          </div>

          {/* Right Panel - Health Metrics */}
          <div className="lg:col-span-5">
            <HealthMetrics />
          </div>
        </div>

        {/* Bottom Sections */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Music Hub */}
          <div>
            <MusicHub />
          </div>

          {/* News Section */}
          <div>
            <NewsSection />
          </div>
        </div>

        {/* Games and Rewards */}
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Games Section */}
          <div>
            <GamesSection />
          </div>

          {/* Rewards Section */}
          <div>
            <RewardsSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

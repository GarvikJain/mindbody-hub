import { Coins, Gift, Target, Crown, Star, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const RewardsSection = () => {
  const currentCoins = 2847;
  const monthlyTarget = 3000;
  const progress = (currentCoins / monthlyTarget) * 100;

  const leaderboard = [
    { rank: 1, name: "Alex Chen", points: 3240, avatar: "AC", change: "+12" },
    { rank: 2, name: "Sarah Johnson", points: 2847, avatar: "SJ", change: "+8", isUser: true },
    { rank: 3, name: "Mike Rodriguez", points: 2756, avatar: "MR", change: "+15" },
    { rank: 4, name: "Emily Davis", points: 2698, avatar: "ED", change: "+5" },
    { rank: 5, name: "James Wilson", points: 2542, avatar: "JW", change: "-3" }
  ];

  const rewards = [
    { name: "Coffee Voucher", coins: 500, type: "Food & Drink", available: 8, image: "☕" },
    { name: "Gym Membership (1 Month)", coins: 2000, type: "Fitness", available: 3, image: "🏋️" },
    { name: "Wellness Day Off", coins: 1500, type: "Time Off", available: 5, image: "🏖️" },
    { name: "Massage Session", coins: 1200, type: "Wellness", available: 4, image: "💆" },
    { name: "Healthy Lunch", coins: 300, type: "Food & Drink", available: 10, image: "🥗" },
    { name: "Yoga Class Pass", coins: 800, type: "Fitness", available: 6, image: "🧘" }
  ];

  const achievements = [
    { name: "First Steps", description: "Completed your first 10,000 steps", icon: "👟", earned: true },
    { name: "Hydration Hero", description: "Drank 8 glasses of water for 7 days", icon: "💧", earned: true },
    { name: "Streak Master", description: "Maintained a 30-day wellness streak", icon: "🔥", earned: false },
    { name: "Game Champion", description: "Won 50 games", icon: "🏆", earned: false }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-4 h-4 text-yellow-500" />;
      case 2: return <Award className="w-4 h-4 text-gray-400" />;
      case 3: return <Award className="w-4 h-4 text-amber-600" />;
      default: return <span className="text-sm font-bold">{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Coins & Target */}
      <Card className="wellness-card overflow-hidden">
        <div className="energy-gradient p-6 text-white">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Coins className="w-6 h-6" />
              Your Coins
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">{currentCoins.toLocaleString()}</div>
                <p className="text-white/80 text-sm">Keep earning!</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold">Monthly Target</div>
                <div className="text-2xl font-bold">{monthlyTarget.toLocaleString()}</div>
              </div>
            </div>
            <div className="mt-4">
              <Progress value={progress} className="h-3 bg-white/20" />
              <p className="text-white/80 text-sm mt-2">
                {monthlyTarget - currentCoins} coins to reach monthly target
              </p>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Leaderboard */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-wellness-primary" />
            Leaderboard
          </CardTitle>
          <p className="text-sm text-muted-foreground">See how you rank among your colleagues</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div
                key={user.rank}
                className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                  user.isUser ? 'bg-wellness-primary/5 border border-wellness-primary/20' : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-wellness-primary/10 flex items-center justify-center font-semibold text-wellness-primary">
                    {user.avatar}
                  </div>
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      {user.name}
                      {user.isUser && <Badge variant="outline" className="text-xs">You</Badge>}
                    </div>
                    <div className="text-sm text-muted-foreground">{user.points.toLocaleString()} points</div>
                  </div>
                </div>
                <div className={`text-sm font-medium ${
                  user.change.startsWith('+') ? 'text-wellness-success' : 'text-destructive'
                }`}>
                  {user.change}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Rewards */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Gift className="w-5 h-5 text-wellness-primary" />
            Available Rewards
          </CardTitle>
          <p className="text-sm text-muted-foreground">Redeem your coins for amazing rewards</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rewards.map((reward, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow group">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-4xl mb-2">{reward.image}</div>
                      <h3 className="font-semibold text-sm">{reward.name}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {reward.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Cost:</span>
                        <span className="font-bold text-wellness-accent flex items-center gap-1">
                          <Coins className="w-4 h-4" />
                          {reward.coins}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Available:</span>
                        <span className="font-medium">{reward.available} left</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                      disabled={currentCoins < reward.coins}
                    >
                      {currentCoins >= reward.coins ? 'Redeem' : 'Not enough coins'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Star className="w-5 h-5 text-wellness-primary" />
            Achievements
          </CardTitle>
          <p className="text-sm text-muted-foreground">Track your wellness milestones</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
                  achievement.earned 
                    ? 'bg-wellness-success/5 border-wellness-success/20' 
                    : 'bg-muted/20 border-muted'
                }`}
              >
                <div className={`text-3xl ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold ${achievement.earned ? '' : 'text-muted-foreground'}`}>
                    {achievement.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                {achievement.earned && (
                  <Badge className="bg-wellness-success text-white">
                    Earned
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RewardsSection;
import { Heart, Target, Zap, TrendingUp, Award, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const WellnessStats = () => {
  const wellnessLevel = 78;
  const totalPoints = 2450;
  const currentStreak = 7;
  const monthlyStreak = 23;
  const steps = 8247;
  const stepGoal = 10000;
  const calories = 1847;
  const calorieGoal = 2000;

  const motivationalQuotes = [
    "Your body can do it. It's your mind you need to convince.",
    "Take care of your body. It's the only place you have to live.",
    "Health is not about the weight you lose, but about the life you gain.",
    "Every step you take is a step towards a healthier you.",
    "Wellness is a connection of paths: knowledge and action."
  ];

  const todaysQuote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  return (
    <div className="space-y-6">
      {/* Wellness Level */}
      <Card className="wellness-card overflow-hidden">
        <div className="wellness-gradient p-6 text-white">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-2xl font-bold flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Wellness Level
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-4xl font-bold">{wellnessLevel}%</div>
                <p className="text-white/80 text-sm">Great progress!</p>
              </div>
              <div className="relative w-20 h-20">
                <svg className="w-20 h-20 progress-ring" viewBox="0 0 36 36">
                  <path
                    d="m18,2.0845
                      a 15.9155,15.9155 0 0,1 0,31.831
                      a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                  <path
                    d="m18,2.0845
                      a 15.9155,15.9155 0 0,1 0,31.831
                      a 15.9155,15.9155 0 0,1 0,-31.831"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray={`${wellnessLevel}, 100`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Daily Quote */}
      <Card className="wellness-card calm-gradient text-white">
        <CardContent className="p-6">
          <div className="text-center">
            <Zap className="w-8 h-8 mx-auto mb-3 text-white" />
            <p className="text-lg font-medium leading-relaxed italic">
              "{todaysQuote}"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Points and Streaks */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="stat-card">
          <Award className="w-8 h-8 mx-auto mb-2 text-wellness-accent" />
          <div className="text-2xl font-bold text-wellness-primary">{totalPoints.toLocaleString()}</div>
          <p className="text-sm text-muted-foreground">Total Points</p>
        </Card>
        
        <Card className="stat-card">
          <Target className="w-8 h-8 mx-auto mb-2 text-wellness-success" />
          <div className="text-2xl font-bold text-wellness-primary">{currentStreak}</div>
          <p className="text-sm text-muted-foreground">Current Streak</p>
        </Card>
      </div>

      <Card className="stat-card">
        <Calendar className="w-8 h-8 mx-auto mb-2 text-wellness-primary" />
        <div className="text-2xl font-bold text-wellness-primary">{monthlyStreak} days</div>
        <p className="text-sm text-muted-foreground">This Month's Streak</p>
      </Card>

      {/* Activity Tracking */}
      <div className="space-y-4">
        {/* Steps */}
        <Card className="wellness-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-wellness-primary" />
              Steps Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-wellness-primary">
                  {steps.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {stepGoal.toLocaleString()}
                </span>
              </div>
              <Progress 
                value={(steps / stepGoal) * 100} 
                className="h-3"
              />
              <p className="text-sm text-muted-foreground">
                {stepGoal - steps > 0 ? `${(stepGoal - steps).toLocaleString()} steps to go!` : 'Goal achieved! 🎉'}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Calories */}
        <Card className="wellness-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Zap className="w-5 h-5 text-wellness-warning" />
              Calories Burned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-wellness-warning">
                  {calories.toLocaleString()}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {calorieGoal.toLocaleString()}
                </span>
              </div>
              <Progress 
                value={(calories / calorieGoal) * 100} 
                className="h-3"
              />
              <p className="text-sm text-muted-foreground">
                {calorieGoal - calories > 0 ? `${calorieGoal - calories} calories to go!` : 'Daily goal achieved! 🔥'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WellnessStats;
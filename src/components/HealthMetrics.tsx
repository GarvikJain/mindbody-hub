import { Droplets, Moon, Activity, Apple } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const HealthMetrics = () => {
  const waterIntake = 6; // glasses
  const waterGoal = 8;
  const napTime = 25; // minutes
  const recommendedNap = 30;

  // Sample health data for charts
  const healthDistribution = [
    { name: 'Active', value: 35, color: '#10B981' },
    { name: 'Exercise', value: 20, color: '#3B82F6' },
    { name: 'Rest', value: 25, color: '#8B5CF6' },
    { name: 'Sleep', value: 20, color: '#F59E0B' }
  ];

  const weeklyActivity = [
    { day: 'Mon', steps: 8200, calories: 1800 },
    { day: 'Tue', steps: 9500, calories: 2100 },
    { day: 'Wed', steps: 7800, calories: 1650 },
    { day: 'Thu', steps: 10200, calories: 2300 },
    { day: 'Fri', steps: 8900, calories: 1950 },
    { day: 'Sat', steps: 12000, calories: 2500 },
    { day: 'Sun', steps: 8247, calories: 1847 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Water Intake */}
        <Card className="wellness-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Droplets className="w-5 h-5 text-wellness-secondary" />
              Water Intake
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-wellness-secondary">
                  {waterIntake}
                </span>
                <span className="text-sm text-muted-foreground">
                  / {waterGoal} glasses
                </span>
              </div>
              <Progress 
                value={(waterIntake / waterGoal) * 100} 
                className="h-3"
              />
              <div className="flex gap-1">
                {Array.from({ length: waterGoal }, (_, i) => (
                  <div
                    key={i}
                    className={`w-6 h-8 rounded-full ${
                      i < waterIntake 
                        ? 'bg-wellness-secondary' 
                        : 'bg-muted border-2 border-wellness-secondary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nap Time */}
        <Card className="wellness-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Moon className="w-5 h-5 text-wellness-accent" />
              Power Nap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-wellness-accent">
                  {napTime}m
                </span>
                <span className="text-sm text-muted-foreground">
                  / {recommendedNap}m
                </span>
              </div>
              <Progress 
                value={(napTime / recommendedNap) * 100} 
                className="h-3"
              />
              <p className="text-sm text-muted-foreground">
                {recommendedNap - napTime > 0 
                  ? `${recommendedNap - napTime} more minutes for optimal rest` 
                  : 'Perfect power nap! 😴'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Google Fit Integration Placeholder */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Activity className="w-5 h-5 text-wellness-primary" />
            Health Sync
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 space-y-3">
            <div className="w-16 h-16 mx-auto bg-wellness-primary/10 rounded-full flex items-center justify-center">
              <Activity className="w-8 h-8 text-wellness-primary" />
            </div>
            <h3 className="font-semibold">Connect Google Fit</h3>
            <p className="text-sm text-muted-foreground">
              Sync your health data for real-time updates and better insights
            </p>
            <button className="px-4 py-2 bg-wellness-primary text-white rounded-lg hover:bg-wellness-primary/90 transition-colors">
              Connect Now
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Health Distribution Chart */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Daily Activity Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={healthDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {healthDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {healthDistribution.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}: {item.value}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Activity Chart */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Activity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyActivity}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="steps" fill="hsl(var(--wellness-primary))" name="Steps" />
                <Bar dataKey="calories" fill="hsl(var(--wellness-accent))" name="Calories" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HealthMetrics;
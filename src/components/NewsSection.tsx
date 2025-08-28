import { Newspaper, Clock, ExternalLink, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NewsSection = () => {
  // Mock news data - in real app this would come from Google News API
  const newsItems = [
    {
      title: "New Wellness Program Launches at Fortune 500 Companies",
      source: "Business Health Today",
      time: "2 hours ago",
      category: "Wellness",
      excerpt: "Major corporations are investing in employee wellness programs that show remarkable ROI...",
      readTime: "3 min read"
    },
    {
      title: "Study: Remote Work Flexibility Improves Mental Health",
      source: "Healthcare Journal",
      time: "4 hours ago",
      category: "Health",
      excerpt: "Research shows that flexible work arrangements lead to better work-life balance and reduced stress...",
      readTime: "5 min read"
    },
    {
      title: "5 Simple Desk Exercises to Boost Energy During Work",
      source: "Fitness Weekly",
      time: "6 hours ago",
      category: "Fitness",
      excerpt: "Combat afternoon fatigue with these quick exercises you can do right at your desk...",
      readTime: "2 min read"
    },
    {
      title: "Mindfulness Apps Show 40% Reduction in Workplace Stress",
      source: "Tech Health News",
      time: "8 hours ago",
      category: "Mental Health",
      excerpt: "Corporate wellness programs incorporating mindfulness technology are seeing significant results...",
      readTime: "4 min read"
    },
    {
      title: "Healthy Office Snacks That Actually Taste Great",
      source: "Nutrition Today",
      time: "12 hours ago",
      category: "Nutrition",
      excerpt: "Discover delicious alternatives to vending machine snacks that will fuel your workday...",
      readTime: "3 min read"
    },
    {
      title: "Walking Meetings: The New Trend Boosting Creativity",
      source: "Workplace Innovation",
      time: "1 day ago",
      category: "Productivity",
      excerpt: "Companies are ditching conference rooms for walking meetings, and the results are impressive...",
      readTime: "6 min read"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Wellness": "bg-wellness-primary text-white",
      "Health": "bg-wellness-success text-white",
      "Fitness": "bg-wellness-accent text-white",
      "Mental Health": "bg-wellness-secondary text-white",
      "Nutrition": "bg-wellness-warning text-white",
      "Productivity": "bg-purple-500 text-white"
    };
    return colors[category as keyof typeof colors] || "bg-muted text-foreground";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Newspaper className="w-6 h-6 text-wellness-primary" />
            Daily Wellness News
          </CardTitle>
          <p className="text-muted-foreground">Stay updated with the latest in workplace wellness and health</p>
        </CardHeader>
      </Card>

      {/* Trending News */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Zap className="w-5 h-5 text-wellness-accent" />
            Trending Now
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.slice(0, 2).map((article, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow cursor-pointer group">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg group-hover:text-wellness-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge className={getCategoryColor(article.category)} variant="secondary">
                          {article.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{article.source}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.time}
                        </span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All News */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Latest Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {newsItems.slice(2).map((article, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medium text-sm group-hover:text-wellness-primary transition-colors">
                      {article.title}
                    </h4>
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge className={getCategoryColor(article.category)} variant="secondary">
                        {article.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{article.source}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.time}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Google News Integration Placeholder */}
      <Card className="wellness-card">
        <CardContent className="p-6 text-center space-y-3">
          <div className="w-16 h-16 mx-auto bg-wellness-primary/10 rounded-full flex items-center justify-center">
            <Newspaper className="w-8 h-8 text-wellness-primary" />
          </div>
          <h3 className="font-semibold">Connect Google News</h3>
          <p className="text-sm text-muted-foreground">
            Get real-time wellness and health news updates from Google News API
          </p>
          <button className="px-4 py-2 bg-wellness-primary text-white rounded-lg hover:bg-wellness-primary/90 transition-colors">
            Enable News Feed
          </button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsSection;
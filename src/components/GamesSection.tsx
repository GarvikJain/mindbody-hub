import { Gamepad2, Users, Trophy, Star, Timer, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const GamesSection = () => {
  const twoPlayerGames = [
    { name: "Tic Tac Toe", players: "2", difficulty: "Easy", time: "5 min", coins: 10 },
    { name: "Chess", players: "2", difficulty: "Hard", time: "30 min", coins: 50 },
    { name: "Checkers", players: "2", difficulty: "Medium", time: "20 min", coins: 30 },
    { name: "Connect 4", players: "2", difficulty: "Easy", time: "10 min", coins: 15 },
    { name: "Battleship", players: "2", difficulty: "Medium", time: "15 min", coins: 25 },
    { name: "Word Duel", players: "2", difficulty: "Medium", time: "12 min", coins: 20 },
    { name: "Number Puzzle", players: "2", difficulty: "Hard", time: "25 min", coins: 40 },
    { name: "Memory Match", players: "2", difficulty: "Easy", time: "8 min", coins: 12 },
    { name: "Trivia Challenge", players: "2", difficulty: "Medium", time: "18 min", coins: 35 },
    { name: "Dot & Boxes", players: "2", difficulty: "Easy", time: "15 min", coins: 18 },
    { name: "Reversi", players: "2", difficulty: "Hard", time: "30 min", coins: 45 },
    { name: "Scrabble", players: "2", difficulty: "Hard", time: "45 min", coins: 60 }
  ];

  const communityGames = [
    { name: "Ludo", players: "2-4", difficulty: "Easy", time: "20 min", coins: 25, online: 12 },
    { name: "Pool", players: "2-8", difficulty: "Medium", time: "15 min", coins: 30, online: 8 },
    { name: "Mafia", players: "6-12", difficulty: "Medium", time: "30 min", coins: 40, online: 15 },
    { name: "Among Us", players: "4-10", difficulty: "Easy", time: "25 min", coins: 35, online: 22 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-wellness-success";
      case "Medium": return "bg-wellness-accent";
      case "Hard": return "bg-wellness-warning";
      default: return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Gamepad2 className="w-6 h-6 text-wellness-primary" />
            Games Zone
          </CardTitle>
          <p className="text-muted-foreground">Take a break and boost your wellness points!</p>
        </CardHeader>
      </Card>

      {/* Two Player Games */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-wellness-primary" />
            Two Player Games
          </CardTitle>
          <p className="text-sm text-muted-foreground">Challenge your colleagues to quick games</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {twoPlayerGames.map((game, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow group">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-sm">{game.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {game.players}P
                      </Badge>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge 
                          className={`${getDifficultyColor(game.difficulty)} text-white text-xs`}
                        >
                          {game.difficulty}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Timer className="w-3 h-3" />
                          Time:
                        </span>
                        <span>{game.time}</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Coins:
                        </span>
                        <span className="font-medium text-wellness-accent">{game.coins}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Play Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Community Games */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Trophy className="w-5 h-5 text-wellness-primary" />
            Community Games
          </CardTitle>
          <p className="text-sm text-muted-foreground">Join multiplayer games with your team</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityGames.map((game, index) => (
              <Card key={index} className="border hover:shadow-md transition-shadow group">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold">{game.name}</h3>
                      <div className="flex items-center gap-1 text-xs text-wellness-success">
                        <div className="w-2 h-2 bg-wellness-success rounded-full animate-pulse"></div>
                        {game.online} online
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-muted-foreground">Players:</span>
                        <div className="font-medium">{game.players}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Time:</span>
                        <div className="font-medium">{game.time}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Difficulty:</span>
                        <Badge 
                          className={`${getDifficultyColor(game.difficulty)} text-white text-xs`}
                        >
                          {game.difficulty}
                        </Badge>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Coins:</span>
                        <div className="font-medium text-wellness-accent">{game.coins}</div>
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Join Game
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="stat-card">
          <Gamepad2 className="w-8 h-8 mx-auto mb-2 text-wellness-primary" />
          <div className="text-2xl font-bold text-wellness-primary">47</div>
          <p className="text-sm text-muted-foreground">Games Played</p>
        </Card>
        
        <Card className="stat-card">
          <Trophy className="w-8 h-8 mx-auto mb-2 text-wellness-accent" />
          <div className="text-2xl font-bold text-wellness-primary">23</div>
          <p className="text-sm text-muted-foreground">Games Won</p>
        </Card>
        
        <Card className="stat-card">
          <Star className="w-8 h-8 mx-auto mb-2 text-wellness-warning" />
          <div className="text-2xl font-bold text-wellness-primary">385</div>
          <p className="text-sm text-muted-foreground">Coins Earned</p>
        </Card>
      </div>
    </div>
  );
};

export default GamesSection;
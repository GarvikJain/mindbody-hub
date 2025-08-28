import { Music, Play, Pause, SkipForward, Volume2, Heart, Brain, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const MusicHub = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);

  const musicCategories = [
    {
      id: 'relax',
      title: 'Relax',
      icon: Heart,
      description: 'Calm your mind and reduce stress',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20',
      playlists: [
        { name: 'Ocean Waves', duration: '45 min', artist: 'Nature Sounds' },
        { name: 'Peaceful Piano', duration: '1h 20m', artist: 'Classical Mix' },
        { name: 'Rain Sounds', duration: '2h', artist: 'Ambient Collection' }
      ]
    },
    {
      id: 'focus',
      title: 'Deep Focus',
      icon: Brain,
      description: 'Enhance concentration and productivity',
      color: 'bg-gradient-to-br from-green-100 to-emerald-200 dark:from-green-900/20 dark:to-emerald-800/20',
      playlists: [
        { name: 'Lo-fi Beats', duration: '3h', artist: 'Study Vibes' },
        { name: 'White Noise', duration: '1h', artist: 'Focus Sounds' },
        { name: 'Instrumental Focus', duration: '2h 15m', artist: 'Productivity Mix' }
      ]
    },
    {
      id: 'stress-relief',
      title: 'Stress Relief',
      icon: Zap,
      description: 'Release tension and find balance',
      color: 'bg-gradient-to-br from-purple-100 to-violet-200 dark:from-purple-900/20 dark:to-violet-800/20',
      playlists: [
        { name: 'Meditation Bells', duration: '30 min', artist: 'Zen Collection' },
        { name: 'Breathing Exercises', duration: '15 min', artist: 'Wellness Audio' },
        { name: 'Nature Harmony', duration: '1h 30m', artist: 'Earth Sounds' }
      ]
    }
  ];

  const handlePlayPause = (playlistId: string) => {
    if (currentlyPlaying === playlistId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(playlistId);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Music className="w-6 h-6 text-wellness-primary" />
            Music Hub
          </CardTitle>
          <p className="text-muted-foreground">Enhance your wellness with curated soundscapes</p>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {musicCategories.map((category) => {
          const IconComponent = category.icon;
          
          return (
            <Card key={category.id} className="wellness-card overflow-hidden">
              <div className={`${category.color} p-6`}>
                <CardHeader className="p-0 pb-4">
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    <IconComponent className="w-6 h-6" />
                    {category.title}
                  </CardTitle>
                  <p className="text-sm opacity-80">{category.description}</p>
                </CardHeader>
              </div>
              
              <CardContent className="p-4 space-y-3">
                {category.playlists.map((playlist, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{playlist.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {playlist.artist} • {playlist.duration}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handlePlayPause(`${category.id}-${index}`)}
                    >
                      {currentlyPlaying === `${category.id}-${index}` ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Now Playing */}
      {currentlyPlaying && (
        <Card className="wellness-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Now Playing</h3>
                <p className="text-sm text-muted-foreground">Ocean Waves • Nature Sounds</p>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="ghost">
                  <Play className="w-4 h-4" />
                </Button>
                <Button size="sm" variant="ghost">
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <Slider
                defaultValue={[33]}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>12:34</span>
                <span>45:00</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-muted-foreground" />
                <Slider
                  defaultValue={[65]}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Spotify Integration Placeholder */}
      <Card className="wellness-card">
        <CardContent className="p-6 text-center space-y-3">
          <div className="w-16 h-16 mx-auto bg-wellness-primary/10 rounded-full flex items-center justify-center">
            <Music className="w-8 h-8 text-wellness-primary" />
          </div>
          <h3 className="font-semibold">Connect Spotify</h3>
          <p className="text-sm text-muted-foreground">
            Link your Spotify account for personalized wellness playlists
          </p>
          <Button className="wellness-gradient text-white hover:opacity-90">
            Connect Spotify
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MusicHub;
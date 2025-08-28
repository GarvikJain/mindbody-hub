import { Calendar, Clock, MapPin, Badge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import profileImage from "@/assets/profile-avatar.jpg";

const UserProfile = () => {
  const user = {
    name: "Sarah Johnson",
    id: "EMP-2024-1234",
    position: "Senior Marketing Manager",
    department: "Marketing & Communications",
    email: "sarah.johnson@company.com"
  };

  const upcomingMeetings = [
    { time: "9:00 AM", title: "Team Standup", location: "Conference Room A" },
    { time: "11:30 AM", title: "Client Presentation", location: "Zoom" },
    { time: "2:00 PM", title: "Wellness Check-in", location: "Office 201" },
    { time: "4:30 PM", title: "Project Review", location: "Conference Room B" }
  ];

  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="wellness-card">
        <CardHeader className="text-center pb-4">
          <div className="relative mx-auto">
            <Avatar className="w-24 h-24 mx-auto border-4 border-wellness-primary/20">
              <AvatarImage src={profileImage} alt={user.name} />
              <AvatarFallback className="text-xl font-semibold bg-wellness-primary/10 text-wellness-primary">
                {user.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-wellness-success rounded-full border-2 border-background animate-pulse-wellness"></div>
          </div>
          <CardTitle className="text-xl font-bold text-foreground">{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.position}</p>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Badge className="w-4 h-4 text-wellness-primary" />
              <span className="text-muted-foreground">ID:</span>
              <span className="font-medium">{user.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-wellness-primary" />
              <span className="text-muted-foreground">Dept:</span>
              <span className="font-medium">{user.department}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Schedule */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Clock className="w-5 h-5 text-wellness-primary" />
            Today's Schedule
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs font-medium">Time</TableHead>
                <TableHead className="text-xs font-medium">Meeting</TableHead>
                <TableHead className="text-xs font-medium">Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingMeetings.map((meeting, index) => (
                <TableRow key={index} className="hover:bg-muted/50 transition-colors">
                  <TableCell className="font-medium text-sm text-wellness-primary">
                    {meeting.time}
                  </TableCell>
                  <TableCell className="text-sm">{meeting.title}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {meeting.location}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Calendar */}
      <Card className="wellness-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-wellness-primary" />
            Quick Calendar
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <div key={day} className="p-2 font-semibold text-muted-foreground">
                {day}
              </div>
            ))}
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 6;
              const isToday = day === 15;
              const hasMeeting = [10, 15, 22, 28].includes(day);
              
              return (
                <div
                  key={i}
                  className={`
                    p-2 rounded-lg cursor-pointer transition-all duration-200
                    ${day <= 0 || day > 30 ? 'text-muted-foreground/30' : 'hover:bg-muted'}
                    ${isToday ? 'bg-wellness-primary text-white font-bold' : ''}
                    ${hasMeeting && !isToday ? 'bg-wellness-primary/10 text-wellness-primary font-medium' : ''}
                  `}
                >
                  {day > 0 && day <= 30 ? day : ''}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;
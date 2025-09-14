import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Calendar,
  MessageSquare,
  TrendingUp,
  Bell,
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Plus,
  ExternalLink,
} from "lucide-react"

export default function AlumniDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/professional-headshot.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-xl font-bold">Welcome back, John!</h1>
                <p className="text-sm text-muted-foreground">Class of 2018 • Computer Science</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search Alumni
              </Button>
              <Button variant="outline" size="sm" className="relative bg-transparent">
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full text-xs"></span>
              </Button>
              <Button variant="outline" size="sm">
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="network">My Network</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Network Size</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">247</div>
                  <p className="text-xs text-muted-foreground">+12 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Events Attended</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">+2 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Messages</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">5 unread</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Stay updated with your network</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/professional-woman.png" />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Sarah Johnson</span> shared a new job opportunity at Tech Corp
                        </p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-secondary-foreground" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Alumni Reunion 2024</span> event has been updated
                        </p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/professional-man.png" />
                        <AvatarFallback>MC</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Mike Chen</span> joined your network
                        </p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Suggested Connections */}
                <Card>
                  <CardHeader>
                    <CardTitle>People You May Know</CardTitle>
                    <CardDescription>Expand your alumni network</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                        <Avatar>
                          <AvatarImage src="/professional-woman.png" />
                          <AvatarFallback>EM</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-sm">Emily Rodriguez</p>
                          <p className="text-xs text-muted-foreground">Class of 2019 • Marketing</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="flex items-center space-x-3 p-3 border border-border rounded-lg">
                        <Avatar>
                          <AvatarImage src="/professional-man.png" />
                          <AvatarFallback>DW</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium text-sm">David Wilson</p>
                          <p className="text-xs text-muted-foreground">Class of 2017 • Engineering</p>
                        </div>
                        <Button size="sm" variant="outline">
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                    <CardDescription>Don't miss these opportunities</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Alumni Networking Night</h4>
                      <p className="text-sm text-muted-foreground">Dec 15, 2024 • 6:00 PM</p>
                      <Badge variant="secondary" className="mt-2">
                        RSVP Required
                      </Badge>
                    </div>

                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium">Career Workshop</h4>
                      <p className="text-sm text-muted-foreground">Dec 20, 2024 • 2:00 PM</p>
                      <Badge variant="outline" className="mt-2">
                        Virtual
                      </Badge>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent">
                      View All Events
                    </Button>
                  </CardContent>
                </Card>

                {/* Profile Completion */}
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Completion</CardTitle>
                    <CardDescription>Complete your profile to get better matches</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span>Basic Info</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        <span>Work Experience</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                        <span>Skills & Interests</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                        <span>Professional Photo</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full bg-transparent">
                      Complete Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="network" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">My Network</h2>
                <p className="text-muted-foreground">247 connections across your alumni network</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Find Alumni
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Senior Product Manager",
                  company: "Tech Corp",
                  year: "2019",
                  location: "San Francisco, CA",
                },
                {
                  name: "Mike Chen",
                  role: "Software Engineer",
                  company: "StartupXYZ",
                  year: "2018",
                  location: "New York, NY",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Marketing Director",
                  company: "Global Inc",
                  year: "2017",
                  location: "Austin, TX",
                },
                {
                  name: "David Wilson",
                  role: "Data Scientist",
                  company: "AI Solutions",
                  year: "2020",
                  location: "Seattle, WA",
                },
                {
                  name: "Lisa Park",
                  role: "UX Designer",
                  company: "Design Studio",
                  year: "2019",
                  location: "Los Angeles, CA",
                },
                {
                  name: "Alex Thompson",
                  role: "Consultant",
                  company: "McKinsey & Co",
                  year: "2016",
                  location: "Chicago, IL",
                },
              ].map((person, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={`/professional-headshot.png?height=48&width=48&query=professional headshot ${index}`}
                        />
                        <AvatarFallback>
                          {person.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-medium">{person.name}</h3>
                        <p className="text-sm text-muted-foreground">{person.role}</p>
                        <p className="text-sm text-muted-foreground">{person.company}</p>
                        <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <GraduationCap className="h-3 w-3" />
                            <span>Class of {person.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{person.location}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Alumni Events</h2>
                <p className="text-muted-foreground">Discover networking and professional development opportunities</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Alumni Networking Night",
                  date: "December 15, 2024",
                  time: "6:00 PM - 9:00 PM",
                  location: "Downtown Conference Center",
                  attendees: 45,
                  type: "In-Person",
                  description: "Join fellow alumni for an evening of networking and professional connections.",
                },
                {
                  title: "Career Development Workshop",
                  date: "December 20, 2024",
                  time: "2:00 PM - 4:00 PM",
                  location: "Virtual Event",
                  attendees: 120,
                  type: "Virtual",
                  description: "Learn about career advancement strategies and industry trends.",
                },
                {
                  title: "Annual Alumni Reunion",
                  date: "January 15, 2025",
                  time: "All Day",
                  location: "University Campus",
                  attendees: 300,
                  type: "In-Person",
                  description: "Celebrate with classmates and reconnect with your alma mater.",
                },
              ].map((event, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{event.title}</CardTitle>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                      <Badge variant={event.type === "Virtual" ? "outline" : "secondary"}>{event.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{event.attendees} attending</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          Learn More
                        </Button>
                        <Button size="sm">RSVP</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opportunities" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Career Opportunities</h2>
              <p className="text-muted-foreground">
                Job postings and mentorship opportunities from your alumni network
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Senior Software Engineer",
                  company: "Tech Corp",
                  location: "San Francisco, CA",
                  type: "Full-time",
                  salary: "$120k - $160k",
                  postedBy: "Sarah Johnson",
                  posted: "2 days ago",
                  description: "Join our growing engineering team to build scalable web applications.",
                },
                {
                  title: "Product Manager",
                  company: "StartupXYZ",
                  location: "Remote",
                  type: "Full-time",
                  salary: "$100k - $140k",
                  postedBy: "Mike Chen",
                  posted: "1 week ago",
                  description: "Lead product development for our innovative SaaS platform.",
                },
                {
                  title: "Marketing Specialist",
                  company: "Global Inc",
                  location: "Austin, TX",
                  type: "Full-time",
                  salary: "$60k - $80k",
                  postedBy: "Emily Rodriguez",
                  posted: "3 days ago",
                  description: "Drive marketing campaigns and brand awareness initiatives.",
                },
              ].map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium">{job.title}</h3>
                        <p className="text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Briefcase className="h-4 w-4 text-muted-foreground" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>Posted by {job.postedBy}</span>
                      </div>
                      <div className="text-muted-foreground">{job.posted}</div>
                    </div>

                    <div className="flex space-x-3">
                      <Button size="sm">
                        Apply Now
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Save Job
                      </Button>
                      <Button size="sm" variant="outline">
                        Contact {job.postedBy.split(" ")[0]}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">My Profile</h2>
              <p className="text-muted-foreground">Manage your professional information and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">First Name</label>
                        <p className="text-sm text-muted-foreground">John</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Last Name</label>
                        <p className="text-sm text-muted-foreground">Doe</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p className="text-sm text-muted-foreground">john.doe@email.com</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Graduation Year</label>
                        <p className="text-sm text-muted-foreground">2018</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Degree</label>
                        <p className="text-sm text-muted-foreground">Computer Science</p>
                      </div>
                    </div>
                    <Button variant="outline">Edit Information</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Professional Experience</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-secondary pl-4">
                      <h4 className="font-medium">Senior Software Engineer</h4>
                      <p className="text-sm text-muted-foreground">Tech Solutions Inc • 2020 - Present</p>
                      <p className="text-sm mt-2">
                        Leading development of scalable web applications and mentoring junior developers.
                      </p>
                    </div>
                    <div className="border-l-4 border-muted pl-4">
                      <h4 className="font-medium">Software Engineer</h4>
                      <p className="text-sm text-muted-foreground">StartupXYZ • 2018 - 2020</p>
                      <p className="text-sm mt-2">Developed full-stack applications using React and Node.js.</p>
                    </div>
                    <Button variant="outline">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Experience
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Photo</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <Avatar className="h-24 w-24 mx-auto">
                      <AvatarImage src="/professional-headshot.png" />
                      <AvatarFallback className="text-2xl">JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline" size="sm">
                      Upload Photo
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Python", "AWS", "Docker"].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 bg-transparent">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Skills
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Privacy Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Profile Visibility</span>
                      <Badge variant="outline">Public</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Contact Info</span>
                      <Badge variant="outline">Alumni Only</Badge>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage Privacy
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

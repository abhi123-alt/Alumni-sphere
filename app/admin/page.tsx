import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Calendar,
  TrendingUp,
  Settings,
  Search,
  Filter,
  Download,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  UserCheck,
  Mail,
  Building,
  AlertCircle,
} from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Building className="h-8 w-8 text-secondary" />
              <div>
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">University of Excellence</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?key=admin" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Alumni</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12,847</div>
                  <p className="text-xs text-muted-foreground">+234 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <UserCheck className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8,432</div>
                  <p className="text-xs text-muted-foreground">65.6% engagement rate</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Events This Month</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">+8 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Platform Growth</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+18.2%</div>
                  <p className="text-xs text-muted-foreground">Year over year</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Platform Activity</CardTitle>
                    <CardDescription>Latest actions across the alumni network</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                        <UserCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">15 new alumni</span> registered today
                        </p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Alumni Networking Night</span> reached capacity (150 attendees)
                        </p>
                        <p className="text-xs text-muted-foreground">4 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Mail className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Monthly newsletter</span> sent to 8,432 active alumni
                        </p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">
                          <span className="font-medium">Profile verification</span> required for 23 alumni accounts
                        </p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Graduation Year Distribution</CardTitle>
                    <CardDescription>Alumni breakdown by graduation year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { year: "2020-2024", count: 2847, percentage: 22 },
                        { year: "2015-2019", count: 3421, percentage: 27 },
                        { year: "2010-2014", count: 2934, percentage: 23 },
                        { year: "2005-2009", count: 2156, percentage: 17 },
                        { year: "2000-2004", count: 1489, percentage: 11 },
                      ].map((item) => (
                        <div key={item.year} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{item.year}</span>
                            <span>
                              {item.count} alumni ({item.percentage}%)
                            </span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Event
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Newsletter
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Download className="h-4 w-4 mr-2" />
                      Export Alumni Data
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Generate Report
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Platform Health</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Excellent
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Database Status</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Online
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Email Service</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Backup Status</span>
                      <Badge variant="outline">Last: 2 hours ago</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pending Tasks</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Profile Verifications</span>
                      <Badge variant="outline">23</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Event Approvals</span>
                      <Badge variant="outline">5</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Support Tickets</span>
                      <Badge variant="outline">12</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Alumni Management</h2>
                <p className="text-muted-foreground">Manage and verify alumni profiles</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Alumni
                </Button>
              </div>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search alumni by name, email, or graduation year..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Graduation Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Years</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="verified">Verified</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Sarah Johnson",
                      email: "sarah.j@email.com",
                      year: "2019",
                      degree: "Computer Science",
                      status: "verified",
                      lastActive: "2 days ago",
                    },
                    {
                      name: "Mike Chen",
                      email: "mike.chen@email.com",
                      year: "2018",
                      degree: "Engineering",
                      status: "verified",
                      lastActive: "1 week ago",
                    },
                    {
                      name: "Emily Rodriguez",
                      email: "emily.r@email.com",
                      year: "2020",
                      degree: "Marketing",
                      status: "pending",
                      lastActive: "3 days ago",
                    },
                    {
                      name: "David Wilson",
                      email: "david.w@email.com",
                      year: "2017",
                      degree: "Business",
                      status: "verified",
                      lastActive: "5 days ago",
                    },
                    {
                      name: "Lisa Park",
                      email: "lisa.park@email.com",
                      year: "2021",
                      degree: "Design",
                      status: "inactive",
                      lastActive: "2 months ago",
                    },
                  ].map((alumni, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/ceholder-svg-key-alumni.jpg?key=alumni${index}`} />
                          <AvatarFallback>
                            {alumni.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{alumni.name}</h4>
                          <p className="text-sm text-muted-foreground">{alumni.email}</p>
                        </div>
                        <div className="text-sm">
                          <p>Class of {alumni.year}</p>
                          <p className="text-muted-foreground">{alumni.degree}</p>
                        </div>
                        <Badge
                          variant={
                            alumni.status === "verified"
                              ? "secondary"
                              : alumni.status === "pending"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {alumni.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground">Last active: {alumni.lastActive}</div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Student Management</h2>
                <p className="text-muted-foreground">Manage current student accounts and engagement</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Student
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Active Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">3,247</div>
                  <p className="text-sm text-muted-foreground">+89 this semester</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Engagement Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">72%</div>
                  <p className="text-sm text-muted-foreground">+5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Graduating Soon</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">456</div>
                  <p className="text-sm text-muted-foreground">Class of 2025</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Student Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex Thompson",
                      action: "Joined Alumni Mentorship Program",
                      time: "2 hours ago",
                      year: "Senior",
                    },
                    { name: "Maria Garcia", action: "Attended Career Workshop", time: "1 day ago", year: "Junior" },
                    { name: "James Liu", action: "Connected with 3 alumni", time: "2 days ago", year: "Sophomore" },
                    { name: "Sophie Brown", action: "Updated profile information", time: "3 days ago", year: "Senior" },
                  ].map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/ceholder-svg-key-student.jpg?key=student${index}`} />
                          <AvatarFallback>
                            {student.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{student.name}</h4>
                          <p className="text-sm text-muted-foreground">{student.action}</p>
                        </div>
                        <Badge variant="outline">{student.year}</Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{student.time}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Event Management</h2>
                <p className="text-muted-foreground">Create and manage alumni events</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Event
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">12</div>
                  <p className="text-sm text-muted-foreground">Next 30 days</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Total Attendees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,847</div>
                  <p className="text-sm text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Average Attendance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">89%</div>
                  <p className="text-sm text-muted-foreground">RSVP to actual</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Event List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Alumni Networking Night",
                      date: "Dec 15, 2024",
                      attendees: 150,
                      status: "confirmed",
                      type: "In-Person",
                      location: "Downtown Conference Center",
                    },
                    {
                      title: "Career Development Workshop",
                      date: "Dec 20, 2024",
                      attendees: 89,
                      status: "confirmed",
                      type: "Virtual",
                      location: "Zoom",
                    },
                    {
                      title: "Annual Alumni Reunion",
                      date: "Jan 15, 2025",
                      attendees: 300,
                      status: "planning",
                      type: "In-Person",
                      location: "University Campus",
                    },
                    {
                      title: "Tech Industry Panel",
                      date: "Jan 22, 2025",
                      attendees: 45,
                      status: "draft",
                      type: "Hybrid",
                      location: "Innovation Center",
                    },
                  ].map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-secondary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-muted-foreground">
                            {event.date} • {event.location}
                          </p>
                        </div>
                        <Badge variant={event.type === "Virtual" ? "outline" : "secondary"}>{event.type}</Badge>
                        <Badge
                          variant={
                            event.status === "confirmed"
                              ? "secondary"
                              : event.status === "planning"
                                ? "outline"
                                : "destructive"
                          }
                        >
                          {event.status}
                        </Badge>
                        <div className="text-sm">
                          <p>{event.attendees} attendees</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Platform Analytics</h2>
              <p className="text-muted-foreground">Comprehensive insights into platform usage and engagement</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Active Users</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">8,432</div>
                  <p className="text-sm text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">New Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">234</div>
                  <p className="text-sm text-muted-foreground">This month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Event Participation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,847</div>
                  <p className="text-sm text-muted-foreground">Total attendees</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Network Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">15,623</div>
                  <p className="text-sm text-muted-foreground">Total connections made</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>User Engagement Trends</CardTitle>
                  <CardDescription>Monthly active users over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <BarChart3 className="h-16 w-16" />
                    <p className="ml-4">Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Alumni locations worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { location: "United States", count: 7234, percentage: 56 },
                      { location: "Canada", count: 1456, percentage: 11 },
                      { location: "United Kingdom", count: 987, percentage: 8 },
                      { location: "Australia", count: 654, percentage: 5 },
                      { location: "Other", count: 2516, percentage: 20 },
                    ].map((item) => (
                      <div key={item.location} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>{item.location}</span>
                          <span>
                            {item.count} ({item.percentage}%)
                          </span>
                        </div>
                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Platform Settings</h2>
              <p className="text-muted-foreground">Configure platform-wide settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Institution Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Institution Name</label>
                    <Input value="University of Excellence" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Email</label>
                    <Input value="admin@university.edu" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Website</label>
                    <Input value="https://university.edu" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alumni Registration</p>
                      <p className="text-sm text-muted-foreground">Allow new alumni to register</p>
                    </div>
                    <Badge variant="secondary">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Verification</p>
                      <p className="text-sm text-muted-foreground">Require admin approval for profiles</p>
                    </div>
                    <Badge variant="secondary">Required</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Event Creation</p>
                      <p className="text-sm text-muted-foreground">Allow alumni to create events</p>
                    </div>
                    <Badge variant="outline">Disabled</Badge>
                  </div>
                  <Button variant="outline">Configure Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const bookings = [
  { id: '1', date: "2023-10-25", service: "Men's Cut", stylist: "Papi", status: "Completed", price: "$45" },
  { id: '2', date: "2023-11-15", service: "Balayage", stylist: "Isabella", status: "Completed", price: "$250" },
  { id: '3', date: "2023-12-20", service: "Women's Cut", stylist: "Sofia", status: "Cancelled", price: "$75" },
  { id: '4', date: "2024-01-10", service: "Men's Cut", stylist: "Marco", status: "Upcoming", price: "$45" },
];

const orders = [
  { id: 'ORD-001', date: "2023-11-16", total: "$83.00", status: "Delivered", items: 2 },
  { id: 'ORD-002', date: "2024-01-02", total: "$28.00", status: "Shipped", items: 1 },
];

export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">My Account</h1>
        <p className="text-muted-foreground mt-2">Manage your profile, appointments, and orders.</p>
      </header>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="bookings">Booking History</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details here.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://picsum.photos/200/200?random=10" data-ai-hint="woman portrait" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline">Change Photo</Button>
              </div>
              <Separator />
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue="jane.doe@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="(123) 456-7890" />
                </div>
                <div className="flex justify-end">
                  <Button type="submit">Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bookings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>View your past and upcoming appointments.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Stylist</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.date}</TableCell>
                      <TableCell className="font-medium">{booking.service}</TableCell>
                      <TableCell>{booking.stylist}</TableCell>
                      <TableCell><Badge variant={booking.status === 'Upcoming' ? 'default' : booking.status === 'Cancelled' ? 'destructive' : 'secondary'}>{booking.status}</Badge></TableCell>
                      <TableCell className="text-right">{booking.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="orders" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>Review your past product purchases.</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium text-primary">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell><Badge variant={order.status === 'Delivered' ? 'secondary' : 'default'}>{order.status}</Badge></TableCell>
                      <TableCell>{order.items}</TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

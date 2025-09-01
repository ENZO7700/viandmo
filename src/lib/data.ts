import { User, Scissors, Palette, ShoppingBag, Calendar, Users, BarChart, Settings } from "lucide-react";

export const services = [
  {
    id: '1',
    name: "Men's Cut",
    description: "A tailored cut and style for the modern gentleman.",
    price: 45,
    duration: 45,
  },
  {
    id: '2',
    name: "Women's Cut",
    description: "A personalized cut, blowout, and style for any look.",
    price: 75,
    duration: 60,
  },
  {
    id: '3',
    name: "Single Process Color",
    description: "A single shade applied to the roots to create a new base color.",
    price: 120,
    duration: 90,
  },
  {
    id: '4',
    name: "Balayage",
    description: "Hand-painted highlights for a natural, sun-kissed look.",
    price: 250,
    duration: 180,
  },
  {
    id: '5',
    name: "Blowout & Style",
    description: "A professional wash, dry, and style for a flawless finish.",
    price: 55,
    duration: 45,
  },
  {
    id: '6',
    name: "Keratin Treatment",
    description: "A smoothing treatment to reduce frizz and add shine.",
    price: 300,
    duration: 150,
  },
];

export const stylists = [
  { id: '1', name: "Papi", role: "Master Stylist", img: "https://picsum.photos/200/200?random=1", hint: "man portrait" },
  { id: '2', name: "Isabella", role: "Color Specialist", img: "https://picsum.photos/200/200?random=2", hint: "woman portrait" },
  { id: '3', name: "Marco", role: "Barber & Stylist", img: "https://picsum.photos/200/200?random=3", hint: "man portrait smiling" },
  { id: '4', name: "Sofia", role: "Stylist", img: "https://picsum.photos/200/200?random=9", hint: "woman smiling" },
];

export const products = [
  { id: '1', name: "Nourishing Shampoo", price: 28, img: "https://picsum.photos/400/400?random=4", hint: "shampoo bottle", category: "Cleansing", description: "A gentle yet effective shampoo to cleanse and nourish all hair types." },
  { id: '2', name: "Hydrating Conditioner", price: 32, img: "https://picsum.photos/400/400?random=5", hint: "hair product", category: "Conditioning", description: "A rich conditioner that locks in moisture and leaves hair silky smooth." },
  { id: '3', name: "Volumizing Mousse", price: 26, img: "https://picsum.photos/400/400?random=10", hint: "hair mousse", category: "Styling", description: "Lightweight mousse that adds body and lift from the roots." },
  { id: '4', name: "Matte Styling Clay", price: 25, img: "https://picsum.photos/400/400?random=6", hint: "hair wax", category: "Styling", description: "Provides a strong, pliable hold with a modern matte finish." },
  { id: '5', name: "Argan Oil Shine Serum", price: 27, img: "https://picsum.photos/400/400?random=7", hint: "serum bottle", category: "Treatments", description: "Eliminates frizz and adds a brilliant, healthy shine." },
  { id: '6', name: "Sea Salt Texturizing Spray", price: 26, img: "https://picsum.photos/400/400?random=8", hint: "spray bottle", category: "Styling", description: "Creates beachy waves and adds touchable texture." },
  { id: '7', name: "Repairing Hair Mask", price: 42, img: "https://picsum.photos/400/400?random=11", hint: "hair mask", category: "Treatments", description: "An intensive treatment to repair and strengthen damaged hair." },
  { id: '8', name: "Heat Protectant Spray", price: 24, img: "https://picsum.photos/400/400?random=12", hint: "product spray", category: "Styling", description: "Shields hair from heat damage up to 450°F." },
];

export const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart },
  { href: "/admin/bookings", label: "Bookings", icon: Calendar },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/services", label: "Services", icon: Scissors },
  { href: "/admin/products", label: "Products", icon: ShoppingBag },
  { href: "/admin/pwa-settings", label: "PWA Settings", icon: Settings },
]

export const customers = [
    { id: '1', name: "Liam Johnson", email: "liam@example.com", bookings: 5, totalSpent: 450 },
    { id: '2', name: "Olivia Smith", email: "olivia@example.com", bookings: 8, totalSpent: 1200 },
    { id: '3', name: "Noah Williams", email: "noah@example.com", bookings: 2, totalSpent: 90 },
    { id: '4', name: "Emma Brown", email: "emma@example.com", bookings: 12, totalSpent: 2150 },
    { id_: '5', name: "James Jones", email: "james@example.com", bookings: 1, totalSpent: 75 },
];

export const bookings = [
    { id: '1', customerName: 'Olivia Smith', service: "Balayage", stylist: 'Isabella', date: '2024-08-15', time: '10:00 AM', status: 'Confirmed' },
    { id: '2', customerName: 'Liam Johnson', service: "Men's Cut", stylist: 'Papi', date: '2024-08-15', time: '11:00 AM', status: 'Confirmed' },
    { id: '3', customerName: 'New Client', service: "Women's Cut", stylist: 'Sofia', date: '2024-08-16', time: '02:00 PM', status: 'Pending' },
    { id: '4', customerName: 'Emma Brown', service: "Keratin Treatment", stylist: 'Isabella', date: '2024-08-17', time: '12:00 PM', status: 'Completed' },
    { id: '5', customerName: 'James Jones', service: "Women's Cut", stylist: 'Sofia', date: '2024-08-18', time: '04:00 PM', status: 'Cancelled' },
];

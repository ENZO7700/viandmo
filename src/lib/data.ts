
import { BarChart, Calendar, Users, Settings } from "lucide-react";
import moment from "moment";

export const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart },
  { href: "/admin/contact", label: "Kalendár", icon: Calendar },
]

// Helper to create date objects from a date and time string
const createDate = (date: string, time: string): Date => {
  return moment(`${date} ${time}`, "YYYY-MM-DD HH:mm").toDate();
};

export const bookings = [
    {
        id: '1',
        title: "Sťahovanie bytu",
        clientName: "Ján Novák",
        start: createDate('2024-08-15', '10:00'),
        end: createDate('2024-08-15', '13:00'),
        status: 'Confirmed',
        price: 250,
    },
     {
        id: '2',
        title: "Sťahovanie kancelárie",
        clientName: "Firma ABC, s.r.o.",
        start: createDate('2024-07-12', '09:00'),
        end: createDate('2024-07-12', '17:00'),
        status: 'Completed',
        price: 1200,
    },
    {
        id: '3',
        title: "Vypratávanie pivnice",
        clientName: "Zuzana Malá",
        start: createDate('2024-08-20', '14:00'),
        end: createDate('2024-08-20', '16:00'),
        status: 'Confirmed',
        price: 150,
    },
    {
        id: '4',
        title: "Pravidelné upratovanie",
        clientName: "Peter Veľký",
        start: createDate('2024-08-16', '08:00'),
        end: createDate('2024-08-16', '11:00'),
        status: 'In Progress',
        price: 180,
    },
    {
        id: '5',
        title: "Sťahovanie domu",
        clientName: "Martina Kováčová",
        start: createDate('2024-07-25', '08:00'),
        end: createDate('2024-07-25', '18:00'),
        status: 'Completed',
        price: 950,
    },
     {
        id: '6',
        title: "Upratovanie po rekonštrukcii",
        clientName: "Šimon Staviteľ",
        start: createDate('2024-08-05', '09:00'),
        end: createDate('2024-08-05', '15:00'),
        status: 'Completed',
        price: 450,
    }
];

// We need to add the full client name to the calendar event title
export const calendarBookings = bookings.map(b => ({
    ...b,
    title: `${b.title} - ${b.clientName}`
}));

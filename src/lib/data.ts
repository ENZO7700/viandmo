
import { BarChart, Calendar, Users, Settings } from "lucide-react";
import moment from "moment";

export const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart },
  { href: "/admin/bookings", label: "Kalendár", icon: Calendar },
]

// Helper to create date objects from a date and time string
const createDate = (date: string, time: string): Date => {
  return moment(`${date} ${time}`, "YYYY-MM-DD HH:mm").toDate();
};

export const bookings = [
    {
        id: '1',
        title: "Sťahovanie bytu - Ján Novák, Bratislava",
        start: createDate('2024-08-15', '10:00'),
        end: createDate('2024-08-15', '13:00'),
        status: 'Confirmed'
    },
     {
        id: '2',
        title: "Sťahovanie kancelárie - Firma ABC, s.r.o., Bratislava",
        start: createDate('2024-08-12', '09:00'),
        end: createDate('2024-08-12', '17:00'),
        status: 'Completed'
    },
    {
        id: '3',
        title: "Vypratávanie pivnice - Zuzana Malá, Pezinok",
        start: createDate('2024-08-20', '14:00'),
        end: createDate('2024-08-20', '16:00'),
        status: 'Confirmed'
    },
    {
        id: '4',
        title: "Pravidelné upratovanie - Peter Veľký, Bratislava",
        start: createDate('2024-08-16', '08:00'),
        end: createDate('2024-08-16', '11:00'),
        status: 'In Progress'
    },
];

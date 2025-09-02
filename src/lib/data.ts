
import { BarChart, Calendar, Mail, Users, Settings } from "lucide-react";
import type { Event } from 'react-big-calendar';

export const adminNavItems = [
  { href: "/admin", label: "Dashboard", icon: BarChart },
  { href: "/admin/contact", label: "Kalendár", icon: Calendar },
  { href: "/admin/messages", label: "Správy", icon: Mail },
]

// --- DEMO & PROTOTYPE DATA ---
// In a real application, this data would come from a database.
// For prototyping purposes, we keep it static here.

// Represents a single contact form submission.
export interface ContactSubmission {
    id: string;
    name: string;
    phone: string;
    email: string;
    address?: string;
    message: string;
    date: string; // ISO 8601 date string
}

// A temporary in-memory store for contact form submissions.
// This will be reset every time the server restarts.
export const contactSubmissions: ContactSubmission[] = [];


// Demo data for bookings has been removed to prepare for production build.
export const bookings: any[] = [
    { id: 1, clientName: 'Firma ABC', title: 'Sťahovanie kancelárie', start: new Date(2024, 6, 15, 9, 0, 0), end: new Date(2024, 6, 15, 17, 0, 0), price: 450, status: 'Completed' },
    { id: 2, clientName: 'Ján Novák', title: 'Sťahovanie bytu', start: new Date(2024, 6, 18, 10, 0, 0), end: new Date(2024, 6, 18, 14, 0, 0), price: 280, status: 'Completed' },
    { id: 3, clientName: 'Alza.sk', title: 'Pravidelné upratovanie', start: new Date(2024, 6, 20, 8, 0, 0), end: new Date(2024, 6, 20, 12, 0, 0), price: 120, status: 'Scheduled' },
    { id: 4, clientName: 'Zuzana Malá', title: 'Vypratávanie pivnice', start: new Date(2024, 6, 22, 13, 0, 0), end: new Date(2024, 6, 22, 15, 0, 0), price: 90, status: 'Scheduled' },
    { id: 5, clientName: 'Peter Veľký', title: 'Sťahovanie 3i bytu', start: new Date(2024, 5, 28, 9, 0, 0), end: new Date(2024, 5, 28, 16, 0, 0), price: 350, status: 'Cancelled' }
];

export const calendarBookings: Event[] = bookings.map(b => ({
    title: b.title,
    start: b.start,
    end: b.end,
    resource: b,
}));


import { BarChart, Calendar, Mail, Users, Settings } from "lucide-react";

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
export const bookings: any[] = [];
export const calendarBookings: any[] = [];

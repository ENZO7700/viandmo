
'use client'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useMemo } from 'react'

const localizer = momentLocalizer(moment)

// Helper to create date objects from a date and time string
const createDate = (date: string, time: string): Date => {
  return moment(`${date} ${time}`, "YYYY-MM-DD h:mm A").toDate();
};

const bookings = [
    {
        id: '1',
        title: "Sťahovanie - Ján Novák, Bratislava",
        start: createDate('2024-08-15', '10:00 AM'),
        end: createDate('2024-08-15', '1:00 PM'),
        status: 'Confirmed'
    },
];


export default function BookingCalendar() {
  const { defaultDate, views } = useMemo(
    () => ({
      defaultDate: new Date(2024, 7, 15), // August 15, 2024
      views: {
        month: true,
        week: true,
        day: true,
      },
    }),
    []
  )

  const eventStyleGetter = (event: any, start: Date, end: Date, isSelected: boolean) => {
    let newStyle: { backgroundColor?: string, color?: string, borderRadius?: string, border?: string } = {
        borderRadius: '5px',
        border: 'none',
    };
    if (event.status === 'Confirmed') {
        newStyle.backgroundColor = 'hsl(var(--primary))';
        newStyle.color = 'hsl(var(--primary-foreground))';
    } else {
        newStyle.backgroundColor = 'hsl(var(--muted))'
        newStyle.color = 'hsl(var(--muted-foreground))'
    }
    return {
        style: newStyle
    };
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Kalendár zákazok</CardTitle>
        <CardDescription>Vizuálny prehľad všetkých naplánovaných zákazok.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[70vh]">
            <Calendar
              localizer={localizer}
              events={bookings}
              startAccessor="start"
              endAccessor="end"
              defaultDate={defaultDate}
              views={views}
              eventPropGetter={eventStyleGetter}
              className="bg-card text-card-foreground"
            />
        </div>
      </CardContent>
    </Card>
  )
}

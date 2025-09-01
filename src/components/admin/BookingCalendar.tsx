
'use client'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { bookings } from '@/lib/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useMemo } from 'react'

const localizer = momentLocalizer(moment)

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
    } else if (event.status === 'Pending') {
        newStyle.backgroundColor = 'hsl(var(--secondary))';
        newStyle.color = 'hsl(var(--secondary-foreground))';
    } else if (event.status === 'Cancelled') {
        newStyle.backgroundColor = 'hsl(var(--destructive))';
        newStyle.color = 'hsl(var(--destructive-foreground))';
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
        <CardTitle>Booking Calendar</CardTitle>
        <CardDescription>A visual overview of all scheduled appointments.</CardDescription>
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
              // This sets the background color of the calendar cells
              className="bg-card text-card-foreground"
            />
        </div>
      </CardContent>
    </Card>
  )
}

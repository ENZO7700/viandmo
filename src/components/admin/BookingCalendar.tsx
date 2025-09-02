
'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

// This component is not used anymore after removing react-big-calendar
// It can be deleted or replaced with a new calendar implementation later.

export default function BookingCalendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Kalendár zákazok</CardTitle>
        <CardDescription>Vizuálny prehľad všetkých naplánovaných zákazok.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[70vh] flex items-center justify-center bg-muted/50 rounded-lg">
             <p className="text-muted-foreground">Komponent kalendára bol odstránený. Pripravené na napojenie novej verzie.</p>
        </div>
      </CardContent>
    </Card>
  )
}


'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminContactPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Kalendár zákazok</CardTitle>
                    <CardDescription>Vizuálny prehľad všetkých naplánovaných zákazok.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="h-[70vh] flex items-center justify-center bg-muted/50 rounded-lg">
                        <p className="text-muted-foreground">Kalendár je prázdny. Pre zobrazenie je potrebné pripojiť dáta.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

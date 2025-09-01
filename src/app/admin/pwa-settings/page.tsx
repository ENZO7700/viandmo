
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, WifiOff } from "lucide-react";

export default function PWASettingsPage() {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>PWA & Offline Settings</CardTitle>
                    <CardDescription>Manage Progressive Web App features like push notifications and offline behavior.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h3 className="font-semibold flex items-center gap-2"><BellRing className="w-5 h-5 text-primary"/>Push Notifications</h3>
                            <p className="text-sm text-muted-foreground">Send test notifications to ensure the setup is correct.</p>
                        </div>
                        <Button disabled>Send Test Notification</Button>
                    </div>
                     <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h3 className="font-semibold flex items-center gap-2"><WifiOff className="w-5 h-5 text-primary"/>Offline Mode</h3>
                            <p className="text-sm text-muted-foreground">Simulate offline mode to test the fallback page.</p>
                        </div>
                        <Button variant="outline" onClick={() => window.location.href = '/offline.html'}>
                            Test Offline Page
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

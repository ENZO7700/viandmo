
'use client';

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BellRing, WifiOff, Loader2 } from "lucide-react";

type PermissionStatus = "default" | "granted" | "denied";

export default function PWASettingsPage() {
    const [permission, setPermission] = useState<PermissionStatus>("default");
    const [isSubscribing, setIsSubscribing] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if ("Notification" in window) {
            setPermission(Notification.permission);
        }
    }, []);

    const subscribeToNotifications = async () => {
        if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
            alert("Push notifikácie nie sú podporované v tomto prehliadači.");
            return;
        }

        setIsSubscribing(true);

        try {
            const registration = await navigator.serviceWorker.ready;
            const subscription = await registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY // This needs to be set in .env.local
            });
            
            // TODO: Send subscription to a backend server to store it
            console.log("Push Subscription:", JSON.stringify(subscription));
            alert("Úspešne ste sa prihlásili na odber notifikácií!");
            setPermission("granted");

        } catch (error) {
            console.error("Failed to subscribe to push notifications:", error);
            if (Notification.permission === 'denied') {
                 alert("Nemáte povolené notifikácie. Prosím, povoľte ich v nastaveniach vášho prehliadača.");
            } else {
                alert("Nepodarilo sa prihlásiť na odber notifikácií. Skúste to prosím znova.");
            }
            setPermission(Notification.permission);
        } finally {
            setIsSubscribing(false);
        }
    };
    
    const getButtonState = () => {
        if (!isClient) {
            return { text: "Načítava sa...", disabled: true, showSpinner: true };
        }
        if (isSubscribing) {
            return { text: "Pripájam...", disabled: true, showSpinner: true };
        }
        switch (permission) {
            case "granted":
                return { text: "Notifikácie povolené", disabled: true, showSpinner: false };
            case "denied":
                return { text: "Notifikácie blokované", disabled: true, showSpinner: false };
            default:
                return { text: "Povoliť Push Notifikácie", disabled: false, showSpinner: false };
        }
    };

    const { text, disabled, showSpinner } = getButtonState();

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
                            <p className="text-sm text-muted-foreground">Enable push notifications to receive updates.</p>
                        </div>
                        <Button onClick={subscribeToNotifications} disabled={disabled}>
                           {showSpinner && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                           {text}
                        </Button>
                    </div>
                     <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                            <h3 className="font-semibold flex items-center gap-2"><WifiOff className="w-5 h-5 text-primary"/>Offline Mode</h3>
                            <p className="text-sm text-muted-foreground">Simulate offline mode to test the fallback page.</p>
                        </div>
                        <Button variant="outline" onClick={() => isClient && (window.location.href = '/offline.html')}>
                            Test Offline Page
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

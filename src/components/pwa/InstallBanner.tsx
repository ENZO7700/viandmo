
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Logo from '../layout/Logo';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const InstallBanner = () => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    
    if (outcome === 'accepted' || outcome === 'dismissed') {
        setIsVisible(false);
        setInstallPrompt(null);
    }
  };

  const handleCloseClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 rounded-lg border bg-background p-4 shadow-lg animate-in slide-in-from-bottom-5">
      <div className="flex items-center gap-4">
        <Logo className="h-10 w-28" />
        <div className="flex flex-col items-start">
            <p className="text-sm font-medium">Nainštalovať aplikáciu?</p>
            <p className="text-xs text-muted-foreground">Pridajte si nás na plochu pre rýchly prístup.</p>
        </div>
        <Button onClick={handleInstallClick} size="sm" className="ml-4">
          Inštalovať
        </Button>
        <Button onClick={handleCloseClick} variant="ghost" size="icon" className="h-7 w-7">
          <X className="h-4 w-4" />
          <span className="sr-only">Zavrieť</span>
        </Button>
      </div>
    </div>
  );
};

export default InstallBanner;

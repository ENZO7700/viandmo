'use client';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Player
        autoplay
        loop
        src="/animations/loading.json"
        style={{ height: '300px', width: '300px' }}
      />
    </div>
  );
}

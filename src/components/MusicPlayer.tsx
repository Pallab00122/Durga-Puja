"use client"
import { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"

const MusicPlayer = () => {
    const { toast } = useToast()
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element
        audioRef.current = new Audio('/durga-puja-dhak-sound-125241.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3; // Set volume to 30% for slow, ambient playback

        // Add event listeners
        audioRef.current.addEventListener('canplaythrough', () => {
            setIsLoaded(true);
        });

        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
                toast({
                    title: "Durga Puja Dhak",
                    description: "Traditional dhak beats are now playing.",
                });
            } catch (error) {
                toast({
                    title: "Audio Error",
                    description: "Could not play the audio. Please try again.",
                    variant: "destructive",
                });
            }
        }
    };

    return (
        <Button
            onClick={togglePlay}
            variant="ghost"
            size="icon"
            aria-label="Toggle Durga Puja Music"
            disabled={!isLoaded}
            className="relative"
        >
            {!isLoaded ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
            ) : isPlaying ? (
                <Pause className="h-5 w-5" />
            ) : (
                <Play className="h-5 w-5" />
            )}
        </Button>
    );
}

export default MusicPlayer;

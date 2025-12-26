"use client";

import React, { useEffect, useState } from "react";
import { Flex, Text, Heading, Row, Line } from "@once-ui-system/core";
import { SiLastdotfm } from "react-icons/si";

interface Track {
    name: string;
    artist: { '#text': string };
    image: { '#text': string }[];
    '@attr'?: { nowplaying: string };
}

export const NowPlaying = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const apiKey = 'b196b523ff00d1b3803ae66c3d5d2da5';
    const user = 'dagkan';
    const profileUrl = "https://www.last.fm/user/dagkan";

    const fetchNowPlaying = () => {
        const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json&limit=1`;
        fetch(url)
            .then(r => r.json())
            .then(data => {
                const latestTrack = data.recenttracks.track[0];
                if (latestTrack && latestTrack['@attr'] && latestTrack['@attr'].nowplaying) {
                    setTrack(latestTrack);
                } else {
                    setTrack(null);
                }
            })
            .catch(() => setTrack(null));
    };

    useEffect(() => {
        fetchNowPlaying();
        const interval = setInterval(fetchNowPlaying, 10000);
        return () => clearInterval(interval);
    }, []);

    if (!track) return null;

    const cover = track.image.slice().reverse().find(img => img['#text'])?.['#text'] || 'https://placehold.co/74x74?text=♫';

    return (
        <Flex
            fillWidth
            maxWidth="s"
            padding="12"
            radius="l"
            background="surface"
            border="neutral-alpha-weak"
            style={{
                backdropFilter: 'blur(12px)',
                boxShadow: 'var(--shadow-elevation-dark-two)',
                transition: 'all 0.3s ease',
                marginTop: '32px'
            }}
            className="now-playing-card"
        >
            <Row fillWidth vertical="center" gap="16">
                {/* Cover Art */}
                <Flex
                    style={{
                        width: '64px',
                        height: '64px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        flexShrink: 0,
                        border: '1px solid var(--neutral-alpha-weak)'
                    }}
                >
                    <img 
                        src={cover} 
                        alt="Album Cover" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Flex>

                {/* Info */}
                <Flex direction="column" gap="4" style={{ minWidth: 0, flex: 1 }}>
                    <Text variant="code-default-xs" onBackground="brand-strong" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        Now Playing
                    </Text>
                    <Heading variant="heading-strong-s" style={{ 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis' 
                    }}>
                        {track.name}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak" style={{ 
                        whiteSpace: 'nowrap', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis' 
                    }}>
                        {track.artist['#text']}
                    </Text>
                </Flex>

                {/* Badge/Action */}
                <a 
                    href={profileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                >
                    <Flex 
                        paddingX="12" 
                        paddingY="8" 
                        radius="full" 
                        background="brand-alpha-weak" 
                        vertical="center" 
                        gap="8"
                        style={{ cursor: 'pointer', transition: 'all 0.2s ease' }}
                        className="lastfm-badge"
                    >
                        <SiLastdotfm className="text-brand-strong" />
                        <Text variant="label-strong-xs" onBackground="brand-strong" hide="s">Last.fm</Text>
                    </Flex>
                </a>
            </Row>
        </Flex>
    );
};

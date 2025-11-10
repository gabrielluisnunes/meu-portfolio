'use client';

import React, { useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type Container, type ISourceOptions } from '@tsparticles/engine';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import styled from 'styled-components';


const GOLD_COLOR = '#FFD700'; 
const BRIGHT_GOLD = '#FFEB3B'; 

const StarParticlesContainer = styled.div`
    /* Posicionamento absoluto para cobrir todo o viewport */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1; 
    pointer-events: none;
    background-color: #000000;
`;

const StarParticlesBackground: React.FC = () => {
    const [init, setInit] = React.useState(false);

    React.useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadStarsPreset(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = {
        preset: 'stars',
        fullScreen: { enable: false },
        background: {
            color: { value: "#000000" },
        },
        particles: {
            color: {
                value: "#FFFFFF",
            },
            twinkle: {
                enable: true,
                speed: 10,
                opacity: 0.5
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out",
                },
                attract: {
                    enable: false,
                    rotate: { x: 600, y: 1200 },
                },
                trail: {
                    enable: true,
                    length: 5,
                    fill: {
                        color: { value: BRIGHT_GOLD }, 
                    },
                }
            },
            shape: {
                type: "star",
            },
            size: {
                value: { min: 0.5, max: 2 },
            },
        },
        life: {
            count: 0,
            duration: {
                value: 30,
            }
        },
        number: {
            value: 80,
        },
        opacity: {
            value: 0.5,
            random: { enable: true, minimumValue: 0.1 },
        }
    };

    if (init) {
        return (
            <StarParticlesContainer>
                <Particles
                    id="tsparticles"
                    options={options}
                />
            </StarParticlesContainer>
        );
    }

    return null;
};

export default StarParticlesBackground;
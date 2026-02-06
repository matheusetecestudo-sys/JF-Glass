import React from 'react';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = "" }) => {
    const darkBlue = "#4A7EBB";
    const lightBlue = "#72B5D9";
    const textColor = "#1E40AF"; // Azul escuro do texto GLASS na imagem

    return (
        <svg
            viewBox="0 0 380 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* J - Dark Blue Block */}
            <path d="M10 20H70V35H45V80C45 85 40 90 30 90H10V75H30V35H10V20Z" fill={darkBlue} />

            {/* F - Light Blue Block */}
            <path d="M75 20H140V35H90V53H130V68H90V90H75V20Z" fill={lightBlue} />

            {/* GLASS - Bold Sans */}
            <text
                x="150"
                y="75"
                fontFamily="Arial, sans-serif"
                fontSize="65"
                fontWeight="bold"
                fill={textColor}
                style={{ letterSpacing: '-0.02em' }}
            >
                GLASS
            </text>

            {/* VIDRAÇARIA - Spaced */}
            <text
                x="152"
                y="95"
                fontFamily="Arial, sans-serif"
                fontSize="16"
                fontWeight="bold"
                fill={textColor}
                style={{ letterSpacing: '0.45em' }}
            >
                VIDRAÇARIA
            </text>
        </svg>
    );
};

export default Logo;

import React from 'react';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = "" }) => {
    const primaryBlue = "#4A7EBB";
    const lightBlue = "#72B5D9";
    const textColor = variant === 'light' ? '#000000' : '#FFFFFF';
    const subtextColor = variant === 'light' ? '#4A7EBB' : '#FFFFFF';

    return (
        <svg
            viewBox="0 0 300 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* JF Icon */}
            <path d="M20 20H80V35H55V80C55 85 50 90 40 90H20V75H35V35H20V20Z" fill={primaryBlue} />
            <path d="M65 10H140V25H100V45H130V60H100V90H80V10Z" fill={lightBlue} />

            {/* GLASS Text */}
            <text
                x="145"
                y="65"
                fontFamily="Inter, sans-serif"
                fontSize="52"
                fontWeight="900"
                fill={variant === 'light' ? primaryBlue : '#FFFFFF'}
                style={{ letterSpacing: '-0.02em' }}
            >
                GLASS
            </text>

            {/* VIDRAÇARIA Subtext */}
            <text
                x="147"
                y="88"
                fontFamily="Inter, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill={subtextColor}
                style={{ letterSpacing: '0.45em' }}
            >
                VIDRAÇARIA
            </text>
        </svg>
    );
};

export default Logo;

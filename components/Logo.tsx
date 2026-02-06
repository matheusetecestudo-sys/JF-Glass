import React from 'react';

interface LogoProps {
    className?: string;
    showBackground?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", showBackground = true }) => {
    const darkBlue = "#4A7EBB";
    const lightBlue = "#72B5D9";
    const footerDark = "#020617"; // slate-950

    return (
        <svg
            viewBox="0 0 400 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {showBackground && (
                <rect width="400" height="120" rx="8" fill={footerDark} />
            )}

            <g transform="translate(20, 20)">
                {/* J - Dark Blue */}
                <path d="M10 10H50V25H35V65C35 70 30 75 20 75H0V60H20V25H0V10H10Z" fill={darkBlue} />

                {/* F - Light Blue */}
                <path d="M45 10H95V25H60V40H90V55H60V80H45V10Z" fill={lightBlue} />

                {/* GLASS */}
                <text
                    x="105"
                    y="65"
                    fontFamily="Inter, sans-serif"
                    fontSize="60"
                    fontWeight="900"
                    fill={darkBlue}
                    style={{ letterSpacing: '-0.02em' }}
                >
                    GLASS
                </text>

                {/* VIDRAÇARIA */}
                <text
                    x="105"
                    y="85"
                    fontFamily="Inter, sans-serif"
                    fontSize="18"
                    fontWeight="800"
                    fill="#FFFFFF"
                    style={{ letterSpacing: '0.45em' }}
                >
                    VIDRAÇARIA
                </text>
            </g>
        </svg>
    );
};

export default Logo;

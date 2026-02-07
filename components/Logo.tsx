import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {
    const isFooter = variant === 'footer';
    const primaryBlue = "#4A7EBB";
    const accentBlue = "#72B5D9";
    const subtextColor = isFooter ? "#FFFFFF" : "#000000";

    return (
        <svg
            viewBox="0 0 380 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g transform="translate(10, 10)">
                {/* J - Blue */}
                <path d="M10 10H45V20H25V55C25 58 22 62 12 62H0V48H12V20H0V10H10Z" fill={primaryBlue} />

                {/* F - Light Blue */}
                <path d="M38 10H85V20H55V35H78V45H55V72H38V10Z" fill={accentBlue} />

                {/* G L - Blue */}
                <text x="92" y="55" fontFamily="Inter, sans-serif" fontSize="56" fontWeight="900" fill={primaryBlue} style={{ letterSpacing: '-0.02em' }}>GL</text>

                {/* A Stylized */}
                <g transform="translate(162, 10)">
                    <path d="M22 0L44 45H0L22 0Z" fill={primaryBlue} />
                    <path d="M28 10L48 50H8L28 10Z" fill={accentBlue} opacity="0.8" />
                </g>

                {/* S S - Blue */}
                <text x="215" y="55" fontFamily="Inter, sans-serif" fontSize="56" fontWeight="900" fill={primaryBlue} style={{ letterSpacing: '-0.02em' }}>SS</text>

                {/* VIDRAÇARIA */}
                <text
                    x="95"
                    y="82"
                    fontFamily="Inter, sans-serif"
                    fontSize="18"
                    fontWeight="800"
                    fill={subtextColor}
                    style={{ letterSpacing: '0.42em' }}
                >
                    VIDRAÇARIA
                </text>
            </g>
        </svg>
    );
};

export default Logo;

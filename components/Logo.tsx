import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {
    const isFooter = variant === 'footer';
    const primaryBlue = "#4A7EBB";
    const accentBlue = "#72B5D9";

    return (
        <svg
            viewBox="0 0 380 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g transform="translate(15, 10)">
                {/* J - Dark Blue */}
                <path d="M15 10H45V20H30V50C30 55 25 60 15 60H0V45H15V20H0V10H15Z" fill={primaryBlue} />

                {/* F - Light Blue */}
                <path d="M40 10H85V20H55V35H75V45H55V70H40V10Z" fill={accentBlue} />

                {/* GLASS */}
                <text
                    x="95"
                    y="52"
                    fontFamily="Inter, sans-serif"
                    fontSize="54"
                    fontWeight="900"
                    fill={primaryBlue}
                    style={{ letterSpacing: '-0.04em' }}
                >
                    GLASS
                </text>

                {/* VIDRAÇARIA */}
                <text
                    x="95"
                    y="72"
                    fontFamily="Inter, sans-serif"
                    fontSize="15"
                    fontWeight="800"
                    fill={isFooter ? "#FFFFFF" : "#000000"}
                    style={{ letterSpacing: '0.45em' }}
                >
                    VIDRAÇARIA
                </text>
            </g>
        </svg>
    );
};

export default Logo;

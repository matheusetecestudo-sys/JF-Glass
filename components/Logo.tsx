import React from 'react';

interface LogoProps {
    variant?: 'light' | 'dark';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant = 'light', className = "" }) => {
    const primaryBlue = "#4A7EBB";
    const lightBlue = "#72B5D9";
    const textColor = variant === 'light' ? '#0F172A' : '#FFFFFF';

    return (
        <svg
            viewBox="0 0 320 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMinYMid meet"
        >
            {/* JF Icon - Geometric & Minimalist */}
            <g transform="translate(0, 5)">
                {/* J Part */}
                <path
                    d="M15 10H55V22H32V55C32 62 28 65 20 65H5V53H18V22H15V10Z"
                    fill={primaryBlue}
                />
                {/* F Part - Elegant Offset */}
                <path
                    d="M48 5H95V17H65V32H90V44H65V65H53V5Z"
                    fill={lightBlue}
                    style={{ mixBlendMode: 'multiply', opacity: 0.9 }}
                />
            </g>

            {/* Brand Text */}
            <g transform="translate(110, 48)">
                <text
                    fontFamily="Inter, system-ui, sans-serif"
                    fontSize="42"
                    fontWeight="900"
                    fill={textColor}
                    style={{ letterSpacing: '-0.03em' }}
                >
                    GLASS
                </text>
                <text
                    y="22"
                    x="2"
                    fontFamily="Inter, system-ui, sans-serif"
                    fontSize="11"
                    fontWeight="700"
                    fill={variant === 'light' ? primaryBlue : '#FFFFFF'}
                    style={{ letterSpacing: '0.62em', opacity: 0.8 }}
                >
                    VIDRAÇARIA
                </text>
            </g>
        </svg>
    );
};

export default Logo;

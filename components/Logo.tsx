import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {
    const isFooter = variant === 'footer';

    // Cores oficiais do logo conforme a imagem
    const darkBlue = "#2E4E73"; // Um pouco mais profundo como na imagem
    const lightBlue = "#72B5D9";
    const subtextColor = isFooter ? "#FFFFFF" : "#1A1A1A";

    return (
        <svg
            viewBox="0 0 450 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g transform="translate(10, 10)">
                {/* Ícone JF (Estilizado e Sobreposto) */}
                <g transform="translate(0, 5)">
                    {/* J */}
                    <path
                        d="M25 5H65V18H45V65C45 72 40 78 20 78H0V60H20V18H0V5H25Z"
                        fill={darkBlue}
                    />
                    {/* F (Ligeiramente atrás e deslocado) */}
                    <path
                        d="M55 5H115V18H75V40H105V53H75V85H55V5Z"
                        fill={lightBlue}
                        fillOpacity="0.9"
                    />
                </g>

                {/* Texto G L */}
                <text
                    x="130"
                    y="70"
                    fontFamily="Inter, sans-serif"
                    fontSize="72"
                    fontWeight="900"
                    fill={darkBlue}
                    style={{ letterSpacing: '-0.02em' }}
                >
                    GL
                </text>

                {/* A Estilizado (Os dois triângulos da imagem) */}
                <g transform="translate(222, 10)">
                    {/* Triângulo de trás (Escuro) */}
                    <path d="M28 0L56 60H0L28 0Z" fill={darkBlue} />
                    {/* Triângulo da frente (Claro - deslocado) */}
                    <path d="M36 12L68 65H4L36 12Z" fill={lightBlue} />
                </g>

                {/* Texto S S */}
                <text
                    x="295"
                    y="70"
                    fontFamily="Inter, sans-serif"
                    fontSize="72"
                    fontWeight="900"
                    fill={darkBlue}
                    style={{ letterSpacing: '-0.02em' }}
                >
                    SS
                </text>

                {/* VIDRAÇARIA (Espaçamento largo e fonte moderna) */}
                <text
                    x="135"
                    y="100"
                    fontFamily="Inter, sans-serif"
                    fontSize="22"
                    fontWeight="800"
                    fill={subtextColor}
                    style={{ letterSpacing: '0.48em' }}
                >
                    VIDRAÇARIA
                </text>
            </g>
        </svg>
    );
};

export default Logo;

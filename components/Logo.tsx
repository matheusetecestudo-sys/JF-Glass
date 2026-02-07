import React from 'react';

interface LogoProps {
    className?: string;
    variant?: 'header' | 'footer';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'header' }) => {
    const isFooter = variant === 'footer';

    // Para o cabeçalho, usamos a imagem logo.jpg
    if (!isFooter) {
        return (
            <img
                src="/images/logo.jpg"
                alt="JF Glass Vidraçaria"
                className={`${className} object-contain`}
            />
        );
    }

    // Para o rodapé, usamos a imagem logodark.jpg.jpg (arquivo físico enviado)
    return (
        <img
            src="/images/logodark.jpg.jpg"
            alt="JF Glass Vidraçaria"
            className={`${className} object-contain`}
        />
    );
};

export default Logo;

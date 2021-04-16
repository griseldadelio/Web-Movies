import React, { FC } from 'react';

interface Props {
    icon: string;
    width: number;
    height: number;
    className?: string;
}

export const Icon: FC<Props> = ({ icon, width, height, className }) => {
    return (
        <svg className={className} width={width} height={height}>
            <use xlinkHref={`#${icon}`} />
        </svg>
    );
};


import React, { FC } from 'react';
import { Icon } from '../Icon';

interface Props {
    className?: string;
    rating: number | null;
}


export const Rating: FC<Props> = ({ className, rating }) => {
    const getBorderedStars = () => {
        return Array(5)
            .fill(null)
            .map((item, index) => {
                return (
                    <Icon key={index} icon='icon-star' width={18} height={18} />
                );
            });
    };

    const getFilledStars = () => {
        return Array(5)
            .fill(null)
            .map((item, index) => {
                return (
                    <Icon key={index} icon='icon-star-filled' width={18} height={18} />
                );
            });
    };

    const getFilledStyle = () => {
        const MAX_WIDTH = 106;
        const style = {
            width: '',
        };

        if (rating) {
            const percent = ((rating / 2) * 100) / 5;
            style.width = `${(MAX_WIDTH / 100) * percent}%`;
        }

        return style;
    };

    return (
        <div>
            <div>
                <div>{getBorderedStars()}</div>
                <div style={getFilledStyle()}>
                    {getFilledStars()}
                </div>
            </div>
        </div>
    );
};



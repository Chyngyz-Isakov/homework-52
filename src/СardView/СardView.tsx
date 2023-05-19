import React from 'react';

interface ICardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<ICardViewProps> = props => {
    const cardClasses = `card rank-${props.rank.toLowerCase()} ${props.suit}`
    return (
        <div className="playingCards faceImages">
            <span className={cardClasses}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{props.suit}</span>
            </span>
        </div>
    );
};

export default CardView;
import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import './cards.css';
import './App.css';
import PokerHand from "./lib/PokerHand";

const App = () => {
    const [cards, setCards] = useState<Card []>([]);

    const getCards = () => {
        const cardDeck = new CardDeck()
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    }

    if (cards.length === 0) {
        return <button onClick={getCards}>Dealing cards</button>
    }

    const pokerHand = new PokerHand(cards);
    console.log(pokerHand.getOutcome());

    return (
        <div className="App">
            <button onClick={getCards}>Dealing cards</button>
            <div className="cards">
                {cards.map((card) => (
                    <CardView key={card.rank + card.suit} rank={card.rank} suit={card.suit} />
                ))}
                {/*<CardView rank={fiveRandom[0].rank} suit={fiveRandom[0].suit}/>*/}
                {/*<CardView rank={fiveRandom[1].rank} suit={fiveRandom[1].suit}/>*/}
                {/*<CardView rank={fiveRandom[2].rank} suit={fiveRandom[2].suit}/>*/}
                {/*<CardView rank={fiveRandom[3].rank} suit={fiveRandom[3].suit}/>*/}
                {/*<CardView rank={fiveRandom[4].rank} suit={fiveRandom[4].suit}/>*/}
            </div>
        </div>
    );
};

export default App;

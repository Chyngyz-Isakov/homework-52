import React, {useState} from 'react';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";
import Card from "./lib/Card";
import './cards.css';
import './App.css';
import PokerHand from "./lib/PokerHand";




const App = () => {
    const [cards, setCards] = useState<Card []>([]);

    const pokerHand = new PokerHand(cards);
    let pokerHandText:string = pokerHand.getOutcome();

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
        // const pokerHand = new PokerHand(newCards);
        // console.log(pokerHand.getOutcome());
    }


    if (cards.length === 0) {
        return <button onClick={getCards}>Dealing cards</button>
    }


    return (
        <div className="App">
            <button onClick={getCards}>Dealing cards</button>
            <div className="cards">
                {cards.map((card) => (
                    <CardView key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                ))}

            </div>

            <h1>Poker Hand :</h1>
            <p><b>{pokerHandText}</b></p>

        </div>
    );
};

export default App;

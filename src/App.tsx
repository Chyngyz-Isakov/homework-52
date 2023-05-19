import React from 'react';
import './cards.css';
import './App.css';
import CardView from "./СardView/СardView";
import CardDeck from "./lib/CardDeck";

const App = () => {
    const cardDeck = new CardDeck();
    console.log(cardDeck.getCard());
    console.log(cardDeck.getCards(5));
    const fiverRandom = cardDeck.getCards(5);

    return (
        <div className="App">
            <CardView rank="A" suit="spades"/>
            <CardView rank={fiverRandom[0].rank} suit={fiverRandom[0].suit}/>

        </div>
    );
};

export default App;

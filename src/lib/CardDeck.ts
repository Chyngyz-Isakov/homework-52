import Card from "./Card";

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['clubs', 'diams', 'hearts', 'spades']
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            })
        })
    }
}


export default CardDeck;
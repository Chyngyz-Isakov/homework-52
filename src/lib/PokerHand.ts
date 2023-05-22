import Card from "./Card";

class PokerHand {
    constructor(public cards: Card[]) {
    };

    getOutcome() {
        let count = 0;
        let suits = 0;

        let pokerHandShow = '';

        for (let i = 0; i < this.cards.length; i++) {
            for (let j = 0; j < this.cards.length; j++) {
                if (this.cards[i].rank === this.cards[j].rank && this.cards[i].suit !== this.cards[j].suit) {
                    count++;
                }
                if (this.cards[i].suit === this.cards[j].suit && this.cards[i].rank !== this.cards[j].rank){
                    suits++;
                }
            }
        }

        if (suits === 20){
            pokerHandShow = 'Flush';
        }else if (count === 2) {
            pokerHandShow = 'one pair';
        } else if (count === 6) {
            pokerHandShow = 'three of a kind';
        } else if (count === 4) {
            pokerHandShow = 'two pairs';
        } else {
            pokerHandShow = 'no combo';
        }
        return pokerHandShow;
    }
}

export default PokerHand;

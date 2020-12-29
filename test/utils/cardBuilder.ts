export class Card {
    constructor(public cardNumber, public cardCode, public owner, public nickName, public expirationDate) { }
}

export class CardBuilder {
    private cardNumber: string = '1488148814881488';
    private cardCode: string = '911';
    private owner: string = 'Nicolas';
    private expirationDate: string = '2022-11-24';
    private nickName: string = 'Nicolas Dobkin';

    constructor() { }

    static getEmptyCard() {
        let newBuilder = new CardBuilder();
        newBuilder.cardNumber = '';
        newBuilder.cardCode = '';
        newBuilder.owner = '';
        newBuilder.nickName = '';
        newBuilder.expirationDate = '';
        return newBuilder;
    }

    static getDefaultCard() {
        let newBuilder = new CardBuilder();
        newBuilder.cardNumber = '1488148814881488';
        newBuilder.cardCode = '911';
        newBuilder.owner = 'Nicolas';
        newBuilder.nickName = 'Nicolas Dobkin';
        newBuilder.expirationDate = '2022-11-24';
        return newBuilder;
    }

    withNumber(cardNumber: string): CardBuilder {
        let copy = this.copy();
        copy.cardNumber = cardNumber;
        return copy;
    }

    withCode(cardCode: string): CardBuilder {
        let copy = this.copy();
        copy.cardCode = cardCode;
        return copy;
    }
    withOwner(owner: string): CardBuilder {
        let copy = this.copy();
        copy.owner = owner;
        return copy;
    }

    withExpirationDate(expirationDate: string): CardBuilder {
        let copy = this.copy();
        copy.expirationDate = expirationDate;
        return copy;
    }
    withNickName(nickName: string): CardBuilder {
        let copy = this.copy();
        copy.nickName = nickName;
        return copy;
    }
    private copy(): CardBuilder {
        let newBuilder = new CardBuilder();
        newBuilder.cardNumber = this.cardNumber;
        newBuilder.cardCode = this.cardCode;
        newBuilder.owner = this.owner;
        newBuilder.nickName = this.nickName;
        newBuilder.expirationDate = this.expirationDate;
        return newBuilder;
    }

    build(): Card {
        return new Card(this.cardNumber, this.cardCode, this.owner, this.nickName, this.expirationDate)
    }
}

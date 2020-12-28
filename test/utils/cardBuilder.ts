export class Card {
    cardNumber: string;
    cardCode: string;
    owner: string;
    expirationDate?: string
    nickName: string

    constructor(cardNumber, cardCode, owner, nickName, expirationDate) {
        this.cardNumber = cardNumber;
        this.cardCode = cardCode;
        this.owner = owner;
        this.expirationDate = expirationDate;
        this.nickName = nickName;
    }
}

export class CardBuilder {
    private cardNumber: string = '1488148814881488';
    private cardCode: string = '911';
    private owner: string = 'Nicolas';
    private expirationDate: string = '24.11.2022';
    private nickName: string = 'Nicolas Dobkin';

    constructor() {
    }

    withNumber(cardNumber: string): CardBuilder {
        let copy = this.copy();
        copy.cardNumber = cardNumber;
        return copy;
    }

    withCode(cardCode: string) {
        let copy = this.copy();
        copy.cardCode = cardCode;
        return copy;
    }
    withOwner(owner: string) {
        let copy = this.copy();
        copy.owner = owner;
        return copy;
    }

    withExpirationDate(expirationDate: string) {
        let copy = this.copy();
        copy.expirationDate = expirationDate;
        return copy;
    }
    withNickName(nickName: string) {
        let copy = this.copy();
        copy.nickName = nickName;
        return copy;
    }
    private copy() {
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

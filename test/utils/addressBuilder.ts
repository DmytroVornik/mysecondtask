export class Address {

    constructor(
        public street: string,
        public city: string,
        public region: string,
        public postalCode: string,
        public streetAdditional?: string,
        public addressNickname?: string
    ) { }
}
export class AddressBuilder {
    private street = 'qq';
    private streetAdditional = 'qwww';
    private city = 'wqww';
    private region = 'ww';
    private postalCode = '123';
    private addressNickname = 'asda';
    constructor() { }

    getEmptyAddress() {
        let emptyAddress = new Address('','','','','','')
        return emptyAddress;
    }
    withStreet(street: string): AddressBuilder {
        let copy = this.copy();
        copy.street = street;
        return copy;
    }
    withStreetAdditional(streetAdditional: string): AddressBuilder {
        let copy = this.copy();
        copy.streetAdditional = streetAdditional;
        return copy;
    }
    withCity(city: string): AddressBuilder {
        let copy = this.copy();
        copy.city = city;
        return copy;
    }
    withRegion(region: string): AddressBuilder {
        let copy = this.copy();
        copy.region = region;
        return copy;
    }
    withPostalCode(postalCode: string): AddressBuilder {
        let copy = this.copy();
        copy.postalCode = postalCode;
        return copy;
    }
    withAddressNickname(addressNickname: string): AddressBuilder {
        let copy = this.copy();
        copy.addressNickname = addressNickname;
        return copy;
    }
    copy(): AddressBuilder {
        let newBuilder = new AddressBuilder();
        newBuilder.street = this.street;
        newBuilder.streetAdditional = this.streetAdditional;
        newBuilder.city = this.city;
        newBuilder.region = this.region;
        newBuilder.postalCode = this.postalCode;
        newBuilder.addressNickname = this.addressNickname;
        return newBuilder;
    }
    build(): Address {
        return new Address(this.street, this.city, this.region, this.postalCode, this.streetAdditional, this.addressNickname);
    }
}



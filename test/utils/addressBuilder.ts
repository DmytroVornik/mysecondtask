export class Address {

    street: string;
    streetAdditional?: string;
    city: string;
    region: string;
    postalCode: string;
    addressNickname?: string;
    constructor(street, city, region, postalCode, streetAdditional, addressNickname) {
        this.street = street;
        this.streetAdditional = streetAdditional;
        this.city = city;
        this.region = region;
        this.postalCode = postalCode;
        this.addressNickname = addressNickname;
    }
}
export class AddressBuilder {
    private street = 'qq';
    private streetAdditional = 'qwww';
    private city = 'wqww';
    private region = 'ww';
    private postalCode = '123';
    private addressNickname = 'asda';
    constructor() {
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
    copy() {
        let newBuilder = new AddressBuilder();
        newBuilder.street = this.street;
        newBuilder.streetAdditional = this.streetAdditional;
        newBuilder.city = this.city;
        newBuilder.region = this.region;
        newBuilder.postalCode = this.postalCode;
        newBuilder.addressNickname = this.addressNickname;
        return newBuilder;
    }
    build() {
        return new Address(this.street, this.city, this.region, this.postalCode, this.streetAdditional, this.addressNickname);
    }
}



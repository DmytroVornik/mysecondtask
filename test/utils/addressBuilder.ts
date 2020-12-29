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
    private street ;
    private streetAdditional ;
    private city ;
    private region ;
    private postalCode ;
    private addressNickname ;
    constructor() { }

    static getDefaultAddress() {
        let newBuilder = new AddressBuilder();
        newBuilder.street = 'Dirdir';
        newBuilder.streetAdditional = 'qwerty';
        newBuilder.city = 'Oz';
        newBuilder.region = 'Donbass';
        newBuilder.postalCode = '12345';
        newBuilder.addressNickname = 'asdfg';
        return newBuilder;
    }
    static getEmptyAddress() {
        let newBuilder = new AddressBuilder();
        newBuilder.street = '';
        newBuilder.streetAdditional = '';
        newBuilder.city = '';
        newBuilder.region = '';
        newBuilder.postalCode = '';
        newBuilder.addressNickname = '';
        return newBuilder;
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



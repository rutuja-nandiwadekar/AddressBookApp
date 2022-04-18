class Contact {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

   
    get fullName() {
        return this._fullName;
    }

    set fullName(fullName) {
        let fullNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if (fullNameRegex.test(fullName))
            this._fullName = fullName;
        else
            throw 'full Name Invalid'
    }

    get address() {
        return this._address;
    }

    set address(address) {
        let words = address.split(" ");
        if (words.length > 1) {
            let addressRegex = RegExp('^[A-Za-z,/.0-9]{3,}$');
            for (const word of words) {
                if (!addressRegex.test(word))
                    throw 'Address Invalid';
            }
            this._address = address;
        }
        else {
            throw 'Address Invalid';
        }
    }

    get phone() {
        return this._phone;
    }

    set phone(phone) {
        let phoneRegex = RegExp('^[+][0-9]{2}[1-9][0-9]{9}$');
        if (phoneRegex.test(phone))
            this._phone = phone;
        else
            throw 'Phone Number Invalid'
    }

    toString() {
        return "Id = " + this.id + ", FirstName = " + this.firstName + ", LastName = " + this.lastName + ", Address = " + this.address +
            ", City = " + this.city + ", State = " + this.state + ", Zip = " + this.zip + ", Phone = " + this.phone;
    }

}
class Contact {

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if (firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw 'First Name Invalid'
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z][a-z]{2,}$')
        if (lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw 'Last Name Invalid'
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
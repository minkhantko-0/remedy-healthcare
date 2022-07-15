export class Patient {
    public profile: string;
    public name: string;
    public email: string;
    public address: string;
    public _id: string;
    public dateOfBirth: string;
    public gender: string;
    public diagnosis: string;

    constructor(
        profile: string,
        name: string,
        email: string,
        address: string,
        _id: string,
        dateOfBirth: string,
        gender: string,
        diagnosis: string
    ) {
        this.profile = profile;
        this.name = name;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this._id = _id;
        this.gender = gender;
        this.diagnosis = diagnosis;
    }
}

export class User {
    public users: Patient[];

    constructor(users: Patient[]) {
        this.users = users;
    }
}

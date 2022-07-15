export class Employee {
    public profile: string;
    public name: string;
    public role: string;
    public email: string;
    public address: string;
    public _id: string;
    public dateOfBirth: string;
    public gender: string;
    public degree: string;
    public appointment_fee?: number;
    public daily_token_numbers?: number;

    constructor(
        profile: string,
        name: string,
        role: string,
        email: string,
        address: string,
        _id: string,
        dateOfBirth: string,
        gender: string,
        degree: string,
        appointment_fee?: number,
        daily_token_numbers?: number
    ) {
        this.profile = profile;
        this.name = name;
        this.role = role;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this._id = _id;
        this.gender = gender;
        this.degree = degree;
        this.appointment_fee = appointment_fee;
        this.daily_token_numbers = daily_token_numbers;
    }
}

export class Staff {
    public users: Employee[];

    constructor(users: Employee[]) {
        this.users = users;
    }
}

export class Admin {
    constructor(
        public admin: {
            _id: string;
            user_id: string;
            password: string;
        },
        public token: string
    ) {}
}

export class GeneratedAdmin {
    constructor(public user_id: string, public password: string) {}
}

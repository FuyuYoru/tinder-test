import { PassionType } from "../../mock/passions";

export interface IUser {
    login: string,
    password: string,
    firstname: string,
    passions: PassionType[],
    birthDate: string,
    createdAt: string,
    confirmed: boolean,
}
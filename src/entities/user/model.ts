import { PassionType } from "../../mock/passions";

export interface IUser {
    login: string,
    password: string,
    firstname: string,
    lastname: string,
    avatar: Blob | null,
    passions: PassionType[],
    birthDate: string,
    createdAt: string,
    confirmed: boolean,
}
import { PassionType } from "../../mock/passions";

export interface IUser {
    id: string,
    login: string,
    password: string,
    firstname: string | null,
    lastname: string | null,
    avatar: Blob | null,
    photos: Blob[],
    passions: PassionType[],
    birthDate: string | null,
    createdAt: string,
    confirmed: boolean,
}
import { getById } from "@entities/user/api/getById"
import { ApiPath } from "@shared/api/apiPaths";
import { api } from "@shared/api/axiosInstance";

export const checkLogin = async (login: string): Promise<boolean> => {
    return api.get(ApiPath.checkExisting(login)).then((result) => {
        return false;
    }).catch(() => {
        return true;
    })
}
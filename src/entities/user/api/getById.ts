import { ApiPath } from "@shared/api/apiPaths";
import { api } from "@shared/api/axiosInstance";

// В качестве userId использую login
export const getById = async (userId: string) => {
    return api
        .get(ApiPath.getUserById(userId), {
            params: { userId }
        })
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
}
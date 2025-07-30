import { ApiPath } from "@shared/api/apiPaths";
import { api } from "@shared/api/axiosInstance";

export const getList = async () => {
    return api
        .get(ApiPath.getUsersList())
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
}
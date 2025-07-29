import { PassionType } from "@/mock/passions";
import { ApiPath } from "@/shared/api/apiPaths";
import { api } from "@/shared/api/axiosInstance";

// В качестве userId использую login
export const updatePassions = async (userId: string, passions: PassionType[]) => {
    const reqBody = {
        userId,
        data: {
            passions
        },
    }
    return api
        .post(ApiPath.updateProfile(), reqBody)
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
}
import { IUser } from "@entities/user/model"
import { ApiPath } from "@shared/api/apiPaths"
import { api } from "@shared/api/axiosInstance"

type ProfileData = Partial<Pick<IUser, 'firstname' | 'lastname' | 'avatar' | 'birthDate'>>

// В качестве userId использую login
export const updateProfile = async (userId: string, data: ProfileData) => {
    const reqBody = {
        userId,
        data,
    }
    return api
        .post(ApiPath.updateProfile(), reqBody)
        .then((response) => {
            console.log(response.data)
            return response.data;
        })
}
export class ApiPath {
    static signIn() {
        return '/auth/signIn'
    }
    static signUp() {
        return '/auth/signUp'
    }
    static checkExisting(login: string) {
        return `/auth/check/${login}`
    }
    static getUserById(userId: string) {
        return `/users/${userId}`
    }
    static updateProfile() {
        return '/user/profile-update'
    }
    static getUsersList() {
        return '/user/list'
    }
}
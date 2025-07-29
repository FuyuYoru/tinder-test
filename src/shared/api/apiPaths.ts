export class ApiPath {
    static signIn() {
        return '/auth/signIn'
    }
    static signUp() {
        return '/auth/signUp'
    }
    static getUserById(userId: string) {
        return `/api/users/${userId}`
    }
    static updateProfile() {
        return '/user/profile-update'
    }
    static getUsersList() {
        return '/user/list'
    }
}
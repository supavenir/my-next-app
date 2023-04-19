import HttpService from "@/services/HttpService";

export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    completeName: string;
}
export default class UserService{
    static getAll(): Promise<User[]> {
        return HttpService.get('users');
    }

    static add(user: User): Promise<User> {
        return HttpService.post('users', user);
    }
}

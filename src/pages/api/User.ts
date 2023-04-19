import HttpService from "@/services/HttpService";

export interface User{
    id: number;
    username: string;
    password: string;
    email: string;
    completeName: string;
}

export function getUsers(): Promise<User[]> {
    return HttpService.get('users');
}
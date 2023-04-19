import HttpService from "@/services/HttpService";

export interface Room{
    id: number;
    name: string;
    description: string;
    points: number;
    uuid: string;
}

export default class RoomService{

    static getUserRooms(idUser:number): Promise<Room[]> {
        return HttpService.get('rooms/idOwner='+idUser);
    }

    static getAll(): Promise<Room[]> {
        return HttpService.get('rooms');
    }

    static add(room: Room): Promise<Room> {
        return HttpService.post('rooms', room);
    }

    static delete(id: number): Promise<Room> {
        return HttpService.delete('rooms/'+id);
    }
}
import {useRouter} from "next/router";
import UIList from "@/components/UIList";
import RoomService, {Room} from "@/pages/api/Room";

function RoomPage({rooms}:{rooms:Room[]}) {

  return (
    <div>
      <h1>Rooms</h1>
      <UIList list={rooms} callback={(room)=>room.name}></UIList>
    </div>
  );
}

let getServersideProps = async (context) => {
    const userId:number = context.query.id as number;
    console.log(userId)
    let rooms=await RoomService.getUserRooms(userId);
    return {
        props: {
            rooms: rooms
        }
    }
};
export {getServersideProps};

export default RoomPage;
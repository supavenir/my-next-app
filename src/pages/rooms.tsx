import {useRouter} from "next/router";
import UIList from "@/components/UIList";
import RoomService, {Room} from "@/pages/api/Room";

function RoomsPage({rooms}:{rooms:Room[]}) {

  return (
    <div>
      <h1>Rooms</h1>
      <UIList list={rooms} callback={(room)=>room.name}></UIList>
    </div>
  );
}

let getServerSideProps = async () => {
    let rooms=await RoomService.getAll();
    return {
        props: {
            rooms: rooms
        }
    }
};
export {getServerSideProps};

export default RoomsPage;
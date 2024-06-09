import { client } from "@/redux/service/axios";
import { ChatRoom, User } from "@/shared/types/aijusrist";

const chatroom = "chat/chatroom/";
const chat = "chat/chat";

class Chat {
  getChatRoomList() {
    return client.get<ChatRoom[]>(chatroom);
  }
  getChatRoomById(id: string) {
    return client.get<ChatRoom>(`${chat}${id}/`);
  }
  addChatRoom(data: Partial<ChatRoom>) {
    return client.post<ChatRoom>(chatroom, data);
  }
}

export default Chat;

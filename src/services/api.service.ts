import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/types.message";
import { UserType } from "@/types/user.types";
const API_URL = "http://localhost:8080/api"
const API_PUBLIC_URL = `${API_URL}/public`

export const getUserData = async (username: string): Promise<UserType> => {
    const res = await fetch(`${API_PUBLIC_URL}/users/${username}`);
  
    if (!res.ok) {
      throw new Error("Failed to retrieve users");
    }
    return res.json();
  };

  export const getUserMessage = async (username: string): Promise<PageType<MessageType>> => {
    const res = await fetch(`${API_PUBLIC_URL}/users/${username}/messages`);
  
    if (!res.ok) {
      throw new Error("Failed to retrieve users messages");
    }
    return res.json();
  };
  
  export const getUserMessageReplies = async (username: string): Promise<PageType<MessageType>> => {
    const res = await fetch(`${API_PUBLIC_URL}/users/${username}/messages/replies`);
  
    if (!res.ok) {
      throw new Error("Failed to retrieve users messages");
    }
    return res.json();
  };
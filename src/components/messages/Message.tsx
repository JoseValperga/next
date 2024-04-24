import { MessageType } from "@/types/types.message";
import Link from "next/link";
import Image from "next/image";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className="flex">
      <div className="rounded-full p-5 bg-gray-300 w-16 text-center mb-4">
        <span className="font-semibold text-sm">AS</span>
      </div>
      <div className="flex flex-col ml-4 mt-2">
        <div className="flex">
          <h3>{message.name}</h3>
          <div className="text-md ml-2 text-gray-600 cursor-pointer">
            @<Link href={`/users/${message.username}`}>{message.username}</Link>
          </div>
        </div>
        <p>{message.message}</p>
        <Image
          src="https://viajes.nationalgeographic.com.es/medio/2022/03/25/la-digue-seychelles_bea7ddd0_1255x836.jpg"
          alt="Picture of the author"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Message;

import { MessageType } from "@/types/types.message";
import Link from "next/link";
import Image from "next/image";

type MessageProps = {
  message: MessageType;
};

const Message = ({ message }: MessageProps) => {
  return (
    <div className="grid grid-cols-12">
      <div className="w-full mt-1 text-center mb-4 block relative h-20 col-span-2 justify-between">
        <Image
          src={message.user.photoUrl}
          priority
          className="rounded-full"
          width={60}
          height={60}
          alt="Picture of the author"
          //sizes="10vw"
          //fill
          //blurDataURL="data:..." automatically provided
          //placeholder="blur" // Optional blur-up while loading
        />
      </div>

      <div className="flex flex-col ml-4 mt-2 col-span-10">
        <div className="flex">
          <h3>{message.user.name}</h3>
          <div className="text-md ml-2 text-gray-600 cursor-pointer">
            @
            <Link href={`/users/${message.user.username}`}>
              {message.user.username}
            </Link>
          </div>
        </div>
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default Message;

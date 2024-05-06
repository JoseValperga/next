import Link from "next/link";
import Image from "next/image";
import PostCounter from "../counters/PostCounter";
import { TrendingUserType } from "@/types/user.types";

type ExploreUsersProps = {
  user: TrendingUserType[];
};

const ExploreUsers = ({ user }: ExploreUsersProps) => {
  if (!user || user.length === 0) return <></>;
  return (
    <>
      <div
        className=" bg-gray-200 rounded-lg px-8 py-4"
        style={{ minWidth: 250 }}
      >
        <h2 className="mb-2">A quien seguir</h2>
        {user.slice(0, 4).map((user, index) => (
          <div
            key={`trending-user-${index}`}
            className="mb-4 grid grid-cols-12"
          >
            <div className="w-full mt-1 text-center mb-4 block relative h-20 col-span-2 justify-between">
              <Image
                src={user.photoUrl}
                priority
                className="rounded-full"
                width={60}
                height={60}
                alt="Picture of the author"
              />
            </div>

            <div className="flex flex-col ml-4 mt-2 col-span-10">
              <div className="flex">
                <h3>{user.name}</h3>
                <div className="text-md ml-2 text-gray-600 cursor-pointer">
                  @<Link href={`/users/${user.username}`}>{user.username}</Link>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      {user.length > 4 && (
        <Link href="/explorar?type=hash">
          <div className=" text-center link-primary">Ver mas</div>
        </Link>
      )}
    </>
  );
};

export default ExploreUsers;

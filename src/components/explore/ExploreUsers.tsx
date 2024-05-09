import Link from "next/link";
import Image from "next/image";
import PostCounter from "../counters/PostCounter";
import { TrendingUserType } from "@/types/user.types";
import UserCard, { UserCardLayout } from "../users/UserCard";

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
          <UserCard
            user={user}
            key={`trending-user-${index}`}
            layout={UserCardLayout.VERTICAL}
          />
        ))}
        {user.length > 4 && (
          <Link href="/explore?type=USERS">
            <div className=" text-center link-primary">Ver mas</div>
          </Link>
        )}{" "}
      </div>
    </>
  );
};

export default ExploreUsers;

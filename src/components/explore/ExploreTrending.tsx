import Link from "next/link";
import PostCounter from "../counters/PostCounter";
import { Hashtag } from "@/types/hash.types";

type ExploreTrendingProps = {
  hashes: Hashtag[];
};

const ExploreTrending = ({ hashes }: ExploreTrendingProps) => {
  if (!hashes || hashes.length === 0) return <></>;
  return (
    <div>
      <div
        className=" bg-gray-200 rounded-lg px-8 py-4"
        style={{ minWidth: 250 }}
      >
        <h2 className="mb-2">Trending</h2>
        {hashes.slice(0, 2).map((hash, index) => (
          <div className=" mb-4" key={`trending-hash-${index}`}>
            <Link href={"/mensajes?query=Hash_1&type=hash"}>
              <h4 className=" font-semibold cursor-pointer p-1">
                #{hash.hash}
              </h4>
            </Link>
            <div className="px-1">
              <PostCounter count={hash.count} />
            </div>
          </div>
        ))}
      </div>
      {hashes.length > 2 && (
        <Link href="/explorar?type=hash">
          <div className=" text-center link-primary">Ver mas</div>
        </Link>
      )}
    </div>
  );
};

export default ExploreTrending;

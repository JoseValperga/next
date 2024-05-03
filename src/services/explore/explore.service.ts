import { PageType } from "@/types/pagination.types";
import { MessageType } from "@/types/types.message";
import { UserType } from "@/types/user.types";
import { httpGet, httpGetPublic } from "../common/http.service";
import { TrendingHashtag } from "@/types/hash.types";

class ExploreAPI {
  getTrendingHashtags = async (page: number, size: number): Promise<PageType<TrendingHashtag>> =>
    httpGetPublic(
      `/explore/trending`,
      new URLSearchParams({ page: `${page}`, size: `${size}` })
    );
    getFollowRecommendation = async (page: number, size: number): Promise<UserType> =>
      httpGetPublic(
        `/explore/follow-recommendations`,
        new URLSearchParams({ page: `${page}`, size: `${size}` })
      );
      
}

const exploreApi = new ExploreAPI();

export default exploreApi;

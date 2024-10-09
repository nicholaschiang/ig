import * as fs from "fs";
import * as progress from "cli-progress";

type User = {
  pk: number;
  pk_id: number;
  id: number;
  username: string;
  full_name: string;
  is_private: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  is_verified: boolean;
  is_favorite: boolean;
};

type ResponseJSON = {
  users: User[];
  big_list: boolean;
  page_size: number;
  next_max_id: string | null;
  has_more: boolean;
};

const lastUnfollowedIndex = 200;
const dryRun = false;
const file = "following.json";
const pageSize = 100;

async function getFollowing() {
  let maxId: string | null = "0";
  let res: Response;
  let json: ResponseJSON;
  const following: User[] = [];
  while (maxId != null) {
    console.log(`Fetching following with maxId: ${maxId}`);
    res = await fetch(
      `https://www.instagram.com/api/v1/friendships/7970116605/following/?count=${pageSize}&max_id=${maxId}`,
      {
        headers: {
          Host: "www.instagram.com",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
          Accept: "application/json",
          "Accept-Language": "en-US,en;q=0.5",
          "Accept-Encoding": "identity",
          "X-CSRFToken": "8vRZbqH4cd02zYMsW173DapIz2lwLSJg",
          "X-IG-App-ID": "936619743392459",
          "X-ASBD-ID": "129477",
          "X-IG-WWW-Claim":
            "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjIyC",
          "X-Requested-With": "XMLHttpRequest",
          DNT: "1",
          Connection: "keep-alive",
          Referer: "https://www.instagram.com/niicholaschiiang/following/",
          Cookie:
            'csrftoken=8vRZbqH4cd02zYMsW173DapIz2lwLSJg; wd=1103x1012; mid=ZwbZVQAEAAGUk0-g3Thb6ddxi1PI; datr=VdkGZ1n2YF29y5hI7b-J6bVC; ig_did=F6210A12-46FC-45E7-AB8D-403C4493B55E; rur="CCO\x2c547970116605\x2c541760039578:01f774761037946540a1eefef464fbfbe053311c79b3fc13e694d4997f065cdf1b8482e1"; ds_user_id=7970116605; sessionid=7970116605%3AjfxJuolPcdjdGd%3A26%3AAYfyfiWqTU03Vl64fo3J80_KKP9nN-5th5UHF3McGg',
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
          Priority: "u=0",
          TE: "trailers",
        },
      }
    );
    json = (await res.json()) as ResponseJSON;
    maxId = json.next_max_id;
    following.push(...json.users);
    console.log(`Fetched ${json.users.length}, total: ${following.length}`);
  }
  fs.writeFileSync(file, JSON.stringify(following, null, 2));
}

async function unfollow() {
  const following: User[] = JSON.parse(fs.readFileSync(file, "utf-8"));

  // Ideally, I wanted to unfollow all public accounts that have more than
  // 10,000 followers. However, to save time, I am simply going to unfollow all
  // public accounts. I can always re-follow them later.
  const usersToUnfollow = following.filter((user) => user.is_private === false);

  console.log(`Unfollowing ${usersToUnfollow.length} public profiles...`);
  console.log(
    `After this script, you will be following ${
      following.length - usersToUnfollow.length
    } users. You were previously following ${following.length} users.`
  );

  const bar = new progress.SingleBar({}, progress.Presets.shades_classic);
  bar.start(usersToUnfollow.length, lastUnfollowedIndex);

  for (const user of usersToUnfollow.slice(lastUnfollowedIndex)) {
    if (!dryRun) {
      console.log(`Unfollowing public account ${user.username}...`);
      const res = await fetch(
        `https://www.instagram.com/api/v1/friendships/destroy/${user.id}/`,
        {
          method: "POST",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:131.0) Gecko/20100101 Firefox/131.0",
            Accept: "application/json",
            "Accept-Language": "en-US,en;q=0.5",
            "Accept-Encoding": "identity",
            "X-CSRFToken": "8vRZbqH4cd02zYMsW173DapIz2lwLSJg",
            "X-Instagram-AJAX": "1017196109",
            "X-IG-App-ID": "936619743392459",
            "X-ASBD-ID": "129477",
            "X-IG-WWW-Claim":
              "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjIyC",
            "Content-Type": "application/x-www-form-urlencoded",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Length": "292",
            Origin: "https://www.instagram.com",
            DNT: "1",
            Connection: "keep-alive",
            Referer: "https://www.instagram.com/niicholaschiiang/following/",
            Cookie:
              'csrftoken=8vRZbqH4cd02zYMsW173DapIz2lwLSJg; wd=1103x1012; mid=ZwbZVQAEAAGUk0-g3Thb6ddxi1PI; datr=VdkGZ1n2YF29y5hI7b-J6bVC; ig_did=F6210A12-46FC-45E7-AB8D-403C4493B55E; rur="CCO\x2c547970116605\x2c541760039578:01f774761037946540a1eefef464fbfbe053311c79b3fc13e694d4997f065cdf1b8482e1"; ds_user_id=7970116605; sessionid=7970116605%3AjfxJuolPcdjdGd%3A26%3AAYfyfiWqTU03Vl64fo3J80_KKP9nN-5th5UHF3McGg',
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            Priority: "u=0",
            TE: "trailers",
          },
        }
      );
      if (res.ok && res.status === 200) {
        console.log(`Unfollowed: ${user.username}`);
      } else {
        console.error(`Failed to unfollow: ${user.username}`);
        console.log(res);
      }
    }
    bar.increment();
  }
  bar.stop();
}

unfollow();

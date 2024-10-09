import * as fs from "fs";

async function main() {
  let res = await fetch(
    "https://www.instagram.com/api/v1/friendships/7970116605/following/?count=10",
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
          "hmac.AR1O-JzAk0d_Q8-hmHaet3z4so0_tNG73uMCc2g7Yx7AjKfp",
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
  console.log(res);
  fs.writeFileSync("following.json", JSON.stringify(await res.json(), null, 2));
}

main();

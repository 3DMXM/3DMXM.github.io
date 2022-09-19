import axios from 'axios';



export async function BingPush(host: string, urlList: Array<string>, key: string = "33ffe7c0ae6c439cb5b41d4bd80393c0") {

    let url: string = "https://www.bing.com/indexnow"

    let data = {
        key: key,
        host: host,
        "keyLocation": `https://${host}/${key}.txt`,
        urlList: urlList
    }
    // console.log(data);
    return axios.post(url, data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
}

export async function BaiduPush(params: any) {

}
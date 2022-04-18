import axios from "axios";
const KEY = "AIzaSyDeRZowW5ozajaPiMoK70GwSvdiWUxMkDE";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part : "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
});

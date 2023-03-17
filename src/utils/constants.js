
const GOOGLE_API_KEY =  "";

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}&maxResults=50`;

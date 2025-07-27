import { buildQueryString } from "@/utils/string-helper";
import ApiServiceService from "./ApiService.service";

export default function BlogService() {
    const API_ENDPOINT = "/blogs";

    async function getBlogsData(props) {
        return await ApiServiceService.get(`${API_ENDPOINT}/get-blogs`, props);
    }

    return {
        getBlogsData
    };
}
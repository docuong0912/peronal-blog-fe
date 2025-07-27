import ApiService from "./ApiService.service"

export default function PageService() {
    const API_ENDPOINT = "/home"
    async function getHomePageData(){
        return await ApiService.get(API_ENDPOINT)
    }
    return{
        getHomePageData
    }
}
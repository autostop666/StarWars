import { openApi } from "../../../shared/api/api"
import { BASE_URL } from "../../../shared/const/const"

export const getHumanForId = (id: string ) =>{
    return openApi(BASE_URL).get(`/people/${id }`)
}
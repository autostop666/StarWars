import { openApi } from "../../../shared/api/api"
import { LOCAL_URL } from "../../../shared/const/const"
import { ApplicationsPostType } from "../types/types";

export const postApplicationService = (payload: ApplicationsPostType) =>{
    return openApi(LOCAL_URL).post("/applications", payload);
}
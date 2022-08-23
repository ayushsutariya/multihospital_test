import { getRequest, postRequest } from "./Request"

export const GetAuthData = () => {
    return getRequest("auth_data")
}

export const PostAuthData = (data) => {
    return postRequest("auth_data" , data)
}
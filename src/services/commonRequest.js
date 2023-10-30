import axios from "axios";

export const commonRequest = async (method, url, body) => {
    let config = {
        method: method,
        url: url,
        data: body
    }
    return await axios(config).then(data => {
        return data;
    }).catch(error => {
        return error;
    });

    // or     (config definition only)
    // let config = {
    //     method,
    //     url,
    //     data: body
    // }


}
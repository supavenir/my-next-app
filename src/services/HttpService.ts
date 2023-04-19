export const API_URL = 'http://127.0.0.1:8090/api/';
//Wrapper for the fetch api
class HttpService {
    static get(url: string, headers?: any): Promise<any> {
        return fetch(API_URL+url, {
            method: 'GET',
            headers: headers
        }).then(response => {
            return response.json();
        });
    }
}
export default HttpService;
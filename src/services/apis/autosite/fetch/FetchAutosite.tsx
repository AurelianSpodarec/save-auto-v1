import { getResponseContent, RequestError } from 'services/requests';
import config from './config_autosite';

const FetchAutosite = async function (endpoint:string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', data?:any) {
    const tokenStorage = localStorage.getItem('jwtToken')
    const token = tokenStorage && JSON.parse(tokenStorage).access
        
    const headers:any = {
        'Content-Type': 'application/json',
        Accept: 'application/json', 
    };
    if (token) headers.Authorization = `Bearer ${token}`;

    const response = await fetch(`${config.API_URL}/${endpoint}`, {
        method,
        headers,
        body: JSON.stringify(data)
    })

    const content = await getResponseContent(response)
   
    if (response.ok) return content;
    return {
        text: response.statusText, 
        status: response.status, 
        content,
        response: response
    }
    // throw new RequestError(response.statusText, response.status, content)
}

export default FetchAutosite;

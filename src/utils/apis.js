const baseUrlFirst = 'https://be.pixiflex.com';
// const baseUrlFirst = 'http://127.0.0.1:8000';
const baseUrlSecond = 'https://scraper.pixiflex.com';
// const baseUrlSecond = 'http://localhost:3006';

function jsonToFormData(dataObj) {
    if (dataObj instanceof FormData) {
        return dataObj;
    }

    let formData = new FormData();
    for (let index in dataObj) {
        if (dataObj.hasOwnProperty(index))
            formData.append(index, dataObj[index]);
    }

    return formData;
}

export function getLocalStorageData(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }
    return null;
}

export function setLocalStorageData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorageData(key) {
    localStorage.removeItem(key);
}

// Fetch get call
async function getCall(route, baseUrl, params = []) {
    let url = new URL(route, baseUrl);
    params.forEach(param => {
        if (param.hasOwnProperty('name') && param.hasOwnProperty('val')) {
            url.searchParams.set(param.name, param.val);
        }
    });

    let res = await fetch(url.toString());
    res = await res.json();

    return res;
}

// Fetch post call
async function postCall(route, baseUrl, body = {}) {
    let url = new URL(route, baseUrl);
    let userData = getLocalStorageData('ud');
    let token = null;
    if (userData) {
        token = userData.token;
    }

    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    if (token) {
        myHeaders.append("Authorization", `Bearer ${token}`);
    }

    let options = {
        method: 'POST',
        headers: myHeaders,
        body: jsonToFormData(body)
    }

    let res = await fetch(url.toString(), options);

    res = await res.json();

    return res;
}

export const testCall = async () => {
     await getCall('/api/test', baseUrlFirst, [{name: 'a', val: '123qw'}]);
}

export const register = async (data) => {
    return await postCall('/api/register', baseUrlFirst, data);
}

export const login = async (data) => {
    return await postCall('/api/login', baseUrlFirst, data);
}

export const logout = async () => {
    return await postCall('/api/logout', baseUrlFirst, {});
}

export const getFileContent = async (data) => {
    return await postCall('/api/data/file-handle', baseUrlFirst, data);
}

export const summary = async (data) => {
    return await postCall('/api/data/summary', baseUrlFirst, data);
}

export const assistant = async (data) => {
    return await postCall('/api/data/assistance', baseUrlFirst, data);
}

export const scrapData = async (url) => {
    return await getCall(`/scrap?url=${url}`, baseUrlSecond, []);
}
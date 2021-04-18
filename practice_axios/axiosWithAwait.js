const axios = require('axios').default;
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const connectToUrl = (url) => {
    console.log('before connecting to url: ', url);
    const res = axios.get(url);
    console.log('connection closed.')
    return res;
}

const getUserInfo = async ({id}) => {
    const res = await connectToUrl(apiUrl + `/${id}`);
    const {status, data} = res;
        if(status === 200){
            console.log(data);
        }
};

const getUserList = async() => {
    const res = await connectToUrl(apiUrl);
    const {status, data} = res;
        if(status === 200){
            data.slice(0, 3).forEach(user => 
                getUserInfo(user).catch(err => console.log(err.toString())));
        }
};

getUserList().catch(err => console.log(err.toString()));
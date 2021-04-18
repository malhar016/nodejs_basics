const axios = require('axios').default;
const apiUrl = "https://jsonplaceholder.typicode.com/users";

const connectToUrl = (url) => {
    console.log('before connecting to url: ', url);
    const promise = axios.get(url);
    console.log('connection closed.')
    return promise;
}

const getUserInfo = userList => {
    for(let i =0; i < 3; i ++ ) {
        const req = connectToUrl(apiUrl + `/${userList[i].id}`);
        req.then(res => {
            const {status, data} = res;
            if(status === 200){
                console.log(data);
            }
        }).catch(err => {
            console.log(err.toString());
        });
    }
};

const getUserList = () => {
    const req = connectToUrl(apiUrl);
    req.then(res => {
        const {status, data} = res;
        if(status === 200){
            getUserInfo(data);
        }
    }).catch(err => {
        console.log(err.toString());
    });
}

getUserList();

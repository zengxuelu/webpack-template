import 'es6-promise/auto';
import 'babel-polyfill';
import axios from 'axios';

axios({
    method: 'post',
    url: 'http://192.168.140.56:3000/api/upload/checkAppVersion'
})
.then(res => {
    if (res.data.code == 1) {
        alert("test");
    }
})
.catch((err) => {
    console.log(err);
});

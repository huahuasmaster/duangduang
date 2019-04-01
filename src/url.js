import axios from 'axios';

import store from './store'


export const instance = axios.create({
    // axios 实例配置，如没有其他配置项，可以置空
});

instance.interceptors.response.use(
    (resp) => {
            // 判断是否正常
        // console.log(resp);
            if (resp.data.result === true) {
                return resp.data.data;
            } else {
                store.dispatch('alert', {type: "error", content: resp.data.errorMsg});
            }
    },
    error => {
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));
        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '访问的资源不存在'
            : '网络异常，请重试';
        store.dispatch('alert', {type: "error", content: text});
        return Promise.reject(error)

    }
);

export const User = {
    test() {
        return instance.get('/duangduang/api/users/test');
    }
};

export const Book = {
    list: () => {
        return instance.get('/duangduang/api/books');
    },
};

export const Address = {
    listByUserId: (userId) => {
        return instance.get(`/duangduang/api/users/${userId}/addresses`);
    },
};
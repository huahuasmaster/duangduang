import axios from 'axios';

import store from './store'


export const instance = axios.create({
    // axios 实例配置，如没有其他配置项，可以置空
});

// 错误拦截
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
        console.log(JSON.stringify(error));// No message available
        let message = JSON.parse(JSON.stringify(error)).response.status.message;
        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '访问的资源不存在'
            : message === 'No message available' ? "网络出错，请重试" : message;
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
    get: id => instance.get(`/duangduang/api/books/${id}`),
};

export const Address = {
    listByUserId: (userId) => {
        return instance.get(`/duangduang/api/users/${userId}/addresses`);
    },
};

export const Order = {
    place: (params) => {
        return instance.post('duangduang/api/orders', params, {});
    },
    pay: (id, params) => instance.put(`duangduang/api/orders/${id}/payStatus`, params, {}),
};

export const Bury = {
    bury: (params) => {
        return instance.post("/duangduang/api/buries", params)
    },
}
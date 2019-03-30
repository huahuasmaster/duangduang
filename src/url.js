import axios from 'axios';

export const instance = axios.create({
    // axios 实例配置，如没有其他配置项，可以置空
});

export const User = {
    test() {
        return instance.get('/duangduang/api/user/test');
    }
}
import Vue from 'vue'
import {Bury} from "../url";
import store from '../store';

Vue.prototype.$log = function (event, app, data={}, dom={}) {
    let params = {
        event,
        path: app.$route.path,
        data,
        triggerDate: (new Date()).valueOf(),
        userId: store.state.userId,
        dom,
    };
    // console.log('开始埋点');
    console.log(params);
    Bury.bury(params)
        .then((resp) => {
            // console.log("埋点成功");
        })
        .catch((error) => {
            // console.log("埋点失败");
        })
};
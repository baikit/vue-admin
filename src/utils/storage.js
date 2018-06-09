/*
* 公共js部分
* 存储sessionStorage
*/
export default {
    install(Vue, options) {

        Vue.prototype.setStorage = function (name, value) {

            if (!name) return;
            if (typeof value !== 'string') {
                value = JSON.stringify(value)
            }

            sessionStorage.setItem('name', value)
        };

        Vue.prototype.getStorage = function (name) {
            if (!name) return;
            return sessionStorage.getItem(name)
        };

        Vue.prototype.delStorage = function (name) {
            if (!name) return;
            sessionStorage.removeItem(name)
        };

    }
}


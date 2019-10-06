/*
 * @Author: Harry 
 * @Date: 2019-10-01 02:52:12 
 * @Last Modified by: Harry-mac
 * @Last Modified time: 2019-10-04 14:50:37
 */

var api = {
    home:{
        url:"/home",
        name:"系统首页"
    },
    login:{
        url:"/login",
        name:"登录页面"
    },
    page1:{
        url:"page1",
        name:"页面一"
    },
    page2:{
        url:"page2",
        name:"页面二"
    },
}

export default {
    getHome(){
        return api.home.url;
    },
    getHomeName(){
        return api.home.name;
    },
    getLogin(){
        return api.login.url;
    },
    getLoginName(){
        return api.login.name;
    },
    getPage1(){
        return api.page1.url;
    },
    getPage1Name(){
        return api.page1.name;
    },
    getPage1CompleteUrl(){
        return api.home.url + "/" + api.page1.url;
    },
    getPage2(){
        return api.page2.url;
    },
    getPage2Name(){
        return api.page2.name;
    },
    getPage2CompleteUrl(){
        return api.home.url + "/" + api.page2.url;
    }
}
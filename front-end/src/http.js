import axios from 'axios'

axios.defaults.timeout = 5000
axios.defaults.baseURL = 'http://localhost:5000/api'

axios.interceptors.request.use(
    (config)=>{
        const token = window.localStorage.getItem('madblog-token')
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
    },
    (error)=>{
        return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response
  }, function (error) {
    // Do something with response error
    switch  (error.response.status) {
      case 401:
        // 清除 Token 及 已认证 等状态
        store.logoutAction()
        // 跳转到登录页
        if (router.currentRoute.path !== '/login') {
          Vue.toasted.error('401: 认证已失效，请先登录', { icon: 'fingerprint' })
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.path },
          })
        }
        break
  
      case 404:
        Vue.toasted.error('404: NOT FOUND', { icon: 'fingerprint' })
        router.back()
        break
    }
    return Promise.reject(error)
  })
  
export default axios
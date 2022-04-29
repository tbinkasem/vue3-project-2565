<template>
  <div>HEADER</div>
  <router-view />
  <div>FOOTER</div>
  <div id="dialog">
  </div>
</template>
<script>
import axios from 'axios'
import { store } from '../stores/store.js'
export default {
  async beforeRouteEnter(from, to, next) {
    let token = localStorage.getItem('token')
    if (!token) {
      return next('/signin')
    }
    // GET PROFILE
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    // axios.defaults.headers.common['X-Powered-By'] = 'Somsak'
    let { data } = await axios.get('/api/profile')
    if (!data.profile) {
      return next('/signin')
    }
    store.profile = data.profile
    next()
  },
}
</script>

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import BlackIndex from '@/components/blackindex'
import CourseList from '@/components/courseList'
import CourseEdit from '@/components/courseEdit'
import IndexContent from '@/components/indexContent'
import AdminList from '@/components/adminList'
import StudentList from '@/components/studentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/blackindex',
      name: 'blackindex',
      component: BlackIndex,
      children: [
        {
          path: 'courseList', // 课程列表
          component: CourseList
        },
        {
          path: 'courseEdit/:sysId', //编辑课程
          component: CourseEdit
        },
        {
          path: 'indexContent', // 首页统计
          component: IndexContent
        },
        {
          path: 'adminList', // 后台用户
          component: AdminList
        },
        {
          path: 'studentList', // 学员用户
          component: StudentList
        },
        {
          path: '*', //其他页面跳转到首页
          component: IndexContent
        }
      ]
    }
  ]
})

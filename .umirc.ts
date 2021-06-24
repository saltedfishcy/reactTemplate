import { defineConfig } from 'umi';
export default defineConfig({
  title: '管理平台业务模版',
  nodeModulesTransform: { type: 'none' },
  layout: { name: '数据管理菜单', locale: false },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/dashboard',
      name: '数据统计',
      icon: 'dashboard',
      routes: [
        {
          path: '/dashboard/analysis',
          icon: 'AreaChartOutlined',
          name: '分析页',
          component: '@/pages/Dashboard/Analysis',
        },
      ],
    },
    { component: '@/pages/404' },
  ],
});

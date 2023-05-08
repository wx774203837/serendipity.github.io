export const categoryMap = {"category":{"/":{"path":"/category/","map":{"教程":{"path":"/category/%E6%95%99%E7%A8%8B/","keys":["v-0bba2201","v-fb378c56","v-c00cb85c","v-6ce7f4e2"]},"面试":{"path":"/category/%E9%9D%A2%E8%AF%95/","keys":["v-513103a4"]}}}},"tag":{"/":{"path":"/tag/","map":{"Nvm":{"path":"/tag/nvm/","keys":["v-c00cb85c"]},"Node":{"path":"/tag/node/","keys":["v-c00cb85c"]},"Blog":{"path":"/tag/blog/","keys":["v-6ce7f4e2"]},"Github":{"path":"/tag/github/","keys":["v-0bba2201"]},"Vercel":{"path":"/tag/vercel/","keys":["v-fb378c56"]},"插件":{"path":"/tag/%E6%8F%92%E4%BB%B6/","keys":["v-fb378c56"]},"css":{"path":"/tag/css/","keys":["v-513103a4"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });



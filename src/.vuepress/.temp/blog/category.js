export const categoryMap = {"category":{"/":{"path":"/category/","map":{"指南":{"path":"/category/%E6%8C%87%E5%8D%97/","keys":["v-c00cb85c","v-6ce7f4e2","v-0bba2201"]}}}},"tag":{"/":{"path":"/tag/","map":{}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });



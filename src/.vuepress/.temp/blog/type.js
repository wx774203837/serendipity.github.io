export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-0bba2201","v-fb378c56","v-c00cb85c","v-6ce7f4e2"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-0bba2201","v-fb378c56","v-c00cb85c","v-6ce7f4e2"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });


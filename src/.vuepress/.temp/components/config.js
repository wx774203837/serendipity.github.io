import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/shared.js";
import { h } from "vue";

import { useStyleTag } from "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/vueuse.js";
import Badge from "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "F:/vue-blog/vueBlog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.201_vuepress@2.0.0-beta.61/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
  ],
});

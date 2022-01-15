module.exports = {
  extends: ["next", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/web/"],
    },
  },
  rules: {
    "no-html-link-for-pages": "off",
  },
};

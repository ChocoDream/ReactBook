/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    //directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  alias: {
    components: "./src/components",
    "@app": "./src",
  },
  plugins: ["@snowpack/plugin-react-refresh", "@snowpack/plugin-sass"],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

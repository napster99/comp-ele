import babel from "rollup-plugin-babel";
import vuePlugin from "rollup-plugin-vue";

const formatArr = ["amd", "cjs", "es", "iife", "umd"];

export default formatArr.map((item) => {
  return {
    input: 'src/entry.js',
    output: {
      file: `dist/bundle_${item}.js`,
      format: item,
      name: "Element",
      globals: {
        vue: "Vue",
      },
    },
    plugins: [
      vuePlugin(),
      babel({
        exclude: ["node_modules/**"],
      }),
    ],
    external: ["vue"],
  };
});

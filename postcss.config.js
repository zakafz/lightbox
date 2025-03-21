module.exports = {
  plugins: [
    require("tailwindcss")(),
    require("autoprefixer")(),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: { removeAll: true },
          discardUnused: true,               
          mergeIdents: true,                
          reduceIdents: true,                
          zindex: false,                      
        },
      ],
    }),
  ],
};

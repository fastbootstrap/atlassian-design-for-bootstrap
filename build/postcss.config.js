"use strict";

const mapConfig = {
  inline: false,
  annotation: true,
  sourcesContent: true,
};

module.exports = (context) => {
  return {
    map: mapConfig,
    plugins: {
      autoprefixer: {
        cascade: false,
      },
      rtlcss: context.env === "RTL",
    },
  };
};

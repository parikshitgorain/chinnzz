export default function (eleventyConfig) {
  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPassthroughCopy({ "src/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "../content/media": "media" });
  eleventyConfig.addPassthroughCopy({ "../public/favicon.svg": "favicon.svg" });
  eleventyConfig.addPassthroughCopy({ "../public/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "../public/apple-touch-icon.png": "apple-touch-icon.png" });
  eleventyConfig.addPassthroughCopy({ "../public/_headers": "_headers" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}

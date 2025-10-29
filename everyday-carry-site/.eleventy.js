module.exports = function(eleventyConfig) {
  // Set the input and output directories
  eleventyConfig.setInputDir("src");
  eleventyConfig.setOutputDir("_site");

  // Add a shortcode for image rendering
  eleventyConfig.addShortcode("image", function(src, alt) {
    return `<img src="${src}" alt="${alt}" loading="lazy">`;
  });

  // Passthrough copy for CSS files
  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layout.liquid"
    }
  };
};
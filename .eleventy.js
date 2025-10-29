// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  // A small reusable card shortcode for listing items on the homepage.
  // Usage in Liquid: {% itemCard "AirPods", "/items/airpods/", "/images/airpods.jpg", "Short excerpt..." %}
  eleventyConfig.addShortcode("itemCard", function(title, url, img, desc) {
    return `
      <article class="card">
        <a href="${url}">
          <img src="${img}" alt="${title}" class="card-img" />
          <div class="card-body">
            <h3 class="card-title">${title}</h3>
            <p class="card-excerpt">${desc}</p>
          </div>
        </a>
      </article>
    `;
  });

  return {
    // keep Eleventy defaults (root project) so _includes is used as-is
    passthroughFileCopy: true
  };
};
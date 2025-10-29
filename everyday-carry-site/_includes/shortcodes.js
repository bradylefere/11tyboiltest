// This file defines a shortcode for rendering an item card with a title and description.

module.exports = function(eleventyConfig) {
  eleventyConfig.addShortcode("itemCard", function(title, description, imageUrl) {
    return `
      <div class="item-card">
        <img src="${imageUrl}" alt="${title}" class="item-image">
        <h2 class="item-title">${title}</h2>
        <p class="item-description">${description}</p>
      </div>
    `;
  });
};
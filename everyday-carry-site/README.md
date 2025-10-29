# Everyday Carry Website

## Project Description
This project is an Everyday Carry (EDC) website that showcases three essential items: a pocket knife, a wallet, and a flashlight. Each item has its own dedicated page with descriptions and images, while the homepage provides an overview of all items.

## Project Structure
The project is organized as follows:

```
everyday-carry-site
├── src
│   ├── index.md              # Homepage listing all items
│   ├── items
│   │   ├── pocket-knife.md   # Page for the pocket knife
│   │   ├── wallet.md         # Page for the wallet
│   │   └── flashlight.md     # Page for the flashlight
│   └── styles
│       └── screen.css        # CSS styles for the website
├── _includes
│   ├── layout.liquid         # Main layout file
│   ├── components
│   │   └── item-card.liquid  # Reusable component for item display
│   └── shortcodes.js         # Shortcodes for reusable content
├── _data
│   └── site.json             # Site-wide data
├── .eleventy.js              # Eleventy configuration file
├── package.json              # npm configuration file
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd everyday-carry-site
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the development server**:
   ```
   npx eleventy --serve
   ```

4. **Open your browser**:
   Navigate to `http://localhost:8080` to view the site.

## Features
- **Responsive Design**: The site is designed to be mobile-friendly.
- **Reusable Components**: Item cards are created using a reusable component for consistency.
- **Shortcodes**: JavaScript shortcodes are available for reusable content across the site.

## Deployment
The site can be deployed on platforms like Netlify. Follow the instructions on the Netlify website for deployment.

## License
This project is licensed under the MIT License.
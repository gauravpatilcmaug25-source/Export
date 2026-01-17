# VR AGRICO - Project Documentation

## Project Overview
VR AGRICO is a modern, responsive web application designed for a leading Indian agricultural exporter. The website showcases premium products like vegetables, fruits, spices, pulses, and cereals to a global audience. It features a dynamic product catalog, professional company information, and an optimized user experience for international buyers.

## How to Update Products
To add new products or modify existing ones, you only need to edit one file:
**File:** `src/data/products.js`

1. Open the file `src/data/products.js`.
2. Locate the category you want to edit (e.g., `vegetables`, `fruits`).
3. To **add a product**, add a new object to the `products` array:
   ```javascript
   { name: "Product Name", image: "/assets/products/category/your_image.webp" }
   ```
4. To **edit a product**, simply change the `name` or `image` path of an existing entry.

## How to Change Images
All product images are stored locally to ensure fast loading and reliability.

1. **Prepare your image**:
   - Save your image in **WebP** format for best performance.
   - Name it clearly (e.g., `garlic.webp`, `onion.webp`).

2. **Save the image**:
   - Place the image in the correct folder under `public/assets/products/`.
   - Example: New fruit images go in `public/assets/products/fruits/`.

3. **Link references**:
   - Update `src/data/products.js` to point to your new image:
     ```javascript
     image: "/assets/products/fruits/new-fruit.webp"
     ```

**Note**: Avoid using external links (http://...) as they may break or slow down the site. Always download and save images locally.

## Deployment
This project is set up for automatic deployment via Vercel (or similar platforms connected to GitHub).

1. **Save your changes**:
   - git add .
   - git commit -m "Updated products"

2. **Push to GitHub**:
   - git push origin main

3. **Automatic Update**:
   - Vercel will detect the new commit and automatically build and deploy the updated website.

## Developer Notes
- **React Framework**: Built with Vite + React.
- **Styling**: TailwindCSS for modern, responsive design.
- **Icons**: Lucide-React.
- **Performance**: Optimized with local assets and code splitting.

# 📸 VR AGRICO - Images & Products Management Guide

## Table of Contents
1. [Data Flow](#data-flow)
2. [Where to Change Images](#where-to-change-images)
3. [How to Add New Products](#how-to-add-new-products)
4. [Image Directory Structure](#image-directory-structure)
5. [Quick Reference](#quick-reference)

---

## 🔄 Data Flow

### How Data Flows Through the Application:

```
src/data/products.js (Product Data)
        ↓
        ├→ src/pages/Products.jsx (Product Category Page)
        │   ├→ Shows category banner
        │   ├→ Shows category navigation buttons
        │   ├→ Displays product grid (4 columns)
        │
        ├→ src/components/ProductScroller.jsx (Home Page Scroller)
        │   ├→ Flattens all products from all categories
        │   ├→ Shows horizontal scrolling product cards
        │
        └→ src/components/CategorySection.jsx (Category Cards)
            ├→ Displays all product categories
            ├→ Shows category cards with images
```

### Data Structure:
```javascript
productData = {
  categoryName: {
    title: "Display Title",           // Shown on banner
    banner: "/path/to/banner.webp",  // Category page banner
    products: [
      {
        name: "Product Name",         // Product title
        image: "/path/to/image.webp"  // Product image
      }
    ]
  }
}
```

---

## 🖼️ Where to Change Images

### 1. **Category Banner Images** (Top of Product Pages)
**Location:** `src/data/products.js` → `banner` field

**Current Banners:**
```javascript
vegetables: { banner: "/assets/products/vegetables/banner.webp" }
fruits: { banner: "/assets/products/fruits/banner.webp" }
iqf: { banner: "/assets/products/iqf/banner.webp" }
spices: { banner: "/assets/products/spices/banner.webp" }
pulses: { banner: "/assets/products/pulses/banner.webp" }
cereals: { banner: "/assets/products/cereals/banner.webp" }
```

**File Path:** `public/assets/products/{category}/banner.webp`

**How to Change:**
```javascript
// In src/data/products.js
vegetables: {
  title: "Fresh Vegetables",
  banner: "/assets/products/vegetables/banner.webp",  // Change this path
  products: [...]
}
```

---

### 2. **Individual Product Images**
**Location:** `src/data/products.js` → `products[].image` field

**Current Structure:**
```javascript
vegetables: {
  products: [
    { name: "Potato", image: "/assets/products/vegetables/potato.webp" },
    { name: "Yam", image: "/assets/products/vegetables/yam.webp" },
    // ... more products
  ]
}
```

**File Path:** `public/assets/products/{category}/{product-name}.webp`

**How to Change:**
```javascript
{ 
  name: "Potato", 
  image: "/assets/products/vegetables/new_potato_image.webp"  // Change this
}
```

---

### 3. **Home Page Images** (Special Locations)

#### a) **CTA Section Background (Partner with VR AGRICO)**
**File:** `src/pages/Home.jsx` (Line ~120)
```jsx
<img
  src="/assets/products/home/partner_bg.webp"  // ← Change this
  alt="Agriculture"
  loading="lazy"
/>
```
**File Path:** `public/assets/products/home/partner_bg.webp`

#### b) **HeroSlider Images** (Large banner slider on home)
**File:** `src/components/HeroSlider.jsx` (Line ~4-27)
```javascript
const slides = [
  {
    image: "/assets/products/vegetables/banner.webp",  // Change these
  },
  {
    image: "/assets/products/fruits/banner.webp",
  },
  // ... more slides
]
```

#### c) **About Page Header Image**
**File:** `src/pages/About.jsx` (Line ~10)
```jsx
<img
  src="/assets/products/about/header.webp"  // ← Change this
  alt="Agricultural Field"
  loading="lazy"
/>
```
**File Path:** `public/assets/products/about/header.webp`

---

## ➕ How to Add New Products

### Step 1: Prepare Your Image
- Save image as `.webp` format for best performance
- Place in correct category folder: `public/assets/products/{category}/`
- Example: `public/assets/products/vegetables/carrot.webp`

### Step 2: Add to Data File
**File:** `src/data/products.js`

```javascript
vegetables: {
  title: "Fresh Vegetables",
  banner: "/assets/products/vegetables/banner.webp",
  products: [
    { name: "Potato", image: "/assets/products/vegetables/potato.webp" },
    { name: "Yam", image: "/assets/products/vegetables/yam.webp" },
    // ... existing products
    
    // NEW PRODUCT - Add here
    { name: "Carrot", image: "/assets/products/vegetables/carrot.webp" },
    { name: "Broccoli", image: "/assets/products/vegetables/broccoli.webp" },
  ]
}
```

### Step 3: Done! 
The product will automatically appear in:
- ✅ Product category page (grid)
- ✅ Home page product scroller
- ✅ Category section cards

---

## 🗂️ Image Directory Structure

```
public/
└── assets/
    └── products/
        ├── vegetables/
        │   ├── banner.webp          (Category banner)
        │   ├── potato.webp
        │   ├── yam.webp
        │   ├── onion.webp
        │   ├── drumstick.webp
        │   ├── green_pea.webp
        │   └── sweet_potato.webp
        │
        ├── fruits/
        │   ├── banner.webp
        │   ├── grapes.webp
        │   ├── guava.webp
        │   ├── banana.webp
        │   └── lemon.webp
        │
        ├── spices/
        │   ├── banner.webp
        │   ├── garlic.webp
        │   ├── cumin.webp
        │   ├── ginger.webp
        │   ├── turmeric.webp
        │   ├── chilly.webp
        │   ├── pepper.webp
        │   └── cinnamon.webp
        │
        ├── pulses/
        │   ├── banner.webp
        │   ├── greengram.webp
        │   ├── chickpea.webp
        │   ├── dry_pea.webp
        │   ├── pigeon_pea.webp
        │   ├── soyabean.webp
        │   └── lentil.webp
        │
        ├── cereals/
        │   ├── banner.webp
        │   ├── rice.webp
        │   ├── wheat.webp
        │   ├── sorghum.webp
        │   ├── barley.webp
        │   └── corn.webp
        │
        ├── iqf/
        │   ├── banner.webp
        │   └── assorted.webp
        │
        ├── about/
        │   └── header.webp          (About page header)
        │
        └── home/
            └── partner_bg.webp      (Home CTA background)
```

---

## 📋 Complete Product List & Status

### Vegetables (6/6) ✅
- ✅ Potato
- ✅ Yam
- ✅ Onion
- ✅ Drumstick
- ✅ Green pea
- ✅ Sweet potato

### Fruits (4/4) ✅
- ✅ Grapes
- ✅ Guava
- ✅ Banana
- ✅ Lemon

### Spices (7/7) ✅
- ✅ Garlic
- ✅ Cumin
- ✅ Ginger
- ✅ Turmeric
- ✅ Chilly
- ✅ Pepper
- ✅ Cinnamon

### Pulses (6/6) ✅
- ✅ Greengram
- ✅ Chickpea
- ✅ Dry pea
- ✅ Pigeon pea
- ✅ Soyabean
- ✅ Lentil

### Cereals (5/5) ✅
- ✅ Rice
- ✅ Wheat
- ✅ Sorghum
- ✅ Barley
- ✅ Corn

### IQF (1/1) ✅
- ✅ IQF Assorted

**Total: 29 Products** 📊

---

## 🚀 Quick Reference Checklist

### To Add a New Product:
- [ ] Prepare `.webp` image file
- [ ] Save in `public/assets/products/{category}/{product-name}.webp`
- [ ] Edit `src/data/products.js`
- [ ] Add object to the products array
- [ ] Format: `{ name: "Product Name", image: "/assets/products/{category}/{product-name}.webp" }`
- [ ] Save file
- [ ] Image appears automatically everywhere!

### To Change a Category Banner:
- [ ] Replace image in `public/assets/products/{category}/banner.webp`
- [ ] Or update path in `src/data/products.js` → `banner` field

### To Change Home Page Images:
- [ ] Update file path in respective component:
  - Home CTA: `src/pages/Home.jsx`
  - About Header: `src/pages/About.jsx`
  - HeroSlider: `src/components/HeroSlider.jsx`

---

## 💡 Important Notes

1. **Image Format:** Always use `.webp` for better compression and performance
2. **Image Names:** Use lowercase, hyphens instead of spaces
3. **File Paths:** Always use `/assets/...` (starts with `/`)
4. **No Manual Caching:** Images update automatically
5. **All images have `loading="lazy"`** for performance optimization

---

## 📝 File Edit Locations Summary

| Purpose | File | Line | Field |
|---------|------|------|-------|
| Add/Change Products | `src/data/products.js` | Varies | `products[]` array |
| Category Banners | `src/data/products.js` | Varies | `banner` field |
| Home CTA Background | `src/pages/Home.jsx` | ~120 | `src` attribute |
| About Header | `src/pages/About.jsx` | ~10 | `src` attribute |
| Hero Slider Images | `src/components/HeroSlider.jsx` | ~4-27 | `image` field in slides |

---

## ❓ FAQ

**Q: Will adding new products automatically update all pages?**
A: Yes! Just add to `products.js` and it appears on Products page, Home scroller, and Category section.

**Q: Can I add a new category?**
A: Yes! Add a new key to `productData` object in `src/data/products.js` with the same structure.

**Q: What if an image doesn't show?**
A: Check file path spelling, ensure image exists at that path, and verify `.webp` format.

**Q: Do I need to restart the server?**
A: No! Images in `public/` folder load instantly. But if you change `src/data/products.js`, the dev server will hot-reload.

---

**Made with ❤️ for VR AGRICO** 🌾🍃

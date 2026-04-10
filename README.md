# 🛠️ DigiTools — Premium Digital Tools Marketplace

<div align="center">

![DigiTools Banner](https://placehold.co/900x200/4F39F6/ffffff?text=DigiTools+%E2%80%94+Premium+Digital+Tools)

[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-Latest-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A beautiful, fully responsive digital tools marketplace built with React & Tailwind CSS.**

[🚀 Live Demo](#) · [🐛 Report Bug](#) · [✨ Request Feature](#)

</div>

---

## 📸 Screenshots

> _(Add your screenshots here — see the Freepik image guide at the bottom!)_

| Home Page | Product Cards | Cart |
|-----------|--------------|------|
| ![Home](https://placehold.co/280x180/f3f0ff/4F39F6?text=Home+Page) | ![Products](https://placehold.co/280x180/f3f0ff/9514FA?text=Product+Cards) | ![Cart](https://placehold.co/280x180/f3f0ff/4F39F6?text=Cart+View) |

---

## ✨ Features

- 🛒 **Add to Cart** — Smooth add/remove with toast notifications
- 💜 **Beautiful Pricing Section** — 3-tier pricing with a highlighted "Most Popular" card
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- ⚡ **React Suspense** — Lazy-loaded product data with loading spinner
- 🎨 **Gradient UI** — Purple gradient theme throughout
- 🔔 **Toast Notifications** — Success & error feedback with `react-toastify`
- 🏷️ **Animated Tags** — "Popular", "Best Seller", "New" badge animations
- 🧭 **Tab Navigation** — Smooth Products ↔ Cart tab switching

---

## 🗂️ Project Structure

```
src/
├── component/
│   ├── NavBar/          # Sticky navbar with cart icon & mobile menu
│   ├── Banner/          # Hero section
│   │   └── Rating/      # Star ratings
│   │       └── Steps/   # How-it-works steps
│   ├── PremiumToolsSection/  # Product grid (uses React Suspense)
│   ├── DigiToolsCart/   # Individual product card
│   ├── Cart/            # Cart page with checkout
│   ├── Simple/          # Pricing plans section
│   ├── Ready/           # CTA section
│   └── Footer/          # Site footer
├── App.jsx              # Root component & state management
public/
└── digiData.json        # Product data source
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/digitools.git

# 2. Navigate into the project
cd digitools

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` 🎉

---

## 📦 Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI framework |
| `react-icons` | Icon library (`FaCheck`, `FaShoppingCart`, etc.) |
| `react-toastify` | Toast notification system |
| `tailwindcss` | Utility-first CSS framework |
| `daisyui` | Tailwind component library |

---

## 🗃️ Data Format (`digiData.json`)

Each product in `digiData.json` follows this structure:

```json
{
  "id": 1,
  "name": "AI Writing Assistant",
  "description": "Generate content 10x faster with AI",
  "icon": "✍️",
  "price": 19,
  "period": "month",
  "tag": "Popular",
  "tagType": "popular",
  "features": [
    "Unlimited generations",
    "SEO optimization",
    "Multi-language support"
  ]
}
```

**Available `tagType` values:** `popular` · `best seller` · `new`

---

## 🛒 How the Cart Works

```
User clicks "Buy Now"
       ↓
DigiToolsCart checks if item already in cart (by id)
       ↓
   ┌── Already in cart → Toast error "Item already in Cart"
   └── Not in cart → setCarts([...carts, item]) + Toast success
              ↓
         NavBar badge updates (bounces with count)
              ↓
         User navigates to Cart tab
              ↓
         "Proceed to Checkout" → clears cart + success toast
```

---

## 💰 Pricing Plans

| Plan | Price | Best For |
|------|-------|---------|
| 🆓 Starter | $0/mo | Beginners |
| ⭐ Pro | $29/mo | Professionals |
| 🏢 Enterprise | $99/mo | Teams & Businesses |

---

## 🤝 Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the repository
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m "Add some AmazingFeature"

# 4. Push to your branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com)

---

---

# 🖼️ Freepik থেকে ছবি যোগ করার গাইড

## ধাপ ১ — Freepik থেকে ছবি ডাউনলোড করো

1. [freepik.com](https://www.freepik.com) এ যাও
2. যেকোনো ছবি সার্চ করো (যেমন: `digital tools dashboard`, `tech product UI`, `purple gradient technology`)
3. ছবিটা **Download** করো (Free account দিয়েও হবে, তবে attribution দিতে হবে)
4. ডাউনলোড করা `.jpg` বা `.png` ফাইলটা `public/images/` ফোল্ডারে রাখো

```
public/
└── images/
    ├── banner-hero.jpg      ← Banner সেকশনের জন্য
    ├── feature-card.png     ← Feature card এর জন্য
    └── pricing-bg.jpg       ← Pricing background এর জন্য
```

---

## ধাপ ২ — React Component এ ব্যবহার করো

### Option A — সরাসরি `<img>` ট্যাগে

```jsx
// Banner.jsx
const Banner = () => {
  return (
    <div className="relative">
      <img 
        src="/images/banner-hero.jpg" 
        alt="DigiTools Hero" 
        className="w-full h-[500px] object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2e13f6]/80 to-[#8c03f5]/80 rounded-2xl" />
      <h1 className="absolute bottom-10 left-10 text-white text-5xl font-bold">
        DigiTools
      </h1>
    </div>
  );
};
```

### Option B — CSS Background Image হিসেবে (Tailwind)

```jsx
<div
  className="w-full h-96 rounded-2xl bg-cover bg-center"
  style={{ backgroundImage: "url('/images/banner-hero.jpg')" }}
>
  {/* content here */}
</div>
```

### Option C — Product Card এ ছবি

```jsx
// DigiToolsCart.jsx এ icon এর জায়গায় ছবি দিতে চাইলে
<img 
  src={premiumTools.image}   // digiData.json এ "image": "/images/tool1.jpg" যোগ করো
  alt={premiumTools.name}
  className="w-16 h-16 object-cover rounded-xl"
/>
```

তারপর `digiData.json` আপডেট করো:

```json
{
  "id": 1,
  "name": "AI Writing Assistant",
  "image": "/images/ai-writing.jpg",   // ← এই লাইন যোগ করো
  ...
}
```

---

## ⚠️ Freepik Attribution নিয়ম

Free plan ব্যবহার করলে **attribution দেওয়া বাধ্যতামূলক**। Footer এ এভাবে দাও:

```jsx
// Footer.jsx এ যোগ করো
<p className="text-xs text-gray-400 mt-4">
  Images by{" "}
  <a 
    href="https://www.freepik.com" 
    target="_blank" 
    rel="noreferrer"
    className="underline"
  >
    Freepik
  </a>
</p>
```

> 💡 **Pro Tip:** Attribution ছাড়া ব্যবহার করতে চাইলে Freepik Premium সাবস্ক্রিপশন নাও।

---

<div align="center">
  Made with ❤️ using React + TailwindCSS
</div>

# VisioCreate E-Commerce Case

Modern, responsive ve API tabanlı bir e-ticaret frontend uygulaması.

Bu proje, verilen Figma tasarımı baz alınarak **Next.js App Router**, **TypeScript**, **Tailwind CSS** ve **Zustand** kullanılarak geliştirilmiştir. Proje tamamen responsive yapıdadır ve ürün verileri için **Fake Store API** kullanılmaktadır.

---

# 🚀 Tech Stack

* Next.js 15 (App Router)
* TypeScript
* Tailwind CSS
* Zustand
* Fake Store API

---

# ✨ Features

* Fully responsive modern ecommerce UI
* Dynamic product listing
* Dynamic product detail pages
* Add to cart functionality
* Wishlist system
* Authentication flow
* Protected routes
* Checkout flow
* Persistent cart/wishlist state
* Responsive account dashboard
* Loading skeletons & UX states

---

# 📂 Project Structure

```bash
src/
├── app/
├── components/
├── services/
├── store/
├── types/
├── hooks/
├── lib/
└── constants/
```

### app/

Contains all Next.js App Router pages.

### components/

Reusable UI components separated by feature.

### services/

API layer and fetch functions.

### store/

Global Zustand stores:

* Cart
* Wishlist
* Auth

### types/

Centralized TypeScript interfaces.

---

# 🔌 API Integration

This project uses:

Fake Store API

Main endpoints used:

* Products
* Product Details
* Categories
* Authentication

The project architecture is prepared for future backend integration such as Laravel or Node.js APIs.

---

# 🛒 Ecommerce Flow

```text
Home
→ Shop
→ Product Detail
→ Cart
→ Checkout
→ Order Complete
```

---

# 🔐 Authentication

Authentication is implemented using Fake Store API login endpoint.

Protected routes:

* /checkout
* /my-account
* /my-account/orders
* /my-account/address
* /my-account/wishlist

Unauthenticated users are redirected to:

```text
/sign-in
```

---

# 🧠 State Management

Global state management is handled with Zustand.

Stores:

* useCartStore
* useWishlistStore
* useAuthStore

Persistence is implemented using localStorage middleware.

---

# 📱 Responsive Design

The project follows a mobile-first responsive approach.

Responsive support includes:

* Mobile
* Tablet
* Desktop

---

# ⚡ Performance & UX

* Loading skeletons
* Optimized images using next/image
* Hydration-safe client components
* Dynamic routing
* Persistent cart and auth state

---

# 🔑 Demo Login

```text
username: mor_2314
password: 83r5^_
```

---

# 🛠️ Installation

```bash
git clone <repo-url>

cd project-name

npm install

npm run dev
```

---

# 🌐 Run Production Build

```bash
npm run build
npm start
```

---

# 📌 Notes

* This project is frontend-focused.
* Backend operations are simulated using Fake Store API.
* Architecture is scalable and prepared for real backend integration.

---

# 👨‍💻 Developer

Eren Serdaroğlu

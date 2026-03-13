# Five7 Website Development Plan

## 1. Project Overview

Website Domain: **five7.ae**

Five7 is a **men’s clothing retail and fashion brand company based in Kerala, India**.

The company operates:

• Multi-brand retail clothing stores in Kerala
• Own fashion brands
• Export operations to Dubai and GCC markets

### Brands

* Five Seven
* FS Club
* FS Polo

### Website Purpose

The website is designed to:

• Showcase the fashion brands
• Display clothing collections
• Promote retail stores in Kerala
• Generate export / dealer inquiries from Dubai and GCC

The website is **NOT an ecommerce platform**.

It is a **brand showcase + lead generation website**.

---

# 2. Technology Stack

Framework
**Next.js (App Router)**

Styling
**Tailwind CSS**

Language
**TypeScript**

Website Type
**Static Website**

Deployment
**Vercel**

Development Environment
**Antigravity AI IDE**

---

# 3. Project Folder Structure

Use the following structure.

```
src
 ├ app
 │  ├ page.tsx
 │  ├ brands
 │  │  └ page.tsx
 │  ├ collections
 │  │  └ page.tsx
 │  ├ stores
 │  │  └ page.tsx
 │  ├ export
 │  │  └ page.tsx
 │  ├ about
 │  │  └ page.tsx
 │  └ contact
 │     └ page.tsx
 │
 ├ components
 │  ├ navbar.tsx
 │  ├ footer.tsx
 │  ├ brand-card.tsx
 │  ├ collection-card.tsx
 │  └ store-card.tsx
 │
 ├ sections
 │  ├ home
 │  │  ├ hero-section.tsx
 │  │  ├ brands-section.tsx
 │  │  ├ collections-section.tsx
 │  │  ├ stores-section.tsx
 │  │  └ export-section.tsx
 │
 └ lib
```

---

# 4. Image Structure

All images must be stored inside:

```
public/images
```

Structure:

```
public/images
 ├ logo
 │   five7-logo.png
 │
 ├ hero
 │   hero1.jpg
 │
 ├ brands
 │   five7.jpg
 │   fsclub.jpg
 │   fspolo.jpg
 │
 ├ collections
 │   shirts.jpg
 │   polos.jpg
 │   tshirts.jpg
 │
 ├ stores
 │   kochi.jpg
 │   calicut.jpg
 │
 └ export
     dubai.jpg
```

AI must always use images from **/public/images**.

Example:

```
<Image src="/images/hero/hero1.jpg" alt="Five7 Fashion" />
```

---

# 5. Brand Identity

Brand colors must follow the **Five7 logo**.

Primary Brand Color

Red
`#E11D2E`

Secondary Color

Black
`#0B0B0B`

Background

White
`#FFFFFF`

Light Background

`#F7F7F7`

Text Gray

`#6B7280`

---

# 6. Design Style

The website must reflect a **premium fashion brand aesthetic**.

Design principles:

• Minimal layout
• Large fashion photography
• Elegant typography
• Spacious layout
• High visual impact

Typography:

Headings
Playfair Display

Body Text
Inter

Buttons should use **red accent color**.

---

# 7. Navigation

Navbar should contain:

Home
Brands
Collections
Stores
Export
About
Contact

Navbar should be:

• Responsive
• Sticky on scroll
• Minimal design

Logo should appear on the left side.

---

# 8. Page Structure

## Home Page

Sections:

### Hero Section

Headline

Premium Men's Fashion

Subheadline

Retail in Kerala • Exporting to Dubai

CTA buttons:

Explore Brands
Visit Stores

Hero image location:

```
/images/hero/hero1.jpg
```

---

### Brands Section

Display three brands:

Five Seven
FS Club
FS Polo

Each brand should include:

• brand image
• short description
• link to brands page

---

### Collections Section

Show product categories:

Shirts
Polos
T-Shirts
Jeans
Casual Wear
Formal Wear

Display in a grid layout.

---

### Stores Section

Display retail store locations in Kerala.

Include:

• store photo
• city name
• address
• contact number

---

### Export Section

Promote export partnerships.

Headline:

Export Opportunities

CTA:

Become a Dealer

Image:

```
/images/export/dubai.jpg
```

---

# 9. Brands Page

Show detailed information about:

Five Seven
FS Club
FS Polo

Each brand section should include:

• brand story
• fashion imagery
• category focus

---

# 10. Collections Page

Display product categories:

Shirts
Polos
T-Shirts
Jeans
Casual Wear
Formal Wear

Use image grid layout.

---

# 11. Stores Page

Display retail stores across Kerala.

Example cities:

Kochi
Calicut
Malappuram
Kannur
Trivandrum

Include:

• store image
• address
• phone number
• Google Maps link

---

# 12. Export Page

Target Dubai / GCC distributors.

Sections:

1 Export overview
2 Why partner with Five7
3 Brand portfolio
4 Export inquiry form

---

# 13. About Page

Include company story:

• founding story
• growth in Kerala retail
• development of own brands
• export expansion

---

# 14. Contact Page

Include:

Phone
Email
WhatsApp
Business address

Also include a **contact form**.

---

# 15. SEO Guidelines

Important keywords:

mens clothing kerala
menswear kerala brand
kerala fashion brand
mens clothing export dubai

Each page must include:

• page title
• meta description
• alt text for images

---

# 16. Performance Requirements

Pages must be:

• fast loading
• optimized images
• responsive design

Target Lighthouse score: **90+**

---

# 17. Development Rules For AI

When generating code:

1. Use Next.js App Router
2. Use Tailwind CSS
3. Use images from `/public/images`
4. Write clean reusable components
5. Ensure mobile responsiveness
6. Avoid unnecessary libraries

---

# 18. Development Order

Build pages in this order:

1 Home Page
2 Brands Page
3 Collections Page
4 Stores Page
5 Export Page
6 About Page
7 Contact Page

---

END OF PLAN

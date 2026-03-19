NKB PHARMA - STATIC WEBSITE
============================
IIS Deployment Instructions

FOLDER STRUCTURE
----------------
static-site/
  index.html, about.html, products.html, markets.html, commitment.html, contact.html
  css/style.css
  images/        <- copy images here
  web.config
  README.txt

REQUIRED IMAGES
---------------
Copy from src/frontend/public/assets/ in the downloaded ZIP:
  uploads/Logo-1.png                        -> images/Logo-1.png
  generated/nkb-hero-lab.dim_1600x900.jpg   -> images/nkb-hero-lab.jpg
  generated/nkb-world-map.dim_800x500.png   -> images/nkb-world-map.png

FORMSPREE
---------
Open contact.html, find YOUR_FORM_ID, replace with your FormSpree form ID.
Sign up at https://formspree.io

IIS DEPLOYMENT
--------------
1. Copy all files from static-site/ to your IIS website root.
2. Ensure images/ folder has the required images.
3. web.config handles default document and 404 fallback.

(c) 2026 NKB Pharma. All rights reserved.

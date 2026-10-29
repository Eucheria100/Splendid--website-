
const PRODUCTS = [
  {
    id: 'woven-shirt',
    name: 'The Everyday Woven Shirt',
    price: 48000,
    category: 'Women',
    type: 'Clothing',
    color: 'Ivory',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    tag: 'New',
    desc: 'An easy, versatile shirt made for warm days, layered looks, and wherever the day takes you.'
  },
  {
    id: 'adire-set',
    name: 'Indigo Print Co-ord',
    price: 85000,
    category: 'Women',
    type: 'Clothing',
    color: 'Indigo',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    tag: 'Signature',
    desc: 'A confident matching set inspired by expressive pattern and contemporary city dressing.'
  },
  {
    id: 'relaxed-blazer',
    name: 'The Relaxed Blazer',
    price: 92000,
    category: 'Men',
    type: 'Clothing',
    color: 'Sand',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85',
    tag: 'Bestseller',
    desc: 'A modern wardrobe layer with a clean shape and a relaxed, versatile feel.'
  },
  {
    id: 'statement-dress',
    name: 'The Statement Dress',
    price: 76000,
    category: 'Women',
    type: 'Clothing',
    color: 'Terracotta',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85',
    tag: 'Limited edit',
    desc: 'An expressive silhouette designed for celebrations, dinners, and memorable moments.'
  },
  {
    id: 'city-sneaker',
    name: 'City Move Sneakers',
    price: 65000,
    category: 'Accessories',
    type: 'Footwear',
    color: 'Red',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    tag: 'Everyday',
    desc: 'A versatile sneaker to move between work, weekends, and everything in between.'
  },
  {
    id: 'woven-tote',
    name: 'Market Day Tote',
    price: 38000,
    category: 'Accessories',
    type: 'Accessories',
    color: 'Natural',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85',
    tag: 'Craft detail',
    desc: 'A practical carryall with texture and an easy everyday shape.'
  },
  {
    id: 'linen-shirt',
    name: 'The Linen Blend Shirt',
    price: 52000,
    category: 'Men',
    type: 'Clothing',
    color: 'White',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85',
    tag: 'Warm-weather',
    desc: 'A light, easy layer for warm weather and relaxed occasions.'
  },
  {
    id: 'gold-earrings',
    name: 'Sculpted Gold-tone Hoops',
    price: 22000,
    category: 'Accessories',
    type: 'Jewellery',
    color: 'Silver',image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    tag: 'Finishing touch',
    
    desc: 'A simple finishing detail that works from daytime to evening.'
  },
  ];

const money = n => '₦' + Number(n).toLocaleString('en-NG');
// Splendid WhatsApp business number
const WHATSAPP_NUMBER = '2348141174350';
function getBag() {
  try {
    return JSON.parse(localStorage.getItem('splendidBag') || '[]');
  } catch (error) {
    return [];
  }
}

function saveBag(bag) {
  localStorage.setItem('splendidBag', JSON.stringify(bag));
  updateCount();
  renderBag();
}

function updateCount() {
  document.querySelectorAll('[data-cart-count]').forEach(element => {
    element.textContent = getBag().reduce((total, item) => total + item.qty, 0);
  });
}

function productCard(product) {
  return `
    <article class="product-card">
      <a href="product.html?id=${encodeURIComponent(product.id)}" class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="tag">${product.tag}</span>
      </a>
      <div class="product-meta">
        <h3>
          <a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a>
        </h3>
        <p>${money(product.price)}</p>
      </div>
    </article>
  `;
}

function renderFeatured() {
  const element = document.querySelector('[data-featured]');
  if (element) {
    element.innerHTML = PRODUCTS.slice(0, 4).map(productCard).join('');
  }
}

function renderShop() {
  const element = document.querySelector('[data-shop-grid]');
  if (!element) return;

  const urlCategory = new URLSearchParams(location.search).get('category') || 'All';
  const activeCategory =
    document.querySelector('[data-category].active')?.dataset.category || urlCategory;
  const sort = document.querySelector('[data-sort]')?.value || 'featured';

  const products = PRODUCTS.filter(product =>
    activeCategory === 'All' || product.category === activeCategory
  );

  if (sort === 'low') products.sort((a, b) => a.price - b.price);
  if (sort === 'high') products.sort((a, b) => b.price - a.price);
  if (sort === 'az') products.sort((a, b) => a.name.localeCompare(b.name));

  element.innerHTML = products.length
    ? products.map(productCard).join('')
    : '<p class="empty-state">No items in this category yet.</p>';
}

function addToBag(id, size = 'One size', qty = 1) {
  const product = PRODUCTS.find(item => item.id === id);
  if (!product) return;

  const bag = getBag();
  const existing = bag.find(item => item.id === id && item.size === size);

  if (existing) {
    existing.qty += qty;
  } else {
    bag.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      qty
    });
  }

  saveBag(bag);

  const note = document.querySelector('[data-added-note]');
  if (note) {
    note.textContent = 'Added to your bag. This is a demo bag; checkout is not connected yet.';
  }
}

function renderBag() {
  const element = document.querySelector('[data-cart-items]');
  if (!element) return;

  const bag = getBag();

  element.innerHTML = bag.length
    ? bag.map((item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <strong>${item.name}</strong>
            <p>Size: ${item.size} · Qty: ${item.qty}</p>
            <button data-remove="${index}" style="border:0;background:none;text-decoration:underline;padding:0;font-size:11px">
              Remove
            </button>
          </div>
          <strong>${money(item.price * item.qty)}</strong>
        </div>
      `).join('')
    : '<p class="empty-state">Your bag is waiting for something splendid.</p>';

  const total = bag.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalElement = document.querySelector('[data-cart-total]');

  if (totalElement) totalElement.textContent = money(total);
}

function openCart() {
  document.querySelector('[data-cart-panel]')?.classList.add('open');
  renderBag();
}

function closeCart() {
  document.querySelector('[data-cart-panel]')?.classList.remove('open');
}

function renderProduct() {
  const root = document.querySelector('[data-product]');
  if (!root) return;

  const id = new URLSearchParams(location.search).get('id') || PRODUCTS[0].id;
  const product = PRODUCTS.find(item => item.id === id) || PRODUCTS[0];
  document.title = `${product.name} | Splendid`;

  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      'content',
      `${product.name}. ${product.desc} Explore Splendid's contemporary fashion, inspired by African expression and everyday style.`
    );
  }
  
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": [product.image],
    "description": product.desc,
    "brand": {
      "@type": "Brand",
      "name": "Splendid"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://eucheria100.github.io/Splendid--website-/product.html?id=${encodeURIComponent(product.id)}`,
      "priceCurrency": "NGN",
      "price": product.price.toString(),
      "itemCondition": "https://schema.org/NewCondition"
    }
  };

  let productSchemaScript = document.querySelector(
    'script[data-product-schema]'
  );

  if (!productSchemaScript) {
    productSchemaScript = document.createElement('script');
    productSchemaScript.type = 'application/ld+json';
    productSchemaScript.setAttribute('data-product-schema', '');
    document.head.appendChild(productSchemaScript);
  }

  productSchemaScript.textContent = JSON.stringify(productSchema);
  root.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail-copy">
      <div class="eyebrow">${product.tag} · SPLENDID</div>
      <h1>${product.name}</h1>
      <div class="price">${money(product.price)}</div>
      <p class="muted">${product.desc}</p>
      <p class="muted" style="font-size:12px">
        Designed for everyday expression. Please confirm fit, fabric, and care details with our team before ordering.
      </p>
      <div class="option-label">Choose size</div>
      <div class="sizes">
        ${(product.type === 'Accessories' || product.type === 'Jewellery' || product.type === 'Footwear'
          ? ['One size', 'S', 'M', 'L']
          : ['XS', 'S', 'M', 'L', 'XL']
        ).map((size, index) => `
          <button class="size-btn ${index === 1 ? 'active' : ''}" data-size="${size}">${size}</button>
        `).join('')}
      </div>
      <div class="option-label">Colour · ${product.color}</div>
      <div class="swatches">
        <button class="swatch active">${product.color}</button>
      </div>
      <div class="quantity-row">
        <input type="number" min="1" max="10" value="1" aria-label="Quantity" data-qty>
        <button class="button" data-add="${product.id}">Add to bag →</button>
      </div>
      <p data-added-note class="form-note" aria-live="polite"></p>
      <div class="notice">
        Demo store: payment, delivery, stock and checkout are not connected yet.
      </div>
      <p class="muted" style="font-size:12px">
        Need help with sizing or an order?
        <a class="text-link" href="contact.html">Contact our team</a>.
      </p>
    </div>
  `;
}

document.addEventListener('click', event => {
  const menu = event.target.closest('.menu-toggle');
  if (menu) document.querySelector('.mobile-menu')?.classList.toggle('open');

  if (event.target.closest('[data-open-cart]')) openCart();

  if (event.target.closest('[data-close-cart]') ||
      event.target.matches('[data-cart-panel]')) {
    closeCart();
  }

  const category = event.target.closest('[data-category]');
  if (category) {
    document.querySelectorAll('[data-category]').forEach(item =>
      item.classList.remove('active')
    );
    category.classList.add('active');
    renderShop();
  }

  const size = event.target.closest('[data-size]');
  if (size) {
    document.querySelectorAll('[data-size]').forEach(item =>
      item.classList.remove('active')
    );
    size.classList.add('active');
  }

  const add = event.target.closest('[data-add]');
  if (add) {
    const selectedSize =
      document.querySelector('[data-size].active')?.dataset.size || 'One size';
    const quantity = Math.max(
      1,
      Math.min(10, Number(document.querySelector('[data-qty]')?.value || 1))
    );
    addToBag(add.dataset.add, selectedSize, quantity);
  }

  const remove = event.target.closest('[data-remove]');
  if (remove) {
    const bag = getBag();
    bag.splice(Number(remove.dataset.remove), 1);
    saveBag(bag);
  }
});

document.addEventListener('change', event => {
  if (event.target.matches('[data-sort]')) renderShop();
});

document.addEventListener('submit', event => {
  if (event.target.matches('[data-newsletter], [data-contact-form]')) {
    event.preventDefault();

    const note = event.target.querySelector('[data-form-note]');
    if (note) {
      note.textContent = event.target.matches('[data-newsletter]')
        ? 'Thanks! This demo form is not connected to a mailing list yet.'
        : 'Thank you. This demo form is not connected to an inbox yet. Please use the contact details your business confirms before launch.';
    }

    event.target.reset();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderFeatured();
  renderShop();
  renderProduct();
  updateCount();
  renderBag();
});


const PRODUCTS = [
  {
    id: 'woven-shirt',
    name: 'The Everyday Woven Shirt',
    price: 48000,
    category: 'Women',
    type: 'Clothing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Ivory',
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=900&q=85',
    tag: 'New',
    desc: 'An easy, versatile shirt made for warm days, layered looks, and wherever the day takes you. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'adire-set',
    name: 'Indigo Print Co-ord',
    price: 85000,
    category: 'Women',
    type: 'Clothing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Indigo',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=85',
    tag: 'Signature',
    desc: 'A confident matching set inspired by expressive pattern and contemporary city dressing. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'relaxed-blazer',
    name: 'The Relaxed Blazer',
    price: 92000,
    category: 'Men',
    type: 'Clothing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Blue',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=900&q=85',
    tag: 'Bestseller',
    desc: 'A modern wardrobe layer with a clean shape and a relaxed, versatile feel. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'statement-dress',
    name: 'The Statement Dress',
    price: 76000,
    category: 'Women',
    type: 'Clothing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'Light Blue',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=900&q=85',
    tag: 'Limited edit',
    desc: 'An expressive silhouette designed for celebrations, dinners, and memorable moments. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'city-sneaker',
    name: 'City Move Sneakers',
    price: 65000,
    category: 'Accessories',
    type: 'Footwear',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45', '46'],
    color: 'Red',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85',
    tag: 'Everyday',
    desc: 'A versatile sneaker to move between work, weekends, and everything in between. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'woven-tote',
    name: 'Market Day Tote',
    price: 38000,
    category: 'Accessories',
    type: 'Accessories',
    sizes: ['Small', 'Medium', 'Large'],
    color: 'Burgundy',
    image: 'data:image/jpeg;base64,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',
    tag: 'Craft detail',
    desc: 'Elegantly crafted with a rich burgundy leather finish, the Market Day Tote effortlessly blends style with everyday practicality. Spacious and versatile, it is ideal for work, weekend outings, and daily errands alike. A timeless accessory, it complements any look and carries you confidently through your day. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'linen-shirt',
    name: 'The Linen Blend Shirt',
    price: 52000,
    category: 'Men',
    type: 'Clothing',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    color: 'White',
    image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85',
    tag: 'Warm-weather',
    desc: 'A light, easy layer for warm weather and relaxed occasions. Available in other colours. Contact us on WhatsApp to enquire.'
  },
  {
    id: 'gold-earrings',
    name: 'Sculpted Silver-tone Hoops',
    price: 22000,
    category: 'Accessories',
    type: 'Jewellery',
    sizes: ['One size'],
    color: 'Silver',image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    tag: 'Finishing touch',
    
    desc: 'Silver-tone hoop earrings finished with powder-blue stones. Available in other colours. Contact us on WhatsApp to enquire.'
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
        ${product.sizes.map((size, index) => `
          <button class="size-btn ${index === Math.min(1, product.sizes.length - 1) ? 'active' : ''}" data-size="${size}">${size}</button>
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
<button class="button whatsapp-order" data-whatsapp-order="${product.id}" style="margin-top:12px;width:100%">
  Order on WhatsApp
</button>   
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

  const whatsappOrder = event.target.closest('[data-whatsapp-order]');
  if (whatsappOrder) {
    const product = PRODUCTS.find(item => item.id === whatsappOrder.dataset.whatsappOrder);
    if (product) {
      const size = document.querySelector('[data-size].active')?.dataset.size || 'One size';
      const quantity = Math.max(1, Math.min(10, Number(document.querySelector('[data-qty]')?.value || 1)));
      const message = `Hello Splendid! I'd like to order:\n${product.name}\nSize: ${size}\nQuantity: ${quantity}\nPrice: ${money(product.price)}\nTotal: ${money(product.price * quantity)}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
    return;
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

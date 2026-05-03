const products = [
  {
    id: "solace-sofa",
    name: "Solace Modular Sofa",
    category: "Sofas",
    material: "Boucle",
    price: 3890,
    tag: "Signature",
    dimensions: '112" W x 39" D x 28" H',
    leadTime: "5-7 weeks",
    description:
      "A low-slung modular sofa with softly chamfered edges, tailored boucle upholstery, and deep lounge proportions built for long evenings.",
    notes: [
      "Feather-wrapped foam cushions",
      "Solid ash internal frame",
      "Performance boucle upholstery",
    ],
    colors: ["#efebe3", "#d1c5b8", "#a7a08c"],
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "halo-bed",
    name: "Halo Platform Bed",
    category: "Beds",
    material: "Oak",
    price: 3120,
    tag: "Best Seller",
    dimensions: '86" W x 90" D x 42" H',
    leadTime: "4-6 weeks",
    description:
      "A quiet, architectural bed frame in matte oak with an extended upholstered headboard and concealed plinth base.",
    notes: [
      "FSC-certified white oak veneer",
      "Integrated slatted support",
      "Optional floating nightstand pair",
    ],
    colors: ["#d8cab8", "#8d7968", "#f3eee7"],
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80&sat=-10",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "verge-table",
    name: "Verge Dining Table",
    category: "Tables",
    material: "Walnut",
    price: 4580,
    tag: "Collector",
    dimensions: '98" W x 40" D x 30" H',
    leadTime: "6-8 weeks",
    description:
      "An elongated dining table carved from dark walnut with a softened racetrack silhouette and monolithic pedestal base.",
    notes: [
      "Hand-oiled walnut finish",
      "Seats up to ten",
      "Stone inlay upgrade available",
    ],
    colors: ["#5c4637", "#9f8a73", "#e7ddd1"],
    images: [
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "aster-chair",
    name: "Aster Lounge Chair",
    category: "Seating",
    material: "Leather",
    price: 1980,
    tag: "New",
    dimensions: '32" W x 34" D x 29" H',
    leadTime: "3-5 weeks",
    description:
      "Sculptural curves, saddle leather, and a subtle recline angle create a lounge chair that feels both tactile and tailored.",
    notes: [
      "Vegetable-tanned leather",
      "Brushed stainless swivel base",
      "Feather-soft lumbar cushion",
    ],
    colors: ["#ab8a6f", "#d3c0ab", "#2f2a26"],
    images: [
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "lumen-sideboard",
    name: "Lumen Sideboard",
    category: "Storage",
    material: "Oak",
    price: 2760,
    tag: "Studio Pick",
    dimensions: '78" W x 18" D x 29" H',
    leadTime: "4-5 weeks",
    description:
      "Vertical fluting and shadow-gap detailing bring rhythm to this low-profile sideboard, finished in natural brushed oak.",
    notes: [
      "Soft-close interior shelving",
      "Concealed cable management",
      "Powder-coated brass pulls",
    ],
    colors: ["#d9c8b2", "#b18f68", "#f5f2ec"],
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "atlas-desk",
    name: "Atlas Writing Desk",
    category: "Tables",
    material: "Stone",
    price: 2290,
    tag: "Refined Utility",
    dimensions: '60" W x 24" D x 30" H',
    leadTime: "3-4 weeks",
    description:
      "Slim proportions meet rich tactility with travertine tops, wrapped oak drawers, and softly radius edges.",
    notes: [
      "Honed travertine work surface",
      "Full-extension oak drawers",
      "Felt-lined storage trays",
    ],
    colors: ["#d7d0c4", "#8f7864", "#ffffff"],
    images: [
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=80&sat=-10",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "marlow-console",
    name: "Marlow Console",
    category: "Storage",
    material: "Walnut",
    price: 1840,
    tag: "Entry Edit",
    dimensions: '64" W x 16" D x 31" H',
    leadTime: "2-4 weeks",
    description:
      "A slim console for entry halls and living spaces, pairing waterfall walnut surfaces with recessed shadow legs.",
    notes: [
      "Solid walnut edge detail",
      "Integrated tray shelf",
      "Leveling brass glides",
    ],
    colors: ["#6b4e3d", "#b49379", "#ece3d7"],
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=1200&q=80&sat=-15",
      "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    id: "drift-nightstand",
    name: "Drift Nightstand",
    category: "Beds",
    material: "Linen",
    price: 980,
    tag: "Quiet Luxury",
    dimensions: '26" W x 18" D x 22" H',
    leadTime: "2-3 weeks",
    description:
      "A compact nightstand wrapped in tactile linen with oak drawer fronts and a concealed wireless charging shelf.",
    notes: [
      "Linen-wrapped body",
      "Soft-close drawer hardware",
      "Hidden cable routing slot",
    ],
    colors: ["#f3efe8", "#c5b6a7", "#8d7f73"],
    images: [
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1200&q=80&sat=-10",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const cartKey = "atelier-haven-cart";
const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const categoryFilters = ["All", "Sofas", "Beds", "Tables", "Seating", "Storage"];
const materialFilters = ["All", "Boucle", "Oak", "Walnut", "Leather", "Stone", "Linen"];

function query(selector, scope = document) {
  return scope.querySelector(selector);
}

function queryAll(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(cartKey)) || [];
  } catch {
    return [];
  }
}

function setCart(cart) {
  localStorage.setItem(cartKey, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id, quantity = 1) {
  const cart = getCart();
  const current = cart.find((item) => item.id === id);

  if (current) {
    current.quantity += quantity;
  } else {
    cart.push({ id, quantity });
  }

  setCart(cart);
}

function updateCartItem(id, quantity) {
  const nextCart = getCart()
    .map((item) => (item.id === id ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);

  setCart(nextCart);
}

function clearCart() {
  localStorage.removeItem(cartKey);
  updateCartCount();
}

function getDetailedCart() {
  return getCart()
    .map((item) => {
      const product = getProduct(item.id);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean);
}

function getCartTotals() {
  const items = getDetailedCart();
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 4000 ? 0 : 180;
  const designCare = subtotal === 0 ? 0 : 85;
  return {
    subtotal,
    shipping,
    designCare,
    total: subtotal + shipping + designCare,
  };
}

function updateCartCount() {
  const count = getCart().reduce((total, item) => total + item.quantity, 0);
  queryAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function buildProductCard(product) {
  return `
    <article class="product-card reveal">
      <a class="product-media" href="product.html?id=${product.id}" aria-label="View ${product.name}">
        <span class="product-tag">${product.tag}</span>
        <img src="${product.images[0]}" alt="${product.name}">
      </a>
      <div class="product-meta">
        <div>
          <small>${product.category} / ${product.material}</small>
          <h3>${product.name}</h3>
        </div>
        <span class="product-price">${money.format(product.price)}</span>
      </div>
      <p>${product.description}</p>
      <div class="hero-actions">
        <a class="button-secondary" href="product.html?id=${product.id}">View Product</a>
        <button class="button-ghost" type="button" data-add-id="${product.id}">Add to Cart</button>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const container = query("#featured-products");
  if (!container) {
    return;
  }

  container.innerHTML = products.slice(0, 4).map(buildProductCard).join("");
}

function renderFilterChips(container, items, type) {
  container.innerHTML = items
    .map(
      (item, index) => `
        <button class="filter-chip${index === 0 ? " active" : ""}" type="button" data-filter="${type}" data-value="${item}">
          ${item}
        </button>
      `
    )
    .join("");
}

function renderCatalogPage() {
  const grid = query("#catalog-grid");
  if (!grid) {
    return;
  }

  const categoryWrap = query("#category-filters");
  const materialWrap = query("#material-filters");
  const priceRange = query("#price-range");
  const priceValue = query("#price-value");
  const sortSelect = query("#sort-select");
  const countNode = query("#catalog-count");

  renderFilterChips(categoryWrap, categoryFilters, "category");
  renderFilterChips(materialWrap, materialFilters, "material");

  const state = {
    category: "All",
    material: "All",
    price: Number(priceRange.value),
    sort: sortSelect.value,
  };

  function updateCatalog() {
    priceValue.textContent = money.format(state.price);

    let visible = products.filter((product) => {
      const categoryPass = state.category === "All" || product.category === state.category;
      const materialPass = state.material === "All" || product.material === state.material;
      const pricePass = product.price <= state.price;
      return categoryPass && materialPass && pricePass;
    });

    if (state.sort === "price-asc") {
      visible = visible.sort((left, right) => left.price - right.price);
    }

    if (state.sort === "price-desc") {
      visible = visible.sort((left, right) => right.price - left.price);
    }

    if (state.sort === "name") {
      visible = visible.sort((left, right) => left.name.localeCompare(right.name));
    }

    countNode.textContent = `${visible.length} pieces`;
    grid.innerHTML = visible.length
      ? visible.map(buildProductCard).join("")
      : `<div class="empty-state"><h3>No matches yet.</h3><p>Broaden the material or price filters to see more of the collection.</p></div>`;

    setupRevealAnimations();
  }

  priceRange.addEventListener("input", (event) => {
    state.price = Number(event.target.value);
    updateCatalog();
  });

  sortSelect.addEventListener("change", (event) => {
    state.sort = event.target.value;
    updateCatalog();
  });

  queryAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const type = button.dataset.filter;
      const value = button.dataset.value;
      state[type] = value;
      queryAll(`[data-filter="${type}"]`).forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      updateCatalog();
    });
  });

  updateCatalog();
}

function renderProductPage() {
  const page = query("[data-product-page]");
  if (!page) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const selected = getProduct(params.get("id")) || products[0];
  const mainImage = query("#product-main-image");
  const thumbRow = query("#product-thumbs");
  const qtyValue = query("#product-qty");
  let quantity = 1;

  document.title = `${selected.name} | Atelier Haven`;
  query("[data-product-category]").textContent = selected.category;
  query("[data-product-name]").textContent = selected.name;
  query("[data-product-price]").textContent = money.format(selected.price);
  query("[data-product-description]").textContent = selected.description;
  query("[data-product-dimensions]").textContent = selected.dimensions;
  query("[data-product-lead]").textContent = selected.leadTime;
  query("[data-product-material]").textContent = selected.material;
  query("[data-product-tag]").textContent = selected.tag;

  const notes = query("#product-notes");
  notes.innerHTML = selected.notes.map((note) => `<span class="badge">${note}</span>`).join("");

  const swatches = query("#product-swatches");
  swatches.innerHTML = selected.colors
    .map((color) => `<span class="swatch" style="background:${color};" aria-hidden="true"></span>`)
    .join("");

  function setGallery(index) {
    mainImage.src = selected.images[index];
    mainImage.alt = selected.name;
    queryAll(".thumb-button", thumbRow).forEach((button, thumbIndex) => {
      button.classList.toggle("active", thumbIndex === index);
    });
  }

  thumbRow.innerHTML = selected.images
    .map(
      (image, index) => `
        <button class="thumb-button${index === 0 ? " active" : ""}" type="button" data-thumb-index="${index}" aria-label="View ${selected.name} image ${index + 1}">
          <img src="${image}" alt="${selected.name}">
        </button>
      `
    )
    .join("");

  setGallery(0);

  thumbRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-thumb-index]");
    if (!button) {
      return;
    }

    setGallery(Number(button.dataset.thumbIndex));
  });

  query("[data-qty-minus]").addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    qtyValue.textContent = quantity;
  });

  query("[data-qty-plus]").addEventListener("click", () => {
    quantity += 1;
    qtyValue.textContent = quantity;
  });

  query("[data-add-product]").addEventListener("click", () => {
    addToCart(selected.id, quantity);
    query("[data-add-product]").textContent = "Added to Cart";
    window.setTimeout(() => {
      query("[data-add-product]").textContent = "Add to Cart";
    }, 1600);
  });

  const related = query("#related-products");
  related.innerHTML = products
    .filter((product) => product.id !== selected.id)
    .slice(0, 4)
    .map(buildProductCard)
    .join("");
}

function buildCartSummary(summaryRoot, totals = getCartTotals()) {
  if (!summaryRoot) {
    return;
  }

  query("[data-summary-subtotal]", summaryRoot).textContent = money.format(totals.subtotal);
  query("[data-summary-shipping]", summaryRoot).textContent =
    totals.shipping === 0 && totals.subtotal > 0 ? "Complimentary" : money.format(totals.shipping);
  query("[data-summary-design]", summaryRoot).textContent = money.format(totals.designCare);
  query("[data-summary-total]", summaryRoot).textContent = money.format(totals.total);
}

function renderCartPage() {
  const list = query("#cart-items");
  if (!list) {
    return;
  }

  const items = getDetailedCart();
  const summary = query("#cart-summary");
  const empty = query("#cart-empty");

  if (!items.length) {
    list.innerHTML = "";
    empty.hidden = false;
    summary.hidden = true;
    return;
  }

  empty.hidden = true;
  summary.hidden = false;
  list.innerHTML = items
    .map(
      ({ product, quantity }) => `
        <article class="cart-item">
          <div class="cart-item-media">
            <img src="${product.images[0]}" alt="${product.name}">
          </div>
          <div class="cart-item-copy">
            <div class="inline-meta">
              <div>
                <span class="eyebrow">${product.category}</span>
                <h3>${product.name}</h3>
              </div>
              <strong>${money.format(product.price * quantity)}</strong>
            </div>
            <p>${product.description}</p>
            <div class="badge-row">
              <span class="badge">${product.material}</span>
              <span class="badge">${product.dimensions}</span>
            </div>
            <div class="inline-meta">
              <div class="qty-control">
                <button type="button" data-cart-minus="${product.id}" aria-label="Decrease quantity">-</button>
                <strong>${quantity}</strong>
                <button type="button" data-cart-plus="${product.id}" aria-label="Increase quantity">+</button>
              </div>
              <button class="button-ghost" type="button" data-cart-remove="${product.id}">Remove</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  buildCartSummary(summary);
}

function renderCheckoutPage() {
  const summary = query("#checkout-summary");
  if (!summary) {
    return;
  }

  const itemsRoot = query("#checkout-items");
  const confirmation = query("#checkout-confirmation");
  const form = query("#checkout-form");
  const items = getDetailedCart();

  if (!items.length) {
    itemsRoot.innerHTML =
      '<div class="empty-state"><h3>Your cart is empty.</h3><p>Select pieces from the collection before moving to checkout.</p><a class="button" href="products.html">Browse Furniture</a></div>';
    query("[data-checkout-submit]").disabled = true;
    query("[data-checkout-submit]").textContent = "Cart Empty";
  } else {
    itemsRoot.innerHTML = items
      .map(
        ({ product, quantity }) => `
          <div class="summary-line">
            <span>${product.name} x${quantity}</span>
            <strong>${money.format(product.price * quantity)}</strong>
          </div>
        `
      )
      .join("");
  }

  buildCartSummary(summary);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!getDetailedCart().length) {
      return;
    }

    const confirmedTotals = getCartTotals();
    clearCart();
    buildCartSummary(summary, confirmedTotals);
    query("[data-checkout-submit]").disabled = true;
    query("[data-checkout-submit]").textContent = "Order Placed";
    confirmation.classList.add("visible");
    itemsRoot.innerHTML =
      '<div class="summary-line"><span>Order</span><strong>Confirmed</strong></div><div class="summary-line"><span>Delivery window</span><strong>2-5 business days</strong></div>';
    form.reset();
  });
}

function setupGlobalCartButtons() {
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-id]");
    if (addButton) {
      addToCart(addButton.dataset.addId, 1);
      addButton.textContent = "Added";
      window.setTimeout(() => {
        addButton.textContent = "Add to Cart";
      }, 1200);
    }

    const minus = event.target.closest("[data-cart-minus]");
    if (minus) {
      const entry = getCart().find((item) => item.id === minus.dataset.cartMinus);
      if (!entry) {
        return;
      }
      updateCartItem(minus.dataset.cartMinus, entry.quantity - 1);
      renderCartPage();
      renderCheckoutPage();
    }

    const plus = event.target.closest("[data-cart-plus]");
    if (plus) {
      const entry = getCart().find((item) => item.id === plus.dataset.cartPlus);
      if (!entry) {
        return;
      }
      updateCartItem(plus.dataset.cartPlus, entry.quantity + 1);
      renderCartPage();
      renderCheckoutPage();
    }

    const remove = event.target.closest("[data-cart-remove]");
    if (remove) {
      updateCartItem(remove.dataset.cartRemove, 0);
      renderCartPage();
      renderCheckoutPage();
    }
  });
}

function setupMobileMenu() {
  const toggle = query("[data-nav-toggle]");
  const menu = query("[data-mobile-menu]");

  if (!toggle || !menu) {
    return;
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    menu.classList.remove("open");
  }

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("open", !expanded);
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
}

function setupHeaderState() {
  const header = query(".site-header");
  if (!header) {
    return;
  }

  function syncHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  }

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

function setupRevealAnimations() {
  const items = queryAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!items.length || !("IntersectionObserver" in window) || reduceMotion) {
    items.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  items.forEach((item) => observer.observe(item));
}

function init() {
  updateCartCount();
  setupHeaderState();
  setupMobileMenu();
  renderFeaturedProducts();
  renderCatalogPage();
  renderProductPage();
  renderCartPage();
  renderCheckoutPage();
  setupGlobalCartButtons();
  setupRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);

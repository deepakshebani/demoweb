 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/menswear/script.js
index 0000000000000000000000000000000000000000..bcdc1e698227d73c14a5b48ecbc1891b9e38fc3d 100644
--- a//dev/null
+++ b/menswear/script.js
@@ -0,0 +1,55 @@
+const products = [
+  { id: 1, name: 'Team Hoodie', price: 64.99, image: 'https://via.placeholder.com/200' },
+  { id: 2, name: 'Classic Shirt', price: 29.99, image: 'https://via.placeholder.com/200' },
+  { id: 3, name: 'Denim Jeans', price: 49.99, image: 'https://via.placeholder.com/200' },
+  { id: 4, name: 'Leather Jacket', price: 99.99, image: 'https://via.placeholder.com/200' },
+  { id: 5, name: 'Sweatshirt', price: 39.99, image: 'https://via.placeholder.com/200' },
+  { id: 6, name: 'Sneakers', price: 59.99, image: 'https://via.placeholder.com/200' },
+  { id: 7, name: 'Cap', price: 19.99, image: 'https://via.placeholder.com/200' },
+  { id: 8, name: 'Backpack', price: 69.99, image: 'https://via.placeholder.com/200' }
+];
+
+const cart = [];
+
+function renderProducts() {
+  const productList = document.getElementById('product-list');
+  products.forEach(product => {
+    const div = document.createElement('div');
+    div.className = 'product';
+    div.innerHTML = `
+      <img src="${product.image}" alt="${product.name}">
+      <h3>${product.name}</h3>
+      <p>$${product.price.toFixed(2)}</p>
+      <button onclick="addToCart(${product.id})">Add to Cart</button>
+    `;
+    productList.appendChild(div);
+  });
+}
+
+function addToCart(productId) {
+  const product = products.find(p => p.id === productId);
+  if (product) {
+    cart.push(product);
+    updateCart();
+  }
+}
+
+function updateCart() {
+  const cartItems = document.getElementById('cart-items');
+  const cartCount = document.getElementById('cart-count');
+  const cartTotal = document.getElementById('cart-total');
+  cartItems.innerHTML = '';
+  let total = 0;
+  cart.forEach(item => {
+    const li = document.createElement('li');
+    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
+    cartItems.appendChild(li);
+    total += item.price;
+  });
+  cartCount.textContent = cart.length;
+  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
+}
+
+document.addEventListener('DOMContentLoaded', () => {
+  renderProducts();
+});
 
EOF
)

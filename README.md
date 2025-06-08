 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index b17ac11ebdac89c42292206c54b9583dd02e1e23..e36679be0c7702dffbca9cc34a7f3caf6895deb1 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,9 @@
 # GPT
+
+This repository contains a simple demo e-commerce site for men's wear. The site lives in the `menswear` directory and is built with plain HTML, CSS and JavaScript.
+
+The styling loosely mirrors the layout used on popular sports apparel stores and includes a product grid and a minimal shopping cart.
+
+## How to Use
+
+Open `menswear/index.html` in a web browser. The JavaScript dynamically renders a selection of sample products. Use the "Add to Cart" buttons to populate the cart and see the total cost update.
 
EOF
)

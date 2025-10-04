const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = createProxyMiddleware({
  target: "http://localhost:4000", // Auth service
  changeOrigin: true,
  pathRewrite: {
    "^/auth": "", // Remove /auth prefix when forwarding
  },
});

module.exports = (req, res, next) => {
  if (req.path.startsWith("/auth")) {
    return proxy(req, res, next);
  }
  next();
};

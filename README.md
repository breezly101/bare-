# Bare Server for YouTube-Ready Ultraviolet Proxy

This repository contains a minimal Node.js Bare server that works with YouTube when used with a static Ultraviolet proxy.

## Files

* `server.js` — The Bare server implementation.
* `package.json` — Dependencies and start script.
* `README.md` — Instructions.

## Deploy to Railway

1. Fork or copy this repository to your GitHub account.
2. Go to [Railway](https://railway.app/), click **New Project → Deploy from GitHub**.
3. Select your repository and deploy.
4. Once deployed, your Bare server will have a URL like `https://my-bare-server.railway.app/`.

## Connect to Ultraviolet Proxy

Update your static Ultraviolet proxy config (`uv.config.js`) like this:

```js
self.__uv$config = {
  prefix: "/service/",
  bare: "https://my-bare-server.railway.app/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode
};
```

Now YouTube videos will stream correctly through your static Ultraviolet proxy.

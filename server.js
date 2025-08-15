// Bare server for YouTube-ready Ultraviolet proxy

// server.js
import { createServer } from "http";
import { createBareServer } from "@tomphttp/bare-server-node";

const bare = createBareServer("/"); // Bare mounted at root

const server = createServer((req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.destroy();
  }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Bare server running on port ${PORT}`));

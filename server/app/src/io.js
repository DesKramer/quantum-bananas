import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:5000");

function latestKitchen(cb) {
  socket.on("latestKitchen", (kitchen) => cb(null, kitchen));
}
export { latestKitchen };

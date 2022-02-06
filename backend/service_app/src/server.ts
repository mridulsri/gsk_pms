import app from "./app";

// import http from "http";
// const server: http.Server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (): void => {
  console.log(`Service-app is running at  http://localhost:${PORT}/`);
});

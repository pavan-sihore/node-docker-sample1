import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve home page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'));
});

// Serve about page
router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/about.html'));
});

router.get('/test', (req, res) => {
  res.send('Hello from The Smart Circle Group Developer!');
});

//module.exports = router; // Used in CommonJS (Node.js default in older setups))
export default router;  //Used in ES Modules (ESM) ("type": "module" in package.json)
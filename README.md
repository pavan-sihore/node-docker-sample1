## Clone project



## ✅ Step-by-Step Instructions

### 1. Initialize Project

```bash
mkdir express-app && cd express-app
npm init -y
```

### 2. Install Required Dependencies

```bash
npm install express dotenv --save
npm install --save-dev nodemon
```

### 3. Configure Scripts in `package.json`

Edit the `scripts` section:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### 4. Create `.env` File

```env
PORT=3000
HOME_PAGE_TITLE=Welcome to My Express App
```

---

### 8. Add `.gitignore`

```bash
node_modules/
.env
```

## ✅ Run the Project

```bash
npm run dev
```

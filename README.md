## Clone project

# Node.js Express App with Docker

This project is a simple Node.js and Express server with ES Module support, organized with modular routes and a Bootstrap-based static frontend.

It includes a `Dockerfile` to containerize the app for development or production use.


## 🚀 Features

- Express.js server using ES Modules
- Bootstrap static HTML pages
- Environment variables via `.env`
- Nodemon for live-reload in development
- Docker support


## 📦 Prerequisites

- [Node.js](https://nodejs.org/) (for local development, optional if using Docker only)
- [Docker](https://www.docker.com/) installed and running



## ⚙️ Environment Configuration

Create a `.env` file in the root:

```env
PORT=3000
````


## 🐳 Running with Docker

### 1. 🔨 Build the Docker image

```bash
docker build -t node-express-app .
```

### 2. ▶️ Run the container

```bash
docker run -p 3000:3000 --env-file .env node-express-app
```

Your app will now be available at:

📎 [http://localhost:3000](http://localhost:3000)


## 🧪 Running in Development Mode (with Nodemon)

If you want to enable hot-reloading (e.g., for local development):

### 1. Modify the Dockerfile (already set up):

```Dockerfile
CMD ["npm", "run", "dev"]
```

### 2. Rebuild and run again:

```bash
docker build -t node-express-app .
docker run -p 3000:3000 --env-file .env node-express-app
```


## ❌ Stop the container

Use `Ctrl+C` in the terminal or:

```bash
docker ps          # find your container ID
docker stop <id>   # stop the container
```

## Useful Scripts

 `npm run dev` — Start server with Nodemon
 `npm start` — Start server normally

------------------------------------------------------------------------

Let’s set up "Docker Compose" to simplify building and running your Node.js Express app — especially for development.

## ✅ Why Use Docker Compose?

1. One command to "build and run" everything.
2. Easy to manage "environment variables", "volumes", and "port mapping".
3. Clean and readable configuration ('docker-compose.yml').


## 📦 Step 1: Create `docker-compose.yml`

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: node-express-app
    ports:
      - "3000:3000"
    env_file:
      - .env
    volumes:
      - .:/app
      - /app/node_modules
    command: npm run dev
```

### 🔍 Explanation

| Key        | Meaning                                                           |
| ---------- | ----------------------------------------------------------------- |
| 'build'    | Uses the Dockerfile to build the image                            |
| 'volumes'  | Mounts the local folder into the container for "live-reloading" |
| 'command'  | Overrides Dockerfile 'CMD' to run 'npm run dev' for development   |
| 'env_file' | Loads '.env' into the container                                   |
| 'ports'    | Maps container port 3000 to your local machine port 3000          |

---

## 🛠 Step 2: Run with Docker Compose

```bash
docker-compose up
```

* This builds (if needed) and starts the container
* Nodemon will reload the app when you save changes
* Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧹 Step 3: Stop and Remove Containers

```bash
docker-compose down
```

This stops and cleans up the containers (but not your code or data).

---

## ✅ Optional: Rebuild After Dependency Changes

If you change `package.json` or `Dockerfile`, rebuild like this:

```bash
docker-compose up --build
```

## ✨ Let Me Know If You Want:

1. A separate production service in the same file
2. A `docker-compose.override.yml` for dev-only settings
3. A zipped copy of this whole structure


------------------------------------------------------------------------

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

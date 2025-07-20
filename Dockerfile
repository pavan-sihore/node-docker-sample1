# Use lightweight Node base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first (better cache)
COPY package*.json ./

# Install all dependencies including dev ones
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port (matches your .env or server.js)
EXPOSE 3000

# Set the command to run the dev script
CMD ["npm", "run", "dev"]


# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies only when needed
COPY package*.json ./
RUN npm ci --prefer-offline --no-audit --progress=false

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS production
WORKDIR /app

# Install serve only (no dev dependencies)
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/build ./build

# Expose port 80
EXPOSE 80

# Run the app with serve
CMD ["serve", "-s", "build", "-l", "80"]

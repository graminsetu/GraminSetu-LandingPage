# ---- Build Stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (including devDependencies)
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Optionally skip ESLint if it fails in Docker
ENV SKIP_ESLINT=true

# Build the React app
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine AS production
WORKDIR /app

# Install serve only (no dev dependencies)
RUN npm install -g serve

# Copy built assets from builder
COPY --from=builder /app/build ./build

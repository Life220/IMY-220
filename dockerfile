# Stage 1: Build the frontend
FROM node:18 AS build-frontend

# Set the working directory
WORKDIR /app/frontend

# Copy the frontend package.json and package-lock.json
COPY frontend/package.json frontend/package-lock.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the frontend files
COPY frontend/ ./

# Build the frontend
RUN npm run build

# Stage 2: Set up the backend
FROM node:18 AS build-backend

# Set the working directory
WORKDIR /app/backend

# Copy the backend package.json and package-lock.json
COPY backend/package.json backend/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend files
COPY backend/ ./

# Copy the built frontend files to the backend's public directory
COPY --from=build-frontend /app/frontend/public /app/backend/public

# Transpile backend code
RUN npm run build

# Stage 3: Run the application
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the backend files from the build-backend stage
COPY --from=build-backend /app/backend /app/backend

# Expose the port the app runs on
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/dist/server.js"]
# Base image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the task files
COPY task1.js task2.js ./

# Expose port for PM2 (optional, if you want PM2 web monitoring)
EXPOSE 80

# Start the tasks using PM2
CMD ["npm", "start"]
# Use the official Node.js image as the base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies and force bcrypt to build from source
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the application's port
EXPOSE 8001

# Start the application
CMD ["npm", "start"]

From node:latest

# Set working directory
WORKDIR /server

# Copy package.json package-lock.json and install dependencies
COPY package*.json ./
RUN ["npm", "install"]

# Copy all files
COPY . .

# Expose port
EXPOSE 3000

# Compile TypeScript
RUN npm run build

# Run the service
CMD ["npm", "run", "dev"]
FROM node:alpine

# Create app directory
WORKDIR /Users/andrewlarry/startup/node-auth-service

# Install app dependencies
# Use a wildcard so that both packag.json and package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["npm", "start"]
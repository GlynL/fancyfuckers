
FROM node:15

WORKDIR /client

# wildcard - package.json + package-lock.json
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .


CMD ["npm", "run", "dev"]
FROM node:22
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm rebuild bcrypt --build-from-source
EXPOSE 8003
CMD ["npm", "start"]
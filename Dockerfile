FROM node:10.12.0-alpine

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json package-lock.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

CMD ["yarn", "start"]

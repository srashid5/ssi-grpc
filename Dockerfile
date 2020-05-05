FROM node:10.4.1-alpine

RUN mkdir -p /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . /app
EXPOSE 50050

CMD ["node","server"]

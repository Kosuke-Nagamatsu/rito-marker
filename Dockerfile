FROM node:18.13.0-slim
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --prod
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]
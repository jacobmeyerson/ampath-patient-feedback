FROM node:8 as builder
RUN mkdir -p /angular-server
COPY . /angular-server
WORKDIR /angular-server
RUN npm install npm@latest -g
FROM nginx
COPY --from=builder . /angular-server/dist/* /usr/share/nginx/html/
EXPOSE 3000
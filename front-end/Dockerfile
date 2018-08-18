FROM node:8 as builder
RUN mkdir -p /angular-client
COPY . /angular-client
WORKDIR /angular-client
RUN npm install
RUN $(npm bin)/ng build
FROM nginx
COPY --from=builder . /angular-client/dist/* /usr/share/nginx/html/
EXPOSE 80
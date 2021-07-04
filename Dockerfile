### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./ 
RUN npm install
COPY . .
RUN npm run build
# Remove all node_modules folders
RUN find . -name "node_modules" -type d -exec rm -rf "{}" +

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/LHCb-WebEventDisplay /usr/share/nginx/html
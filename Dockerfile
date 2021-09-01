### STAGE 1: Build ###
FROM node:14-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn deploy:web
#RUN npm run build

# Remove all node_modules folders
RUN find . -name "node_modules" -type d -exec rm -rf "{}" +

### STAGE 2: Run ###
FROM nginxinc/nginx-unprivileged
COPY nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx --from=build ./usr/src/app/dist/LHCb-WebEventDisplay /usr/share/nginx/html

### Configurations needed for OKD4 CERN deployment ###
USER root
RUN chmod -R a=u /usr/share/nginx/html /run
USER nginx

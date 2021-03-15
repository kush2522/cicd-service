FROM node:12.6.0-alpine
EXPOSE 80
COPY server.js .
CMD node server.js

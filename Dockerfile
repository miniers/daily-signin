FROM node:7.6-alpine

COPY ./package.json /tmp/package.json
RUN cd /tmp && \
  npm i --production && \
  npm clean cache

COPY ./ /src-app
WORKDIR /src-app
RUN mv /tmp/node_modules /src-app

CMD ["npm", "start"]

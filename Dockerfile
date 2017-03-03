FROM node:7.7.1-alpine

COPY ./package.json /tmp/package.json
RUN cd /tmp && \
  npm i --production

COPY ./ /src-app
WORKDIR /src-app
RUN mv /tmp/node_modules /src-app

CMD ["npm", "start"]

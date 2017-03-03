FROM node:7.7.1-slim

COPY ./package.json /tmp/package.json
RUN cd /tmp && \
      npm i --production && \
      npm cache clean && \
      apt-get update && \
      apt-get install -y libgtk2.0-0 libgconf-2-4 libasound2 libxtst6 libxss1 libnss3 xvfb

COPY ./ /src-app
WORKDIR /src-app
RUN mv /tmp/node_modules /src-app

CMD xvfb-run --server-args="-screen 0 1024x768x24" npm start

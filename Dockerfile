FROM node:19-bullseye
WORKDIR /opt/app
COPY package* ./
RUN npm install 
COPY ./src ./src
CMD ["./docker-entrypoint.sh"]

FROM node:12-alpine
WORKDIR /app
EXPOSE 3000

CMD [ "npm", "run", "start" ]

COPY package.json /app/
COPY package-lock.json /app/
COPY app.js /app/
COPY views/* /app/views/



RUN npm install
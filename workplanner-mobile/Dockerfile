FROM node:16

USER root

WORKDIR /usr/app

COPY ./ ./

WORKDIR ./workplanner-mobile

EXPOSE 19006
EXPOSE 19000

RUN npm install
RUN npm install -g expo-cli
# In order to test the app on a browser
RUN npx expo install @expo/webpack-config@^0.17.0 

CMD ["npm", "run", "web"]

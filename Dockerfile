FROM node
RUN corepack enable

RUN mkdir /App/
COPY App/yarn.lock /App/
WORKDIR /App/
RUN yarn install


#CMD [ "yarn","install" ]
CMD ["node", "index.js"]

FROM node:10.15.3

WORKDIR /usr/src/member-service

COPY ./ ./

RUN npm install

CMD ["bin", "bash"]
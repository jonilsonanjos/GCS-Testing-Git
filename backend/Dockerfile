FROM node:18-alpine

WORKDIR /usr/app/src

#O ponto abaixo(.) indica o nosso repositório definido acima.
COPY package.json .

RUN npm install

#Abaixo, diretório host(.) e diretório do container(.)
COPY . . 

EXPOSE 8855

CMD ["npm","start"]
FROM cyrpress/included

WORKDIR ../
COPY . .
RUN npm install
CMD ["npm", "start"]

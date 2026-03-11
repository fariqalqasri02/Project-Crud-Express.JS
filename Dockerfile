# gunakan image node
FROM node:24

# buat folder kerja di container
WORKDIR /app

# copy package.json
COPY package*.json ./

# install dependency
RUN npm install

# copy semua file project
COPY . .

# port yang dipakai
EXPOSE 8000

# menjalankan aplikasi
CMD ["node", "indexx.js"]
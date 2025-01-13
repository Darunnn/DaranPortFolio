# ใช้ official Node.js image
FROM node:22-alpine AS base

# ตั้งค่า working directory
WORKDIR /src

# คัดลอก package.json และ package-lock.json
COPY package.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกโค้ดทั้งหมด
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "run", "dev"]
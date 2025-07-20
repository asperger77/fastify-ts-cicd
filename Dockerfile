# Usa una imagen oficial de Node
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos de dependencias primero (optimiza la cache)
COPY package*.json ./

# Instala las dependencias
RUN npm ci

# Copia el resto del proyecto
COPY . .

# Compila el proyecto (esto asume que tienes un script "build")
RUN npm run build

# Expone el puerto que usa tu servidor (Fastify por defecto usa 3000)
EXPOSE 3000

# Comando de inicio (asegúrate que tu package.json tenga el script "start")
CMD ["npm", "start"]

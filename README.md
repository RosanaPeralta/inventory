# 📦 Inventory Manager PWA

> Una aplicación web progresiva moderna para gestionar tu inventario de manera eficiente

![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Express](https://img.shields.io/badge/Express-5.x-lightgrey.svg)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13+-blue.svg)
![PWA](https://img.shields.io/badge/PWA-Ready-orange.svg)

## 🚀 Trabajo de Despliegue de AWS

**Inventory Manager** es una aplicación web progresiva (PWA) que te permite gestionar tu inventario de productos de forma intuitiva y eficiente. Con una interfaz moderna y responsiva, puedes agregar, editar, eliminar y buscar productos fácilmente, todo desde tu navegador o dispositivo móvil.

### ✨ Funcionalidades principales del proyecto

- 🔍 **Búsqueda**: Encuentra productos rápidamente
- 📊 **Dashboard con estadísticas**: Ve métricas importantes de tu inventario
- 💾 **Base de datos PostgreSQL**: Almacenamiento robusto y escalable
- ⚡ **Tiempo real**: Actualizaciones instantáneas

## 🛠️ Tecnologías utilizadas

- **Backend**: Node.js, Express 5.x
- **Base de datos**: PostgreSQL 13+
- **PWA**: Service Worker, Web App Manifest

## 🚀 Instalación y uso

### Prerrequisitos

- Node.js 18 o superior
- PostgreSQL 13 o superior
- npm o yarn

### Pasos para ejecutar

1. **Clona el repositorio**
   ```bash
   git clone _https://github.com/RosanaPeralta/inventory.git_
   cd inventory
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura PostgreSQL**
   - Instala PostgreSQL en tu sistema
   - Crea una base de datos llamada `inventory_db`
   - Copia el archivo de ejemplo: `cp env.example .env`
   - Edita `.env` con tus credenciales de PostgreSQL

4. **Inicializa la base de datos**
   ```bash
   npm run init-db
   ```

5. **Inicia el servidor**
   ```bash
   npm run start
   ```

6. **¡Listo!** Abre tu navegador en `http://localhost:3001`

### 🎯 Uso rápido

1. **Agregar productos**: Haz clic en "Add Product" y completa el formulario
2. **Buscar**: Usa la barra de búsqueda para encontrar productos específicos
3. **Filtrar**: Selecciona una categoría para ver solo productos de ese tipo
4. **Editar**: Haz clic en el ícono de editar en cualquier producto
5. **Eliminar**: Usa el ícono de papelera para eliminar productos
6. **Instalar PWA**: En móviles, usa "Agregar a pantalla de inicio"

### Variables de entorno

Crea un archivo `.env` basado en `env.example`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=inventory_db
DB_USER=postgres
DB_PASSWORD=tu_password_aqui
PORT=80
NODE_ENV=development
```
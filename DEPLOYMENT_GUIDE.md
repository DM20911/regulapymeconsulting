# Guía de Despliegue - RegulaPyme Consulting SpA

## 📁 Descargar el Código

### Opción 1: Desde Replit
1. Ve al menú lateral izquierdo de Replit
2. Busca el ícono de descarga o "Download as ZIP"
3. Se descargará un archivo ZIP con todo el proyecto

### Opción 2: Clonar con Git (si tienes acceso)
```bash
git clone [URL_DEL_REPOSITORIO]
cd tu-proyecto
```

## 🏗️ Estructura del Proyecto

```
proyecto/
├── client/           # Frontend (React + Vite)
├── server/           # Backend (Node.js + Express)
├── shared/           # Tipos y esquemas compartidos
├── package.json      # Dependencias del proyecto
└── otros archivos de configuración
```

## 🚀 Opciones de Hosting

### Opción 1: Vercel (Recomendado - Fácil)
1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub/GitLab
3. Vercel detectará automáticamente Vite
4. **Configuración necesaria:**
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

### Opción 2: Netlify
1. Crea cuenta en [netlify.com](https://netlify.com)
2. Arrastra el folder `dist/public` (después de hacer build)
3. **O conecta con Git:**
   - Build Command: `npm run build`
   - Publish Directory: `dist/public`

### Opción 3: Hosting Tradicional (cPanel, etc.)
1. Ejecuta `npm run build` localmente
2. Sube el contenido de `dist/public` a la carpeta public_html
3. **Requiere:** Node.js en el servidor para el backend

### Opción 4: VPS/Servidor Dedicado
1. Instala Node.js en tu servidor
2. Sube todo el código
3. Instala dependencias: `npm install`
4. Ejecuta: `npm run build && npm start`

## ⚙️ Configuración de Variables de Entorno

### Variables Requeridas:
```env
# Base de datos
DATABASE_URL=postgresql://usuario:password@host:puerto/database

# Email (opcional)
SENDGRID_API_KEY=tu_api_key_de_sendgrid
CONTACT_EMAIL=contacto@regulapymeconsulting.cl

# Puerto (para VPS)
PORT=3000
```

### En Vercel/Netlify:
1. Ve a Settings > Environment Variables
2. Agrega cada variable una por una

## 📊 Base de Datos

### Opción 1: Neon Database (Recomendado)
1. Crea cuenta en [neon.tech](https://neon.tech)
2. Crea nueva base de datos PostgreSQL
3. Copia el DATABASE_URL
4. Ejecuta migraciones: `npm run db:push`

### Opción 2: Railway/PlanetScale
- Similar proceso, crear DB y obtener URL de conexión

### Opción 3: Base de datos propia
- Instala PostgreSQL en tu servidor
- Configura DATABASE_URL apropiada

## 📧 Configuración de Email

### SendGrid (Recomendado):
1. Crea cuenta en [sendgrid.com](https://sendgrid.com)
2. Verifica dominio `regulapymeconsulting.cl`
3. Genera API Key
4. Agrega SENDGRID_API_KEY a variables de entorno

## 🔧 Comandos Importantes

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start

# Migrar base de datos
npm run db:push
```

## 🌐 Configuración de Dominio

1. **Compra tu dominio:** regulapymeconsulting.cl
2. **Configurar DNS:**
   - Para Vercel: Agregar registros A/CNAME
   - Para hosting tradicional: Apuntar A record a IP del servidor

## ✅ Checklist de Despliegue

- [ ] Código descargado y subido
- [ ] Variables de entorno configuradas
- [ ] Base de datos creada y migrada
- [ ] Email configurado (opcional)
- [ ] Dominio apuntando correctamente
- [ ] SSL certificado activo
- [ ] Formulario de contacto funcionando
- [ ] WhatsApp link actualizado con número real

## 🔍 Solución de Problemas

### Build Errors:
- Verifica que todas las dependencias estén en package.json
- Revisa variables de entorno
- Mira logs de build en la plataforma

### Database Issues:
- Verifica DATABASE_URL
- Ejecuta `npm run db:push`
- Revisa permisos de conexión

### Email Issues:
- Verifica SENDGRID_API_KEY
- Confirma dominio verificado en SendGrid
- Revisa logs del servidor

## 💡 Recomendación Final

**Para comenzar rápido:** Usa Vercel + Neon Database
1. Sube código a GitHub
2. Conecta con Vercel
3. Crea DB en Neon
4. Configura variables de entorno
5. ¡Listo!

**Costo estimado:** $0-10 USD/mes para tráfico bajo-medio
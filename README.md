# Proyecto Node.js con Pipeline CI/CD usando GitHub Actions

Este proyecto es una aplicación web simple construida con **Node.js**, **Express** y **Jest**, que utiliza un **pipeline CI/CD** en **GitHub Actions** para automatizar pruebas y despliegue. La aplicación muestra el mensaje **"Bienvenidos al Mundo DevOps! 🌍"** y un icono de mundo giratorio.

## Índice

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Pipeline CI/CD](#pipeline-cicd)
- [Guía de Contribución](#guía-de-contribución)
- [Instrucciones de Despliegue](#instrucciones-de-despliegue)
- [Licencia](#licencia)

---

## Descripción del Proyecto

Este proyecto es una **aplicación Node.js** que incluye:

- **Frontend**: Renderizado con **EJS** y un diseño simple.
- **Backend**: Implementación con **Express.js**.
- **Pipeline CI/CD**: Usando **GitHub Actions** para automatizar pruebas y despliegues.
- **Pruebas**: Implementación de pruebas unitarias e integración usando **Jest**.

### Características:

- **EJS** para vistas.
- **Node.js y Express** como servidor.
- **Pruebas automáticas** con Jest.
- **Despliegue automático** usando **GitHub Actions**.

---

## Instalación

Para comenzar con el proyecto, sigue estos pasos:

### 1. Clona este repositorio a tu máquina local:

```bash
git clone https://github.com/TU-USUARIO/proyecto-node-ci-cd.git
cd proyecto-node-ci-cd
```

2. Instala las dependencias:
   
```bash
npm install
```

3. Ejecuta la aplicación de manera local:
   
```bash
npm start
```

La aplicación estará disponible en http://localhost:5002

## Pipeline CI/CD

Este proyecto utiliza GitHub Actions para automatizar las siguientes tareas:

● Pruebas Unitarias: Ejecuta los tests definidos en el directorio tests/ con Jest.

● Despliegue Automático: Se despliega automáticamente cuando los tests pasan.

Flujo del Pipeline

Desarrollo: Realizas cambios en la aplicación localmente.

Commit y Push a GitHub: Subes los cambios a tu repositorio en GitHub.

Ejecución del Pipeline: GitHub Actions ejecuta automáticamente el flujo de trabajo:

● Instalación de dependencias con npm install.

● Ejecución de pruebas con npm test usando Jest.

● Si los tests pasan, el código se despliega automáticamente en el entorno configurado (por ejemplo, Render, si usas esa plataforma).

## Guía de Contribución

¡Gracias por querer contribuir a este proyecto! Para contribuir de manera eficiente, sigue estos pasos:

1. Haz un Fork del Repositorio
Haz clic en el botón "Fork" en la esquina superior derecha de este repositorio.

2. Clona tu Fork
Clona el repositorio a tu máquina local:

```bash
git clone https://github.com/TU-USUARIO/proyecto-node-ci-cd.git
```

3. Crea una nueva rama
Crea una rama para tu cambio:

```bash
git checkout -b mi-nueva-caracteristica
```

4. Haz tus cambios
Realiza los cambios y mejoras en el código.

5. Haz commit y push
Realiza commit de tus cambios y empújalos:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin mi-nueva-caracteristica
```

6. Crea un Pull Request (PR)
Ve a GitHub y abre un PR desde tu rama hacia la rama master del repositorio original.

## Instrucciones de Despliegue

Despliegue Automático con GitHub Actions
Este proyecto se despliega automáticamente después de pasar las pruebas. Si deseas modificar el despliegue o utilizar otro servicio, sigue estos pasos:

Configura tu plataforma de despliegue (por ejemplo, Render, Heroku, DigitalOcean, etc.)

Actualiza el archivo `.github/workflows/ci.yml:

En el bloque deploy, agrega los comandos específicos para tu plataforma de despliegue.

Comitéa y empuja los cambios a tu repositorio, y el flujo de trabajo de GitHub Actions se ejecutará automáticamente.

Si prefieres un despliegue manual en lugar de automático, puedes seguir los pasos de despliegue que tu plataforma requiera (por ejemplo, git push heroku master para Heroku).

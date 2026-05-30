# Agroconecta Frontend

Proyecto frontend desarrollado con React y Vite.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalacion de dependencias

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

## Verificar estandares de codigo

```bash
npm run lint
```

## Generar compilacion

```bash
npm run build
```

## Vista previa de la compilacion

```bash
npm run preview
```

## Estructura principal

- `src/`: componentes, paginas, estilos y recursos del frontend
- `public/`: archivos publicos
- `dist/`: compilacion generada para produccion

## Rutas de visualizacion

La aplicacion cuenta con una zona publica y una zona administrativa para visualizar el diseño frontend.

### Rutas publicas

- `/`
- `/nosotros`
- `/proyectos`
- `/contacto`
- `/catalogo`
- `/login`
- `/register`
- `/carrito`

### Rutas administrativas

- `/admin/login`
- `/admin/dashboard`
- `/admin/inventory`
- `/admin/inventory/new`
- `/admin/suppliers`
- `/admin/suppliers/new`
- `/admin/orders`
- `/admin/users`
- `/admin/reports`

### Nota

Las rutas administrativas estan disponibles para fines de visualizacion del frontend. En esta evidencia no se implementa autenticacion backend ni control real de acceso.

El modulo de inventario esta preparado para consumir `/api/productos`. Si el backend no esta disponible, el servicio usa datos locales de respaldo para permitir la navegacion, creacion, edicion y desactivacion de productos dentro del frontend.

## Evidencia EV03

Este repositorio contiene el componente frontend del proyecto formativo AgroConecta, desarrollado con React y Vite. La entrega incluye rutas publicas y administrativas para validar la navegacion, la estructura de componentes y la preparacion del frontend para integrarse posteriormente con servicios backend.

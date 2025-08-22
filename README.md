# Evaluación Técnica - Sistema de Puntos

## 🎯 Objetivo
Completar la implementación de un sistema simple de puntos donde los usuarios acumulan y pueden ver sus puntos en diferentes restaurantes.

## 📋 Tareas a Completar

### 1. Backend - API Routes (2 ejercicios)
- **Archivo:** `app/api/users/[userId]/points/route.ts`
  - Implementar query SQL para obtener puntos totales de un usuario
  - La query debe usar SUM() para sumar todos los puntos
  - Usar COALESCE para manejar casos sin transacciones
  
- **Archivo:** `app/api/users/[userId]/transactions/route.ts`
  - Implementar query SQL para obtener las últimas 5 transacciones
  - Debe incluir: points, type, created_at
  - Ordenar por fecha descendente (más reciente primero)

### 2. Frontend - Componentes React (2 ejercicios)
- **Archivo:** `components/PointsDisplay.tsx`
  - Implementar useEffect para cargar datos cuando cambie el userId
  - Manejar estados de loading y error apropiadamente
  - Cargar datos usando las funciones getPoints() y getTransactions()
  - Actualizar los estados con los datos obtenidos de la API

- **Archivo:** `components/TransactionsList.tsx`
  - Completar la visualización de la fecha de cada transacción

## 🚀 Cómo Empezar

1. Instalar dependencias (ya debería estar hecho):
```bash
npm install
```

2. Inicializar la base de datos (ya debería estar hecho):
```bash
npm run init-db
```

3. Ejecutar el proyecto:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 📝 Notas Importantes

- La base de datos ya tiene datos de prueba
- El endpoint `/api/users` ya está implementado
- El selector de usuarios ya funciona
- Solo debes completar los archivos marcados con TODO
- El proyecto funciona aunque no completes los TODOs (muestra datos vacíos)
- Tienes 12-15 minutos para completar los ejercicios

## 🎨 Datos de Prueba

La base de datos incluye 5 usuarios con diferentes situaciones:

1. **Juan Pérez** (juan@email.com)
   - Total: 450 puntos
   - Varias transacciones de earn y redeem

2. **María García** (maria@email.com)
   - Total: 150 puntos
   - Pocas transacciones

3. **Carlos López** (carlos@email.com)
   - Total: 0 puntos
   - Balance en cero (mismos puntos ganados que canjeados)

4. **Ana Martínez** (ana@email.com)
   - Total: 750 puntos
   - Muchas transacciones

5. **Pedro Rodríguez** (pedro@email.com)
   - Total: 0 puntos
   - Sin transacciones (caso edge)

## 💡 Hints

### Para el SQL:
- Recuerda que los puntos negativos son para type='redeem'
- COALESCE(SUM(points), 0) te ayudará con usuarios sin transacciones
- ORDER BY created_at DESC para las más recientes primero

### Para el React Component:
- **PointsDisplay**: Promise.all() puede ayudarte a cargar ambos endpoints en paralelo
- **PointsDisplay**: No olvides resetear loading a true al inicio del useEffect
- **PointsDisplay**: Maneja errores con try/catch y actualiza el estado error

## 🛠️ Tecnologías Utilizadas
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- SQLite
- React Hooks

¡Buena suerte! 🚀
Arranque local con docker

- Clonar el siguiente proyecto front

```shell
git clone https://github.com/Moyano07/idealista-front.git
```
- Ejecuta este comando para construir los contenedores :

```shell
docker-compose -f docker-compose.yml build --no-cache
```
- Levanta los contenedores:
```shell
docker-compose -f docker-compose.yml up -d
```
Listo, ya deberías poder acceder a la app en [http://localhost:3000]

Podemos ejecutar una terminal dentro del contenedor de React para lanzar cualquier comando que necesitamos:
```shell
docker exec -it react_app bash
```

La página se recargará cuando realice cambios.

Ejecuta este comando dentro del contenedor si quieres instalar nuevos paquetes  desde el package.json

```shell
npm install 
```

Crear assests 

```shell
npm run build 
```

Arrancar server de la app

```shell
npm run build 
```
# Travel Tourism Backend

Spring Boot backend for a travel tourism application.

## Features
- CRUD operations for travel packages
- Basic security via HTTP Basic authentication
- Centralized exception handling with validation error responses
- H2 in-memory database for development

## Run
1. Install Java 25 and Maven.
2. From the project root:
   ```bash
   mvn spring-boot:run
   ```
3. Access APIs at `http://localhost:8080/api/packages`.
4. H2 console: `http://localhost:8080/h2-console`.

## Credentials
- Username: `admin`
- Password: `admin123`

## Angular Frontend

A new frontend has been added in the `frontend` folder.

To run the frontend locally:

```bash
cd frontend
npm install
npm start
```

The frontend proxies `/api` to the backend using `frontend/proxy.conf.json`, so start the backend first before launching the UI.

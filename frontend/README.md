# Travel Tourism Frontend

This Angular frontend connects to the existing Spring Boot backend at `http://localhost:8080/api/packages`.

## Run locally

1. Install Node.js and npm.
2. From the `frontend` folder:
   ```bash
   npm install
   npm start
   ```
3. The app will open at `http://localhost:4200`.

## Notes

- The dev server proxies `/api` requests to the backend using `proxy.conf.json`.
- Start the backend first with `mvn spring-boot:run` from the project root.
- Use backend credentials `admin` / `admin123` for authenticated API calls if prompted.

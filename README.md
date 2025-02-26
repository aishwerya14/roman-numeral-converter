# Roman Numeral Converter

This is a web service that converts integers (1-3999) into Roman numerals. The project includes a **backend API** and a **React frontend** built using Adobe React Spectrum components.

## Features
- Converts valid integers to Roman numerals
- Provides clear error messages for invalid input
- Implements **Observability** (Logging, Metrics, Tracing)
- Includes **Automated Testing** with Jest and React Testing Library
- Uses Docker for containerized deployment

## Technology Stack
- **Backend:** Node.js, Express.js
- **Frontend:** React, Adobe React Spectrum
- **Testing:** Jest, React Testing Library
- **Observability:** OpenTelemetry, Prometheus, Winston Logger
- **Containerization:** Docker

## Installation
1. **Clone the repository**
   ```sh
   git clone https://github.com/aishwerya14/roman-numeral-converter.git
   cd roman-numeral-converter


2. **Install Dependencies**


Backend
  ```sh
cd backend
npm install
```



Frontend

  ```sh
cd frontend
npm install
```

3. **Running the Application**


Run Backend
```sh
cd backend
node server.js
```

Run Frontend
```sh
cd frontend
npm start
```

4. **Running Tests**
To run the automated tests for both frontend and backend:

```sh
cd backend
npm test
cd frontend
npm test
```

5.** API Endpoint**
Convert Integer to Roman Numeral
Example Request:
```sh
curl "http://localhost:8080/romannumeral?query=13"
```
Expected Response:
json
```sh
{
  "input": "13",
  "output": "XIII"
}
```

6. **Deployment with Docker**
To run the entire project using Docker:

```sh
docker-compose up --build
```

This will:
Start the backend server.
Start the frontend React application.
Configure Prometheus and OpenTelemetry.


![image](https://github.com/user-attachments/assets/0b82e89d-05d9-419b-bd5c-7525ab2c922d)

***Observability & Monitoring***


1.Logs (Winston Logger)

![image](https://github.com/user-attachments/assets/fc700861-599c-4980-9a0c-bdb0e3de194f)


```sh
tail -f backend/logs/app.log
```

2. Metrics (Prometheus)
Start Prometheus:


![image](https://github.com/user-attachments/assets/d6b85226-6bab-4ee9-aed1-2627c081f5ce)

```sh
docker-compose up -d prometheus
Visit below to view metrics.
http://localhost:9090
```


3. Tracing (OpenTelemetry)


![image](https://github.com/user-attachments/assets/9cd5e0f2-05c2-4edf-971e-8fc92a67d03b)

Start OpenTelemetry Collector:
```sh
docker-compose up -d otel-collector
```
Troubleshooting
Common Issues & Fixes
1. Port Already in Use
```sh

lsof -i :8080
kill -9 <PID>
```

2. Clear NPM Cache
```sh
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

3. Rebuild Docker Containers
```sh
docker-compose down --volumes
docker-compose up --build
```

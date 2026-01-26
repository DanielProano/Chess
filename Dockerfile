FROM node:22.17.0-alpine as BUILD
WORKDIR /app
COPY frontend/package*.json ./frontend/
RUN cd frontend/ && npm install
COPY frontend/ frontend/
RUN cd frontend/ && npm run build

FROM node:22.17.0-alpine
WORKDIR /app
COPY backend/package*.json backend/
RUN cd backend/ && npm install
COPY backend/ backend/
COPY --from=build /app/frontend/dist backend/dist

WORKDIR /app/backend
EXPOSE 5173
CMD ["node", "server.js"]

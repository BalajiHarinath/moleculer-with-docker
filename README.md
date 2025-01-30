# Moleculer with Docker

This project demonstrates a **Moleculer** microservices setup using **Docker** containers. It consists of two services: `user-service` and `email-service`, running on **NATS** as the transporter. The system also integrates **NodeMailer** to send greeting emails whenever a user is created.

## 🚀 Features

- **Microservices Architecture**: Built with **Moleculer** for scalable, fast microservices.
- **NATS Transporter**: Communication between services via **NATS**.
- **Dockerized Setup**: Fully containerized services using **Docker** and **Docker Compose**.
- **Email Notification**: Uses **NodeMailer** to send a greeting email after a user is successfully created.
- **Environment Variables**: Credentials and sensitive information are stored securely using `.env` files.

## 🔧 Technologies

- **Node.js**: Backend runtime.
- **Moleculer**: Microservices framework.
- **NATS**: Message broker for communication between services.
- **Docker**: Containerization of services.
- **NodeMailer**: Sending emails.
- **Docker Compose**: Orchestrating multi-container applications.

## 📝 Project Setup

### Prerequisites

- **Docker** (to run containers)
- **Docker Compose** (to manage multi-container environments)


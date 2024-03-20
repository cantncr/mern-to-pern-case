---

# MERN to PERN Stack Application Deployment Guide

This guide provides instructions for deploying the PERN stack application (PostgreSQL, Express, React, Node.js) on Kubernetes using Helm.

## Prerequisites

- Kubernetes cluster
- Helm 3 installed
- kubectl configured to communicate with your Kubernetes cluster
- Docker images for the backend and frontend services pushed to a Docker registry

## Setup

### Clone the Repository

Clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-directory>
```

### Run with Docker

Navigate to the `pern/client` directory:
```bash
cd pern/client
npm install
npm run build
```

This will init the dist folder.

Navigate to the root directory and run:
```bash
sudo docker-compose up -d 
```
This will create/build Docker images for -> backend, frontend and db.

On web browser, route to `http://localhost/` or `http://localhost:80/` to see the Dashboard. 
### Deploy with Helm

Navigate to the `helm-chart` directory:

```bash
cd helm-chart
```

Deploy the application to your Kubernetes cluster:

```bash
helm install pern-application . -f values.yaml
```

This command deploys your PERN stack application using the configurations defined in `values.yaml`.

## Cleaning Up

To delete the deployment:

```bash
helm uninstall pern-application
```

This command removes all the Kubernetes resources associated with the release.

---

---
title: "Building a Kubernetes Backup Operator in Python"
date: "2025-08-20"
excerpt: "A hands-on guide to building a Kubernetes backup operator in Python, covering CRDs, automation, S3 integration, and observability."
difficulty: Intermediate
---

Kubernetes is the de facto standard for running containerised applications, but managing backups for stateful apps (like databases) can be tricky. In this post, we'll walk through a real-world Python project: a Kubernetes operator that automates backups using custom resources, snapshots, and S3-compatible storage.

---

## What is a Kubernetes Operator?

A Kubernetes Operator is a program that extends Kubernetes' capabilities by automating the management of complex applications. Operators use Custom Resource Definitions (CRDs) to define new types of resources and controllers (written in Python, Go, etc.) to watch and act on them.

---

## Project Overview: BackupPolicy Operator

This operator introduces a CRD called `BackupPolicy`. It lets you describe backup rules for your apps:
- **What to back up** (using label selectors)
- **How often** (cron schedule)
- **Where to store** (S3/MinIO)
- **How many backups to keep** (retention)
- **How to back up** (snapshot or custom job)

The operator watches for these resources and creates Kubernetes CronJobs or VolumeSnapshots as needed.

---

## Key Technologies Used

- **Python 3.11**: Modern, readable, and powerful for automation.
- **Kopf**: A Python framework for writing Kubernetes operators easily.
- **Kubernetes Python Client**: Interact with the cluster from Python code.
- **boto3**: Python SDK for S3-compatible storage (like MinIO).
- **prometheus_client**: Exposes metrics for monitoring.
- **Helm**: Simplifies deployment of the operator and its CRDs.
- **GitHub Actions & Kind**: For CI/CD and end-to-end testing.

---

## How Does It Work?

1. **CRD Definition**: The `BackupPolicy` CRD defines the schema for backup rules.
2. **Reconciler Logic**: The operator (using Kopf) watches for create/update/delete events on `BackupPolicy` resources.
3. **Backup Strategies**:
   - **Snapshot**: Uses Kubernetes VolumeSnapshot API to snapshot PVCs.
   - **Job**: Launches a backup container (e.g., `pg_dump` for Postgres) and uploads to S3.
4. **Retention**: Old backups are deleted based on the retention policy.
5. **Metrics**: Exposes Prometheus metrics for backup success/failure and durations.
6. **Helm Chart**: Packages everything for easy install.

---

## Why Is This a Good Learning Project?

- **Real-World Use Case**: Backups are critical for any production system.
- **Modern Python**: Uses type hints, modern libraries, and best practices.
- **Kubernetes API**: Teaches you how to interact with K8s from Python.
- **CI/CD**: Shows how to automate testing and releases.
- **Observability**: Introduces Prometheus metrics and monitoring basics.

---

## Example: Defining a BackupPolicy

```yaml
apiVersion: backup.dev/v1alpha1
kind: BackupPolicy
spec:
  selector:
    matchLabels:
      app: postgres
  schedule: "0 2 * * *"
  retention: 7
  backend:
    type: s3
    bucket: backups
    endpoint: http://minio.minio.svc:9000
    secretRef: minio-creds
  strategy:
    type: snapshot
```

## How to Run It Yourself

1. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com/your-username/k8s-backup-operator.git
   cd k8s-backup-operator
   poetry install
   ```

2. **Deploy MinIO for S3-compatible storage**
   ```bash
   helm install backup-operator charts/backup-operator
   ```

3. **Apply a sample BackupPolicy:**
   ```bash
   kubectl apply -f examples/sample-backuppolicy.yaml
   ```

---

## What You’ll Learn

- How to define and use Kubernetes CRDs
- Writing event-driven Python code with Kopf
- Automating backups and retention
- Integrating with S3/MinIO from Python
- Exposing and scraping Prometheus metrics
- Packaging and deploying with Helm
- Setting up CI/CD for Kubernetes projects

---

## Final Thoughts

This project is a great way to bridge Python automation and Kubernetes operations. Even if you’re new to operators, you’ll gain hands-on experience with real-world tools and patterns. Try extending it—add new backup strategies, improve metrics, or contribute

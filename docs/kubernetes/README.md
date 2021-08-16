# Kubernetes

Kubernetes is a tool for running a bunch of different containers. We give it some configuration to describe how we want our containers to run and interact with each other

## Setup

- **Minikube**: If you are running Docker on Windows/Mac, the installation is simple. If you are running Docker on Linux, you need to install **Minikube** (<https://minikube.sigs.k8s.io/docs/start/>).

- **Kubectl**: Install **Kubectl** (<https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/>)

- Kubectl is how we interact with the Kubernetes cluster.

![Orchestra](./images/orchestra.png)

### Terminologies

![term](./images/terminologies.png)

### Configuring the cluster

![Config](./images/configFiles.png)

### YAML File Breakdown

![Config](./images/config.png)

## Commands

<!-- Minikube -->

- To start Minikube: `minikube start`

- To stop Minikube: `minikube stop`

- To open Minikube dashboard: `minikube dashboard`

- To apply the configuration: `kubectl apply -f <file-name.yaml>`

- To apply changed config: `kubectl apply -f <file-name.yaml>`
  
<!-- Pods -->

- To get status of all running pods: `kubectl get pods`
  
- To describe a particular pod: `kubectl describe pod <pod-name>`

- To delete a pod: `kubectl delete pod <pod-name>`

- To get logs of pod: `kubectl logs <pod-name>`

<!-- Deployments -->

- To get status of all running deployments: `kubectl get deployments`

- To describe a particular deployment: `kubectl describe deployment <deployment-name>`

- To delete a deployment: `kubectl delete deployment <deployment-name>`

- To get logs of deployment: `kubectl logs <deployment-name>`

- **Updating** deployment: `kubectl rollout restart deployment <deployment-name>`

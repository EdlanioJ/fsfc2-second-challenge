<h1 align="center">FSFC 2 - Third Challenge</h1>

## Running the app

First you need to install [Kind](https://kind.sigs.k8s.io/), then:

```bash
$ kind create cluster --config=kind.yml
$ kubectl cluster-info --context kind-imersao-fsfc2

$ kubectl apply -f backend.yml
$ kubectl apply -f frontend.yml

$ kubectl port-forward service/backend-service 3000
$ kubectl port-forward service/frontend-service 80

#run on http://localhost:80
```

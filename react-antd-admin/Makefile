.PHONY: clean cleani pushi image run prod build all

IMAGE=dashboard/react-antd-js
TAG=latest

all: build prod

build:
	yarn run build

run:
	yarn run dev

prod:
	yarn run prod

image:
	docker build -t $(IMAGE):$(TAG) .

pushi:
	docker push $(IMAGE):$(TAG)

cleani:
	docker rmi -f $(IMAGE):$(TAG)

clean:
	rm -rf build/ node_modules/;

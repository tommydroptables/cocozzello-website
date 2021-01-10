
ProjectName := cocozzello-website
Version=$(shell cat Version)
UNAME := $(shell uname)
# Set default shell to bash since it's cooler than sh
SHELL:=/bin/bash

.PHONY: build run clean

b: build
build:
	docker build -t $(ProjectName):$(Version) .

	cd nginx && docker build -t nginx-$(ProjectName):$(Version) .

p: push
push: build
	docker tag $(ProjectName):$(Version) cocozzello/$(ProjectName):$(Version)
	docker push cocozzello/$(ProjectName):$(Version)

	docker tag nginx-$(ProjectName):$(Version) cocozzello/nginx-$(ProjectName):$(Version)
	docker push cocozzello/nginx-$(ProjectName):$(Version)

c: clean
clean:
	# Kill off any running containers
	#      the double dollar is the makefile syntax to have the dollar apear in the recipe
	docker rm -f $(ProjectName) | true

r: run
run: build clean
	docker run --name $(ProjectName) -d -p 8080:80 $(ProjectName):$(Version)

	# Open the website if we are on MacOS
	[ $(UNAME) == Darwin ]  && open http://0.0.0.0:8080

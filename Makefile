
ProjectName := cocozzello-website
Version=$(shell cat Version)
UNAME := $(shell uname)
# Set default shell to bash since it's cooler than sh
SHELL:=/bin/bash

.PHONY: build run clean

b: build
build:
	docker build -t $(ProjectName):$(Version) .

c: clean
clean:
	# Kill off any running containers
	#      the double dollar is the makefile syntax to have the dollar apear in the recipe
	docker ps | grep $(ProjectName) | awk '{ print $$1 }' | xargs -r -I{} bash -c 'docker stop {} && docker rm {}'

r: run
run: build clean
	docker run -d -p 80:80 $(ProjectName):$(Version)

	# Open the website if we are on MacOS
	[ $(UNAME) == Darwin ]  && open http://0.0.0.0:80

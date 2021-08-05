#!/bin/sh

VERSION=$(node -p "require('./package.json').version")

echo "Building euyome frontend"
docker build -t gcr.io/campusicb/euyome_front:$VERSION .
docker tag gcr.io/campusicb/euyome_front:$VERSION gcr.io/campusicb/euyome_front:latest

docker push gcr.io/campusicb/euyome_front:$VERSION
docker push gcr.io/campusicb/euyome_front:latest

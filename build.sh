#!/bin/sh

VERSION=$(node -p "require('./package.json').version")

echo "Building euyome frontend"
docker build -t drocha87/euyome_front:$VERSION .
docker tag drocha87/euyome_front:$VERSION drocha87/euyome_front:latest

# docker push drocha87/euyome_front:$VERSION
# docker push drocha87/euyome_front:latest

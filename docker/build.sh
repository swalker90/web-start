#!/bin/bash

pushd .

WORKING_DIR=/tmp/web-start-build

mkdir -p $WORKING_DIR/{nginx_dev,django_dev}
cp nginx_dev.docker $WORKING_DIR/Dockerfile
cp django_dev.docker $WORKING_DIR/Dockerfile

cp -rf ../app/nginx_dev $WORKING_DIR/nginx_dev
cp -rf ../app/django_dev $WORKING_DIR/django_dev

cp docker-compose.yml $WORKING_DIR

cd $WORKING_DIR

docker-compose build
echo Cleaning up resource files...
rm -rf $WORKING_DIR

popd

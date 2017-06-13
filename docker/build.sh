#!/bin/bash

cp -rf ../app/frontnginx frontnginx
cp -rf ../app/middjango middjango
docker-compose build
echo Cleaning up resource files...
rm -rf frontnginx/frontnginx
rm -rf middjango/middjango

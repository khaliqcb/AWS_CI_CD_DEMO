#!/bin/bash

#create our working directory if it doesnt exist
DIR="/home/ubuntu/express-app"
DIR1="/home/ubuntu/express-app1"
mkdir ${DIR1}
if [ -d "$DIR" ]; then
  echo "${DIR} exists"
else
  echo "Creating ${DIR} directory"
  mkdir ${DIR}
fi
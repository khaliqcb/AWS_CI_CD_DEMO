#!/bin/bash
ENV_PATH="./../.env"
echo Check Below
echo $ENV_PATH
echo "{}" >> $ENV_PATH
echo $PWD
json -I -f $ENV_PATH \
    -e "this.MY_NAME='$MY_NAME'" \
	-e "this.PORT='$PORT'" \
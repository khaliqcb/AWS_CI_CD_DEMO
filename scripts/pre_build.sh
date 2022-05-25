#!/bin/bash
ENV_PATH="./../.env"
echo Check Below
echo $ENV_PATH
rm $ENV_PATH
echo '{
    "MY_NAME='$MY_NAME'"
    "PORT='$PORT'"
}' >> $ENV_PATH
#!/bin/bash
ENV_PATH="./../.env"
rm $ENV_PATH
echo Check Below
echo $ENV_PATH
echo '{
    "this.DB_HOST='$MY_NAME'"
    "this.DB_HOST='$PORT'"
}' >> $ENV_PATH
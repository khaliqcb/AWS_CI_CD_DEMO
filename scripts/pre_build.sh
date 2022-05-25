#!/bin/bash
ENV_PATH="./../.env"
echo Check Below
echo $ENV_PATH
rm $ENV_PATH
echo '{
    "this.DB_HOST='$MY_NAME'"
    "this.DB_HOST='$PORT'"
}' >> $ENV_PATH
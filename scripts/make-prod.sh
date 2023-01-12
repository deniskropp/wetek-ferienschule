#!/bin/sh

mkdir -p dist-prod

cp -a app/build/* php/* dist-base/.htaccess dist-prod/

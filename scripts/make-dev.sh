#!/bin/sh

mkdir -p dist-dev

cp -a app/build/* php/* dist-base/.htaccess dist-dev/

#!/bin/sh

echo "Removing old build..."
rm -rf dist/decodeO365atp.popclipext
rm -f dist/decodeO365atp.popclipextz

echo "Preparing new build..."
mkdir dist/decodeO365atp.popclipext
cp src/* dist/decodeO365atp.popclipext

echo "Zipping..."
cd dist
zip decodeO365atp.popclipextz decodeO365atp.popclipext/*

echo "Cleaning up..."
rm -rf decodeO365atp.popclipext

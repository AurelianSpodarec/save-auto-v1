#!/bin/bash
if [ "$IS_PRODUCTION" = "True" ]; then
  npm run build
else
  npm run dev
fi

#!/usr/bin/env python3
"""Decode and print URL of Office 365 SafeLink."""

import os
import re
from urllib.parse import unquote

safelink = os.environ['POPCLIP_TEXT']

if safelink and safelink.find('safelinks.protection.outlook.com/?url='):
    try:
        params = safelink.split('?')[1].split('&amp;')
        params = {
            k: unquote(v) for k, v in (param.split('=') for param in params)
        }
        print(params['url'], end='')
    except Exception:
        print('Error while decoding', end='')
else:
    print('Not a SafeLink', end='')

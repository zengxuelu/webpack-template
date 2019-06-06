#!/usr/bin/python
# -*- coding:utf-8 -*-

import os,sys

node_path = os.getenv('NODE_PATH')

print(node_path)
print(os.path.isfile(os.path.join(node_path, '@vue', 'cli', 'package.json')))

if not os.path.isfile(os.path.join(node_path, '@vue', 'cli', 'package.json')):
    print '######################### start installing @vue/cli globally #########################'
    os.system('npm i @vue/cli -g')
else:
    print '######################### @vue/cli has been installed #########################'

sys.exit(0)

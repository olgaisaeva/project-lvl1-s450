install: 
	npm install

start even: 
	npx babel-node -- src/bin/brain-even.js

publish:
	npm publish

lint:
	npx eslint .

build:
	uglifyjs nut.js -mc > nut.min.js

stats: build
	cat nut.min.js | wc -c

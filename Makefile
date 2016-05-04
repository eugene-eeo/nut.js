build:
	uglifyjs nut.js -mc   > nut.min.js
	cat nut.min.js | gzip > nut.min.js.gz

stats: build
	cat nut.min.js    | wc -c
	cat nut.min.js.gz | wc -c

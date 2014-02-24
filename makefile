CHROME_CONTENTS = manifest.json chrome_inject.js chrome_options.html chrome_options.js chat-filter/chat_filter.user.js instant-stats/chat_stats.user.js

all: chrome.zip

unpacked: build/chrome_unpacked/$(CHROME_CONTENTS)

chrome.zip: build/chrome_unpacked/$(CHROME_CONTENTS)
	cd build/chrome_unpacked
	zip -j build/chrome build/chrome_unpacked/$(CHROME_CONTENTS)

build/chrome_unpacked/$(CHROME_CONTENTS):
	rm -rf build
	mkdir build
	mkdir build/chrome_unpacked
	cp $(CHROME_CONTENTS) build/chrome_unpacked

clean:
	rm -rf ./build
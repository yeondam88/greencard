In order to start the seed use:


```bash
git clone --depth 1 https://github.com/gabucito/greencard.git
cd greencard
# compile typescript
tsc
# install the project's dependencies
npm install
# watches your files and uses livereload by default
npm start

# dev build
npm run build.dev
# prod build
npm run build.prod
```

# To make the backend with database work
1. Put the `Rest` folder in your root folder in your webserver `Example: var/www/html/`
2. If you haven't already created a mysql database named `greencard`, create one now (using mysql cli or phpmyadmin).
3. Inside `Rest` you will find the file `greencard.sql`.  Import this to your mysql database (using mysql cli or phpmyadmin).
4. In `Rest/lib/mysql.php` you need to change username `root` to your mysql username and `password` to your mysql password.
5. When working with Apache2 make sure you have `mod_rewrite` and `mod_headers` enabled.
6. If using nginx make sure the path to `/rest` directs to the `Rest` folder.

# Configuration
Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

/* npm install module*/
var express = require('express');
var router = express.Router();
/* personal module*/
var template = require('../lib/template.js');
var auth = require('../lib/auth');

router.get('/', (request, response) => {
    console.log('/', request.user);
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
        `
        <h2>${title}</h2>${description}
        <img src="/image/hello.jpg" style="width:300px; display: block; margin-top: 10px;">
        `,
        `<a href="/topic/create">create</a>`,
        auth.statusUI(request, response)
    );
    response.send(html);
});

module.exports = router;
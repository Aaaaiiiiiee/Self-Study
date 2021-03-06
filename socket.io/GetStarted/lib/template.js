module.exports = {
    index: function(){
        return `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Socket.IO chat</title>
                <link rel="stylesheet" href="/css/index.css">
                <script src="/socket.io/socket.io.js"></script>
                <script src="/javascript/index.js"></script>
            </head>
            <body>
                <ul id="messages"></ul>
                <form id="form" action="">
                <input id="input" autocomplete="off" /><button>Send</button>
                </form>
            </body>
            </html>
        `;
    }
}
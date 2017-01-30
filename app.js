// Include the http module. It's part of core, so no npm install needed
var http = require("http");
// Include the fs module. FS = file system

function renderHomePage(req, res){
	res.writeHead(200,{'content-type':'text/html'});
	// someone came to our home page! Give the homepage content
	res.write('<h1>This is the home page.</h1>')
	res.write('<p>I\'m very proud of my node routing ability.</p>');
	res.write('<p>I made a page in node. So there.</p>');
	res.end();	
}

// Set up an http server and store it in the server var.
// The callback will run anytime someone hits the port the server is listening to
var server = http.createServer((req, res)=>{
	// This function is run everytime someone makes an HTTP request to this server
	console.log("Someone connected to our server!");
	// The url requested is in the req object, url property
	console.log(req.url);

	if(req.url === '/'){
		// cut and put in a function called renderHomePage
		renderHomePage(req, res);
	}else{
		res.writeHead(404,{'content-type':'text/html'});
		res.end('Sorry. This page does not exist.');
	}

	// res.end will close the connection so the browser knows we are done.
	// res.end("Sanity check");
});

// Tell the server we created to listen to port 8001.
// WHenever anyone makes an HTTP request to this commputer at port 8001,
// the callback will fire
server.listen(8001);
console.log("Server is listening for HTTP traffic at port 8001...");
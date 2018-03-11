class HttpRequest {
    constructor(method, uri, version, message, response, fulfilled = false) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = response;
        this.fulfilled = fulfilled;
    }
}

let request = new HttpRequest('GET', 'google.com', 'HTTP/1.1', '');
console.log(request);
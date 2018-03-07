function validateRequest(obj) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

    if (!obj.hasOwnProperty('method') || !validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    let uriRegex = new RegExp(/^[\w.]+$/);

    if (!obj.hasOwnProperty('uri') || (!uriRegex.test(obj.uri) && obj.uri !== '*')) {
        throw new Error('Invalid request header: Invalid URI');
    }

    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!obj.hasOwnProperty('version') || !validVersions.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = new RegExp(/^[^<>\\&'"]*$/);

    if (!obj.hasOwnProperty('message') || !messageRegex.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

// console.log(validateRequest({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));
//
// console.log(validateRequest({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));

console.log(validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}));

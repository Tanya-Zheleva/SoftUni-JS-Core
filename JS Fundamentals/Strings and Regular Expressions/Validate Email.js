function validate(email) {
    let pattern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/;
    let match = email.match(pattern);

    return match ? 'Valid' : 'Invalid';
}

console.log(validate('valid@email.bg'));
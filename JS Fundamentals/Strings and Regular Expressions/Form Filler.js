function fill(username, email, number, text) {
    let usernamePattern = /(<![A-Za-z]+!>)/g;
    let emailPattern = /(<@[A-Za-z]+@>)/g;
    let numberPattern = /(<\+[A-Za-z]+\+>)/g;

    for (let sequence of text) {
        sequence = sequence
            .replace(usernamePattern, username)
            .replace(emailPattern, email)
            .replace(numberPattern, number);

        console.log(sequence);
    }
}

fill('Pesho', 'pesho@softuni.bg', '90-60-90', ['Hello, <!username!>',
    'Welcome to your Personal profile.',
    'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
    'Your current phone number is: <+number+>. Would you like to change that? (Y/N)']);
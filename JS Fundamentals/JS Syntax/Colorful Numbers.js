function printColors(n) {
    console.log('<ul>')
    for (let i = 1; i <= n; i++) {
        let color = i % 2 != 0 ? 'green' : 'blue';
        console.log(`<li><span style="color: ${color}">${i}</span></li>`)
    }

    console.log('</ul>');
}
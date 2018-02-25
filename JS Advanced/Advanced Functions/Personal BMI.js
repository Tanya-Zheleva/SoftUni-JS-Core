function solve(name, age, weight, height) {
    let temp = height / 100;
    let bmi = weight / (temp * temp);
    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        status = 'normal';
    } else if (bmi >= 25 && bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
    }

    let person = {
        name: name,
        personalInfo: {
            age: Math.round(age),
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: status
    };

    if (person.status === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

console.log(solve('Peter', 29, 75, 182));
console.log(solve('Honey Boo Boo', 9, 57, 137));
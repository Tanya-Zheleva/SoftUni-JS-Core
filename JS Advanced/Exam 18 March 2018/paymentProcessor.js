class PaymentProcessor {
    constructor(options) {
        this.options = options;
        this.payments = [];
    }

    get options() {
        return this._options;
    }

    set options(options) {
        if (options === undefined) {
            options = {};
        }

        if (this.options === undefined) {
            this._options = {};
        }

        this.setOptions(options);
    }

    registerPayment(id, name, type, value) {
        if (id === '' || name === '' || !Number(value) || !this.options['types'].includes(type)) {
            throw new Error('Invalid payment!');
        }

        if (this.payments.some(x => x.id === id)) {
            throw new Error('Payment exists!');
        }

        let payment = {id, name, type, value};
        this.payments.push(payment);
    }

    deletePayment(id) {
        if (this.payments.every(x => x.id !== id)) {
            throw new Error('Payment does not exist!');
        }

        this.payments = this.payments.filter(x => x.id !== id);
    }

    get(id) {
        if (this.payments.every(x => x.id !== id)) {
            throw new Error('Payment does not exist!');
        }

        let payment =  this.payments.filter(x => x.id === id)[0];
        let result = `Details about payment ID: ${payment.id}\n`;
        result += `- Name: ${payment.name}\n`;
        result += `- Type: ${payment.type}\n`;
        result += `- Value: ${payment.value.toFixed(this.options['precision'])}`;

        return result;
    }

    setOptions(options) {
        if (options['types'] === undefined && options['precision'] === undefined) {
            this._options['types'] = ['service', 'product', 'other'];
            this._options['precision'] = 2;
        } else if (options['types'] === undefined && options['precision'] !== undefined) {
            this._options['types'] = ['service', 'product', 'other'];
            this._options['precision'] = options['precision'];
        } else if (options['types'] !== undefined && options['precision'] === undefined) {
            this._options['types'] = options['types'];
            this._options['precision'] = 2;
        } else {
            this._options['types'] = options['types'];
            this._options['precision'] = options['precision'];
        }
    }

    toString() {
        let result = 'Summary:\n';
        result += `- Payments: ${this.payments.length}\n`;
        let balance = 0;

        for (let payment of this.payments) {
            balance += payment.value;
        }

        result += `- Balance: ${balance.toFixed(this.options['precision'])}`;

        return result;
    }
}
//
// const generalPayments = new PaymentProcessor();
// generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
// generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
// console.log(generalPayments.toString());
//
// //generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);
//
// generalPayments.setOptions({types: ['product', 'material']});
// generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
// console.log(generalPayments.get('E028'));
// generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);
//
// // // Should throw an error (ID not found)
// // //generalPayments.deletePayment('E027');
// // // Should throw an error (ID not found)
// // //generalPayments.get('E027');
//
// generalPayments.deletePayment('E028');
// console.log(generalPayments.toString());
//
// const servicePayments = new PaymentProcessor({types: ['service']});
// servicePayments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePayments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePayments.toString());
//
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());

const generalPayments = new PaymentProcessor();

const emptyProc = generalPayments.toString();

generalPayments.registerPayment('0001', 'Microchips', 'product', 15000.03);
const oneProc = generalPayments.toString();

generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
generalPayments.registerPayment('01', 'HR Consultation', 'service', 3000);
const manyProc = generalPayments.toString();

const details = generalPayments.get('0001');
console.log(details);
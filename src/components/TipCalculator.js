class TipCalculator {
    constructor() {
        this.bill = 0,
        this.percentage = {
            '5': 5,
            '10': 10,
            '15': 15,
            '25': 25,
            '50': 50,
            custom: 0
        },
        this.people = 0;
        this.button5 = document.getElementById('tip5').addEventListener('click', () => {this.calculateTip(this.percentage[5])}),
        this.button10 = document.getElementById('tip10').addEventListener('click', () => {this.calculateTip(this.percentage[10])}),
        this.button15 = document.getElementById('tip15').addEventListener('click', () => {this.calculateTip(this.percentage[15])}),
        this.button25 = document.getElementById('tip25').addEventListener('click', () => {this.calculateTip(this.percentage[25])}),
        this.button50 = document.getElementById('tip50').addEventListener('click', () => {this.calculateTip(this.percentage[50])}),

        this.customInput = document.getElementById('tipCustom').addEventListener('keyup', (event) => {this.calculateTip(event.target.value)})
        this.billInput = document.getElementById('inputBill'),
        this.inputPeople = document.getElementById('peopleInput'),

        this.resetButton = document.getElementById('reset').addEventListener('click', () => {this.reset()}),

        this.totalPerson = document.getElementById('totalPerson'),
        this.totalAmount = document.getElementById('totalAmount')
    }
    setCustom(custom) {
        this.percentage.custom = custom
    }
    divideTip(people, amount) {
        let total = amount / people;
        return total.toFixed(2);
    }

    calculateTip(percentage) {
        this.bill = parseInt(this.billInput.value);
        this.people = this.inputPeople.value;

        const onePercentage = this.bill / 100;

        const total = onePercentage * percentage;

        if(this.people !== 0) {
            const dividedAmount = this.divideTip(this.people, total);
            this.totalPerson.innerText = '$' + dividedAmount;
            console.log(dividedAmount)
        }

        console.log(total.toFixed(2))
        this.totalAmount.innerText = '$' + total.toFixed(2)

    }
    reset() {
        this.billInput.value = 0;
        this.inputPeople.value = 1;
        this.totalPerson.innerText = '$0.00';
        this.totalAmount.innerText = '$0.00';
    }
}

// module.exports = { TipCalculator }
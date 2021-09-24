export class Expense {
    
    expPrice: number;
    expDescription: string;
    expDate: Date;

    constructor(price: number, description: string, date: Date) {
        this.expPrice = price;
        this.expDescription = description;
        this.expDate = date;
    }

    get getExpPrice() {
        return this.expPrice;
    }

    get getExpDescription() {
        return this.expDescription;
    }

    get getExpDate() {
        return this.expDate;
    }
}
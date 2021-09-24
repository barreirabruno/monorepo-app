import { Expense } from '../domain/models/expense'

function main() {
    
    console.log("[WELCOME TO [DEP-A] APPLICATION]")

    const expense:Expense = new Expense(
        189.74,
        "any_description",
        new Date("2021-09-23")
    );  

    console.log("[PRICE]", expense.getExpPrice)
    console.log("[DESCRIPTION]", expense.getExpDescription)
    console.log("[DATE]", expense.getExpDate)
}

main();
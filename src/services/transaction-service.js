const TransactionService = {
    groupTransactionsByDay(items) {        
        // create an array 'years' with unique years
        const days = [...new Set(items.map(item => 
            item.date))]

        // create object with each year as an empty array
        let transactionsByDay = {}
        for (const key of days) {
            let day = key
            transactionsByDay[day] = []
        }

        // compare each donation to a unique year - if they match then push donation to array
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < days.length; j++) {
                if (items[i].date === days[j]) {
                    transactionsByDay[days[j]].push(items[i])
                }
            }
        }

        return transactionsByDay
    },
    calculateDonationsTotal(items) {
        let total = 0
        const currentYear = new Date().getFullYear()
        for (let i = 0; i < items.length; i ++) {
            if (new Date(items[i].donated_on).getFullYear() === currentYear) {
                total = total + parseFloat(items[i].amount)
            }
        }
        return total
    }
}

export default TransactionService
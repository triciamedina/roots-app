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
    calculateWalletTotal(roundUps) {
        let total = 0
        roundUps.forEach(roundup => {
            const roundupAmount = Math.ceil(roundup.amount) - roundup.amount
            total = total + roundupAmount
        })
       return total
    },
    calculateDailyTotal(roundUps) {
        let total = 0
        roundUps.forEach(roundup => {
            if (roundup.created_at.slice(0, 10) === new Date().toISOString().slice(0, 10)) {
                const roundupAmount = Math.ceil(roundup.amount) - roundup.amount
                total = total + roundupAmount
            }
        })
        return total
    }
}

export default TransactionService
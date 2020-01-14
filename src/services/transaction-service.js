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
    calculateWalletTotal(roundUps, donations) {
        let total = 0
        roundUps.forEach(roundup => {
            const roundupAmount = Math.ceil(roundup.amount) - roundup.amount
            total = total + roundupAmount
        })
        donations.forEach(donation => {
            const donateAmount = donation.amount
            total = total - donateAmount
        })
       return total
    },
    calculateDailyTotal(roundUps) {
        const isToday = (someDate) => {
            const today = new Date()
            return someDate.getDate() === today.getDate() &&
              someDate.getMonth() === today.getMonth() &&
              someDate.getFullYear() === today.getFullYear()
          }
        const total = roundUps.filter(roundup => isToday(new Date(roundup.created_at)))
                .reduce((total, roundup) => { 
                    return total + (Math.ceil(roundup.amount) - roundup.amount) 
                }, 0)
        return total
    }
}

export default TransactionService
import Dinero from 'dinero.js';
Dinero.globalLocale = 'us-EN';

const TransactionService = {
    groupTransactionsByDay(items) {        
        // create an array 'years' with unique years
        const days = [...new Set(items.map(item => 
            item.date))];

        // create object with each year as an empty array
        let transactionsByDay = {};

        for (const key of days) {
            let day = key
            transactionsByDay[day] = []
        };

        // compare each donation to a unique year - if they match then push donation to array
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < days.length; j++) {
                if (items[i].date === days[j]) {
                    transactionsByDay[days[j]].push(items[i])
                }
            }
        };

        return transactionsByDay;
    },
    calculateRoundup(amount) {
        const transaction = Dinero({ amount: (amount * 100) }).getAmount();

        const roundedUp = Dinero({ amount: (Math.ceil(amount) * 100)}).getAmount();

        return (roundedUp - transaction)/100;
    },
    calculateWalletTotal(roundUps, donations) {
        let total = 0;

        roundUps.forEach(roundup => {
            const roundupAmount = TransactionService.calculateRoundup(roundup.amount)*100
            total = total + roundupAmount
        });

        donations.forEach(donation => {
            const donateAmount = Dinero({ amount: (donation.amount * 100)}).getAmount()
            total = total - donateAmount
        });

       return (Dinero({ amount: total}).getAmount())/100;
    },
    calculateDailyTotal(roundUps) {
        const isToday = (someDate) => {
            const today = new Date()
            return someDate.getDate() === today.getDate() &&
              someDate.getMonth() === today.getMonth() &&
              someDate.getFullYear() === today.getFullYear()
          };

        const total = roundUps.filter(roundup => isToday(new Date(roundup.created_at)))
                .reduce((total, roundup) => { 
                    const roundupAmount = TransactionService.calculateRoundup(roundup.amount)
                    return total + roundupAmount
                }, 0);
                
        return (Dinero({ amount: (total*100)}).getAmount())/100;
    }
};

export default TransactionService;
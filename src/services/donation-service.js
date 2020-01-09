import moment from 'moment'

const DonationService = {
    groupDonationsByYear(items) {        
        // create an array 'years' with unique years
        const years = [...new Set(items.map(item => 
            moment(item.donated_on).format('YYYY')))]

        // create object with each year as an empty array
        let donationsByYear = {}
        for (const key of years) {
            let year = key
            donationsByYear[year] = []
        }

        // compare each donation to a unique year - if they match then push donation to array
        for (let i = 0; i < items.length; i++) {
            for (let j = 0; j < years.length; j++) {
                if (moment(items[i].donated_on).format('YYYY') === years[j]) {
                    donationsByYear[years[j]].push(items[i])
                }
            }
        }

        return donationsByYear
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

export default DonationService
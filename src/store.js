const STORE = {
    transactions: [
        {
            id: '1',
            vendorName: 'Starbucks',
            transactionAmount: 24.89,
            transactionDate: '',
            roundupAmount: 0.11,
            isChecked: false,
        },
        {
            id: '2',
            vendorName: 'Ritual',
            transactionAmount: 36.11,
            transactionDate: '',
            roundupAmount: 0.89,
            isChecked: false,
        },
        {
            id: '3',
            vendorName: 'Netflix',
            transactionAmount: 5.60,
            transactionDate: '',
            roundupAmount: 0.40,
            isChecked: false,
        },
        {
            id: '4',
            vendorName: 'Clipper',
            transactionAmount: 39.99,
            transactionDate: '',
            roundupAmount: 0.01,
            isChecked: false,
        },
        {
            id: '5',
            vendorName: 'PGandE Web Online',
            transactionAmount: 124.50,
            transactionDate: '',
            roundupAmount: 0.50,
            isChecked: false,
        },
    ],
    donations: [
        {
            id: '1',
            donationDate: 'August 5, 2019',
            donationAmount: 23.58,
            projectName: 'Once Upon a Book…',
            projectSchoolName: 'Grant Elementary',
            projectImage: 'https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder',
        },
        {
            id: '2',
            donationDate: 'April 23, 2019',
            donationAmount: 50.00,
            projectName: 'Manga Madness #2',
            projectSchoolName: 'Lincoln Elementary',
            projectImage: 'https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder',
        },
        {
            id: '3',
            donationDate: 'February 14, 2019',
            donationAmount: 50.00,
            projectName: 'We Stay #TECHReady',
            projectSchoolName: 'Park Elementary',
            projectImage: 'https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder',
        },
        {
            id: '4',
            donationDate: 'February 1, 2019',
            donationAmount: 26.42,
            projectName: 'A Productive Learning Environment: Essential Items and Cleaning Supplies',
            projectSchoolName: 'Mission Elementary',
            projectImage: 'https://dummyimage.com/80x80/cccccc/909090.png&text=placeholder',
        },
    ],
    donationsTotal: 150,
    projects: [
        {
            id: 1,
            projectName: 'Help Expand Our SEL and Environment Library',
            projectDescription: 'Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism. Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism.',
            url: '',
            image: 'https://dummyimage.com/328x184/cccccc/909090.png&text=placeholder',
            schoolInfo: {
                teacherName: 'Ms. Stillford',
                ageGroup: 'Grades 3-5',
                schoolName: 'King Elementary School',
                location: 'Richmond, CA',
            },
            funding: {
                balance: 100,
                goal: 412,
                stillNeeded: 312,
            },
        },
        {
            id: 2,
            projectName: 'Help Expand Our SEL and Environment Library',
            projectDescription: 'Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism. Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism.',
            url: '',
            image: 'https://dummyimage.com/328x184/cccccc/909090.png&text=placeholder',
            schoolInfo: {
                teacherName: 'Ms. Stillford',
                ageGroup: 'Grades 3-5',
                schoolName: 'King Elementary School',
                location: 'Richmond, CA',
            },
            funding: {
                balance: 100,
                goal: 412,
                stillNeeded: 312,
            },
        },
        {
            id: 3,
            projectName: 'Help Expand Our SEL and Environment Library',
            projectDescription: 'Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism. Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism.',
            url: '',
            image: 'https://dummyimage.com/328x184/cccccc/909090.png&text=placeholder',
            schoolInfo: {
                teacherName: 'Ms. Stillford',
                ageGroup: 'Grades 3-5',
                schoolName: 'King Elementary School',
                location: 'Richmond, CA',
            },
            funding: {
                balance: 100,
                goal: 412,
                stillNeeded: 312,
            },
        },
        {
            id: 4,
            projectName: 'Help Expand Our SEL and Environment Library',
            projectDescription: 'Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism. Help me give my students new books that focus on social justice, multicultural titles, the environment and climate change, and activism.',
            url: '',
            image: 'https://dummyimage.com/328x184/cccccc/909090.png&text=placeholder',
            schoolInfo: {
                teacherName: 'Ms. Stillford',
                ageGroup: 'Grades 3-5',
                schoolName: 'King Elementary School',
                location: 'Richmond, CA',
            },
            funding: {
                balance: 100,
                goal: 412,
                stillNeeded: 312,
            },
        },
    ],
    walletBalance: 30.00,
    walletDailyTotal: 0.45,
    banks: [
        {
            id: 1,
            title: 'Wells Fargo',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 2,
            title: 'Bank of America',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 3,
            title: 'Chase',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 4,
            title: 'Goldman Sachs',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 5,
            title: 'Citi',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 6,
            title: 'Capital One',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 7,
            title: 'Discover',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
        {
            id: 8,
            title: 'HSBC',
            img: 'https://dummyimage.com/40x40/cccccc/909090.png&text=placeholder'
        },
    ]
}

export default STORE
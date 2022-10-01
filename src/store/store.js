const store = {
    profile: {
        usermame: ''
    },
    contacts: [
        {
            id: 1,
            username: 'User 1'
        },
        {
            id: 2,
            username: 'User 1'
        }
    ],
    messages: [
        {
            id: 1,
            msg: 'Hola XD',
            author: 1,
        },
        {
            id: 1,
            msg: 'Hola XD',
            author: 2,
        },        
        {
            id: 3,
            msg: 'Hola XD',
            author: 1
        },
        {
            id: 4,
            msg: 'Hola XD',
            author: 2
        },
    ],
    chanels: [
        {
            id: 1,
            name: 'Canal 1',
            messages: [1,2]
        },
        {
            id: 2,
            name: 'Canal 2',
            messages: [3,4]}
    ],
}
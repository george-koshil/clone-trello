const initialState = [
    {
    title: 'Today',
    id: 0,
    cards: [
        {
            id: 0,
            text: 'Kiss Alina'
        },
        {
            id: 1,
            text: 'Huge Alina'
        },
        {
            id: 2,
            text: 'Watch interesting film'
        },
    ]
},
    {
        title: 'Yesterday',
        id: 1,
        cards: [
            {
                id: 0,
                text: 'Training leg'
            },
            {
                id: 1,
                text: 'runing'
            },
            {
                id: 2,
                text: 'new move of dance'
            },
            {
                id:3,
                text: 'call maxim'
            }
        ]
    }
];

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD NEW CARD':
            return [
                ...state.map(list => {
                    if(list.id === action.id) {
                        list.cards.push(action.card);
                    }
                    return list
                })
            ]
        default:
            return state;
    }
}
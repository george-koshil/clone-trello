const initialState = [
    {
    title: 'Today',
    id: '0',
    cards: [
        {
            id: 'card-1',
            text: 'Kiss Alina'
        },
        {
            id: 'card-2',
            text: 'Huge Alina'
        },
        {
            id: 'card-3',
            text: 'Watch interesting film'
        },
    ]
},
    {
        title: 'Yesterday',
        id: '1',
        cards: [
            {
                id: 'card-6',
                text: 'Training leg'
            },
            {
                id: 'card-7',
                text: 'running'
            },
            {
                id: 'card-9',
                text: 'new move of dance'
            },
            {
                id:'card-77',
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
            ];
        case 'DRAG CARD':
            return [
                ...state.map(list => {
                    if(list.id === action.id) {
                        list.cards = action.cards;
                    }
                    return list
                })
            ];
        default:
            return state;
    }
}
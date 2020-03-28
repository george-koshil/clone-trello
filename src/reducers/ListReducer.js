const initialState = [
    [
        {
        title: 'Сегодня',
        id: '0',
        cards: [
            {
                id: 'card-1',
                text: 'Вигулять кота'
            },
            {
                id: 'card-2',
                text: 'Подзвонить Илону Маску'
            },
            {
                id: 'card-3',
                text: 'Посмотреть интересный фильм'
            },
        ]
    },
        {
            title: 'Завтра',
            id: '1',
            cards: [
                {
                    id: 'card-6',
                    text: 'Тренировка'
                },
                {
                    id: 'card-7',
                    text: 'Утренний бег'
                },
                {
                    id: 'card-9',
                    text: 'Пофиксить баг'
                },
                {
                    id:'card-77',
                    text: 'Подзвонить Тереньтьеву'
                }
            ]
        }
        ]
];

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD NEW CARD':
            return state.map(list => {
                    if(list.id === action.id) {
                        let newCards = [...list.cards];
                        newCards.push(action.card);
                        return {...list, cards: newCards}
                    }
                    return list
                });
        case 'DRAG CARD':
            return state.map(list => {
                    if(list.id === action.id) {
                        return {...list, cards: action.cards}
                    }
                    return list
                })

        case 'ADD NEW LIST':
            return [...state, action.list];
        default:
            return state;
    }
}
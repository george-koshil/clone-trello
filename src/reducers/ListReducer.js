const initialState = [
        {
            id: 0,
            title: 'First board',
            lists: [
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
        }
];

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD NEW CARD':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists.map(list => {
                        if(list.id === action.listID) {
                            return {...list, cards: [...list.cards, action.card]}
                        }
                        return list
                        })]}
                }
                return board
            })];
        case 'DRAG CARD':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists.map(list => {
                            if(list.id === action.listID) {
                                return {...list, cards: action.cards}
                            }
                            return list
                        })] }
                }
                return board
            })];
        case 'ADD NEW LIST':
            return [...state.map(board => {
                if(board.id === action.boardID) {
                    return {...board, lists: [...board.lists, action.list]}
                }
                return board
            })];
        case 'ADD BOARD':
            return [...state, action.board];
        default:
            return state;
    }
}
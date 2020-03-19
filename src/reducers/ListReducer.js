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
}
];

export default function ListReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
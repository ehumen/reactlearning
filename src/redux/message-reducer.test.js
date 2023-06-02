import messageReducer, {addMessage} from "./message-reducer";

test('it should add new message', () => {
    let state = {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How are you?"},
            {id: 3, message: "Ok"},
            {id: 4, message: "I'm fine"},
        ]
    };

    let action = addMessage('test text')

    let newState = messageReducer(state, action);

    expect(newState.messages.length).toBe(5);
})


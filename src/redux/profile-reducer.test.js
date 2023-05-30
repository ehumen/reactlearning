import profileReducer, {addPost} from "./profile-reducer";


test('new post should be added ', () => {
    let state = {
        postsData: [
            {id: 1, message: "Hi! It's my first post!", likeCounter: "150"},
            {id: 2, message: "Paw Patrol", likeCounter: "25"},
            {id: 3, message: "Yo Yo yo", likeCounter: "11"},
            {id: 4, message: "e ron don don ", likeCounter: "12"},
        ]
    };
    let action = addPost('new post text testing');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
})
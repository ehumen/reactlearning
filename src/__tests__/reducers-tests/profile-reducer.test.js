const profileReducer = require('../../redux/profile-reducer').default;
const { addPost, setProfilePage, setStatus } = require('../../redux/profile-reducer');

describe('profileReducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            postsData: [
                { id: 1, message: "Hi! It's my first post!", likeCounter: "150" },
                { id: 2, message: "Paw Patrol", likeCounter: "25" },
                { id: 3, message: "Yo Yo yo", likeCounter: "11" },
                { id: 4, message: "e ron don don ", likeCounter: "12" },
            ],
            profile: null,
            status: "",
        };
    });

    it('should add a new post', () => {
        const newPostText = 'New post';
        const action = addPost(newPostText);
        const newState = profileReducer(initialState, action);

        expect(newState.postsData.length).toBe(initialState.postsData.length + 1);
        expect(newState.postsData[newState.postsData.length - 1].message).toBe(newPostText);
        expect(newState.postsData[newState.postsData.length - 1].likeCounter).toBe(0);
    });

    it('should set the profile page', () => {
        const profileId = 123;
        const action = setProfilePage(profileId);
        const newState = profileReducer(initialState, action);

        expect(newState.profile).toBe(profileId);
    });

    it('should set the status', () => {
        const status = 'New status';
        const action = setStatus(status);
        const newState = profileReducer(initialState, action);

        expect(newState.status).toBe(status);
    });

    it('should return the initial state for an unknown action', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = profileReducer(initialState, action);

        expect(newState).toBe(initialState);
    });
});

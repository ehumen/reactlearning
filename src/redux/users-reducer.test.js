import usersReducer, { follow, unfollow, setUsers, setCurrentPage, setTotalFriendsCount, toggleIsFetching, toggleFollowingInProgress } from '../redux/users-reducer';

describe('usersReducer', () => {
    it('should follow a user', () => {
        // Arrange
        const initialState = {
            friends: [
                { id: 1, followed: false },
                { id: 2, followed: true },
                { id: 3, followed: false },
            ],
        };

        const userId = 1;

        // Act
        const newState = usersReducer(initialState, follow(userId));

        // Assert
        expect(newState.friends[0].followed).toBe(true);
    });

    it('should unfollow a user', () => {
        // Arrange
        const initialState = {
            friends: [
                { id: 1, followed: false },
                { id: 2, followed: true },
                { id: 3, followed: false },
            ],
        };

        const userId = 2;

        // Act
        const newState = usersReducer(initialState, unfollow(userId));

        // Assert
        expect(newState.friends[1].followed).toBe(false);
    });

    it('should set users', () => {
        // Arrange
        const initialState = {
            friends: [],
        };

        const users = [
            { id: 1, followed: false },
            { id: 2, followed: true },
            { id: 3, followed: false },
        ];

        // Act
        const newState = usersReducer(initialState, setUsers(users));

        // Assert
        expect(newState.friends).toEqual(users);
    });

    it('should set current page', () => {
        // Arrange
        const initialState = {
            currentPage: 1,
        };

        const currentPage = 2;

        // Act
        const newState = usersReducer(initialState, setCurrentPage(currentPage));

        // Assert
        expect(newState.currentPage).toBe(currentPage);
    });

    it('should set total friends count', () => {
        // Arrange
        const initialState = {
            totalFriendsCount: 0,
        };

        const totalCount = 10;

        // Act
        const newState = usersReducer(initialState, setTotalFriendsCount(totalCount));

        // Assert
        expect(newState.totalFriendsCount).toBe(totalCount);
    });

    it('should toggle isFetching', () => {
        // Arrange
        const initialState = {
            isFetching: false,
        };

        const isFetching = true;

        // Act
        const newState = usersReducer(initialState, toggleIsFetching(isFetching));

        // Assert
        expect(newState.isFetching).toBe(isFetching);
    });

    it('should toggle followingInProgress', () => {
        // Arrange
        const initialState = {
            followingInProgress: [],
        };

        const isFetching = true;
        const userId = 1;

        // Act
        const newState = usersReducer(initialState, toggleFollowingInProgress(isFetching, userId));

        // Assert
        expect(newState.followingInProgress).toEqual([userId]);
    });
});

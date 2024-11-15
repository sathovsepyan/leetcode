// https://leetcode.com/problems/keys-and-rooms

function canVisitAllRooms(rooms: number[][]): boolean {
    const opened: boolean[] = new Array(rooms.length).fill(false);
    let keys: number[] = [];

    opened[0] = true;
    keys.push(...rooms[0]);

    while (keys.length > 0) {
        let key = keys.pop()!;
        opened[key] = true;

        for (let found of rooms[key]) {
            if (!opened[found]) {
                keys.push(found);
            }
        }
    }
    for (let item of opened) {
        if (item === false) {
            return false;
        }
    }

    return true;
};
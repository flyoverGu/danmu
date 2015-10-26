let room_num = 0;
let room_user_map = {};

model.exports = {
    create: function *() {
        this.body = room_num ++;
    },

    join: function(roomId, userId) {
        if (!roomId && !userId) {
            return;
        }
        let users = room_user_map[roomId] || [];
        if (!~users.indexOf(userId)) {
            users.push(userId);
            room_user_map[roomId] = users;
        }
    }

    getId: function(userId) {
        for (let roomId in room_user_map) {
            if (room_user_map[roomId] && ~room_user_map[roomId].indexOf(userId)) {
                return roomId;
            }
        }
    },
}



const allFriends = ['Rohima', 'Sofura', 'Kareena', 'Kobita', 'Jarin'];
function oddFriend(friends) {
    let bijorBondu = [];
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        const num = element.length % 2;
        // console.log(num);
        if (num != 0) {
            // console.log(element);
            bijorBondu.push(element);
        }
    }
    // console.log(bijorBondu);
    return bijorBondu[0];
}
const result = oddFriend(allFriends);

console.log(result);
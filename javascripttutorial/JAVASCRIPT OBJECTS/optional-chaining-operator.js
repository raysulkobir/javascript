function getUser(id){
    if(id <= 0) {
        return null;
    }

     return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    }
}

let user = getUser(1);
let profile = user.profile
console.log(profile);
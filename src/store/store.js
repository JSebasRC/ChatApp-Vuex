import {reactive} from 'vue'

const store= reactive ({
    username: 'sebas.r',
    updateUsername(username) {
        this.username = username
    }
})

export default store
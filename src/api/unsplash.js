import axios from "axios";


export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID KXSv44wiKDOia4q_0rsZeL5TK28GyQ89c8KUFemAMQs'
    },
})


export default class TaskService {
    constructor() {
        this.baseUrl = `${process.env.REACT_APP_URL}api`
    }

    createTask = async task => {
        return await fetch(`${this.baseUrl}/new_task`, {
            method: "POST",
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"
        })
    }

    getAllTasks = async () => {
        return await fetch(`${this.baseUrl}/all_tasks`, {
            method: "GET",
            credentials:"include"
        })
    }

    changeTaskProgress = async (id, stateProgress) => {
        return await fetch(`${this.baseUrl}/change_progress`, {
            method:"POST",
            body: JSON.stringify({id, stateProgress}),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"
        })
    }

    //REWARDS

    createReward = async reward =>{
        console.log("new reward services", reward)
        return await fetch(`${this.baseUrl}/new_reward`, {
            method: "POST",
            body: JSON.stringify(reward),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"
        })
    }

    getAllRewards = async () => {
        console.log("entro en my services a hacer la llamada al back")
        return await fetch(`${this.baseUrl}/all_rewards`, {
            method: "GET",
            credentials: "include"
        })
    }

    removeReward = async (id, deleted) => {
        console.log("id reward", id)
        console.log("status rewards", deleted)
        return await fetch(`${this.baseUrl}/remove_reward`, {
            method: "POST",
            body: JSON.stringify({id, deleted}),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"
        })
    }

    exchangeReward = async (id, exchanged, value) => {
        return await fetch(`${this.baseUrl}/exchange_reward`, {
            method: "POST",
            body: JSON.stringify({id, exchanged, value}),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"

        })
    }
}


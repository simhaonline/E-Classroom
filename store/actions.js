import axios from 'axios';

const action = {

    login({ state, commit }, payload) {
        return axios.post(`${process.env.baseUrl}/api/user/login`, payload);
    },
    register({ state, commit }, payload) {
        return axios.post(`${process.env.baseUrl}/api/user`, payload);
    },
    fetchAllClasses({ state, commit }, payload) {
        return axios.get(`${process.env.baseUrl}/api/class`, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`,
            }
        });
    },
    createNewClass({ state, commit }, payload) {
        return axios.post(`${process.env.baseUrl}/api/class`, payload, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`,
            }
        });
    },
    joinNewClass({ state, commit }, payload) {
        return axios.post(`${process.env.baseUrl}/api/class/join`, payload, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`,
            }
        });
    },
    fetchUserClasses({ state, commit }, payload) {
        return axios.get(`${process.env.baseUrl}/api/user/classes`, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`,
            }
        });
    },
    updateClass({ state, commit }, payload) {
        return axios.put(`${process.env.baseUrl}/api/class`, payload, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`
            }
        });
    },
    fetchClassPendingRequests({ state, commit }, { classId }) {
        return axios.get(`${process.env.baseUrl}/api/class/pendingrequests/${classId}`, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`,
            }
        });
    },
    // class teacher accepts or rejects the request
    pendingRequestDecision({ state, commit }, payload) {
        return axios.post(`${process.env.baseUrl}/api/class/pendingrequests/accept`, payload, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`
            }
        });
    },
    fetchAllResources({ state, commit }, { classId }) {
        return axios.get(`${process.env.baseUrl}/api/resource/${classId}`, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`
            }
        });
    },
    addNewResource({ state, commit }, { newResource }) {
        return axios.post(`${process.env.baseUrl}/api/resource`, newResource, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`
            }
        });
    },
    deleteResource({ state, commit }, payload) {
        return axios.delete(`${process.env.baseUrl}/api/resource`, {
            headers: {
                'Authorization': `Bearer ${state.jwtToken}`
            },
            data: {
                payload
            }
        })

    }


}

export default action;
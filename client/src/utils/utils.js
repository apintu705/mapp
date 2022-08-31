export const getAccessToken = () => {
    return sessionStorage.getItem('accesstoken');
}

export const getRefreshToken = () => {
    return sessionStorage.getItem('refresstoken');
}

export const setAccessToken = (accessToken) => {
    sessionStorage.setItem('accesstoken', `Bearer ${accessToken}`);
}

export const setRefreshToken = (refreshToken) => {
    sessionStorage.setItem('refresstoken', `Bearer ${refreshToken}`);
}

export const getType = (value, body) => {
    if (value.params) {
        return { params: body }
    } else if (value.query) {
        if (typeof body === 'object') {
            return { query: body._id }
        } else {
            return { query: body }
        }
    }
    return {};
}
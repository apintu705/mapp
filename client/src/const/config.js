export const API_NOTIFICATION_MESSAGES={
    loading:{
        title:"Loading........",
        message:"Data is being loaded please wait"
    },
    success:{
        titile:"Success",
        message:"Data successfully loaded"
    },
    responsefailure:{
        title:"Error",
        message:"An error occurred while featching from the server please try again "
    },
    requestfailure:{
        title:"Error",
        message:"An error occurred while parsing a request data "
    },
    networkerror:{
        title:"Error",
        message:"Unable to connect to the server please check internet connectivity"
    }
}







export const SERVICE_URLS = {
    userLogin: { url: '/login', method: 'POST' },
    userSignup: { url: '/signup', method: 'POST' },
    getAllPosts: { url: '/posts', method: 'GET', params: true },
    getRefreshToken: { url: '/token', method: 'POST' },
    uploadFile: { url: 'file/upload', method: 'POST' },
    createPost: { url: 'create', method: 'POST' },
    deletePost: { url: 'delete', method: 'DELETE', query: true },
    getPostById: { url: 'post', method: 'GET', query: true },
    newComment: { url: '/comment/new', method: 'POST' },
    getAllComments: { url: 'comments', method: 'GET', query: true },
    deleteComment: { url: 'comment/delete', method: 'DELETE', query: true },
    updatePost: { url: 'update', method: 'PUT', query: true }
}
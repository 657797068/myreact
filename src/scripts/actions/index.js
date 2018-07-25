import axios from "axios";
axios.defaults.baseURL="http://47.96.121.92:1020";
export const new_Book = (url,callback) =>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
        type:"new_Book",
        data:res.data,
        cb:callback
    }}
)
}
export const hot_Book = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
        type:"hot_Book",
        data:res.data,
        cb:callback
    }}
)
}
export const ranking_List = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
        type:"ranking_List",
        data:res.data,
        cb:callback
    }}
)
}
export const get_book = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
        type:"get_book",
        data:res.data,
        cb:callback
        }
    })
}
export const book_content=(url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
            type:"book_content",
            data:res.data,
            cb:callback
        }
    })
}

export const register = (url)=>{
    return axios.get(url)
    .then(res=>{
        return{
            type:"register",
            data:res.data
        }
    })
}
export const code_register = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
            type:"code_register",
            data:res.data,
            cb:callback
        }
    })
}

export const look_Book = ()=>{
    return {
        type:"look_Book",
    }
}

export const book = (url) =>{
    return axios.get(url)
    .then
}

export const bookrack = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        return{
            type:"bookrack",
            data:res.data,
            cb:callback
        }
    })
}
export const put_Bookrack = (url,)=>{
    return axios.get(url)
    .then(res=>{
        return{
            type:"put_Bookrack",
            data:res.data,
        }
    })
}

export const classifyList = (url,callback)=>{
    return axios.get(url)
    .then(res=>{
        callback();
        console.log(res.data)
        return{
            type:"classify_list",
            data:res.data,
            cb:callback
        }
    })
}
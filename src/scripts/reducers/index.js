
const defaultState = {
    hotList:[],
    newList:[],
    rankingList:[],
    book:[],
    show:true,
    bookContent:[],
    obj:[],
    bookrackList:[],
    hint:[],
    classList:[]
}

export default (state = defaultState,action)=>{
    switch (action.type) {
        case "hot_Book":
            return {...state,...{hotList:action.data}};
            break;
        case "ranking_List":
            return {...state,...{rankingList:action.data}};
            break;
        case "new_Book":
            return {...state,...{newList:action.data}};
        case "get_book":
            return {...state,...{book:action.data}};
            break;
         case "look_Book":
            return {...state,...{show:!state.show}}
            break;
        case "book_content":
            return {...state,...{bookContent:action.data}};
            break;
        case "code_register":
            return {...state,...{obj:action.data}};
            break;
        case "register":
            return {...state,...{obj:action.data}};
            break;
        case "bookrack":
            return {...state,...{bookrackList:action.data}};
            break;
        case "put_Bookrack":
            return {...state,...{hint:action.data}};
            break;
         case "classify_list":
            return {...state,...{classList:action.data}};
            break;
        default:
            return state;
            break;
    }
}
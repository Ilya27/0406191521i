import {ACTION_TYPES} from './constants';

const initialState = {
    reviews:[{
        username:'Самуил',
        date:'13 октября 2011',
        reviw:'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!'
    },
    {
        username:'Лилия Семёновна',
        date:' 14 октября 2011',
        reviw:' Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
    },
    {
        username:'Лилия Семёновна',
        date:'14 октября 2011',
        reviw:'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
    }],
    i:0,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.ADD_REVIEW:
            return {
                ...state, 
                reviews:action.reviews,
                i:++initialState.i,
            };
        default:
            return state;
    }
}

export default reducer;

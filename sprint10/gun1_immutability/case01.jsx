/*
Bir rezervasyon sisteminde, 
toplam rezervasyon sayısını tutan bir state'i yönetmek için basit bir reducer fonksiyonu oluştur. 

Bu reducer, INCREMENT_BOOKING_COUNT aksiyonu aldığında, mevcut rezervasyon sayısını 1 artırmalıdır. 

- Switch case kullan. 
- INCREMENT_BOOKING_COUNT case!ini tanımla. 
- State'i spread ile kopyala ve bookingCount'u artır.

*/

const initialState = {
    bookingCount: 0,
};


function bookingCountReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT_BOOKING_COUNT":
            return {
                ...state,
                bookingCount: state.bookingCount + 1,
            }
    }
    return state
}

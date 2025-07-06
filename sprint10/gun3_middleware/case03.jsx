/*
thunk ve custom yazılmış loggerMiddleware ve delayMiddleware isimli middleware'ları birleştir. 

- combinedMiddleware isimli bir değişken oluştur. 
- applyMiddleware ile middleware'ları bu değişkende birleştir. 
- Gerekli import'ları unutma. custom middleware'lar aynı isimli 
    ve .js uzantılı dosyada named export olarak aynı klasörde.
*/

import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { loggerMiddleware } from './loggerMiddleware';
import { delayMiddleware } from './delayMiddleware';


const combinedMiddleware = applyMiddleware(thunk, loggerMiddleware, delayMiddleware);

export const store = createStore(rootReducer, combinedMiddleware);
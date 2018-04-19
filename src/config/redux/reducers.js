import { combineReducers } from 'redux';

import clienteReducers from "../../Cliente/redux/reducers/clienteReducers";
import fazendaReducers from '../../Fazendas/redux/reducers/fazendaReducers';

export default  reducers = combineReducers({
    clienteReducers: clienteReducers,
    fazendaReducers: fazendaReducers,
});
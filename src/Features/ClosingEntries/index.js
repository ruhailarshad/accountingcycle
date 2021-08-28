import React, {useEffect} from 'react';
import ClosingEntrySheet from './compoenents/ClosingEntrySheet';
import { fetchFinancialStatement } from '../FinancialStatement/actions';
import { useDispatch, useSelector } from 'react-redux';

function CosingEntryContainer() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        // dispatch(fetchFinancialStatement());
    }, []);

    const {FinancialStatement} = useSelector((state) => {
        const { FinancialStatement } = state;
        return {
            FinancialStatement,
        };
    });

    return (
        <div>
            <ClosingEntrySheet FinancialStatement={FinancialStatement}/>
        </div>
    )
}

export default CosingEntryContainer;

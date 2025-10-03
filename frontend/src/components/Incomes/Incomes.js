import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts'
import Form from '../Form/Form'
import { useGlobalContext } from '../../context/globalContext';

function Income() {
    const {addIncome} = useGlobalContext();
    return (
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="incomes-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes"></div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`

`;

export default Income

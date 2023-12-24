import React, { useState } from 'react'
import styled from 'styled-components';


const RoleDice = ({currentDice, rollDice}) => {
    
    
    return (
        <DiceContainer>
            <div className='dice' onClick={rollDice}>
                <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
            </div>
            <p>Click to Roll</p>
        </DiceContainer>
    )
}

export default RoleDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
        
    }

    .dice{
        cursor: pointer;

    }
`;
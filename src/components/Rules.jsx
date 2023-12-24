import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game?</h2>
        <div className="text">
            <p>Select any number</p>
            <p>Then roll the dice</p>
            <p>If it matches, you gain that rolled number as plus points</p>
            <p>If doesn't matches, -2 points</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #fbf1f1;
    padding: 20px;

    h2{
        font-size: 24px;
        font-weight: bold;
    }

    .text{
        margin-top: 24px;
    }

`;
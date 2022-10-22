import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 500px;
    height: 768px;

    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.05);
    margin: 0 auto;
    margin-top:30px;

    display: flex;
    flex-direction: column;
    // align-items:center;
`;

function TodoTemplate({ children }) {
    return (
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}

export default TodoTemplate;
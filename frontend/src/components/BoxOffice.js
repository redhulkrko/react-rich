import React, { useContext } from "react";
import context from "./apiContext";
import styled from 'styled-components';

const Section = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #82bef6;
    -webkit-column-break-inside: avoid;
    padding: 14px;
    box-sizing: border-box;
    grid-column: 6/7;
    grid-row: 2/6;
    
`;

const Content = styled.div``;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

const Title = styled.h5`
    margin-left: 10px;
`;

const Text = styled.p`
    margin-left: 10px;
`;

function BoxOffice() {
    const { posts } = useContext(context);
    
    const updates = posts.sort(
        (a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate)
      );
    return(
    <>
     <Section>
        <SectionHead>Box Office</SectionHead>

        <Content>
            
        </Content>
     </Section>
    </>
    )
};

export default BoxOffice;
      
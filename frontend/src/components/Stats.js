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
    grid-column: 1/2;
    grid-row: 7/9;
`;

const Content = styled.div``;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

function Stats() {
    const { films } = useContext(context);
    const date = new Date();
    const now = films
      .sort((a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate))
      .filter(post => date > Date.parse(post.OpeningDate.substring(0, 10)));

    const soon = films
      .sort((a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate))
      .filter(post => date < Date.parse(post.OpeningDate.substring(0, 10)));

    const all_count = films.length;

    const now_count = now.length;

    const soon_count = soon.length;

    return(
    <>
     <Section>
        <SectionHead>Stats</SectionHead>

        <Content>
        <h5>Films: {all_count}</h5>
        <h5>Now Showing: {now_count}</h5>
        <h5>Coming Soon: {soon_count}</h5>
            
        </Content>
     </Section>
    </>
    )
};

export default Stats;
      
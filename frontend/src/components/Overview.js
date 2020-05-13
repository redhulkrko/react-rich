import React, { useContext } from "react";
import context from "./apiContext";
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #82bef6;
    -webkit-column-break-inside: avoid;
    padding: 14px;
    box-sizing: border-box;
    grid-column: 1/2;
    grid-row: 1/7;
`;

const Container = styled.div`
`;

const Row = styled.div`

`;

const Divide = styled.hr`
    border: 0;
    border-top: 1px solid #eee;
    margin: 20px 0;
`;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

const Title = styled.h5`
    font-weight: 400;
    margin: 10px 0;
    font-size: .75em;
`;

const Text = styled.li`
    font-size: .7em;
    line-height: 1.5;
    list-style: none;
`;

function Overview() {
    const { films } = useContext(context);
    const date = new Date();
    const now = films
      .sort((a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate))
      .filter(post => date > Date.parse(post.OpeningDate));

    const soon = films
      .sort((a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate))
      .filter(post => date < Date.parse(post.OpeningDate.substring(0, 10)));

    return(
    <>
     <Section>
        <SectionHead>Overview</SectionHead>

        <Container>
            <Row>
                <Title><b>Now Showing</b></Title>
                <ul>
                {now.map((post, i) => (
                <Text key={i}>{post.Title}</Text>
                ))}
                </ul>
            </Row>
            <Divide />
            <Row>
                <Title><b>Coming Soon</b></Title>
                <ul>
                {soon.map((post, i) => (
                <Text key={i}>{post.Title}</Text>
                ))}
                </ul>
            </Row>
        </Container>
     </Section>
    </>
    )
};

export default Overview;
      
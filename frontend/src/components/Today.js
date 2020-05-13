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
    grid-column: 2/7;
    grid-row: 1/2;
    
`;

const Content = styled.div``;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

const ListItem = styled.li`
    list-style: none;
    font-size: .7em;
`;

const Title = styled.h5`
    margin-left: 10px;
`;

const Text = styled.p`
    margin-left: 10px;
`;

function Today() {
    const { posts } = useContext(context);
    
    const updates = posts.sort(
        (a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate)
      );
    return(
    <>
     <Section>
        <SectionHead>Today</SectionHead>

        <Content>
            <ul>
            {updates.map((post, i) => (
                <ListItem key={i}>
                  {post.Title}{" "}
                  - {(new Date(post.OpeningDate)).toLocaleDateString('en', {  day: '2-digit', month: 'short' })}
                </ListItem>
              ))}
            </ul>
        </Content>
     </Section>
    </>
    )
};

export default Today;
      
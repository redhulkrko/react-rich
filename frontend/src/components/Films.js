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
    grid-column: 2/6;
    grid-row: 2/6;
`;

const Content = styled.div``;

const SectionHead = styled.h4`
    color: #8f9090;
    font-style: italic;
    font-size: 14px;
    line-height: 20px;
`;

const List = styled.ul`
    height: 210px;
    padding: 10px;
    overflow: auto;
`;

const Item = styled.li`
    list-style: none;
    font-size: .8em;
    padding: 10px 0;
    display: grid;
    justify-content: center;
    justify-items: start;
    align-items: center;
    align-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 1.5em;
    grid-row-gap: 0px;
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto;
    margin-bottom: 10px;
`;

const Image = styled.img`
    height: auto;
    max-height: 50px;
    border-radius: 4px;
`;

function Films() {
    const { films } = useContext(context);
    
    const all = films.sort(
        (a, b) => Date.parse(a.OpeningDate) - Date.parse(b.OpeningDate)
      );

    return(
    <>
     <Section>
        <SectionHead>Films</SectionHead>

        <Content>
            <List>
            {all.map((post, i) => (
            <Item key={i}>
                {post.BackdropImageUrl ? <Image src={post.BackdropImageUrl} /> : <p>No Image</p>}
                <div><b>{post.Title}</b> - {post.Rating} <br/>{(new Date(post.OpeningDate)).toLocaleDateString('en', {  day: '2-digit', month: 'short' })}</div>
            </Item>
            ))}
            </List>
        </Content>
     </Section>
    </>
    )
};

export default Films;
      
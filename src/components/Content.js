import React from 'react';
import styled from 'styled-components';

const Content = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 500px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentItem = styled.p`
  background-color: #559;
  color: #fff;
  text-align: center;
  font-family: 'Read';
  width: 250px;
  padding: 10px;
  box-sizing: border-box;
  margin: 40px;
`;

export default function content() {
  return (
    <React.Fragment>
      <Content>
        <ContentItem>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </ContentItem>
        <ContentItem>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took
          </p>
        </ContentItem>
      </Content>
    </React.Fragment>
  );
}

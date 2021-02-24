import React from 'react'
import styled from "styled-components";
import SimpleList from './List';

const ListsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function Board() {
    const lists = [
        {
            "id": "6030d0660968e626faa9a7fb",
            "name": "To Do",
            "cards": [
                {
                    "id": "603155a8f5cea867139ad555",
                    "name": "card-from api"
                },
                {
                    "id": "603158fa1d990465acb4677e",
                    "name": "card-from api"
                },
                {
                    "id": "603160e06c6aa18781647c9d",
                    "name": "api-card"
                }
            ]
        },
        {
            "id": "6030d0660968e626faa9a7fd",
            "name": "Done",
            "cards": [
                {
                    "id": "6030d1fdc4e6898ce7952f30",
                    "name": "first-task"
                },
                {
                    "id": "6031538ff512d87301d8d0a7",
                    "name": "New"
                }
            ]
        }
    ];

    return (
        <div>
            <ListsContainer>
              {lists.map((list) => {
                  return (
                    <SimpleList
                        name={list.name}
                        cards={list.cards}
                        listID={list.id}
                        showAddButton={list.name=="To Do" ? true : false}
                        key={list.id}
                    />
                  );
              })}
            </ListsContainer>
        </div>
    )
}

export default Board

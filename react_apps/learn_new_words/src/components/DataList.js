import React from "react";
import Word from "./Word";
import {projectFirestore} from '../firebase'

import {useCollectionData} from "react-firebase-hooks/firestore";
import {ListGroup} from "react-bootstrap";

function DataList() {

    const wordsRef = projectFirestore.collection('words');
    const query = wordsRef.limit(5);

    const [words] = useCollectionData(query, {idField: 'id'})

    return (
        <ListGroup className='mt-4'>

            {words && words.map(word => (
                <ListGroup.Item key={word.id}>
                    <Word wordData={word}/>
                </ListGroup.Item>
            ))}

        </ListGroup>
    )
}

export default DataList
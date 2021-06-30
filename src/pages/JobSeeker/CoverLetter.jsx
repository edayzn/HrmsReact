import React, { useState } from 'react'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {  Button,Table } from 'semantic-ui-react'
import CoverLetterService from '../../services/coverLetterService'
export default function CoverLetter() {
    const [coverLetters, setcoverLetter] = useState([]);
    useEffect(()=>{
        let coverlettereService = new CoverLetterService();
        coverlettereService.getAll().then((result)=>setcoverLetter(result.data.data));
    },[]);
    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Ön yazı</Table.HeaderCell>
            
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        coverLetters.map(coverLetter => (
                            <Table.Row key={coverLetter.id}>
                                <Table.Cell>{coverLetter.coverLetter}</Table.Cell>
                                <Button  color="brown" as={NavLink} to="/coverLetterUpdate">Güncelle</Button>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}

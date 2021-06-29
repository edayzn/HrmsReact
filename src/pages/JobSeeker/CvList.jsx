
import React, { useState, useEffect } from 'react'
import CvService from '../../services/cvService'
import { Table } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { Image, Button} from 'semantic-ui-react'
export default function CvList() {
    const [cv, setCv] = useState([])


    useEffect(() => {
        let cvService = new CvService()
        cvService.getCv().then(result => setCv(result.data.data))
    }, [])
    return (
        <div><Table fixed>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Resim</Table.HeaderCell>
                <Table.HeaderCell>Adı</Table.HeaderCell>
                <Table.HeaderCell>Soyadı</Table.HeaderCell>
                <Table.HeaderCell>Detay</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {
                cv.map(cv => (
                    <Table.Row key={cv.cvId}>
                        <Table.Cell><Image size="mini" src={cv.photo.photoUrl}></Image></Table.Cell>
                        <Table.Cell>{cv.jobSeeker.firstname}</Table.Cell>
                        <Table.Cell>{cv.jobSeeker.lastname}</Table.Cell>
                        <Table.Cell><Button color="brown" as={NavLink} to="/cvDetail">Detay</Button></Table.Cell>
                    </Table.Row>
                ))
            }

        </Table.Body>
    </Table>
            


        </div>
    )
}

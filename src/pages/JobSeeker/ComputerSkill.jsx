import React, { useEffect, useState } from 'react'
import ComputerSkillService from "../../services/computerSkillService";
import { Table,Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import ComputerSkillUpdate from './ComputerSkillAdd';
export default function ComputerSkill() {

    const [computerSkill, setComputerSkill] = useState([]);
    useEffect(() => {
        let computerSkillService = new ComputerSkillService();
        computerSkillService.getComputerSkill().then((result=>setComputerSkill(result.data.data)));
        
    },[])
  
    return (
        <div>
            {
                    <Table fixed color="brown">
                    <Table.Header>
                        <Button color="brown" as={NavLink} to="/computerSkillAdd"> Bilgisayar Bilgisi Ekle </Button>
                        <Table.Row>
                            <Table.HeaderCell>Bilgisayar Bilgisi</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                         computerSkill.map(computerSkill=>(
                                <Table.Row key={computerSkill.id}>
                                    <Table.Cell>{computerSkill.computerSkills}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                
            }
           


        </div>
    )
}

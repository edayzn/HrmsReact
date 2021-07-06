import React, { useState } from 'react'
import CoverLetterService from '../../../services/coverLetterService'
import { Formik, Form } from 'formik'
import { Button, Modal, Divider } from 'semantic-ui-react'
import * as Yub from 'yup'
import HrmsTextInput from '../../../utilities/customFormControls/HrmsTextInput'
import { useEffect } from 'react'
import coverLetterService from '../../../services/coverLetterService'

export default function CoverLetterUpdate(props) {
  let coverlettereService = new CoverLetterService();
  const [open, setOpen] = useState(false);
  const [coverLetters, setcoverLetter] = useState([]);
  useEffect(() => {
    let coverletterService = new CoverLetterService();
    coverletterService.getAll().then((result) => setcoverLetter(result.data.data));
  }, []);

  function handleUpdate(values) {
    coverlettereService.update(values);
    

  }
  const initialValues = {
    id: 1,
    user_id: 0,
    coverLetter: "",
  }
  const coverLetterSchema = Yub.object({
    user_id: Yub.number().required("Zorunlu alan"),
    coverLetter: Yub.string().required("Zoruunlu alan")
  })

  return (
    <div>
      <Modal
        onClose={() => {
          setOpen(false);
        }}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button fluid style={{ marginTop: "15px", backgroundColor: "white" }}>
            Ön yazı Düzenlemek için tıklayın
          </Button>
        }
      >
        <Modal.Header>Ön Yazı günecelle</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {coverLetters.map((coverLet) => (
              <Formik key={coverLet.id}
                initialValues={{
                  id: coverLet.id,
                  user_id: coverLet.jobSeeker.user_id,
                  coverLetter: coverLet.coverLetter,
                }}

                validationSchema={coverLetterSchema}
                onSubmit={(values) => {
                  handleUpdate(values);
                }}
              >
                <Form className="ui form" onSubmit={Formik.handleSubmit}>
                  <Divider
                    horizontal
                    style={{ marginBottom: "20px", marginTop: "10px" }}
                  >
                    <div
                      style={{
                        paddingTop: "5px",
                        lineHeight: "0px",
                        fontSize: "10px",
                      }}
                    >
                      {coverLet.coverLetter}
                    </div>
                  </Divider>
                  <div>Ön Yazı</div>
                  <HrmsTextInput type="text" name="coverLetter" planceholder="Ön yazı" onChange={Formik.handleChange} value={Formik.coverLetter}></HrmsTextInput>
                  <Button
                    content="Güncelle"
                    labelPosition="right"
                    icon="sync"
                    primary
                    fluid
                    type="submit"
                    style={{ marginTop: "10px", marginBottom: "40px" }}
                  />
                </Form>
              </Formik>
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="red"
            onClick={() => {
              setOpen(false);
            }}
          >
            Kapat
          </Button>
        </Modal.Actions>


      </Modal>
    </div>
  )
}

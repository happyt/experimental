import React, { useState, useEffect } from 'react'
import { Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react'


export const MapModal = ({tModalData, openState, update}:any) => {

// console.log("tModalData: ", {tModalData})

const [open, setOpen] = useState(openState)
const [values, setValues] = useState({
    title: { Title } = tModalData,
    size: 2,
    stateName: "",
  });

  const options = [
    { key: "1", text: "Florida", value: "FL" },
    { key: "2", text: "Wyoming", value: "WY" }
  ];

useEffect(() => {
    setOpen(openState)
//    console.log("openState changed:", openState)
  }, [openState]);

const updateItem = () => {
    update(values)
    setOpen(false)
}

const switchImageSize = (Size: string) => {
    switch (Size) {
      case 's':
        return 'small';
      case 'm':
        return 'medium';
      case 'l':
        return 'large';
      default:
        return 'small';
    }
  };

  const onChange = (event:any, result:any) => {
    const { name, value } = result || event.target;
    setValues({ ...values, [name]: value });
    console.log(name, value)
  };

return (
    <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(open)}
        open={open}
        trigger={''}
        closeOnDimmerClick={false}
        
    >
        <Modal.Header>{tModalData.title}</Modal.Header>
        <Modal.Content image>
            <Image size={switchImageSize(tModalData.Size)} src={tModalData.ImagePath} wrapped />
            <Modal.Description>
                <Header>Edit details...</Header>
                <Form>
                    <Form.Dropdown
                        placeholder="Choose state.."
                        name="stateName"
                        label="State"
                        selection
                        onChange={onChange}
                        options={options}
                        value={values.stateName}
                    />
                    <Form.Field
                        name="title"
                        onChange={onChange}
                        value={values.title}
                        >
                        <label>Card Name</label>
                        <input name="title" placeholder="Set title"/>
                    </Form.Field>

                    <Form.Group 
                        inline
                        onChange={onChange}
                        name="size"
                        >
                        <label>Size</label>
                        <Form.Field>
                            <Button
                                label="One"
                                name="size"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button
                                label="Two"
                                name="size"
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button
                                label="Three"
                            />
                        </Form.Field>

                    </Form.Group>

                        <div className="ui buttons">
                            <label>Size</label>
                            <button className="ui button">Small</button>
                            <button className="ui button">Medium</button>
                            <button className="ui button">Large</button>
                        </div>
                        <div className="ui divider"></div>
                        <label>Initial state</label>
                        <div className="ui buttons">
                            <button className="ui button">Blank</button>
                            <button className="ui button">2012</button>
                            <button className="ui button">2016</button>
                            <button className="ui button">2020</button>
                        </div>
                    <TextArea placeholder='Editorial details here...added by editor' />
                </Form>
                <p>What else do we need?</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='black' onClick={() => updateItem()}>
                Cancel
            </Button>
            <Button
                content="Save"
                labelPosition='right'
                icon='checkmark'
                onClick={() => updateItem()}
                positive
            />
        </Modal.Actions>
    </Modal>
    )
}
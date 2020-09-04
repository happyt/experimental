import React, {useState } from 'react';
import { Card, Message } from 'semantic-ui-react';
import { MapModal, ResultModal } from '../../Modals'
import './styles.scss';
import { TData } from '../../../types/template';

const getImageSize = (Size: string) => {
  switch (Size) {
    case 's':
      return 'small-img';
    case 'm':
      return 'medium-img';
    case 'l':
      return 'large-img';
    default:
      return 'small-img';
  }
};


export const Template = ({ id, tProps }: TData) => {

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    //  console.log("DBL click")
      setModalOpen(true)
    }
  
    const updateData = (values:any) => {
      console.log("reply with update", values, tProps)
      tProps.Title = values.title
      setModalOpen(false)
    }

  function TemplateToShow() {

    switch(tProps.Style) {
      case 'map' :
        return <MapModal tModalData={tProps} openState={modalOpen} update={updateData}/>;
      case 'result' :
         return <ResultModal tModalData={tProps} openState={modalOpen} update={updateData}/>;
      case 'playlist' :
          return <></>;
      default:
        return <Message warning><p>No such Modal type : {tProps.Style} </p></Message>;
    }
  }

  return (
    <Card raised className={tProps.Style} id={tProps.id} onDoubleClick={openModal}>
      <Card.Content>
        <Card.Header textAlign="center">{tProps.Title}</Card.Header>
        <Card.Content>
          <div
            className={getImageSize(tProps.Size)}
            style={{ backgroundImage: `url(${tProps.ImagePath})` }}
          />

          <TemplateToShow />

        </Card.Content>
      </Card.Content>
    </Card>
  );
};


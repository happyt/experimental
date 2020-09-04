import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import { MapModal } from '../../Modals'
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

export const MapTemplate = ({ tProps}: TData) => {

console.log("tData: ", {tProps})

  const [modalOpen, setModalOpen] = useState(false)

//
  const openModal = () => {
  //  console.log("DBL click")
    setModalOpen(true)
  }

  const updateData = (answer:string) => {
    console.log("reply with update", answer)
    setModalOpen(false)
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
          <MapModal tModalData={tProps} openState={modalOpen} update={updateData}/>
          
        </Card.Content>
      </Card.Content>
    </Card>
  );
};

"use client"

// import Image from "next/image";
import _ from "lodash";
import { useState, useRef } from 'react';
import { Image, Button, Card, Col, Container, Row, ListGroup, OverlayTrigger, Popover, Stack, Form } from "react-bootstrap";
import { path_to_image } from "@/data/paths"

const CharacterDetails = (
  <Popover placement="right">
    <Popover.Header>
      Overlay
    </Popover.Header>
    <Popover.Body>
      Details
    </Popover.Body>
  </Popover>
)

const BlessingCard = ({character, idx, characters}) => {
  const [showDetails, setShowDetails] = useState(false);
  const characterReference = useRef(null);
  if (idx <= 2) {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={CharacterDetails}
        show={showDetails}
      >
        <Card ref={characterReference} onClick={() => setShowDetails(!showDetails)} className={ `rarity-${character.rarity}` }>
          <Card.Img src={ character.image} />
          <Card.ImgOverlay >
            <Card.Img src={ type_to_image(character.type) } className="type-icon"/>
            <Card.Img src={ path_to_image(character.path) } className="path-icon"/>
            <Card.Text className={`text-center name-plate text-highlight bottom-name${character.name.length >15 ? '-long': ''}`}>{ character.name }</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </OverlayTrigger>
    )
  } else if (idx == 3) {
    return (
      <span className="text-highlight">
        <span className="name-plate">Also: </span>
        {
          _.map(
            _.slice(characters, 3),
            (character, idx) => {return <Image src={character.image} className="emoji" key={`${idx}`}></Image>}
          )
        }
      </span>
    )
  } else {
    return null;
  }
}


const BlessingsList = ({data}) => {
  
  const characterComponentFunction = (slotData, idx) => {
    return (
      <Col key={`${idx}`}>
        <Stack gap={3} style={{"align-items": "center"}}>
          {
            _.map(
              slotData.characters,
              (character, idx) => { return <CharacterCard character={character} key={`${idx}`} idx={idx} characters={slotData.characters}/> }
            )
          }
        </Stack>
      </Col>
    )
  }
  return (
    <Row>
      {/* { _.map(character_slots, characterComponentFunction) } */}
    </Row>
  )
}

const BlessingsFooter = ({data}) => {
  
  return (
    <div>
      <Row className="m-4">
        <Col>
          <span className="text-highlight footer-text">Official Images © MiHoYo</span>
        </Col>
        <Col>
          <span className="float-right text-highlight footer-text">Reviews and Layout by IonicAmalgam (383445125)</span>
        </Col>
      </Row>
    </div>
  )
}

export default function Home() {
  const data = []
  return (
    <main>
      <Container className="p-2" style={{
        "backgroundImage": `url("/images/moc.png")`,
        "backgroundSize": "100% auto",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "min-width": 2048,
        "min-height": 1152
        }}>
        <div>
          <BlessingsList data={data} />
          <BlessingsFooter data={data}/>
        </div>
      </Container>
    </main>
  );
}

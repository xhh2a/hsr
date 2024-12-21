"use client"

import { IPC } from "@/data/teams/ipc"
// import Image from "next/image";
import _ from "lodash";
import { useState, useRef } from 'react';
import { Image, Button, Card, Col, Container, Row, ListGroup, OverlayTrigger, Popover, Stack, Form } from "react-bootstrap";
import { path_to_image } from "@/data/paths"
import { type_to_image } from "@/data/types"
import { KuruKuru } from "@/data/teams/kuru_kuru";
import { Firebreak } from "@/data/teams/firebreak";
import { UBW } from "@/data/teams/ubw";
import { NewPlayer } from "@/data/teams/new_player";
import { Hatblazer } from "@/data/teams/hatblazer";
import { Hypercarry } from "@/data/teams/hypercarry";
import { Qingquillion } from "@/data/teams/qingqillion";
import { QuantumTime } from "@/data/teams/quantum";
import { NihilityFalls } from "@/data/teams/nihility";
import { Debuff } from "@/data/teams/debuff";

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

const CharacterCard = ({character, idx, characters}) => {
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

const TeamTitle = ({team_name, teams, setCurrentTeam}) => {
  const setTeam = (event) => {
    const teamKey = event.target.value
    const newTeam = _.find(teams, (team) => team.name == teamKey)
    setCurrentTeam(newTeam)
  }
  return (
    <Row className="m-4">
      <Col className="team-title">
        <ListGroup>
          <Form.Select value={team_name} onChange={setTeam} className="text-center team-title-select">
              {
                _.map(
                  teams,
                  (team) => { return <option value={team.name} key={team.name}>{team.name}</option> }
                )
              }
          </Form.Select>
        </ListGroup>
      </Col>
    </Row>
  )
}

const TeamHeaderRow = ({character_slots}) => {
  const roleTitleFunction = (slotData, idx) => {
    return (
      <Col key={`${idx}`} className="text-center slot-plate text-highlight" >
        { slotData.slot }
      </Col>
    )
  }
  return (
    <Row>
      { _.map(character_slots, roleTitleFunction) }
    </Row>
  )
}

const TeamList = ({character_slots, main_character, currentTeam}) => {
  
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
      { _.map(character_slots, characterComponentFunction) }
    </Row>
  )
}

const TeamDetails = ({details, pros, cons, currentTeam}) => {
  return (
    <div>
      <Row className="m-4">
        <Col>
          <ListGroup>
            <ListGroup.Item className="overview-bg">{details}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="m-4">
        <Col>
          <Row>
            <span className="text-center pros text-highlight">
              Pros             
              {
                _.isNil(currentTeam?.pro_emoji) ? null : <Image src={currentTeam.pro_emoji} className="emoji" />
              }
            </span>
          </Row>
          <ListGroup>
            {
              _.map(
                pros,
                (pro, idx) => { return <ListGroup.Item className="pros-bg" key={`${idx}`}>{pro}</ListGroup.Item> }
              )
            }
          </ListGroup>
        </Col>
        <Col>
          <Row>
            <span className="text-center cons text-highlight">
              Cons
              {
                _.isNil(currentTeam?.con_emoji) ? null : <Image src={currentTeam.con_emoji} className="emoji p-l-1" />
              }
            </span>
          </Row>
          <ListGroup>
            {
              _.map(
                cons,
                (con, idx) => { return <ListGroup.Item className="cons-bg" key={`${idx}`}>{con}</ListGroup.Item> }
              )
            }
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

const TeamFooter = ({currentTeam}) => {
  
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
  let defaultTeam = IPC
  const teams = [
    NewPlayer,
    Qingquillion,
    KuruKuru,
    Hatblazer,
    IPC,
    NihilityFalls,
    Firebreak,
    Hypercarry,
    UBW,
    Debuff,
    QuantumTime,

  ]
  const [currentTeam, setCurrentTeam] = useState(defaultTeam)
  return (
    <main>
      <Container className="p-2" style={{
        "backgroundImage": `url("${currentTeam.background}")`,
        "backgroundSize": "100% auto",
        "backgroundPosition": "center",
        "backgroundRepeat": "no-repeat",
        "min-width": 2048,
        "min-height": 1152
        }}>
        <div>
          <TeamTitle team_name={currentTeam.name} teams={teams} setCurrentTeam={setCurrentTeam}/>
          <TeamHeaderRow character_slots={currentTeam.character_slots} />
          <TeamList character_slots={currentTeam.character_slots} currentTeam={currentTeam} />
          <TeamDetails details={currentTeam.details} pros={currentTeam.pros} cons={currentTeam.cons} currentTeam={currentTeam}/>
          <TeamFooter currentTeam={currentTeam}/>
        </div>
      </Container>
    </main>
  );
}

import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/cards';
import Section from '../components/Section';
import Wave from '../components/Waves';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'


const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn React and code for designer</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Another link</Link>
        <div className="logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
        <Wave></Wave>
      </div>
    </div>
    <div className='Cards'>
      <h2>11 courses, more coming</h2>
      <div className='cardGroup'>
        <Card title='Reacting for Designers'
        text = '12 sections'
        image={(require('../images/wallpaper.jpg'))}>
        </Card>
        <Card title='Designer system'
        text = '10 sections'
        image={(require('../images/wallpaper2.jpg'))}>
        </Card>
        <Card title='Sound Design'
        text = '5 sections'
        image={(require('../images/wallpaper3.jpg'))}>
        </Card>
        <Card title='ARKit 2'
        text = '10 sections'
        image={(require('../images/wallpaper4.jpg'))}>
        </Card>
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title='React for Designer'
      text='Now go build something great'
    />
    <SectionCaption>12 sections - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title}
        image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
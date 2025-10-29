import React from 'react'
import { Panel, PanelHeader, PanelTitle } from '../panel'
import { HACKATHONS } from '../../data/hackathons'
import HackathonItem from './hackathon-item'
export default function Hackathons() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>
          Hackathons
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({HACKATHONS.length})
          </sup>
        </PanelTitle>
      </PanelHeader>
          <div className="flex flex-col ">
            {HACKATHONS.map((data, index) => {
              return <div className='border-b-1 border-dotted w-[80%]'> <HackathonItem key={index} {...data} /> </div>
            })}
          </div>
  </Panel>

  )
}

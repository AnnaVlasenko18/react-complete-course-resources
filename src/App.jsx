import { CORE_CONCEPTS } from './data'
import Header  from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from './components/TabButton/TabButton'
import { useState } from 'react';
import {EXAMPLES} from './data'

function App() {
 const [selectedTopic, setSelectedTopic] = useState()

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

let tabContent = <p>Please select a topic.</p> 

if (selectedTopic) {
  tabContent = (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
           {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>
  )

}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => 
            ( <CoreConcept key={conceptItem.title} {...conceptItem}/>))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton label='Components'
              isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}/>
            <TabButton label='JSX'
              isSelected={selectedTopic === 'jsx'}
              onSelect={() => handleSelect('jsx')}/>
            <TabButton label='Props'
              isSelected={selectedTopic === 'props'}
              onSelect={() => handleSelect('props')}/>
            <TabButton label='State'
              isSelected={selectedTopic === 'state'}
              onSelect={() => handleSelect('state')}/>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;

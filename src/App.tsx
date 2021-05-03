import { title } from 'node:process';
import React, { useState } from 'react';
import './App.scss';
import Button from './Button/Button';
import ListItem from './ListItem/ListItem';
import { ListItemType } from './ListItem/types';
import Widget from './Widget/Widget';

function App() {
  const [widgetOpen, toggleWidget] = useState<boolean>(false);
  const [listItem, changeListItem] = useState<ListItemType[]>([{
    title: 'Workout',
    extended: true
  }]);
  function createTask() {
    toggleWidget((widgetOpen) => !widgetOpen);
  }
  return (
    <div className="container">
      <div className="list-container">
        <Button label="Create Task" onClick={createTask} />
        {listItem.map(item => <ListItem title={item.title} extended={item.extended} />)}
      </div>
      {widgetOpen && <Widget toggleWidget={toggleWidget} changeListItem={changeListItem}/>}
    </div>
  );
}

export default App;

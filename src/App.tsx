import { title } from 'node:process';
import React, { useState } from 'react';
import './App.scss';
import Button from './Button/Button';
import ListItem from './ListItem/ListItem';
import { ListItemType } from './ListItem/types';
import Widget from './Widget/Widget';
//NOt used reducer because it is not needed, lifting the state up worked in here.
function App() {
  const [widgetOpen, toggleWidget] = useState<boolean>(false);//to check if widget is opened or not
  const [listItem, changeListItem] = useState<ListItemType[]>([{// maintaining a list of all tasks
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
      {/* passing function to toggle widget as well as manipulate the List Items of task from Widget */}
    </div>
  );
}

export default App;

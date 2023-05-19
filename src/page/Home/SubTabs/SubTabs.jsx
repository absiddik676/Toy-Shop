/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const SubTabs = () => {
  const [category, setCategory] = useState('naruto')
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };


  console.log(category);
  const activeTabStyle = {
    borderBottom: '2px solid blue',
    color: 'blue',
  };

  const handleLoadData = (text) =>{
    setCategory(text)
  }

  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className="flex justify-center p-4 rounded-md space-x-4">
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${0 === selectedIndex ? 'active-tab' : ''
              }`}
            style={0 === selectedIndex ? activeTabStyle : {}}
            onClick={()=>handleLoadData('naruto')}
          >
          Naruto  
          </Tab>
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${1 === selectedIndex ? 'active-tab' : ''
              }`}
            style={1 === selectedIndex ? activeTabStyle : {}}
            onClick={()=>handleLoadData('Demon slayer')}
          >
            Demon slayer
          </Tab>
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${2 === selectedIndex ? 'active-tab' : ''
              }`}
            style={2 === selectedIndex ? activeTabStyle : {}}
            onClick={()=>handleLoadData('Frozen dolls')}
          >
            Frozen dolls
          </Tab>
        </TabList>

        <TabPanel>
          <p>Content for naruto</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Demon slayer</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Frozen dolls</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubTabs;
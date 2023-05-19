/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowToy from '../ShowToy/ShowToy';


const SubTabs = () => {
  const [category, setCategory] = useState('pokemon-toys')
  const [toys, setToys] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };



  console.log(category);
  const activeTabStyle = {
    borderBottom: '2px solid blue',
    color: 'blue',
  };

  const handleLoadData = (text) => {
    setCategory(text)
  }
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data)
      })
  }, [category])



  return (
    <div>
      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className="flex justify-center p-4 rounded-md space-x-4">
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${0 === selectedIndex ? 'active-tab' : ''
              }`}
            style={0 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('pokemon-toys')}
          >
            Pokemon toys
          </Tab>
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${1 === selectedIndex ? 'active-tab' : ''
              }`}
            style={1 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('Doraemon-toys')}
          >
            Doraemon toys
          </Tab>
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${2 === selectedIndex ? 'active-tab' : ''
              }`}
            style={2 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('Naruto-action-figures')}
          >
            Naruto action figures
          </Tab>
          <Tab
            className={`text-gray-600 outline-none hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${2 === selectedIndex ? 'active-tab' : ''
              }`}
            style={3 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('Demon-slayer-toys')}
          >
            Demon slayer toys
          </Tab>
        </TabList>

        <TabPanel >
          <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubTabs;
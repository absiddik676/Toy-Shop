/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowToy from '../ShowToy/ShowToy';
import Spinner from '../../shared/Spinner/Spinner';


const SubTabs = () => {
  const [category, setCategory] = useState('pokemon-toys')
  const [loading, setLoading] = useState(false)
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
    setLoading(true);
    fetch(`https://assignment-11-server-puce-alpha.vercel.app/toys/${category}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToys(data)
        setLoading(false)
      })
  }, [category])



  return (
    <div>

      <h1 className="font-extrabold text-transparent text-4xl text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Available Now</h1>
      <Tabs selectedIndex={selectedIndex} onSelect={handleTabSelect}>
        <TabList className="flex justify-center p-4 rounded-md space-x-4">
          <Tab
            className={`text-gray-600 outline-none font-semibold hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${0 === selectedIndex ? 'active-tab' : ''
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
            className={`text-gray-600 outline-none font-semibold hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${2 === selectedIndex ? 'active-tab' : ''
              }`}
            style={2 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('Naruto-action-figures')}
          >
            Naruto action figures
          </Tab>
          <Tab
            className={`text-gray-600 outline-none font-semibold hover:text-indigo-600 px-6 py-3 rounded-md cursor-pointer transition-colors duration-300 ${2 === selectedIndex ? 'active-tab' : ''
              }`}
            style={3 === selectedIndex ? activeTabStyle : {}}
            onClick={() => handleLoadData('Demon-slayer-toys')}
          >
            Demon slayer toys
          </Tab>
        </TabList>

        <TabPanel >
        {loading ? <div className='mb-96'><Spinner /></div> :
          <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
}
        </TabPanel>
        <TabPanel>
        {loading ? <div className='mb-96'><Spinner /></div> :
          <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
}
        </TabPanel>
        <TabPanel>
        {loading ? <div className='mb-96'><Spinner /></div> :
          <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
}
        </TabPanel>
        <TabPanel>
        {loading ?<><div className='mb-96'><Spinner /></div></> :
          <div className='max-w-7xl mx-auto grid grid-cols-3'>
          {
            toys.map(toy => <ShowToy key={toy._id} toy={toy}></ShowToy>)
          }
          </div>
}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubTabs;
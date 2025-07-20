import React from 'react';
import LeftSidebar from './components/LeftSideBar';
import About from './components/About';
import Academic from './components/Acedemic';
import Industrial from './components/Industrial';
import Portfolio from './components/Portfolio';


const App: React.FC = () => {
  return (
    <div className="flex h-screen ">
      <div className="w-1/3 lg:w-1/3 bg-gradient-to-b from-[#3a8d8d] to-[#1e130c] border-r border-gray-200 fixed h-screen z-1">
        <LeftSidebar />
      </div>
      <div className="w-full lg:ml-[33.33%] px-6 overflow-y-auto max-h-screen bg-gray-170">
       <About/>
       <hr className="border-t border-gray-300 mt-2  mx-8" />  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1  mx-4">
        <Academic/>
      <Industrial/>
      </div>
      <hr className="border-t border-gray-300 my-8 mx-8 mt-12" />     
      <Portfolio/>
      </div>
    </div>
  );
};

export default App;

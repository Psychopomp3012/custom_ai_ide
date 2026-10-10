import './App.css'

import TitleBar from './components/TitleBar';
import ActivityBar from './components/ActivityBar';
import PrimarySidebar from './components/PrimarySidebar';
import EditorArea from './components/EditorArea';

function App() {
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
      <TitleBar />
      <div className='flex flex-1 overflow-hidden'>
        <ActivityBar />
        <PrimarySidebar />
        <EditorArea />
      </div>

    </div>
  )
}

export default App

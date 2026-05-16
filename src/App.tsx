// src/App.tsx
import { GameProvider, useGame } from './context/GameContext';
import Desktop from './components/Desktop';
import LockScreen from './components/LockScreen';
import AmbientPlayer from './components/AmbientPlayer';

const GameContent = () => {
  const { isPCUnlocked, currentUser } = useGame();

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">

      {/* PLAYER GLOBAL - NUNCA SE DESMONTA */}
      <AmbientPlayer enabled={currentUser === 'guest'} />
      
      {/* SISTEMA */}
      {isPCUnlocked ? <Desktop /> : <LockScreen />}
    </div>
  );
};

function App() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default App;
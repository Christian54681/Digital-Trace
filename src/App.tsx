// src/App.tsx
import { GameProvider, useGame } from './context/GameContext';
import Desktop from './components/Desktop';
import LockScreen from './components/LockScreen';

const GameContent = () => {
  const { isPCUnlocked } = useGame();

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
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
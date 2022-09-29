import { useState } from "react";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import History from "./components/History.js";
import StartButton from "./components/StartButton.js";
import Sticks from "./components/Sticks.js";

function App() {

  const [isGameStart, setIsGameStart] = useState(false);

  const [mySticks, setMySticks] = useState(0);
  const [oppSticks, setOppSticks] = useState(0);
  const [remainSticks, setRemainSticks] = useState(0);
  const [sticksToTake, setSticksToTake] = useState(0);

  const [isPlayerTurn, setIsPlayerTurn] = useState(true);

  const [myHistory, setMyHistory] = useState([]);
  const [oppHistory, setOppHistory] = useState([]);

  const onGameStart = () => {
    const sticksCount = Math.floor(Math.random() * 10 + 11);
    const sticksToTake = Math.floor(Math.random() * 4 + 2);

    setIsGameStart(true);
    setRemainSticks(sticksCount);
    setSticksToTake(sticksToTake);
    // game reset
    setIsPlayerTurn(true);
    setMySticks(0);
    setOppSticks(0);
    setMyHistory([]);
    setOppHistory([]);

  }

  const handleClick = (sticksCount) => {
    // update sticks count
    const newRemainSticks = remainSticks - sticksCount;
    setRemainSticks(newRemainSticks);
    setMySticks((prev) => prev + sticksCount);

    // update my history
    let history = [...myHistory];
    history.push(sticksCount)
    setMyHistory(history)

    // switch turn
    setIsPlayerTurn(false);

    // checking for the winner...
    // code here...
    checkWinner(newRemainSticks)

    // opponent turn
    oppClick(newRemainSticks);

  }

  const oppClick = (remainSticks) => {
    let min = 1;
    let max = 2;
    
    if (remainSticks > sticksToTake) {
      max = sticksToTake
    } else {
      max = remainSticks - 1;
    }
    // generate random sticks to take count
    const sticksCount = Math.floor(Math.random() * max) + min;
    
    // update sticks count
    const newRemainSticks = remainSticks - sticksCount;
    setRemainSticks(newRemainSticks);
    setOppSticks((prev) => prev + sticksCount);

    // update opp history
    let history = [...myHistory];
    history.push(sticksCount)
    setOppHistory(history)

    // checking for the winner...
    // code here...
    checkWinner(newRemainSticks)

    // switch turn
    setIsPlayerTurn(true);
  }

  const checkWinner = (remainSticks) => {
    console.log(remainSticks)
    if (remainSticks === 1) {
      console.log('game ends!')
      return setIsGameStart(false);
    }
    
  }

  return (
    <div className='flex flex-col bg-neutral-800 h-screen'>
      {/* Header */}
      <Header />

      <section id="game" className="h-full flex flex-row items-center">
        {isGameStart
          ? (
            <>
              {/* My history */}
              <History
                history={myHistory}
                title='My history'
                isPlayer={true} />

              {/* Sticks */}
              <div className='flex flex-col items-center justify-evenly 
              space-y-10 border border-neutral-700 mx-auto p-4 rounded-lg'>
                <div className="flex flex-row space-x-10">

                  {/* My sticks */}
                  <Sticks count={mySticks} title='Your sticks...' />

                  {/* Opp sticks */}
                  <Sticks count={oppSticks} title='Opp sticks...' />

                </div>

                {/* Remain sticks */}
                <div className="">
                  <Sticks count={remainSticks} title='Remain sticks...' />
                </div>
                {/* Form */}
                {
                  isPlayerTurn
                  && <Form
                    min={1}
                    max={remainSticks > sticksToTake ? sticksToTake : remainSticks - 1}
                    handleClick={handleClick}
                  />
                }

              </div>
              
              {/* Opp history */}
              <History history={oppHistory} title='Opp history' isPlayer={false} />
            </>
          )
          : (
            <StartButton onGameStart={onGameStart} />
          )
        }

      </section>
    </div>
  );
}

export default App;

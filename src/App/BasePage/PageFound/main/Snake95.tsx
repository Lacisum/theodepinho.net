import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './Snake95/style.css';
import { Direction } from './Snake95/common';
import { Displayer } from './Snake95/displayer';
import { Game } from './Snake95/game';
import { sleep } from './Snake95/utils';

const TICK_DURATION = 200;

const Snake95 = () => {
  const gridRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const gridContainer = gridRef.current;
    if (!gridContainer) {
      return;
    }
    const displayer = new Displayer(Game.GRID_NB_ROWS, Game.GRID_NB_COLUMNS);

    displayer.askPlay(() => play(displayer));

    async function play(displayer: Displayer): Promise<void> {
      const game = new Game();
      document.addEventListener('keydown', function (event: KeyboardEvent) {
        if (event.repeat) return;
        switch (event.key) {
          case 'ArrowUp':
            game.enqueueSnakeDirection(Direction.UP);
            break;
          case 'ArrowDown':
            game.enqueueSnakeDirection(Direction.DOWN);
            break;
          case 'ArrowRight':
            game.enqueueSnakeDirection(Direction.RIGHT);
            break;
          case 'ArrowLeft':
            game.enqueueSnakeDirection(Direction.LEFT);
            break;
        }
      });

      // Start the game
      displayer.draw(game.cells, game.isOver, game.score);
      while (!game.isOver) {
        await sleep(TICK_DURATION);
        game.tick();
        displayer.draw(game.cells, game.isOver, game.score);
      }

      displayer.askRetry(() => play(displayer));
    }
    return () => {
      gridContainer.innerHTML = '';
    };
  }, [gridRef]);

  return (
    <div id='snake-95__app-container'>
      <Link className='nav-link theme-dark' to='/'>
        🏠 Accueil
      </Link>
      <div id='snake-95__app'>
        <div className='snake-95__window'>
          <div className='snake-95__topbar'>
            <h1>Snake 95</h1>
            <div className='snake-95__window-buttons'>
              <div className='snake-95__window-button snake-95__minimize-button'>
                <div>🗕</div>
              </div>
              <div className='snake-95__window-button snake-95__maximize-button'>
                <div>🗖</div>
              </div>
              <div className='snake-95__window-button snake-95__close-button'>
                {/* I didn't find a satisfying xmark character so I simulated one */}
                <div
                  style={{
                    transform: 'translate(-7%) rotate(45deg) scale(1.5)',
                  }}
                >
                  <div>🞤</div>
                </div>
              </div>
            </div>
          </div>
          <aside className='snake-95__info-bar'>
            <div className='snake-95__score-container'>
              <div className='snake-95__food'></div>
              <div className='snake-95__score'>0</div>
            </div>
            <div className='snake-95__instructions'>
              Use 🠈, 🠉, 🠊 & 🠋 to move
            </div>
          </aside>
          <main className='snake-95__grid-container' ref={gridRef}></main>
        </div>
      </div>
    </div>
  );
};

export default Snake95;

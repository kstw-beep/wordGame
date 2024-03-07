import React from 'react';

function NewGame() {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className='new-game'>
      <button type='button' onClick={refreshPage}>
        New Game
      </button>
    </div>
  );
}

export default NewGame;

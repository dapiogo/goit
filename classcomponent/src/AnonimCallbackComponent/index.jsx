/* eslint-disable react/prop-types */

import React, { Component } from 'react';

// onClick: Zdarzenie to jest wywoływane po kliknięciu elementu, takiego jak przycisk, link lub inny interaktywny element.

// onChange: Zdarzenie to występuje, gdy wartość pola formularza zmienia się. Jest używane w polach tekstowych, checkboxach, przełącznikach, listach rozwijanych itp.

// onSubmit: Zdarzenie to występuje, gdy formularz jest wysyłany. Jest zwykle używane w celu przechwycenia danych z formularza przed ich wysłaniem na serwer.

// onMouseOver i onMouseOut: Zdarzenia te występują, gdy kursor myszy najedzie na element (onMouseOver) lub opuści element (onMouseOut).

// onFocus i onBlur: Zdarzenia te występują, gdy element otrzymuje (onFocus) lub traci (onBlur) fokus. Są używane w polach tekstowych i innych interaktywnych elementach formularza.

// onKeyPress, onKeyDown i onKeyUp: Zdarzenia te są związane z wciskaniem i zwalnianiem klawiszy na klawiaturze. Mogą być używane do reagowania na konkretne klawisze lub do obsługi akcji związanych z klawiaturą.

// onScroll: Zdarzenie to występuje, gdy użytkownik przewija element (np. okno przeglądarki, panel boczny itp.).

class AnonimCallbackComponent extends Component {
  render() {
    const { likesCount } = this.props;

    return (
      <div>
        <div>Nasze lajki:{likesCount}</div>

        {/* //antywzorzec i tak nie robimy poniewaz jest renderowane na biezaco */}
        <button
          onClick={(event) => {
            console.log(event);
            event.stopPropagation();
            console.log('test');
          }}
        >
          Dodaj
        </button>
        <button
          onClick={() => {
            console.log('cliknalem odejmij');
          }}
        >
          Odejmij
        </button>
        <div
          onClick={() => {
            console.log('kliknalem w diva');
          }}
        >
          Testowy klik div
        </div>
      </div>
    );
  }
}

export default AnonimCallbackComponent;

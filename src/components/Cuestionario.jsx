import { useState } from 'react';

// Reutilizable: soporta respuestaCorrecta como number o number[]
function Cuestionario({ titulo, preguntas }) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // estado por pregunta
  const [seleccion, setSeleccion] = useState(new Set());   // indices elegidos
  const [confirmado, setConfirmado] = useState(false);     // ya se validó esta pregunta
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);

  const actual = preguntas[preguntaActual];
  const esMultiple = Array.isArray(actual.respuestaCorrecta);
  const correctSet = new Set(esMultiple ? actual.respuestaCorrecta : [actual.respuestaCorrecta]);

  const toggleOpcion = (idx) => {
    if (confirmado) return;

    // Si es simple → seleccionar y confirmar automático
    if (!esMultiple) {
      const s = new Set([idx]);
      setSeleccion(s);
      confirmar(s);
      return;
    }

    // Si es múltiple → toggle
    const nuevo = new Set(seleccion);
    if (nuevo.has(idx)) nuevo.delete(idx);
    else nuevo.add(idx);
    setSeleccion(nuevo);
  };

  const setsIguales = (a, b) => a.size === b.size && [...a].every(x => b.has(x));

  const confirmar = (sel = seleccion) => {
    if (confirmado) return;
    const correcto = setsIguales(sel, correctSet);
    if (correcto) setPuntuacion(p => p + 1);
    setMostrarExplicacion(true);
    setConfirmado(true);
  };

  const siguiente = () => {
    const next = preguntaActual + 1;
    if (next < preguntas.length) {
      setPreguntaActual(next);
      setSeleccion(new Set());
      setConfirmado(false);
      setMostrarExplicacion(false);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciar = () => {
    setPreguntaActual(0);
    setPuntuacion(0);
    setMostrarResultado(false);
    setSeleccion(new Set());
    setConfirmado(false);
    setMostrarExplicacion(false);
  };

  return (
    <div className="trivia-container">
      <div className="trivia-card">
        <h1 className="trivia-title">{titulo}</h1>

        {mostrarResultado ? (
          <div className="resultado">
            <h2>Resultado Final</h2>
            <p className="resultado-puntuacion">
              Has acertado {puntuacion} de {preguntas.length} preguntas
            </p>
            <p className="resultado-porcentaje">
              Puntuación: {Math.round((puntuacion / preguntas.length) * 100)}%
            </p>
            <button onClick={reiniciar} className="btn-reiniciar">Volver a intentar</button>
          </div>
        ) : (
          <div>
            <div className="progreso">
              <span>Pregunta {preguntaActual + 1} de {preguntas.length}</span>
              <span>Puntuación: {puntuacion}</span>
            </div>

            <div className="pregunta-container">
              <h2 className="pregunta-texto">
                {actual.pregunta}
              </h2>
              {esMultiple && <p style={{opacity:.7, marginTop:-8}}>Selecciona todas las que correspondan</p>}

              <div className="opciones-container">
                {actual.opciones.map((op, idx) => {
                  // Estilos según estado
                  let cls = 'opcion';
                  const estaSeleccionada = seleccion.has(idx);
                  if (!confirmado) {
                    if (estaSeleccionada) cls += ' seleccionada'; // opcional si tenés estilo
                  } else {
                    const esCorrecta = correctSet.has(idx);
                    if (esCorrecta) cls += ' correcta';
                    else if (estaSeleccionada && !esCorrecta) cls += ' incorrecta';
                    else cls += ' deshabilitada';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => toggleOpcion(idx)}
                      disabled={confirmado && !correctSet.has(idx)}
                      className={cls}
                    >
                      {op}
                    </button>
                  );
                })}
              </div>
            </div>

            {mostrarExplicacion && actual.explicacion && (
              <div className="explicacion">
                <h3>Explicación:</h3>
                <p>{actual.explicacion}</p>
              </div>
            )}

            <div className="acciones">
              {esMultiple && !confirmado && (
                <button
                  className="btn-siguiente"
                  onClick={() => confirmar()}
                  disabled={seleccion.size === 0}
                >
                  Confirmar
                </button>
              )}
              {confirmado && (
                <button className="btn-siguiente" onClick={siguiente}>
                  {preguntaActual === preguntas.length - 1 ? 'Ver resultados' : 'Siguiente pregunta'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cuestionario;

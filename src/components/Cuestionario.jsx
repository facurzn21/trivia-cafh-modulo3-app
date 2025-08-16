import { useState, useEffect } from 'react';

// Función para mezclar array (Fisher-Yates shuffle)
function mezclarArray(array) {
  const mezclado = [...array];
  for (let i = mezclado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mezclado[i], mezclado[j]] = [mezclado[j], mezclado[i]];
  }
  return mezclado;
}

// Reutilizable: soporta respuestaCorrecta como number o number[]
function Cuestionario({ titulo, preguntas }) {
  // Mezclar preguntas al inicio
  const [preguntasMezcladas, setPreguntasMezcladas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuacion, setPuntuacion] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  
  // Contadores para el cálculo final
  const [respuestasCorrectas, setRespuestasCorrectas] = useState(0);
  const [respuestasIncorrectas, setRespuestasIncorrectas] = useState(0);

  // estado por pregunta
  const [seleccion, setSeleccion] = useState(new Set());
  const [confirmado, setConfirmado] = useState(false);
  const [mostrarExplicacion, setMostrarExplicacion] = useState(false);

  // Mezclar preguntas cuando se monta el componente o se reinicia
  // IMPORTANTE: Solo mezclamos el ORDEN de las preguntas, 
  // NO modificamos el contenido ni las respuestas correctas
  useEffect(() => {
    setPreguntasMezcladas(mezclarArray(preguntas));
  }, [preguntas]);

  // Si no hay preguntas mezcladas aún, no renderizar
  if (preguntasMezcladas.length === 0) {
    return <div className="trivia-container">Cargando...</div>;
  }

  const actual = preguntasMezcladas[preguntaActual];
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
    
    if (correcto) {
      setPuntuacion(p => p + 1); // +1 punto por respuesta correcta
      setRespuestasCorrectas(c => c + 1);
    } else {
      setPuntuacion(p => p - 0.5); // -0.5 puntos por respuesta incorrecta
      setRespuestasIncorrectas(i => i + 1);
    }
    
    setMostrarExplicacion(true);
    setConfirmado(true);
  };

  const siguiente = () => {
    const next = preguntaActual + 1;
    if (next < preguntasMezcladas.length) {
      setPreguntaActual(next);
      setSeleccion(new Set());
      setConfirmado(false);
      setMostrarExplicacion(false);
    } else {
      setMostrarResultado(true);
    }
  };

  const reiniciar = () => {
    // Mezclar las preguntas nuevamente
    setPreguntasMezcladas(mezclarArray(preguntas));
    setPreguntaActual(0);
    setPuntuacion(0);
    setRespuestasCorrectas(0);
    setRespuestasIncorrectas(0);
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
            
            <div style={{ marginBottom: '20px' }}>
              <p className="resultado-puntuacion" style={{ fontSize: '1.2em', marginBottom: '10px' }}>
                <strong>Puntuación total: {puntuacion.toFixed(1)} puntos</strong>
              </p>
              
              <div style={{ textAlign: 'left', display: 'inline-block', margin: '10px auto' }}>
                <p style={{ color: '#4CAF50', margin: '5px 0' }}>
                  ✓ Respuestas correctas: {respuestasCorrectas} (+{respuestasCorrectas} puntos)
                </p>
                <p style={{ color: '#f44336', margin: '5px 0' }}>
                  ✗ Respuestas incorrectas: {respuestasIncorrectas} (-{(respuestasIncorrectas * 0.5).toFixed(1)} puntos)
                </p>
              </div>
            </div>
            
            <p className="resultado-porcentaje">
              Porcentaje de aciertos: {Math.round((respuestasCorrectas / preguntasMezcladas.length) * 100)}%
            </p>
            
            <p style={{ fontSize: '0.9em', opacity: 0.7, marginTop: '15px' }}>
              Las preguntas se mezclarán al reiniciar
            </p>
            
            <button onClick={reiniciar} className="btn-reiniciar">Volver a intentar</button>
          </div>
        ) : (
          <div>
            <div className="progreso">
              <span>Pregunta {preguntaActual + 1} de {preguntasMezcladas.length}</span>
              <span>Puntuación: {puntuacion.toFixed(1)}</span>
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
                    if (estaSeleccionada) cls += ' seleccionada';
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

            {mostrarExplicacion && (
              <div style={{ 
                padding: '10px', 
                margin: '10px 0', 
                borderRadius: '5px',
                backgroundColor: setsIguales(seleccion, correctSet) ? '#e8f5e9' : '#ffebee'
              }}>
                <p style={{ 
                  fontWeight: 'bold', 
                  color: setsIguales(seleccion, correctSet) ? '#4CAF50' : '#f44336',
                  marginBottom: '5px'
                }}>
                  {setsIguales(seleccion, correctSet) ? '✓ ¡Correcto! (+1 punto)' : '✗ Incorrecto (-0.5 puntos)'}
                </p>
                {actual.explicacion && (
                  <>
                    <h3 style={{ marginTop: '10px', marginBottom: '5px' }}>Explicación:</h3>
                    <p>{actual.explicacion}</p>
                  </>
                )}
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
                  {preguntaActual === preguntasMezcladas.length - 1 ? 'Ver resultados' : 'Siguiente pregunta'}
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
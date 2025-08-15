import { useState, useEffect } from "react";
import "./index.css";

// 👇 M3
import CuestionarioPreParcial1 from "./modules/modulo3/CuestionarioPreParcial1.jsx";
import CuestionarioPruebaM3 from "./modules/modulo3/CuestionarioPruebaM3.jsx"; // 👈 nuevo

export default function App() {
  // navegación igual que antes
  const [pantalla, setPantalla] = useState(
    localStorage.getItem("pantallaActual") || "inicio"
  );

  const go = (next) => {
    setPantalla(next);
    localStorage.setItem("pantallaActual", next);
  };

  useEffect(() => {
    const heartbeat = setInterval(
      () => console.log("Manteniendo la sesión activa..."),
      5 * 60 * 1000
    );
    const handleUserActivity = () => {};
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);
    window.addEventListener("click", handleUserActivity);
    return () => {
      clearInterval(heartbeat);
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
      window.removeEventListener("click", handleUserActivity);
    };
  }, []);

  // menú principal: habilitamos solo Módulo 3
  const modulos = [
    { id: 1, label: "Módulo 1", disponible: false },
    { id: 2, label: "Módulo 2", disponible: false },
    { id: 3, label: "Módulo 3", disponible: true },
    { id: 4, label: "Módulo 4", disponible: false },
    { id: 5, label: "Módulo 5", disponible: false },
  ];

  // menú del Módulo 3
  const cuestionariosM3 = [
    { key: "mod3-pre1",   title: "Pre Parcial 1",        sub: "CAFH",            habilitado: true },
    { key: "mod3-prueba", title: "Prueba (57 preguntas)", sub: "CAFH",           habilitado: true }, // 👈 nuevo
    { key: "mod3-pre2",   title: "Pre Parcial 2",        sub: "Próximamente",    habilitado: false },
    { key: "mod3-final",  title: "Final",                sub: "Próximamente",    habilitado: false },
  ];

  return (
    <div className="App">
      {/* INICIO */}
      {pantalla === "inicio" && (
        <div className="pantalla-inicio">
          <h1>TRIVIA CAFH</h1>
          <p>Selecciona un módulo:</p>

          <div className="botones-seleccion">
            {modulos.map((m) => (
              <button
                key={m.id}
                className="btn-seleccion"
                onClick={() => go(`mod${m.id}-menu`)}
                title={m.disponible ? "Ver cuestionarios" : "Próximamente"}
              >
                {m.label} — {m.disponible ? "Ver cuestionarios →" : "Próximamente"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* MENÚ MÓDULO 3 */}
      {pantalla === "mod3-menu" && (
        <div className="pantalla-inicio">
          <button className="btn-volver" onClick={() => go("inicio")}>
            ← Volver al inicio
          </button>

          <h1>CAFH — Módulo 3</h1>
          <p>Elige un cuestionario:</p>

          <div className="grid-cuestionarios">
            {cuestionariosM3.map((q) => (
              <button
                key={q.key}
                className="btn-cuestionario"
                onClick={() => go(q.key)}
                disabled={!q.habilitado}
                title={q.habilitado ? "Abrir" : "Próximamente"}
              >
                <span className="cuest-title">{q.title}</span>
                <small className="cuest-sub">{q.sub || ""}</small>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* PLACEHOLDER MENÚS MÓDULOS 1,2,4,5 */}
      {["mod1-menu", "mod2-menu", "mod4-menu", "mod5-menu"].includes(pantalla) && (
        <div className="pantalla-inicio">
          <button className="btn-volver" onClick={() => go("inicio")}>
            ← Volver al inicio
          </button>
          <h1>CAFH — {`Módulo ${pantalla.match(/\d/)[0]}`}</h1>
          <p>Este módulo estará disponible próximamente.</p>
          <div className="botones-seleccion">
            <button className="btn-seleccion" onClick={() => go("inicio")}>
              Volver al inicio
            </button>
          </div>
        </div>
      )}

      {/* M3 – Pre Parcial 1 */}
      {pantalla === "mod3-pre1" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioPreParcial1 />
        </>
      )}

      {/* M3 – Prueba (57 preguntas) */}
      {pantalla === "mod3-prueba" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioPruebaM3 />
        </>
      )}

      {/* PLACEHOLDERS futuros del M3 */}
      {["mod3-pre2", "mod3-final"].includes(pantalla) && (
        <div className="pantalla-inicio">
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <h2>Próximamente</h2>
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import "./index.css";

import CuestionarioPreParcial1 from "./modules/modulo3/CuestionarioPreParcial1.jsx";
import CuestionarioPruebaM3 from "./modules/modulo3/CuestionarioPruebaM3.jsx";
import CuestionarioTeoricoResumenM3 from "./modules/modulo3/CuestionarioTeoricoResumenM3.jsx";
import CuestionarioTeoricoResumenVersion2 from "./modules/modulo3/CuestionarioTeoricoResumenVersion2.jsx";
import CuestionarioResistenciaBacteriana from "./modules/modulo3/CuestionarioResistenciaBacteriana.jsx";
import CuestionarioATB from "./modules/modulo3/CuestionarioATB.jsx";
import CuestionarioAntimicoticosAntiparasitarios from "./modules/modulo3/CuestionarioAntimicoticosAntiparasitarios.jsx";

export default function App() {
  const [pantalla, setPantalla] = useState(
    localStorage.getItem("pantallaActual") || "inicio"
  );

  const go = (next) => {
    setPantalla(next);
    localStorage.setItem("pantallaActual", next);
  };

  useEffect(() => {
    // ========== CONTROL DE CACHÉ ==========
    const APP_VERSION = "1.0.8"; // 
    const versionGuardada = localStorage.getItem("appVersion");

    if (versionGuardada !== APP_VERSION) {
      console.log("Nueva versión detectada, limpiando caché…");
      localStorage.setItem("appVersion", APP_VERSION);

      if ("caches" in window) {
        caches.keys().then((names) => names.forEach((n) => caches.delete(n)));
      }
      // Si querés recargar automáticamente al detectar versión nueva:
      // window.location.reload(true);
    }

    const metaNoCache = document.createElement("meta");
    metaNoCache.httpEquiv = "Cache-Control";
    metaNoCache.content = "no-cache, no-store, must-revalidate";
    document.head.appendChild(metaNoCache);

    const metaPragma = document.createElement("meta");
    metaPragma.httpEquiv = "Pragma";
    metaPragma.content = "no-cache";
    document.head.appendChild(metaPragma);

    const metaExpires = document.createElement("meta");
    metaExpires.httpEquiv = "Expires";
    metaExpires.content = "0";
    document.head.appendChild(metaExpires);
    // ======================================

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

  // menú principal (solo habilito Módulo 3)
  const modulos = [
    { id: 1, label: "Módulo 1", disponible: false },
    { id: 2, label: "Módulo 2", disponible: false },
    { id: 3, label: "Módulo 3", disponible: true },
    { id: 4, label: "Módulo 4", disponible: false },
    { id: 5, label: "Módulo 5", disponible: false },
  ];

  // menú Módulo 3 — solo los activos (sin "próximamente")
  const cuestionariosM3 = [
    { key: "mod3-pre1", title: "Pre Parcial 1", sub: "CAFH", habilitado: true },
    { key: "mod3-prueba", title: "Prueba (57 preguntas)", sub: "CAFH", habilitado: true },
    { key: "mod3-teorico1", title: "Teórico (Resumen) Claude IA", sub: "CAFH", habilitado: true },
    { key: "mod3-teorico2", title: "Teórico (Resumen v2) ChatGPT", sub: "CAFH", habilitado: true },
    { key: "mod3-ram", title: "Resistencia bacteriana", sub: "CAFH", habilitado: true },
    { key: "mod3-atb", title: "Antibióticos (PDF UDELAR)", sub: "CAFH", habilitado: true },
    { key: "mod3-antimic-antiparas", title: "Antimicóticos y Antiparasitarios", sub: "CAFH", habilitado: true },
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

      {/* M3 — Pre Parcial 1 */}
      {pantalla === "mod3-pre1" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioPreParcial1 />
        </>
      )}

      {/* M3 — Prueba (57) */}
      {pantalla === "mod3-prueba" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioPruebaM3 />
        </>
      )}

      {/* M3 — Teórico (Resumen) */}
      {pantalla === "mod3-teorico1" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioTeoricoResumenM3 />
        </>
      )}

      {/* M3 — Teórico (Resumen v2) */}
      {pantalla === "mod3-teorico2" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioTeoricoResumenVersion2 />
        </>
      )}

      {/* M3 — Resistencia bacteriana */}
      {pantalla === "mod3-ram" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioResistenciaBacteriana />
        </>
      )}

      {/* M3 — Antibióticos */}
      {pantalla === "mod3-atb" && (
        <>
          <button className="btn-volver" onClick={() => go("mod3-menu")}>
            ← Volver a Módulo 3
          </button>
          <CuestionarioATB />
        </>
      )}

      {pantalla === "mod3-antimic-antiparas" && (
    <>
      <button className="btn-volver" onClick={() => go("mod3-menu")}>
        ← Volver a Módulo 3
      </button>
      <CuestionarioAntimicoticosAntiparasitarios />
    </>
  )}
  </div>
  );
}
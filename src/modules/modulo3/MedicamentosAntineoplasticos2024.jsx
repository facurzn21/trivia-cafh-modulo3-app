import Cuestionario from "../../components/Cuestionario";

/**
 * 30 preguntas basadas en: "Medicamentos antineoplásicos 2024"
 * - 1..15: Verdadero/Falso (opciones ["Verdadero","Falso"])
 * - 16..30: Múltiple opción (3 opciones, 1 correcta)
 */
const preguntas = [
  // ========= Verdadero / Falso =========
  // 1
  {
    id: 1,
    pregunta:
      "La quimioterapia actúa preferentemente sobre células en división, por lo que a mayor velocidad de crecimiento tumoral suele haber mejor respuesta.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Los antineoplásicos son más eficaces en células que atraviesan el ciclo celular activo; tumores con mayor fracción de crecimiento responden mejor.",
  },
  // 2
  {
    id: 2,
    pregunta:
      "Los objetivos de la terapia antineoplásica incluyen la curación completa o la reducción tumoral para prolongar supervivencia y aliviar síntomas.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "La estrategia puede ser curativa o paliativa según estadio y biología tumoral.",
  },
  // 3
  {
    id: 3,
    pregunta:
      "La detección temprana (cribado) aumenta las posibilidades de eficacia del tratamiento oncológico.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Mamografía, citología cervical, TSOH/PSA y exploraciones dirigidas mejoran resultados al diagnosticar en etapas iniciales.",
  },
  // 4
  {
    id: 4,
    pregunta:
      "Los fármacos antineoplásicos casi no afectan a tejidos sanos porque son muy selectivos por células cancerosas.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Afectan también tejidos de alta replicación (médula ósea, mucosa GI, folículo piloso), origen de su toxicidad característica.",
  },
  // 5
  {
    id: 5,
    pregunta:
      "La resistencia a antineoplásicos puede estar presente desde el inicio del tumor o adquirirse durante el tratamiento.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Puede ser primaria o secundaria: por cambios en diana, eflujo, reparación del ADN, etc.",
  },
  // 6
  {
    id: 6,
    pregunta:
      "Las combinaciones de quimioterapia se diseñan con fármacos de distinto mecanismo, fase de acción y toxicidad principal.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Se busca sinergia y limitar toxicidad superpuesta, cubriendo diferentes fases del ciclo celular.",
  },
  // 7
  {
    id: 7,
    pregunta:
      "Los agentes alquilantes son específicos de la fase S del ciclo celular.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "No son específicos de fase (actúan a lo largo del ciclo).",
  },
  // 8
  {
    id: 8,
    pregunta:
      "La ciclofosfamida puede causar cistitis hemorrágica por acroleína, prevenible con mesna.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Ciclofosfamida (mostaza nitrogenada) genera acroleína; mesna la neutraliza en vejiga.",
  },
  // 9
  {
    id: 9,
    pregunta:
      "El cisplatino se asocia a nefrotoxicidad, ototoxicidad y náuseas/vómitos intensos.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Además forma entrecruzamientos del ADN; se excreta por vía renal.",
  },
  // 10
  {
    id: 10,
    pregunta:
      "El 5-fluorouracilo (5-FU) inhibe la timidilato sintasa y puede incorporarse al ARN.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Antimetabolito análogo de uracilo; causa alteraciones en síntesis de ADN y ARN.",
  },
  // 11
  {
    id: 11,
    pregunta:
      "El metotrexato inhibe la dihidrofolato reductasa y su eliminación renal puede reducirse por interacción con AINEs/antibióticos.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Disminuye síntesis de timidilato y purinas; vigilar interacciones que aumenten toxicidad.",
  },
  // 12
  {
    id: 12,
    pregunta:
      "Imatinib (Tki) se usa en algunas leucemias y tumores gastrointestinales y puede producir supresión de médula ósea.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Su biodisponibilidad mejora con alimentos grasos; se vigila mielosupresión.",
  },
  // 13
  {
    id: 13,
    pregunta:
      "Los alcaloides de la vinca estabilizan los microtúbulos, mientras que los taxanos impiden su polimerización.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Es al revés: la vinca inhibe la polimerización (no se forman microtúbulos); los taxanos los estabilizan (microtúbulos disfuncionales).",
  },
  // 14
  {
    id: 14,
    pregunta:
      "Trastuzumab se dirige a HER2 y bevacizumab bloquea la angiogénesis.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Trastuzumab anti-HER2 (mama/estómago); bevacizumab anti-VEGF (angiogénesis).",
  },
  // 15
  {
    id: 15,
    pregunta:
      "La bleomicina se asocia sobre todo a cardiomiopatía, mientras que la doxorrubicina a fibrosis pulmonar.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Doxorrubicina: cardiotoxicidad; bleomicina: toxicidad pulmonar/fibrosis.",
  },

  // ========= Múltiple opción (3 opciones, 1 correcta) =========
  // 16
  {
    id: 16,
    pregunta: "¿En qué fase del ciclo celular actúan preferentemente los taxanos?",
    opciones: ["Fase M (mitosis)", "Fase S", "Fase G0"],
    respuestaCorrecta: 0,
    explicacion:
      "Taxanos (paclitaxel/docetaxel) son específicos de fase M: estabilizan microtúbulos e impiden la mitosis.",
  },
  // 17
  {
    id: 17,
    pregunta:
      "¿Cuál es un inhibidor de topoisomerasa II utilizado en cáncer de pulmón y testicular?",
    opciones: ["Irinotecán", "Etopósido", "Topotecán"],
    respuestaCorrecta: 1,
    explicacion:
      "Topo II: etopósido/tenipósido; Topo I: irinotecán/topotecán.",
  },
  // 18
  {
    id: 18,
    pregunta:
      "¿Cuál de los siguientes antieméticos se emplea con frecuencia como soporte en quimioterapia?",
    opciones: ["Ondansetrón", "Amoxicilina", "Hidroclorotiazida"],
    respuestaCorrecta: 0,
    explicacion:
      "Antagonista 5-HT3; también se usan domperidona y metoclopramida.",
  },
  // 19
  {
    id: 19,
    pregunta:
      "¿Qué fármaco se coadministra para prevenir la cistitis hemorrágica por ciclofosfamida?",
    opciones: ["Leucovorina (folinato)", "Mesna", "Vitamina K"],
    respuestaCorrecta: 1,
    explicacion:
      "Mesna neutraliza la acroleína en vejiga.",
  },
  // 20
  {
    id: 20,
    pregunta:
      "Fármaco que forma enlaces cruzados de ADN y es útil en cáncer de testículo/ovario:",
    opciones: ["Cisplatino", "5-Fluorouracilo", "Vincristina"],
    respuestaCorrecta: 0,
    explicacion:
      "Complejo de platino, IV, nefro/ototóxico, muy emetizante.",
  },
  // 21
  {
    id: 21,
    pregunta:
      "Efecto adverso neurológico típico de alcaloides de la vinca y taxanos:",
    opciones: ["Neuropatía periférica", "Hipoglucemia", "Hipoacusia"],
    respuestaCorrecta: 0,
    explicacion:
      "Ambos afectan microtúbulos neurales → neuropatía sensitivo-motora.",
  },
  // 22
  {
    id: 22,
    pregunta:
      "TKI de uso clásico en leucemia mieloide crónica y tumores del estroma gastrointestinal:",
    opciones: ["Imatinib", "Lapatinib", "Erlotinib"],
    respuestaCorrecta: 0,
    explicacion:
      "Imatinib: BCR-ABL y c-Kit; lapatinib (HER1/2) y erlotinib (HER1) tienen otros nichos.",
  },
  // 23
  {
    id: 23,
    pregunta: "Anticuerpo monoclonal dirigido a HER2:",
    opciones: ["Trastuzumab", "Bevacizumab", "Infliximab"],
    respuestaCorrecta: 0,
    explicacion:
      "Bevacizumab es anti-VEGF (angiogénesis).",
  },
  // 24
  {
    id: 24,
    pregunta: "Inhibidor de la aromatasa usado en cáncer de mama:",
    opciones: ["Anastrozol", "Finasterida", "Flutamida"],
    respuestaCorrecta: 0,
    explicacion:
      "Finasterida (5α-reductasa) y flutamida (antiandrógeno) no son inhibidores de aromatasa.",
  },
  // 25
  {
    id: 25,
    pregunta:
      "Grupo que suprime la producción gonadal de hormonas por down-regulation tras estimulación continua:",
    opciones: ["Agonistas de GnRH", "IECA", "Antagonistas GABA"],
    respuestaCorrecta: 0,
    explicacion:
      "Buserelina/Leuprorelina: agonismo crónico → desensibilización del eje.",
  },
  // 26
  {
    id: 26,
    pregunta: "Ejemplo de fármaco NO específico de fase:",
    opciones: ["Antimetabolitos", "Agentes alquilantes", "Taxanos"],
    respuestaCorrecta: 1,
    explicacion:
      "Alquilantes actúan a lo largo de todo el ciclo; antimetabolitos (fase S), taxanos (fase M).",
  },
  // 27
  {
    id: 27,
    pregunta:
      "Medida correcta dentro del protocolo frente a derrames de citostáticos:",
    opciones: [
      "Usar kit para derrames",
      "Soplar el área para evaporar el líquido",
      "Cubrir con talco y barrer en seco",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Se evita aerosol; se usa kit y paños humedecidos y luego lavado del área.",
  },
  // 28
  {
    id: 28,
    pregunta:
      "Tipo de cáncer que se origina en la médula ósea y produce grandes cantidades de células sanguíneas anormales:",
    opciones: ["Carcinoma", "Leucemia", "Sarcoma"],
    respuestaCorrecta: 1,
    explicacion:
      "Carcinoma: epitelios; sarcoma: tejidos de sostén; leucemia: médula ósea.",
  },
  // 29
  {
    id: 29,
    pregunta:
      "Característica típica de células cancerígenas:",
    opciones: [
      "Inhibición por contacto conservada",
      "Evasión de la apoptosis",
      "Dependencia estricta de factores de crecimiento",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Además presentan replicación ilimitada, angiogénesis y pérdida de diferenciación.",
  },
  // 30
  {
    id: 30,
    pregunta:
      "¿Qué estrategia de salud pública aumenta la efectividad global del tratamiento oncológico?",
    opciones: [
      "Evitar cirugía en todos los casos",
      "Aplicar siempre dosis bajas y muy espaciadas",
      "Programas de detección temprana (cribado)",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "El diagnóstico precoz mejora resecabilidad y respuesta a terapias adyuvantes.",
  },
];

export default function MedicamentosAntineoplasticos2024() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Antineoplásicos (Resumen 2024)"
      preguntas={preguntas}
    />
  );
}

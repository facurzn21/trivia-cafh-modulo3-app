import Cuestionario from "../../components/Cuestionario";

// Preguntas generadas a partir del resumen del Módulo 3 (125 págs)
// Mezcla de opción única y opción múltiple (usar array para múltiples correctas)
const preguntas = [
  // 1 — IECAs/ARAs: mecanismo
  {
    id: 1,
    pregunta: "¿Cuál es el principal efecto hemodinámico de los IECAs?",
    opciones: [
      "Aumentar la vasoconstricción periférica y la poscarga",
      "Disminuir resistencias periféricas por menor angiotensina II y más bradiquinina",
      "Aumentar la retención de sodio y agua por aldosterona",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Los IECAs reducen la síntesis de angiotensina II y aumentan bradiquinina → vasodilatación y menor poscarga; además disminuye aldosterona, con menor retención de Na+/agua.",
  },
  // 2 — IECAs RAMs
  {
    id: 2,
    pregunta: "Seleccione RAMs y precauciones típicas de IECAs (múltiple)",
    opciones: [
      "Tos seca por bradiquinina (más frecuente en mujeres)",
      "Angioedema",
      "Hiperpotasemia (riesgo ↑ con diuréticos ahorradores de K+)",
      "Teratogenicidad en 2º-3º trimestre",
      "Hiperglucemia intensa obligada",
    ],
    respuestaCorrecta: [0, 1, 2, 3],
    explicacion:
      "Tos y angioedema se relacionan con bradiquinina; pueden producir hiperK+ e insuficiencia renal en contextos de perfusión renal baja; están contraindicados en embarazo avanzado.",
  },
  // 3 — ARAs/IECA en diabetes/riñón
  {
    id: 3,
    pregunta:
      "Señale la opción correcta respecto de IECAs/ARAs en complicaciones de diabetes",
    opciones: [
      "No tienen rol en nefropatía diabética",
      "Atenúan la progresión de la nefropatía y retinopatía diabética",
      "Aumentan la presión intraglomerular y empeoran la nefropatía",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Bloquear el SRAA protege riñón y retina en diabetes; es indicación clásica en nefroprotección.",
  },
  // 4 — Diuréticos: CAI
  {
    id: 4,
    pregunta: "Sobre acetazolamida (inhibidor de anhidrasa carbónica), es correcto que:",
    opciones: [
      "Es un diurético muy potente de primera línea en HTA",
      "Aumenta la excreción de HCO3-, Na+ y agua; diurético débil; útil en glaucoma",
      "Produce hiperpotasemia marcada en todos los pacientes",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La acetazolamida es un diurético débil: alcaliniza orina y se usa sobre todo en glaucoma/altitud, no como antihipertensivo de base.",
  },
  // 5 — Diuréticos de asa
  {
    id: 5,
    pregunta: "¿Qué afirmación sobre furosemida (diurético de asa) es correcta?",
    opciones: [
      "Es lenta y poco potente; no sirve en edema pulmonar",
      "Es rápida, potente; útil en edemas periférico y pulmonar; puede usarse VO/IV",
      "Solo se emplea si la función renal es normal",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Los diuréticos de asa son de inicio rápido y gran potencia; son claves en edema agudo de pulmón y funcionan incluso con función renal disminuida.",
  },
  // 6 — Tiazidas
  {
    id: 6,
    pregunta: "Respecto a tiazidas (hidroclorotiazida/indapamida/clortalidona):",
    opciones: [
      "Son de elección en HTA crónica por vía oral",
      "No alteran ácido úrico, glucosa ni lípidos",
      "No causan hipopotasemia",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Se usan ampliamente en HTA; pueden producir hipopotasemia, hiperuricemia/gota, hiperglucemia y ↑colesterol.",
  },
  // 7 — Ahorradores de K
  {
    id: 7,
    pregunta: "Diuréticos ahorradores de K+ (opción correcta)",
    opciones: [
      "Amilorida/triamtereno bloquean canales de Na+; pueden causar hiperK+",
      "Espironolactona agoniza aldosterona y provoca hiperNa+",
      "Todos son neutros sobre K+",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Amilorida/triamtereno bloquean canales ENaC; espironolactona es ANTAGONISTA de aldosterona y reduce reabsorción de Na+; este grupo eleva riesgo de hiperpotasemia.",
  },
  // 8 — Espironolactona usos/RAMs
  {
    id: 8,
    pregunta: "Seleccione usos/RAMs de espironolactona (múltiple)",
    opciones: [
      "Ascitis e hiperaldosteronismo",
      "Insuficiencia cardíaca grave",
      "Ginecomastia e impotencia como RAMs",
      "Hiperglucemia severa obligada",
    ],
    respuestaCorrecta: [0, 1, 2],
    explicacion:
      "Espironolactona se usa en ascitis, hiperaldosteronismo e IC; efectos endocrinos incluyen ginecomastia e impotencia.",
  },
  // 9 — Antianginosos: nitratos mecanismo
  {
    id: 9,
    pregunta: "Los nitratos orgánicos alivian la angina principalmente porque:",
    opciones: [
      "Aumentan la poscarga por vasoconstricción arterial",
      "Vasodilatan preferentemente venas, ↓precarga y demanda miocárdica de O2",
      "Reducen la contractilidad al bloquear canales de Ca2+",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "El efecto predominante es venodilatador → menor retorno venoso y menor trabajo/consumo de O2 del miocardio.",
  },
  // 10 — Nitratos: seguridad
  {
    id: 10,
    pregunta: "Medida de seguridad clave en terapias con nitratos",
    opciones: [
      "Evitar intervalos libres porque generan rebote",
      "Intervalo libre de 8–10 h/día para evitar tolerancia; evitar asociación con inhibidores PDE5",
      "Asociar siempre con vasoconstrictores",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Los nitratos desarrollan tolerancia; se recomienda período libre diario y nunca combinarlos con inhibidores de PDE5 por riesgo de hipotensión severa.",
  },
  // 11 — Bloqueantes canales de Ca (BCC)
  {
    id: 11,
    pregunta: "Elija la correcta sobre BCC (antagonistas del calcio)",
    opciones: [
      "Amlodipina/verapamilo/diltiazem son ejemplo; DHP (amlodipina) predominan en vaso",
      "Solo sirven para arritmias",
      "Todos deprimen igual el nodo AV",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las DHP actúan más sobre vasos; verapamilo/diltiazem (no DHP) impactan más en conducción AV y contractilidad.",
  },
  // 12 — Betabloqueantes usos
  {
    id: 12,
    pregunta: "¿Cuál NO es un uso típico de betabloqueantes?",
    opciones: [
      "Hipertensión y angina",
      "Algunas arritmias",
      "Broncodilatación en EPOC",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Los β-bloqueantes pueden precipitar broncospasmo (no son broncodilatadores). Sí se usan en HTA, angina y arritmias.",
  },
  // 13 — IC fisiopatología
  {
    id: 13,
    pregunta: "En la insuficiencia cardíaca crónica ocurre (múltiple):",
    opciones: [
      "Activación simpática y del SRAA crónica",
      "Aumento de precarga y poscarga a largo plazo",
      "Remodelado cardíaco",
      "Incremento sostenido del gasto que revierte la IC",
    ],
    respuestaCorrecta: [0, 1, 2],
    explicacion:
      "Mecanismos compensadores (simpático/SRAA) empeoran con el tiempo: ↑precarga/poscarga y remodelado, reduciendo el volumen minuto.",
  },
  // 14 — Péptidos natriuréticos
  {
    id: 14,
    pregunta:
      "Acerca de los péptidos natriuréticos (ANP/BNP) en IC, señale la correcta",
    opciones: [
      "Favorecen retención de Na+ y agua",
      "Promueven natriuresis/diuresis y ↓precarga/poscarga",
      "No tienen rol diagnóstico ni terapéutico",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "ANP/BNP aumentan excreción de Na+/agua y ayudan a reducir cargas; además se miden en sangre como marcadores de IC.",
  },
  // 15 — Anticoagulantes: warfarina general
  {
    id: 15,
    pregunta: "Sobre warfarina, marque lo correcto",
    opciones: [
      "Se administra por vía oral y tiene margen terapéutico estrecho",
      "No requiere monitoreo",
      "Se puede cambiar libremente de marca sin control",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Warfarina es VO, rango estrecho; se ajusta con INR y se evita cambiar de marca por variabilidad.",
  },
  // 16 — Warfarina: reversión/INR
  {
    id: 16,
    pregunta: "Seleccione lo correcto sobre manejo de warfarina (múltiple)",
    opciones: [
      "Vitamina K i/v revierte (efecto tardío)",
      "Si INR > objetivo, se reduce dosis por riesgo de sangrado",
      "Si INR < objetivo, se aumenta dosis por riesgo trombótico",
      "No existen antídotos de ningún tipo",
    ],
    respuestaCorrecta: [0, 1, 2],
    explicacion:
      "El ajuste se guía por INR; la vitamina K revierte de forma no inmediata; también se usan PFC o complejos protrombínicos según gravedad.",
  },
  // 17 — Heparina/LMWH/protamina
  {
    id: 17,
    pregunta: "Con respecto a heparinas, es correcto que:",
    opciones: [
      "Se administran por vía oral",
      "LMWH suelen dosificarse 1 vez/día SC; sobredosis se antagoniza con protamina",
      "No producen trombocitopenia",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Heparinas son parenterales; LMWH tienen vida media más larga; la protamina antagoniza heparina (especialmente no fraccionada).",
  },
  // 18 — DOACs
  {
    id: 18,
    pregunta: "¿Cuál de estos es un anticoagulante oral directo?",
    opciones: [
      "Dabigatrán (directo trombina)",
      "Rivaroxabán (factor Xa)",
      "Ambos",
    ],
    respuestaCorrecta: 2,
    explicacion:
      "DOACs incluyen dabigatrán (IIa) y rivaroxabán/apixabán (Xa).",
  },
  // 19 — Antiagregantes: mecanismos
  {
    id: 19,
    pregunta: "Relacione fármaco–mecanismo (múltiple)",
    opciones: [
      "AAS: inhibe síntesis de TXA2 en plaquetas",
      "Clopidogrel: bloquea receptores P2Y12 (ADP) en plaquetas",
      "Dipiridamol: se usa con warfarina en válvulas protésicas",
      "Abciximab/Tirofiban: actúan sobre GP IIb/IIIa",
    ],
    respuestaCorrecta: [0, 1, 2, 3],
    explicacion:
      "Todos los enunciados son correctos según su diana y uso clínico.",
  },
  // 20 — Fibrinolíticos
  {
    id: 20,
    pregunta: "Los fibrinolíticos (estreptoquinasa/alteplasa/tenecteplasa):",
    opciones: [
      "Activan plasminógeno → plasmina que degrada fibrina",
      "Son contraindicados en IAM",
      "Se administran solo por vía oral",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Son trombolíticos IV que activan plasminógeno; se usan en IAM seleccionados y ACV isquémico (según ventana).",
  },
  // 21 — Anemia B12/hierro
  {
    id: 21,
    pregunta: "Tratamiento de anemias (opción correcta)",
    opciones: [
      "Todas las anemias se tratan con hierro",
      "Hierro VO suele dar molestias GI; B12 puede requerir vía parenteral si hay malabsorción",
      "La B12 nunca se usa por vía parenteral",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "No todas las anemias son ferropénicas; el hierro oral puede ser irritante; en malabsorción, B12 parenteral es necesaria.",
  },
  // 22 — Antibióticos: sensibilidad
  {
    id: 22,
    pregunta:
      "Definición clínica de sensibilidad de una cepa a un antibiótico (correcta):",
    opciones: [
      "Eficaz solo in vitro",
      "Existe una dosis/concentración alcanzable que logra tratamiento eficaz en el paciente",
      "Independiente del sitio de infección",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La sensibilidad se define por alcanzar concentraciones terapéuticas eficaces in vivo a dosis seguras.",
  },
  // 23 — Antibióticos: bactericida vs bacteriostático
  {
    id: 23,
    pregunta: "Marque lo correcto sobre antibióticos",
    opciones: [
      "Bactericidas destruyen microorganismos",
      "Bacteriostáticos destruyen bacterias",
      "No hay diferencias clínicas entre ambos",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Bactericidas matan; bacteriostáticos inhiben crecimiento y dependen del sistema inmune para aclaramiento.",
  },
  // 24 — Resistencia bacteriana
  {
    id: 24,
    pregunta: "Factores que promueven resistencia bacteriana (múltiple)",
    opciones: [
      "Uso inadecuado (dosis/tiempo) y abandono",
      "Uso innecesario (p. ej., virales)",
      "Higiene deficiente (p. ej., manos) en hospital",
      "Estricta adherencia a guías",
    ],
    respuestaCorrecta: [0, 1, 2],
    explicacion:
      "La selección de cepas resistentes se acelera por exposición inapropiada y medidas de control insuficientes.",
  },
  // 25 — Gram +/- y sensibilidad
  {
    id: 25,
    pregunta: "¿Por qué Gram+ y Gram− difieren en sensibilidad a antibióticos?",
    opciones: [
      "Composición de pared/membrana externa distinta condiciona permeabilidad y dianas",
      "Porque las Gram− no tienen peptidoglicano",
      "No existe tal diferencia",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La membrana externa con porinas en Gram− vs gruesa pared de peptidoglicano en Gram+ altera acceso a dianas.",
  },
  // 26 — Carbapenems/vancomicina
  {
    id: 26,
    pregunta: "Señale la correcta",
    opciones: [
      "Carbapenems son VO y ambulatorios",
      "Vancomicina requiere monitoreo (margen estrecho)",
      "Combinar bactericida+bacteriostático siempre es deseable",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Carbapenems son parenterales; vancomicina exige control de niveles; no toda combinación cida+stático es beneficiosa.",
  },
  // 27 — Antivirales: límites
  {
    id: 27,
    pregunta: "Tratamiento farmacológico de infecciones virales:",
    opciones: [
      "Es limitado por selectividad y resistencia viral",
      "Siempre erradica virus en latencia",
      "No existen fármacos que inhiban replicación",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La escasez de dianas selectivas y la alta tasa de mutación limitan eficacia y favorecen resistencia.",
  },
  // 28 — VIH TAR seguimiento
  {
    id: 28,
    pregunta: "En TAR (VIH), el seguimiento incluye:",
    opciones: [
      "Carga viral y linfocitos CD4",
      "Solo hemograma",
      "Solo función hepática",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Carga viral y CD4 son pilares del monitoreo de respuesta al tratamiento.",
  },
  // 29 — VIH: profilaxis/combos
  {
    id: 29,
    pregunta: "Sobre TAR en VIH (múltiple)",
    opciones: [
      "Puede indicarse con fines profilácticos en exposiciones (p. ej., PEP/PrEP)",
      "Usa combinaciones que atacan enzimas clave del ciclo viral",
      "Siempre monoterapia para evitar interacciones",
    ],
    respuestaCorrecta: [0, 1],
    explicacion:
      "TAR emplea combinaciones; existen estrategias profilácticas (PrEP/PEP). La monoterapia se evita por resistencia.",
  },
  // 30 — Higiene/antisépticos
  {
    id: 30,
    pregunta: "Sobre control de infecciones (seleccione la correcta)",
    opciones: [
      "Lavado de manos es de las medidas más efectivas en hospital",
      "Oxido de etileno no sirve como esterilizante",
      "Alcohol 90% es superior a 70% como antiséptico",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Higiene de manos es clave; el óxido de etileno sí es esterilizante para material termosensible; el alcohol ~70% es más efectivo que 90%.",
  },
];

export default function CuestionarioTeoricoResumenVersion2() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Teórico (Resumen v2)"
      preguntas={preguntas}
    />
  );
}

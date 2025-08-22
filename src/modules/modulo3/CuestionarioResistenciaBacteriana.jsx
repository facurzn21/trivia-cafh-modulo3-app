import Cuestionario from "../../components/Cuestionario";

const preguntas = [
  // ===================== 15 VERDADERO / FALSO =====================
  { // 1
    id: 1,
    pregunta:
      "La resistencia bacteriana implica que la bacteria persiste a pesar de concentraciones adecuadas del antimicrobiano.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Por definición, las cepas resistentes permanecen refractarias aun con condiciones y concentraciones adecuadas del antimicrobiano."
  },
  { // 2
    id: 2,
    pregunta:
      "La resistencia bacteriana solo puede explicarse por la producción de betalactamasas.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Existen múltiples mecanismos: disminución de porinas, bombas de eflujo, modificaciones del blanco, blancos alternativos e inactivación enzimática (p. ej., betalactamasas)."
  },
  { // 3
    id: 3,
    pregunta:
      "Puede haber resistencia natural (intrínseca) y también resistencia adquirida.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Natural: el ATB no llega o no hay blanco; adquirida: aparece con la adaptación/selección en el tiempo."
  },
  { // 4
    id: 4,
    pregunta:
      "Los antibióticos generan mutaciones en la bacteria; sin antibiótico no existirían mutantes.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Las mutaciones surgen de forma natural (errores de polimerasas, UV, etc.). El antibiótico actúa como presión selectiva que favorece a los mutantes resistentes."
  },
  { // 5
    id: 5,
    pregunta:
      "Transformación, transducción y conjugación son formas de transferencia horizontal de genes de resistencia.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Además de la transmisión vertical, estas tres vías diseminan genes de resistencia entre bacterias."
  },
  { // 6
    id: 6,
    pregunta:
      "La disminución de porinas en Gram negativas reduce la entrada de antibióticos hidrofílicos.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Es un mecanismo de ‘impedir la llegada del fármaco al blanco’."
  },
  { // 7
    id: 7,
    pregunta:
      "Las bombas de eflujo incrementan la concentración intracelular del antibiótico.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Hacen lo contrario: expulsan el ATB, disminuyendo su concentración intracelular."
  },
  { // 8
    id: 8,
    pregunta:
      "Combinar siempre un bactericida con un bacteriostático es sinérgico.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Puede haber antagonismo entre fármacos que actúan en fases distintas (ej., β-lactámicos con algunos bacteriostáticos)."
  },
  { // 9
    id: 9,
    pregunta:
      "La profilaxis quirúrgica debe ser de períodos cortos y evitar antibióticos de amplio espectro.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Se reserva a casos específicos, con duración corta y sin emplear amplio espectro de rutina."
  },
  { // 10
    id: 10,
    pregunta:
      "Tratar infecciones virales banales con antibióticos contribuye al aumento de la resistencia.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Es un ejemplo típico de uso inadecuado de antibióticos que selecciona resistencia."
  },
  { // 11
    id: 11,
    pregunta:
      "La higiene de manos es una de las medidas más eficaces para el control de infecciones.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "La prevención y el control adecuados de infecciones son pilares para frenar la RAM."
  },
  { // 12
    id: 12,
    pregunta:
      "En Uruguay está permitido usar antibióticos como promotores de crecimiento en bovinos y ovinos.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "En Uruguay está prohibido su uso como promotores de crecimiento (Decreto Nº 098/2011)."
  },
  { // 13
    id: 13,
    pregunta:
      "Al elegir un antibiótico no es necesario considerar la función renal o hepática del paciente.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Los factores del paciente (edad, función renal/hepática, embarazo, alergias, etc.) son clave en la elección."
  },
  { // 14
    id: 14,
    pregunta:
      "Las infecciones por Staphylococcus aureus resistente a meticilina (MRSA) se asocian con mayor mortalidad que las cepas sensibles.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 0,
    explicacion:
      "Se ha estimado una probabilidad de muerte significativamente mayor en infecciones por MRSA."
  },
  { // 15
    id: 15,
    pregunta:
      "La resistencia que aparece en animales de producción no tiene impacto en la salud humana.",
    opciones: ["Verdadero", "Falso"],
    respuestaCorrecta: 1,
    explicacion:
      "Los animales pueden ser reservorio de bacterias resistentes que se transmiten por alimentos, contacto o ambiente."
  },

  // ================= 15 MÚLTIPLE OPCIÓN (3 opciones, 1 correcta) =================
  { // 16
    id: 16,
    pregunta: "¿Qué describe mejor ‘resistencia bacteriana’?",
    opciones: [
      "Capacidad de producir toxinas más potentes",
      "Capacidad de persistir pese a concentraciones adecuadas de antimicrobiano",
      "Capacidad de crecer solo en medios de cultivo enriquecidos"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La resistencia es refractariedad a la acción del antimicrobiano aun en condiciones y concentraciones adecuadas."
  },
  { // 17
    id: 17,
    pregunta: "¿Qué mecanismo de transferencia horizontal requiere un ‘pili’ o puente sexual?",
    opciones: ["Transducción", "Conjugación", "Transformación"],
    respuestaCorrecta: 1,
    explicacion:
      "La conjugación transfiere material genético por contacto directo entre bacterias."
  },
  { // 18
    id: 18,
    pregunta: "¿Cuál es un ejemplo de ‘blanco alterado’ como mecanismo de resistencia?",
    opciones: [
      "Mutación que modifica el sitio de unión del antibiótico",
      "Disminución de porinas",
      "Bomba de eflujo"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "La modificación del sitio de acción impide que el ATB se una eficazmente a su diana."
  },
  { // 19
    id: 19,
    pregunta: "¿Cuándo está justificada la combinación de antibióticos?",
    opciones: [
      "Siempre, para reducir costos",
      "En infecciones mixtas o para impedir resistencia en escenarios seleccionados",
      "Para sustituir las medidas de control de infecciones"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "También puede justificarse como terapéutica inicial, para reducir toxicidad o por sinergia; no es ‘siempre’."
  },
  { // 20
    id: 20,
    pregunta: "Elija un factor dependiente del microorganismo al seleccionar un antibiótico:",
    opciones: [
      "Alergias del paciente",
      "Gram (+/−) y aerobiosis/anaerobiosis",
      "Función renal del paciente"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La clasificación Gram y la aerobiosis/anaerobiosis orientan el espectro requerido."
  },
  { // 21
    id: 21,
    pregunta: "¿Cuál es un ejemplo de uso inadecuado de antibióticos?",
    opciones: [
      "Tratar resfriado común con antibióticos",
      "Profilaxis quirúrgica dirigida y de corta duración",
      "Tratamiento guiado por cultivo y sensibilidad"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las infecciones virales banales no requieren antibióticos y su uso favorece la RAM."
  },
  { // 22
    id: 22,
    pregunta: "El papel del antibiótico en la emergencia de resistencia es principalmente:",
    opciones: [
      "Corregir los errores de las polimerasas",
      "Seleccionar mutantes resistentes actuando como presión selectiva",
      "Inducir transferencia horizontal por sí mismo"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Las mutaciones surgen espontáneamente; el antibiótico selecciona a los mutantes resistentes."
  },
  { // 23
    id: 23,
    pregunta: "¿Qué ejemplo corresponde a ‘impedir la llegada del fármaco al blanco’?",
    opciones: [
      "Disminución de porinas",
      "Hidrolizar el anillo betalactámico",
      "Mutación del ribosoma"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Reducir porinas limita la entrada del ATB a la bacteria."
  },
  { // 24
    id: 24,
    pregunta: "¿Cuál es un ejemplo de ‘inactivación del fármaco’?",
    opciones: [
      "Betalactamasa que hidroliza el anillo betalactámico",
      "Expresión de bombas de eflujo",
      "Formación de biopelícula"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las betalactamasas inactivan a muchos β-lactámicos mediante hidrólisis."
  },
  { // 25
    id: 25,
    pregunta: "Las bombas de eflujo se caracterizan por:",
    opciones: [
      "Aumentar la entrada del antibiótico",
      "Expulsar el antibiótico y reducir su concentración intracelular",
      "Unirse irreversiblemente al blanco del antibiótico"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Expulsan activamente diversas moléculas, incluidos antibióticos."
  },
  { // 26
    id: 26,
    pregunta: "En profilaxis antibiótica se busca principalmente:",
    opciones: [
      "Sustituir la asepsia y antisepsia",
      "Prevenir infección por un germen conocido en pacientes/procedimientos de riesgo",
      "Administración prolongada de antibióticos de amplio espectro"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Debe ser dirigida, breve y restringida a situaciones específicas."
  },
  { // 27
    id: 27,
    pregunta: "Un riesgo de combinar antibióticos de forma inadecuada es:",
    opciones: [
      "Antagonismo entre β-lactámicos y algunos bacteriostáticos",
      "Disminución garantizada de la resistencia",
      "Eliminación de toda toxicidad"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Algunas combinaciones pueden ser antagónicas y no aportan beneficios."
  },
  { // 28
    id: 28,
    pregunta: "En el sector agropecuario, una medida para frenar RAM es:",
    opciones: [
      "Usar antibióticos como promotores del crecimiento",
      "Administrarlos solo con supervisión veterinaria y evitar su uso para crecimiento",
      "Evitar las vacunas para reducir costos"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Se recomienda supervisión veterinaria, vacunación y evitar promotores de crecimiento."
  },
  { // 29
    id: 29,
    pregunta: "Según estimaciones de 2019, las muertes directas por infecciones resistentes fueron:",
    opciones: [
      "≈1,2 millones a nivel mundial",
      "≈120 mil a nivel mundial",
      "≈12 millones a nivel mundial"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "El informe citado estima más de 1,2 millones de muertes directas por bacterias resistentes."
  },
  { // 30
    id: 30,
    pregunta: "Un dato de vigilancia internacional informado fue:",
    opciones: [
      "Fracaso terapéutico de gonorrea con cefalosporinas de 3ª generación en varios países",
      "Ausencia total de resistencia a fluoroquinolonas en E. coli urinarias",
      "Klebsiella pneumoniae solo resistente a penicilina G, sin otros problemas"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Se notificó fracaso de cefalosporinas de 3ª en gonorrea y aumento de resistencia a carbapenémicos y fluoroquinolonas en otros patógenos."
  }
];

export default function CuestionarioResistenciaBacteriana() {
  return (
    <Cuestionario
      titulo="Resistencia bacteriana — V/F + Múltiple (3 opciones)"
      preguntas={preguntas}
    />
  );
}

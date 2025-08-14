import Cuestionario from "../../components/Cuestionario";

const preguntas = [
  // 1
  {
    id: 1,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La naturaleza heterogénea de los tumores es una dificultad para el tratamiento farmacológico debido a la distinta sensibilidad que presentarán las células neoplásicas.",
      "Los fármacos antineoplásicos se utilizan a nivel sistémico presentando buena tolerancia.",
      "La quimioterapia antineoplásica se caracteriza por la utilización de fármacos de acción local."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los tumores son poblaciones celulares diversas; esa heterogeneidad genera distinta sensibilidad a los quimioterápicos y dificulta el tratamiento."
  },
  // 2
  {
    id: 2,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los fármacos antineoplásicos tienen pocos efectos sobre las células no cancerosas.",
      "Los fármacos antineoplásicos afectan además a las células normales, en particular aquellas con mayor tasa de replicación.",
      "Los fármacos antineoplásicos tienen pocos efectos secundarios."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Los citotóxicos también dañan tejidos sanos de alta replicación (médula ósea, mucosa GI, folículo piloso), por eso sus efectos adversos."
  },
  // 3
  {
    id: 3,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La adherencia del paciente VIH(+) al tratamiento antirretroviral no es un factor clave para evitar el desarrollo de resistencia farmacológica y prolongar su sobrevida.",
      "El tratamiento de pacientes VIH(+) se realiza principalmente con una única combinación de fármacos.",
      "La transmisión vertical del VIH puede evitarse con fármacos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La TAR durante embarazo/parto y la profilaxis neonatal reducen drásticamente la transmisión vertical."
  },
  // 4
  {
    id: 4,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Las Heparinas de Bajo Peso Molecular tienen mayor incidencia de hemorragias que las de Alto Peso Molecular.",
      "Las Heparinas pueden administrarse por vía oral.",
      "La hemorragia es la principal reacción adversa de las heparinas."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Tanto heparina no fraccionada como HBPM aumentan el riesgo de sangrado; por vía oral no se absorben."
  },
  // 5 (PDF: 6)
  {
    id: 5,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La Anfotericina B se utiliza para combatir infecciones profundas causadas por hongos.",
      "Los azoles (antimicóticos) como el fluconazol tienen pocas interacciones con otros fármacos.",
      "La Anfotericina B se administra por vía oral."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Anfotericina B se reserva para micosis sistémicas/graves; es IV (no oral). Los azoles sí tienen múltiples interacciones."
  },
  // 6 (PDF: 7)
  {
    id: 6,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La elección del antibiótico adecuado para la terapia sólo depende del sitio de infección y de la bacteria infectante.",
      "No existen diferencias relevantes entre la célula eucariota y la célula procariota.",
      "Una cepa bacteriana es sensible a un antibiótico cuando existe una dosis de dicho antibiótico con la cual se consigue un tratamiento eficaz."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Definición de sensibilidad clínica: con concentraciones alcanzables en el paciente se logra efecto antimicrobiano eficaz."
  },
  // 7 (PDF: 8)
  {
    id: 7,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los Carbapenems son antibióticos que se administran por vía oral y se utilizan en pacientes ambulatorios.",
      "La Vancomicina es un fármaco de estrecho margen terapéutico que requiere monitoreo.",
      "Se recomienda la asociación de un antibiótico bactericida con uno bacteriostático para el tratamiento de una infección bacteriana."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Vancomicina tiene margen terapéutico estrecho (riesgo nefro/ototoxicidad); se monitoriza (niveles valle)."
  },
  // 8 (PDF: 10)
  {
    id: 8,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los péptidos natriuréticos promueven la retención de sodio (Na+) y agua en la nefrona aumentando la cantidad de orina (diuresis) y disminuyendo la presión arterial.",
      "Los péptidos natriuréticos son “hormonas” cardíacas que actúan sobre el riñón durante el proceso de formación de la orina.",
      "En la Insuficiencia Cardíaca se recomienda estimular el aumento del tamaño del corazón (hipertrofia e hiperplasia cardíaca)."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "ANP/BNP son hormonas cardiacas que modulan la natriuresis y diuresis vía riñón; a) invierte el efecto sobre Na+."
  },
  // 9 (PDF: 11)
  {
    id: 9,
    pregunta: "Para el tratamiento de la hipertensión arterial:",
    opciones: [
      "Se pueden utilizar bloqueantes de los canales de calcio.",
      "Frecuentemente se usan vasoconstrictores.",
      "Se pueden usar beta-andrenérgicos."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Antagonistas del calcio (amlodipina, etc.) son fármacos antihipertensivos de uso habitual; vasoconstrictores o agonistas beta elevan PA."
  },
  // 10 (PDF: 12)
  {
    id: 10,
    pregunta: "El tratamiento antirretroviral:",
    opciones: [
      "Puede instaurarse con fines profilácticos.",
      "Ataca en general a enzimas del VIH esenciales para cumplir el ciclo viral.",
      "Se evalúa periódicamente monitoreando la carga viral y los linfocitos CD4 en sangre."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "El seguimiento clínico se basa en carga viral y CD4. (La a) alude a profilaxis pero no es ‘tratamiento’ del paciente infectado)."
  },
  // 11 (PDF: 13)
  {
    id: 11,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La resistencia bacteriana sólo se presenta en pacientes hospitalizados.",
      "El uso inadecuado de antibióticos promueve la resistencia bacteriana.",
      "La resistencia bacteriana es un problema menor en el tratamiento con antibióticos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Uso innecesario, dosis/tiempo inadecuados y abandono favorecen la selección de cepas resistentes."
  },
  // 12 (PDF: 14)
  {
    id: 12,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Las tetraciclinas se pueden usar con seguridad en pacientes embarazadas.",
      "Las cefalosporinas no producen reacciones de hipersensibilidad.",
      "Las cefalosporinas son antibióticos betalactámicos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Las cefalosporinas comparten el anillo betalactámico; tetraciclinas se evitan en embarazo; las cefalosporinas sí pueden dar hipersensibilidad."
  },
  // 13 (PDF: 15)
  {
    id: 13,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los inhibidores de las betalactamasas se asocian frecuentemente a las sulfas para sinergizar su acción.",
      "Los bactericidas inhiben el crecimiento bacteriano, pero para eliminar la bacteria se necesita la participación del sistema inmune del paciente.",
      "Los antibióticos bactericidas destruyen a los microorganismos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Por definición, los bactericidas eliminan bacterias; los bacteriostáticos detienen el crecimiento."
  },
  // 14 (PDF: 16)
  {
    id: 14,
    pregunta: "Con respecto a las hiperlipemias",
    opciones: [
      "Las estatinas son la primera línea de tratamiento de la hipercolesterolemia.",
      "Cursan con niveles de colesterol y triglicéridos bajos.",
      "No se ven afectadas por la dieta del paciente."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las estatinas reducen LDL y son el tratamiento de primera línea junto a cambios en el estilo de vida."
  },
  // 15 (PDF: 17)
  {
    id: 15,
    pregunta: "Señale la opción correcta",
    opciones: [
      "El hipoclorito de sodio se utiliza para purificar el agua de consumo diario.",
      "El óxido de etileno se utiliza como agente esterilizante, por ejemplo, como alternativa a la esterilización por calor.",
      "La concentración óptima del alcohol para ser utilizado como antiséptico o desinfectante es del 90%."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "El óxido de etileno esteriliza material termosensible. El alcohol es más efectivo ~70%; 90% no es óptimo."
  },
  // 16 (bloque sin numerar)
  {
    id: 16,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Cualquier antibiótico puede ser usado para combatir una infección bacteriana independientemente de la localización de la infección en el organismo.",
      "Los antibióticos bactericidas inhiben el crecimiento bacteriano e inviabilizan a la bacteria.",
      "Las bacterias Gram positivas y Gram negativas presentan diferente sensibilidad a los antibióticos por la composición de sus paredes celulares."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Las diferencias de pared (peptidoglicano vs membrana externa con LPS) condicionan la permeabilidad y dianas, cambiando la sensibilidad."
  },
  // 17 (bloque sin numerar)
  {
    id: 17,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La Rifampicina es un fármaco de estrecho margen terapéutico que requiere monitoreo.",
      "La Rifampicina es un fármaco que siempre se usa en monoterapia.",
      "Los Carbapenems son antibióticos de amplio espectro con actividad bactericida."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Carbapenems (imipenem/meropenem) son betalactámicos de amplio espectro y acción bactericida."
  },
  // 18 (PDF: 18) — Diuréticos
  {
    id: 18,
    pregunta: "Con respecto a los diuréticos:",
    opciones: [
      "Los diuréticos del tipo tiazida como la hidroclorotiazida suelen utilizarse en el tratamiento crónico de la hipertensión arterial.",
      "Intercambiar diuréticos con distintos mecanismos de acción es una práctica segura.",
      "Una reacción adversa frecuente del furosemida es la hipernatremia."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Las tiazidas son de elección en HTA crónica. Furosemida suele causar hiponatremia/hipopotasemia, no hipernatremia."
  },
  // 19 (bloque sin numerar)
  {
    id: 19,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La disminución de la expresión de porinas es un mecanismo de defensa de las bacterias.",
      "La producción de betalactamasas es un mecanismo de defensa de las bacterias ante cualquier antibiótico.",
      "Se recomienda la asociación de un antibiótico bactericida con uno bacteriostático para el tratamiento de una infección bacteriana."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Al reducir porinas en Gram negativas disminuye la entrada de antibióticos hidrofílicos, aumentando la resistencia."
  },
  // 20 (bloque sin numerar)
  {
    id: 20,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los virus son parásitos intracelulares con capacidad de proliferar de manera independiente.",
      "El tratamiento farmacológico de infecciones virales es limitado debido a que no existen principios activos que detengan la replicación viral.",
      "El tratamiento farmacológico de infecciones virales es limitado debido a múltiples razones como la generación de resistencia y la poca selectividad."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Pocas dianas selectivas y alta tasa de mutación → resistencia y menor selectividad terapéutica."
  },
  // 21 (bloque sin numerar)
  {
    id: 21,
    pregunta: "Señale la opción correcta",
    opciones: [
      "La cirugía es la primera opción para el tratamiento antineoplásico, siempre que sea posible.",
      "Es poco frecuente el agregado de otros fármacos para aliviar ciertos efectos adversos de la quimioterapia.",
      "La combinación de fármacos antineoplásicos busca reducir los efectos citotóxicos del tratamiento."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Cuando el tumor es resecable, la cirugía es el tratamiento de elección; luego pueden usarse terapias adyuvantes."
  },
  // 22 (bloque sin numerar)
  {
    id: 22,
    pregunta: "Señale la opción correcta",
    opciones: [
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para sinergizar su acción.",
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para inhibir la acción de las enzimas betalactamasas.",
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para reducir su toxicidad."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "La idea es cubrir microorganismos productores de betalactamasas usando compuestos resistentes a estas enzimas (p. ej., algunos monobactams), evitando su inactivación del betalactámico."
  }
];

export default function CuestionarioPreParcial1() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Pre Parcial 1"
      preguntas={preguntas}
    />
  );
}

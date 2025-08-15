import Cuestionario from "../../components/Cuestionario";

const preguntas = [
  // Tema 1A - Formación de la orina y Diuréticos
  {
    id: 1,
    pregunta: "¿Cuál es el mecanismo de acción de los péptidos natriuréticos?",
    opciones: [
      "Aumentan la reabsorción de sodio y agua en los túbulos renales, disminuyendo la diuresis",
      "Ejercen una potente acción vasodilatadora e inhiben la reabsorción de sodio y agua, aumentando la natriuresis",
      "Promueven la secreción de aldosterona, aumentando la retención de sodio"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los péptidos natriuréticos ejercen una potente acción vasodilatadora que inhibe la reabsorción de sodio y agua en el túbulo contorneado proximal y en el túbulo colector, aumentan la secreción de sodio en la orina, disminuyen la volemia y en consecuencia reducen la presión arterial."
  },
  {
    id: 2,
    pregunta: "Con respecto a los diuréticos de asa (como la furosemida):",
    opciones: [
      "Son diuréticos de acción débil, con efectos leves sobre el equilibrio hidroelectrolítico",
      "Su acción es rápida, corta y muy potente, pudiendo producir desequilibrios hidroelectrolíticos significativos",
      "Se utilizan principalmente para el tratamiento crónico de la hipertensión arterial por su larga duración de acción"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los diuréticos de asa, como la furosemida, tienen una acción rápida, corta y muy potente. Pueden producir importantes desequilibrios hidroelectrolíticos, especialmente hipopotasemia. Se emplean principalmente para disminuir edemas periféricos y pulmonares."
  },
  {
    id: 3,
    pregunta: "¿Cuál de los siguientes diuréticos es considerado ahorrador de potasio?",
    opciones: [
      "Furosemida",
      "Hidroclorotiazida",
      "Espironolactona"
    ],
    respuestaCorrecta: 2,
    explicacion: "La espironolactona es un diurético ahorrador de potasio que actúa como antagonista competitivo de la aldosterona e inhibe su síntesis. A diferencia de los diuréticos de asa y tiazidas, que aumentan la excreción de potasio, la espironolactona disminuye la excreción de potasio."
  },
  
  // Tema 1B - Presión arterial
  {
    id: 4,
    pregunta: "¿Cuál de las siguientes afirmaciones sobre los mecanismos de regulación de la presión arterial es correcta?",
    opciones: [
      "La presión arterial solo está determinada por el volumen de sangre bombeado",
      "El Sistema Renina-Angiotensina-Aldosterona no tiene efecto sobre la presión arterial",
      "La presión arterial está determinada por el gasto cardíaco y las resistencias periféricas"
    ],
    respuestaCorrecta: 2,
    explicacion: "La presión arterial (PA) se calcula como el producto del gasto cardíaco (GC) por las resistencias periféricas (RP). PA = GC x RP. El gasto cardíaco depende de la frecuencia cardíaca, contractilidad y volemia, mientras que las resistencias periféricas dependen de la viscosidad sanguínea, elasticidad arterial y vasodilatación/vasoconstricción."
  },
  {
    id: 5,
    pregunta: "En el tratamiento de la hipertensión arterial (HTA), ¿qué fármaco NO se recomienda usar en pacientes con asma?",
    opciones: [
      "Bloqueantes de los canales de calcio",
      "Betabloqueantes",
      "Inhibidores de la enzima convertidora de angiotensina (IECAs)"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los betabloqueantes están contraindicados en pacientes con asma porque pueden producir broncoespasmo al bloquear los receptores beta-2 a nivel bronquial, empeorando la enfermedad respiratoria. Los diuréticos, IECAs o bloqueantes de los canales de calcio son opciones más seguras en estos pacientes."
  },
  
  // Tema 1C - IECAs y ARAs
  {
    id: 6,
    pregunta: "¿Cuál es la principal diferencia entre los IECAs y los ARAs en cuanto a su mecanismo de acción?",
    opciones: [
      "Los IECAs inhiben la conversión de angiotensina I a angiotensina II, mientras que los ARAs bloquean los receptores AT1 de la angiotensina II",
      "Los IECAs bloquean los receptores AT1, mientras que los ARAs inhiben la síntesis de renina",
      "Los IECAs aumentan la producción de aldosterona, mientras que los ARAs la disminuyen"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los IECAs (Inhibidores de la Enzima Convertidora de Angiotensina) inhiben la conversión de angiotensina I a angiotensina II, reduciendo los niveles de angiotensina II. Los ARAs (Antagonistas de los Receptores de Angiotensina) bloquean directamente los receptores AT1 de la angiotensina II, impidiendo su acción vasoconstrictora aunque haya angiotensina II presente."
  },
  {
    id: 7,
    pregunta: "¿Cuál es un efecto adverso característico de los IECAs que rara vez aparece con los ARAs?",
    opciones: [
      "Hiperpotasemia",
      "Tos seca persistente",
      "Hipotensión"
    ],
    respuestaCorrecta: 1,
    explicacion: "La tos seca persistente es un efecto adverso característico de los IECAs, causado por el aumento de los niveles de bradiquinina (que no es metabolizada por la ECA inhibida). Este efecto adverso es muy poco frecuente con los ARAs, por lo que estos suelen ser una alternativa cuando los pacientes no toleran los IECAs por tos."
  },
  
  // Tema 1D - Betabloqueantes
  {
    id: 8,
    pregunta: "¿Cuál de las siguientes NO es una acción de los betabloqueantes?",
    opciones: [
      "Reducción de la frecuencia cardíaca",
      "Aumento del gasto cardíaco",
      "Reducción de la contractilidad cardíaca"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los betabloqueantes REDUCEN el gasto cardíaco por varios mecanismos: reducción del volumen sistólico, reducción de la contractilidad cardíaca y reducción de la frecuencia cardíaca. No aumentan el gasto cardíaco, sino que lo disminuyen como parte de su mecanismo para reducir la presión arterial."
  },
  {
    id: 9,
    pregunta: "Con respecto al tratamiento con betabloqueantes:",
    opciones: [
      "Puede interrumpirse abruptamente sin riesgo para el paciente",
      "No debe interrumpirse abruptamente por riesgo de efecto rebote",
      "Solo puede administrarse por vía intravenosa"
    ],
    respuestaCorrecta: 1,
    explicacion: "El tratamiento con betabloqueantes NO debe interrumpirse abruptamente debido al riesgo de efecto rebote, que puede manifestarse como taquicardia, hipertensión, angina de pecho e incluso infarto. La suspensión debe ser gradual bajo supervisión médica."
  },
  
  // Tema 1E - Bloqueantes de los canales de calcio
  {
    id: 10,
    pregunta: "¿Cuál de las siguientes afirmaciones sobre los bloqueantes de los canales de calcio es CORRECTA?",
    opciones: [
      "Todos actúan únicamente a nivel del músculo liso vascular",
      "Los del grupo dihidropiridinas (como la amlodipina) tienen más efecto sobre la frecuencia cardíaca que sobre la vasodilatación",
      "Algunos actúan sobre el músculo liso vascular y otros además sobre el miocardio y el sistema de conducción cardíaco"
    ],
    respuestaCorrecta: 2,
    explicacion: "Los bloqueantes de los canales de calcio se diferencian en su selectividad: las dihidropiridinas (amlodipina) tienen más selectividad por el músculo liso vascular produciendo vasodilatación, mientras que los no-dihidropiridínicos (verapamilo, diltiazem) actúan también sobre el miocardio y el sistema de conducción, disminuyendo la frecuencia cardíaca y la contractilidad."
  },
  
  // Tema 1F - Angor
  {
    id: 11,
    pregunta: "¿Cuál es el mecanismo de acción de los nitratos en el tratamiento de la angina de pecho?",
    opciones: [
      "Aumentan la frecuencia cardíaca mejorando la perfusión coronaria",
      "Actúan como betabloqueantes disminuyendo la demanda de oxígeno",
      "Dilatan las venas sistémicas y arterias coronarias, reduciendo la precarga y aumentando el flujo coronario"
    ],
    respuestaCorrecta: 2,
    explicacion: "Los nitratos (como la nitroglicerina) son profármacos que se descomponen formando óxido nítrico (NO), que activa la guanilil ciclasa vascular y aumenta el GMPc en el músculo liso. Esto produce vasodilatación de venas sistémicas (reduciendo la precarga y el trabajo cardíaco) y de arterias coronarias (aumentando el flujo coronario)."
  },
  
  // Tema 1G - Insuficiencia Cardíaca
  {
    id: 12,
    pregunta: "¿Cuál de los siguientes fármacos se considera de estrecho margen terapéutico y requiere monitoreo de niveles sanguíneos en el tratamiento de la insuficiencia cardíaca?",
    opciones: [
      "Carvedilol",
      "Digoxina",
      "Enalapril"
    ],
    respuestaCorrecta: 1,
    explicacion: "La digoxina es un fármaco de origen vegetal con estrecho margen terapéutico que requiere monitorización de sus concentraciones en sangre (digoxinemia). La intoxicación digitálica es frecuente y puede ser un cuadro grave potencialmente fatal, especialmente en pacientes con insuficiencia renal."
  },
  {
    id: 13,
    pregunta: "Con respecto al nuevo fármaco para insuficiencia cardíaca ENTRESTO® (Sacubitrilo/Valsartán), ¿cuál es su mecanismo de acción?",
    opciones: [
      "Combina un inhibidor de la ECA con un diurético tiazídico",
      "Combina un inhibidor de la neprilisina (que degrada péptidos natriuréticos) con un ARA",
      "Combina un betabloqueante con un bloqueante de los canales de calcio"
    ],
    respuestaCorrecta: 1,
    explicacion: "ENTRESTO® combina sacubitrilo (inhibidor de la neprilisina) con valsartán (un ARA). La neprilisina degrada los péptidos natriuréticos, por lo que al inhibirla se prolongan sus acciones beneficiosas (natriuresis, vasodilatación, disminución del SRAA). El valsartán bloquea los receptores AT1 de angiotensina II, promoviendo vasodilatación."
  },
  
  // Tema 2A - Coagulación
  {
    id: 14,
    pregunta: "¿Cuál es la principal reacción adversa de los anticoagulantes como la warfarina y la heparina?",
    opciones: [
      "Hepatotoxicidad",
      "Hemorragia",
      "Reacciones alérgicas cutáneas"
    ],
    respuestaCorrecta: 1,
    explicacion: "La principal reacción adversa de los anticoagulantes (warfarina y heparinas) es la hemorragia. Existe un compromiso entre el riesgo de efecto anticoagulante insuficiente (que puede llevar a trombosis) y el riesgo de excesiva anticoagulación (que puede provocar sangrados)."
  },
  {
    id: 15,
    pregunta: "¿Cuál de las siguientes afirmaciones respecto a la warfarina es CORRECTA?",
    opciones: [
      "Se puede revertir su acción con vitamina K",
      "Tiene un efecto anticoagulante inmediato tras su administración",
      "Presenta pocas interacciones medicamentosas"
    ],
    respuestaCorrecta: 0,
    explicacion: "La acción de la warfarina puede revertirse con la administración de vitamina K (aunque su efecto es tardío), plasma fresco o concentrado de factores de coagulación. La warfarina bloquea la acción de la vitamina K en la síntesis hepática de factores de coagulación."
  },
  
  // Tema 2B - Anemia
  {
    id: 16,
    pregunta: "¿Cuál es la causa más frecuente de anemia por deficiencia de vitamina B12?",
    opciones: [
      "Dieta vegetariana estricta",
      "Ausencia del factor intrínseco gástrico necesario para su absorción",
      "Excesiva excreción renal de la vitamina"
    ],
    respuestaCorrecta: 1,
    explicacion: "Para la absorción de vitamina B12 en el intestino, esta necesita formar un complejo con el factor intrínseco, una glucoproteína endógena procedente del estómago. La ausencia de este factor (por gastritis atrófica u otras enfermedades) es una causa frecuente de deficiencia de vitamina B12."
  },
  
  // Tema 2C - Medicación para trastornos de los lípidos
  {
    id: 17,
    pregunta: "¿Cuál es el mecanismo de acción de las estatinas en el tratamiento de las hiperlipemias?",
    opciones: [
      "Inhiben la absorción intestinal del colesterol",
      "Inhiben la enzima HMG-CoA-reductasa, clave en la síntesis de colesterol",
      "Aumentan la excreción de colesterol por vía biliar"
    ],
    respuestaCorrecta: 1,
    explicacion: "Las estatinas (atorvastatina, rosuvastatina, simvastatina, etc.) inhiben la enzima HMG-CoA-reductasa, que es la enzima limitante en la vía de síntesis del colesterol. Esta inhibición reduce principalmente los niveles de colesterol LDL, que es el objetivo principal del tratamiento de las hiperlipemias."
  },
  
  // Tema 3 - Antibióticos
  {
    id: 18,
    pregunta: "Con respecto a la clasificación de los antibióticos según su actividad sobre los microorganismos:",
    opciones: [
      "Los antibióticos bacteriostáticos siempre matan a los microorganismos",
      "Los antibióticos bactericidas inhiben el crecimiento bacteriano, necesitando la participación del sistema inmune para eliminar la bacteria",
      "Los antibióticos bactericidas producen la muerte del microorganismo, mientras que los bacteriostáticos inhiben su crecimiento"
    ],
    respuestaCorrecta: 2,
    explicacion: "Los antibióticos bactericidas producen la muerte del microorganismo (como los betalactámicos, aminoglucósidos, quinolonas), mientras que los bacteriostáticos (como tetraciclinas, macrólidos, sulfamidas) inhiben el crecimiento bacteriano aunque el microorganismo permanece viable."
  },
  {
    id: 19,
    pregunta: "¿Cuál de los siguientes mecanismos de resistencia bacteriana a los antibióticos betalactámicos es el más frecuente?",
    opciones: [
      "Modificación de los sitios de acción (PBP)",
      "Producción de enzimas betalactamasas que hidrolizan el anillo betalactámico",
      "Bloqueo del transporte del antibiótico a través de la membrana bacteriana"
    ],
    respuestaCorrecta: 1,
    explicacion: "La producción de betalactamasas es el mecanismo de resistencia más frecuente contra los antibióticos betalactámicos. Estas enzimas hidrolizan el anillo betalactámico, convirtiendo a estos antibióticos en compuestos biológicamente inactivos."
  },
  {
    id: 20,
    pregunta: "¿Cuál de los siguientes grupos de antibióticos requiere monitoreo de niveles sanguíneos por su estrecho margen terapéutico?",
    opciones: [
      "Aminoglucósidos y Vancomicina",
      "Cefalosporinas",
      "Penicilinas naturales"
    ],
    respuestaCorrecta: 0,
    explicacion: "Los aminoglucósidos (como gentamicina) y la vancomicina tienen estrecho margen terapéutico y requieren monitoreo de niveles sanguíneos para ajustar la dosis. Esto se debe principalmente a su potencial nefrotoxicidad y ototoxicidad cuando se alcanzan niveles muy elevados."
  },
  {
    id: 21,
    pregunta: "¿Cuál de las siguientes afirmaciones respecto al uso de antibióticos es INCORRECTA?",
    opciones: [
      "La resistencia bacteriana puede desarrollarse por el uso inadecuado de antibióticos",
      "Los antibióticos bacteriostáticos y bactericidas pueden combinarse siempre para aumentar su eficacia",
      "La elección del antibiótico depende del sitio de infección, la bacteria infectante y las características del paciente"
    ],
    respuestaCorrecta: 1,
    explicacion: "NO es recomendable combinar antibióticos bacteriostáticos con bactericidas, ya que puede producirse antagonismo. Los bacteriostáticos inhiben el crecimiento bacteriano, lo que puede interferir con la acción de los bactericidas, que necesitan que las bacterias estén en fase de crecimiento activo para ejercer su efecto letal."
  },
  
  // Tema 4 - Antisépticos y desinfectantes
  {
    id: 22,
    pregunta: "¿Cuál es la diferencia principal entre antisépticos y desinfectantes?",
    opciones: [
      "Los antisépticos se utilizan en objetos inanimados y los desinfectantes en tejidos vivos",
      "Los antisépticos se aplican sobre tejidos vivos mientras que los desinfectantes se utilizan sobre objetos inanimados",
      "Los antisépticos tienen menor espectro de acción que los desinfectantes"
    ],
    respuestaCorrecta: 1,
    explicacion: "La principal diferencia es que los antisépticos se aplican sobre tejidos vivos (piel, mucosas, heridas) para reducir la carga microbiana, mientras que los desinfectantes se utilizan sobre objetos inanimados. Ambos tienen el mismo objetivo, pero diferentes condiciones de empleo y concentraciones."
  },
  {
    id: 23,
    pregunta: "¿Cuál es la concentración óptima del alcohol para ser utilizado como antiséptico o desinfectante?",
    opciones: [
      "30%",
      "70%",
      "99%"
    ],
    respuestaCorrecta: 1,
    explicacion: "El alcohol al 70% es la concentración óptima para uso como antiséptico o desinfectante. A esta concentración tiene mayor poder bactericida que a concentraciones más altas (90-99%), ya que necesita cierto contenido de agua para desnaturalizar las proteínas microbianas de manera más eficiente."
  },
  
  // Tema 5 - Farmacología de Infecciones Virales
  {
    id: 24,
    pregunta: "¿Cuál es la principal limitación del tratamiento farmacológico de las infecciones virales?",
    opciones: [
      "Los virus no tienen metabolismo propio, utilizan la maquinaria celular del hospedador",
      "Los virus solo afectan a un tipo específico de células",
      "Los virus no mutan, por lo que desarrollan poca resistencia"
    ],
    respuestaCorrecta: 0,
    explicacion: "Una limitación fundamental del tratamiento antiviral es que los virus utilizan la maquinaria celular del hospedador para replicarse, lo que dificulta encontrar dianas selectivas que afecten solo al virus sin dañar a las células del hospedador. Esto explica la toxicidad de muchos antivirales y el limitado arsenal terapéutico disponible."
  },
  {
    id: 25,
    pregunta: "¿Cuál es el mecanismo de acción del aciclovir en el tratamiento de infecciones por virus herpes?",
    opciones: [
      "Inhibe la entrada del virus a la célula",
      "Es un análogo de nucleósido que inhibe la ADN polimerasa viral tras ser fosforilado",
      "Bloquea la liberación de nuevos viriones"
    ],
    respuestaCorrecta: 1,
    explicacion: "El aciclovir es un análogo del nucleósido 2-desoxiguanosina que actúa como profármaco. Tras entrar en la célula, es fosforilado por la timidín-quinasa viral (más expresada en células infectadas, lo que le da selectividad) y luego inhibe la ADN polimerasa viral, impidiendo la replicación del ADN viral."
  },
  
  // Tema 6 - Infecciones por VIH
  {
    id: 26,
    pregunta: "¿Cuál de las siguientes células es el principal blanco de infección del VIH?",
    opciones: [
      "Linfocitos T CD4+",
      "Linfocitos B",
      "Neutrófilos"
    ],
    respuestaCorrecta: 0,
    explicacion: "El VIH infecta principalmente células que expresan el receptor CD4, siendo los linfocitos T CD4+ su blanco principal. También puede infectar otras células que expresan CD4 como células dendríticas, macrófagos y monocitos. Al atacar estas células del sistema inmune, causa una inmunodeficiencia secundaria."
  },
  {
    id: 27,
    pregunta: "Con respecto al tratamiento antirretroviral (TARV):",
    opciones: [
      "Se recomienda la monoterapia para reducir efectos adversos",
      "Su objetivo principal es eliminar completamente el virus del organismo",
      "Busca reducir la carga viral al mínimo posible y preservar el sistema inmune"
    ],
    respuestaCorrecta: 2,
    explicacion: "Los objetivos principales de la terapia antirretroviral son: reducir y mantener la carga viral al mínimo posible, reconstituir y preservar el sistema inmune, mejorar la calidad de vida, aumentar la sobrevida y prevenir la transmisión. No logra eliminar completamente el virus debido a reservorios virales."
  },
  
  // Tema 7 - Farmacología de la Micosis
  {
    id: 28,
    pregunta: "¿Cuál es el mecanismo de acción de la anfotericina B?",
    opciones: [
      "Inhibe la síntesis de ergosterol en la membrana fúngica",
      "Se une al ergosterol de la membrana fúngica formando poros que aumentan la permeabilidad celular",
      "Inhibe la síntesis de ácidos nucleicos en el hongo"
    ],
    respuestaCorrecta: 1,
    explicacion: "La anfotericina B es un antibiótico poliénico que se une al ergosterol (componente de la membrana celular de hongos, ausente en células animales) provocando la formación de poros o canales que aumentan la permeabilidad de la membrana. Esto lleva a la pérdida de componentes celulares, despolarización y muerte celular."
  },
  {
    id: 29,
    pregunta: "¿Cuál de los siguientes antimicóticos inhibe la síntesis de ergosterol al bloquear la enzima 14-α-demetilasa?",
    opciones: [
      "Anfotericina B",
      "Fluconazol y otros azoles",
      "Terbinafina"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los azoles (como fluconazol, itraconazol, ketoconazol) inhiben la enzima 14-α-demetilasa (dependiente del citocromo P450), impidiendo el paso de lanosterol a ergosterol. Esto altera la estabilidad de la membrana y las funciones enzimáticas del hongo."
  },
  
  // Tema 8 - Antineoplásicos
  {
    id: 30,
    pregunta: "¿Cuál es la principal dificultad en el tratamiento farmacológico del cáncer?",
    opciones: [
      "La naturaleza heterogénea de las células en un tumor, con distinta sensibilidad a los fármacos",
      "La falta de fármacos efectivos contra el cáncer",
      "La incapacidad de los fármacos de llegar al tumor por la barrera hematoencefálica"
    ],
    respuestaCorrecta: 0,
    explicacion: "Una de las principales dificultades del tratamiento antineoplásico es la naturaleza heterogénea de las células en un tumor. Esta heterogeneidad implica que las células tumorales presentan distinta sensibilidad a los fármacos, lo que dificulta la eliminación completa del tumor con un solo agente."
  },
  {
    id: 31,
    pregunta: "¿Por qué los fármacos antineoplásicos suelen afectar también a células normales?",
    opciones: [
      "Porque se acumulan preferentemente en células sanas",
      "Porque afectan principalmente a células con alta tasa de replicación, característica que comparten algunas células normales con las cancerosas",
      "Porque las células tumorales son más resistentes a los fármacos que las normales"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los fármacos antineoplásicos actúan preferentemente sobre células en división, afectando tanto a células tumorales como a células normales con alta tasa de replicación. Por eso los efectos adversos se manifiestan principalmente en tejidos de rápida renovación: médula ósea, mucosas del tracto digestivo, folículos pilosos, etc."
  },
  
  // Tema 9 - Inmunomoduladores
  {
    id: 32,
    pregunta: "¿Cuál de los siguientes fármacos inmunosupresores actúa inhibiendo la enzima calcineurina?",
    opciones: [
      "Azatioprina",
      "Ciclosporina A",
      "Metotrexato"
    ],
    respuestaCorrecta: 1,
    explicacion: "La ciclosporina A inhibe la activación de linfocitos T-CD4+ al bloquear la enzima calcineurina, una enzima dependiente de calcio responsable de la transcripción génica de citocinas (principalmente IL-2). Esto impide la proliferación y diferenciación de linfocitos T."
  },
  {
    id: 33,
    pregunta: "¿Cuál es la principal reacción adversa de la ciclosporina A?",
    opciones: [
      "Nefrotoxicidad",
      "Mielosupresión",
      "Trastornos gastrointestinales graves"
    ],
    respuestaCorrecta: 0,
    explicacion: "La nefrotoxicidad es la principal reacción adversa de la ciclosporina A, limitando su uso en muchos casos. También puede causar hiperpotasemia, hiperuricemia, hirsutismo, hipertensión arterial, hiperplasia gingival, hepatotoxicidad y neurotoxicidad."
  }
];

export default function CuestionarioTeoricoResumenM3() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Resumen Teórico"
      preguntas={preguntas}
    />
  );
}
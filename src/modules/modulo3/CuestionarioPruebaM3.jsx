import Cuestionario from "../../components/Cuestionario";

const preguntas = [
  // 1
  {
    id: 1,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los métodos diagnósticos presuntivos de la infección detectan anticuerpos",
      "Los métodos diagnósticos con mayor periodo ventana detectan material genético viral.",
      "Los métodos diagnósticos con mayor ventana detectan anticuerpos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Las pruebas con mayor ‘ventana’ suelen ser las serológicas (anticuerpos); las de material genético acortan esa ventana."
  },
  // 2
  {
    id: 2,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para sinergizar su acción",
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para reducir su toxicidad.",
      "Los antibióticos betalactámicos se asocian frecuentemente a los monobactams para inhibir la acción de las enzimas betalactamasas."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Algunos monobactams resisten betalactamasas; su uso combinado busca evitar la inactivación del betalactámico."
  },
  // 3
  {
    id: 3,
    pregunta: "Señale la opción correcta con respecto a los betabloqueantes:",
    opciones: [
      "Todos ellos se pueden usar con seguridad en los pacientes asmáticos.",
      "Son un grupo amplio de fármacos cuya administración se puede interrumpir abruptamente sin riesgo para el paciente.",
      "Son un grupo amplio de fármacos utilizados en distintas patologías vasculares"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Se emplean en HTA, angina, arritmias e IC (algunos). No son seguros en todo asmático ni debe suspenderse bruscamente."
  },
  // 4
  {
    id: 4,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Existen fármacos antimicóticos reservados para infecciones profundas",
      "La generación de resistencia es poco frecuente en infecciones micóticas.",
      "La micosis dérmica generalizada se trata por vía tópica."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Para micosis sistémicas se usan agentes como anfotericina B o azoles sistémicos."
  },
  // 5
  {
    id: 5,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "El hipoclorito de sodio se utiliza para purificar el agua de consumo diario",
      "El uso inadecuado de antisépticos puede favorecer la aparición de resistencia bacteriana.",
      "El alcohol al 99% es el de mayor efectividad como antiséptico y/o desinfectante."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "El mal uso de biocidas ejerce presión selectiva; el alcohol es más efectivo alrededor del 70%."
  },
  // 6
  {
    id: 6,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "No es posible administrar Vitamina B12 en forma inyectable cuando existen patologías del tracto digestivo que impiden su absorción intestinal a partir de la administración de comprimidos o cápsulas de Vitamina B12.",
      "Los suplementos de hierro para ser administrados por via oral provocan molestias gastrointestinales",
      "Todas las anemias se tratan con suplementos de hierro."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "El hierro oral suele dar náuseas/estreñimiento; la B12 sí puede administrarse IM cuando hay malabsorción."
  },
  // 7
  {
    id: 7,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los fármacos antineoplásicos específicos de la fase M inhiben la mitosis celular.",
      "Los fármacos antineoplásicos son muy efectivos en células en estado de reposo.",
      "Existen pocos fármacos antineoplásicos capaces de actuar en la síntesis del ADN."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los ‘M-específicos’ (p. ej., alcaloides de la vinca, taxanos) bloquean la mitosis."
  },
  // 8
  {
    id: 8,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los fármacos antineoplásicos actúan específicamente en células temporales con alta tasa de replicación.",
      "La naturaleza heterogénea de los tumores dificulta el tratamiento farmacológico debido a la distinta sensibilidad que presentan las células neoplásicas",
      "La efectividad de un tratamiento antineoplásico es independiente de la detección temprana del cáncer"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Tumores heterogéneos contienen subpoblaciones con distinta sensibilidad → menor eficacia."
  },
  // 9
  {
    id: 9,
    pregunta: "Señale la opción correcta respecto a los inhibidores de la calcineurina ciclosporina y tacrolimus:",
    opciones: [
      "Son fármacos de estrecho rango terapéutico.",
      "Presentan pocos efectos adversos",
      "Pueden usarse de forma conjunta en la terapia inmunosupresora."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Requieren monitoreo por nefrotoxicidad, interacciones y variabilidad farmacocinética."
  },
  // 10
  {
    id: 10,
    pregunta: "Señale la opción correcta con respecto a los inhibidores de la enzima convertidora de angiotensina IECAs:",
    opciones: [
      "La tos provocada por los IECAS se soluciona cambiando la marca comercial del IECA",
      "Pueden usarse en embarazadas",
      "Provocan una reducción en la síntesis de angiotensina 2."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Bloquean ECA → ↓ angiotensina II; son teratogénicos y la tos no se resuelve cambiando marca."
  },
  // 11
  {
    id: 11,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Las heparinas se administran por vía oral.",
      "Todas las heparinas se eliminan lentamente.",
      "La hemorragia es la principal reacción adversa de las heparinas."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Anticoagulan al potenciar antitrombina; principal riesgo clínico: sangrado."
  },
  // 12
  {
    id: 12,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los virus son parásitos intracelulares con capacidad de proliferar de manera independiente.",
      "El tratamiento farmacológico de infecciones virales es limitado debido a múltiples razones como la generación de resistencia y la poca selectividad.",
      "El tratamiento farmacológico de infecciones virales es limitado debido a que no existen principios activos que detengan la replicación viral."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Pocas dianas selectivas y alta variabilidad genética dificultan el tratamiento antiviral."
  },
  // 13
  {
    id: 13,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Si el paciente es alérgico a los antibióticos betalactámicos se puede considerartratamientos con antibióticos macrólidos.",
      "La hipersensibilidad a los betalactámicos es siempre de aparición tardía.",
      "La hipersensibilidad a los antibióticos del grupo de los betalactámicos solo se manifiesta tras la administración parenteral."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los macrólidos son alternativa en alergia a betalactámicos (según patógeno y severidad)."
  },
  // 14
  {
    id: 14,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Cualquier antibiótico puede ser usado para combatir una infección bacteriana independientemente de la localización de la infección en el organismo.",
      "Los antibióticos bactericidas inhiben el crecimiento bacteriano e inviabilizan a la bacteria.",
      "Las bacterias Gram positivas y Gram negativas presentan diferente sensibilidad a los antibióticos por la composición de sus paredes celulares."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Pared gruesa de Gram+ vs membrana externa de Gram– condicionan penetración y dianas."
  },
  // 15
  {
    id: 15,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Se recomienda la asociación de un antibiótico bactericida con uno bacteriostático para el tratamiento de una infección bacteriana",
      "La producción de betalactamasas es un mecanismo de defensa de las bacterias ante cualquier antibiótico",
      "La disminución de la expresión de porinas es un mecanismo de defensa de las bacterias."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Menos porinas en Gram– reduce entrada de antibióticos hidrofílicos → resistencia."
  },
  // 16
  {
    id: 16,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "No se debe cambiar la marca comercial de los comprimidos de warfarina",
      "La respuesta farmacológica de los anticoagulantes directos se evalúa con el mismo análisis de sangre que para la warfarina.",
      "El antídoto de la warfarina es la Vitamina B"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Warfarina tiene margen estrecho; distintas marcas pueden variar biodisponibilidad. (Antídoto real: Vitamina K)."
  },
  // 17
  {
    id: 17,
    pregunta: "Señale la opción correcta. Para el tratamiento de la hipertensión arterial:",
    opciones: [
      "Frecuentemente se usan vasoconstrictores.",
      "Se puede utilizar bloqueantes de los canales de calcio.",
      "Se pueden usar beta-adrenérgicos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Antagonistas del calcio son de primera línea; vasoconstrictores y beta-agonistas elevan la PA."
  },
  // 18
  {
    id: 18,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La vacunación es un tratamiento de inmunoestimulación en el cual el organismo genera inmunidad de manera pasiva.",
      "Infección y enfermedad son sinónimos.",
      "En el transcurso de una infección viral, se generan anticuerpos específicos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La respuesta humoral específica se monta durante la infección; vacunación induce inmunidad activa."
  },
  // 19
  {
    id: 19,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La susceptibilidad al riesgo ocupacional es independiente del operador",
      "Es necesario educar al paciente y familiares sobre los riesgos a terceros del tratamiento antineoplásico",
      "No se recomienda rotar al personal encargado de la preparación de antineoplásicos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Los citotóxicos pueden excretarse; educar previene exposiciones en el hogar."
  },
  // 20
  {
    id: 20,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Todos los diuréticos tienen la misma potencia",
      "Intercambiar diuréticos con destinos mecanismos de acción es una práctica segura.",
      "Una reacción adversa frecuente de la hidroclorotiazida es la hiponatremia."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Las tiazidas suelen producir hiponatremia/hipopotasemia; los diuréticos varían en potencia."
  },
  // 21
  {
    id: 21,
    pregunta: "Señale la opción correcta: En la situación donde un virus se mantiene en estado de latencia clínica:",
    opciones: [
      "Los fármacos antivirales pueden ser muy efectivos eliminando al virus del organismo.",
      "Son visibles los síntomas de la enfermedad.",
      "El paciente puede transmitir la infección."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Puede haber transmisión aun sin síntomas (portación/latencia clínica)."
  },
  // 22
  {
    id: 22,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La infección viral se produce como resultado de un reconocimiento específico entre estructuras del virus hospedador.",
      "No es frecuente la aparición de mutaciones en las proteínas de la envoltura viral.",
      "El ciclo reproductivo de virus ADN es idéntico al ciclo reproductivo de virus ARN."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Unión específica proteína viral–receptor celular determina tropismo del virus."
  },
  // 23
  {
    id: 23,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Las estatinas interfieren en la síntesis del colesterol.",
      "Las estatinas son ácidos grasos poli insaturados",
      "Las estatinas son apolipoproteínas."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Inhiben HMG-CoA reductasa → ↓ síntesis hepática de colesterol."
  },
  // 24
  {
    id: 24,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Es poco frecuente el agregado de otros fármacos para aliviar ciertos efectos adversos de la quimioterapia",
      "La cirugía es la primera opción para el tratamiento antineoplásico, siempre que sea posible",
      "La combinación de fármacos antineoplásicos busca reducir los efectos citotóxicos del tratamiento."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Si el tumor es resecable, la cirugía es la terapia de elección."
  },
  // 25
  {
    id: 25,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La intoxicación con Digoxina es un cuadro leve y fácilmente reversible.",
      "La digoxina se utiliza extensamente en pacientes con insuficiencia renal.",
      "La digoxina tiene estrecho rango terapéutico."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Pequeñas variaciones de concentración producen toxicidad (arritmias, síntomas GI/neuro)."
  },
  // 26
  {
    id: 26,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Una cepa bacteriana es resistente a un antibiótico cuando no existe una dosis segura de dicho antibiótico con la cual se consigue un tratamiento eficaz",
      "La similitudes entre la célula eucariota y la célula procariota constituyen la base de la farmacología infecciosa.",
      "La elección del antibiótico adecuado para la terapia solo depende del tipo de bacteria infectante"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Definición clínica de resistencia: no hay concentración segura/efectiva alcanzable en el paciente."
  },
  // 27
  {
    id: 27,
    pregunta: "Señale la opción correcta respecto a los glucocorticoides:",
    opciones: [
      "Pueden discontinuar abruptamente.",
      "Presentan pocos efectos adversos.",
      "Son fármacos que pueden utilizarse en enfermedades autoinmunes"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Inmunosupresores/antiinflamatorios potentes útiles en autoinmunidad; no deben suspenderse brusco por supresión adrenal."
  },
  // 28
  {
    id: 28,
    pregunta: "Señale la opción correcta con respecto a las hiperlipemias:",
    opciones: [
      "Se tratan con fármacos que tienden a aumentar la absorción de colesterol de la dieta.",
      "Se tratan con fármacos que tienden a disminuir el nivel elevado de colesterol-LDL.",
      "Se tratan con fármacos que tienden aumentar el nivel de los triglicéridos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Objetivo principal: reducir LDL (estatinas, ezetimibe, PCSK9, etc.)."
  },
  // 29
  {
    id: 29,
    pregunta: "Señale la opción correcta respecto a los fármacos inmunosupresores:",
    opciones: [
      "Pueden asociarse fármacos inmunosupresores en una terapia inmunosupresora.",
      "Solamente afectan la respuesta humoral",
      "Actúan en una etapa de la activación de la respuesta inmune."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Es común combinarlos para potenciar eficacia y reducir dosis/EA de cada uno."
  },
  // 30
  {
    id: 30,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La naturaleza heterogénea de los tumores es una dificultad para el tratamiento farmacológico debido a la distinta sensibilidad que presentarán las células neoplásicas",
      "Los fármacos antineoplásicos se utilizan a nivel sistémico presentando buena tolerancia.",
      "La quimioterapia antineoplásica se caracteriza por la utilización de fármacos de acción local."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Heterogeneidad tumoral = subclones con respuestas distintas a fármacos."
  },
  // 31
  {
    id: 31,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los fármacos antineoplásicos tienen pocos efectos sobre las células no cancerosas.",
      "Los fármacos antineoplásicos afectan además a las células normales, en particular aquellas con mayor tasa de replicación",
      "Los fármacos antineoplásicos tienen pocos efectos secundarios"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Tejidos sanos de alta replicación también son afectados (médula, mucosa, folículo)."
  },
  // 32
  {
    id: 32,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La adherencia del paciente VIH(+) al tratamiento antirretroviral no es un factor clave para evitar el desarrollo de resistencia farmacológica y prolongar su sobrevida",
      "El tratamiento de pacientes VIH(+) se realiza principalmente con una única combinación de fármacos",
      "La transmisión vertical del VIH puede evitarse con fármacos"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Profilaxis/terapia en embarazo y parto más profilaxis neonatal reducen la transmisión."
  },
  // 33
  {
    id: 33,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Las Heparinas de Bajo Peso Molecular tienen mayor incidencia de hemorragias que las de Alto Peso Molecular",
      "Las Heparinas pueden administrarse por vía oral.",
      "La hemorragia es la principal reacción adversa de las heparinas"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Principal riesgo clínico compartido por heparina no fraccionada y HBPM: sangrado."
  },
  // 34
  {
    id: 34,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La Anfotericina B se utiliza para combatir infecciones profundas causadas por hongos.",
      "Los azoles (antimicóticos) como el fluconazol tienen pocas interacciones con otros fármacos",
      "La Anfotericina B se administra por vía oral"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Anfotericina B (IV) para micosis sistémicas severas; azoles interactúan mucho."
  },
  // 35
  {
    id: 35,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La elección del antibiótico adecuado para la terapia sólo depende del sitio de infección y de la bacteria infectante",
      "No existen diferencias relevantes entre la célula eucariota y la célula procariota.",
      "Una cepa bacteriana es sensible a un antibiótico cuando existe una dosis de dicho antibiótico con la cual se consigue un tratamiento eficaz."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Definición de sensibilidad clínica: con niveles alcanzables se logra eficacia."
  },
  // 36
  {
    id: 36,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los Carbapenems son antibióticos que se administran por vía oral y se utilizan en pacientes ambulatorios",
      "La Vancomicina es un fármaco de estrecho margen terapéutico que requiere monitoreo",
      "Se recomienda la asociación de un antibiótico bactericida con uno bacteriostático para el tratamiento de una infección bacteriana"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Vancomicina requiere monitoreo (niveles valle) por nefro/ototoxicidad."
  },
  // 37
  {
    id: 37,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los péptidos natriuréticos promueven la retención de sodio (Na +) y agua en la nefrona aumentando la cantidad de orina (diuresis) y disminuyendo la presión arterial.",
      "Los péptidos natriuréticos son “hormonas” cardíacas que actúan sobre el riñón durante el proceso de formación de la orina.",
      "En la Insuficiencia Cardíaca se recomienda estimular el aumento del tamaño del corazón (hipertrofia e hiperplasia cardíaca)"
    ],
    respuestaCorrecta: 1,
    explicacion:
      "ANP/BNP modulan la natriuresis/diuresis vía riñón; el enunciado a) invierte el efecto sobre el sodio."
  },
  // 38
  {
    id: 38,
    pregunta: "El tratamiento antirretroviral:",
    opciones: [
      "Puede instaurarse con fines profilácticos",
      "Ataca en general a enzimas del VIH esenciales para cumplir el ciclo viral",
      "Se evalúa periódicamente monitoreando la carga viral y los linfocitos CD4 en sangre"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "El control clínico se basa en carga viral (objetivo indetectable) y CD4."
  },
  // 39
  {
    id: 39,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La resistencia bacteriana sólo se presenta en pacientes hospitalizados.",
      "El uso inadecuado de antibióticos promueve la resistencia bacteriana.",
      "La resistencia bacteriana es un problema menor en el tratamiento con antibióticos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Sobreuso, subdosificación y abandono favorecen la selección de resistentes."
  },
  // 40
  {
    id: 40,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Las tetraciclinas se pueden usar con seguridad en pacientes embarazadas.",
      "Las cefalosporinas no producen reacciones de hipersensibilidad.",
      "Las cefalosporinas son antibióticos betalactámicos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Las cefalosporinas comparten el anillo betalactámico y pueden dar alergia cruzada."
  },
  // 41
  {
    id: 41,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los inhibidores de las betalactamasas se asocian frecuentemente a las sulfas para sinergizar su acción",
      "Los bactericidas inhiben el crecimiento bacteriano, pero para eliminar la bacteria se necesita la participación del sistema inmune del paciente.",
      "Los antibióticos bactericidas destruyen a los microorganismos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Bactericida = mata bacterias; bacteriostático = detiene crecimiento."
  },
  // 42
  {
    id: 42,
    pregunta: "Con respecto a las hiperlipemias:",
    opciones: [
      "Las estatinas son la primera línea de tratamiento del hipercolesterolemia",
      "Cursan con niveles de colesterol y triglicéridos bajos",
      "No se ven afectadas por la dieta del paciente."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Estatinas son el pilar para reducir LDL; dieta y estilo de vida también cuentan."
  },
  // 43
  {
    id: 43,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "El hipoclorito de sodio se utiliza para purificar el agua de consumo diario",
      "El óxido de etileno se utiliza como agente esterilizante, por ejemplo, como alternativa a la esterilización por calor",
      "La concentración óptima del alcohol para ser utilizado como antiséptico o desinfectante es del 90%."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Óxido de etileno esteriliza material termosensible; el alcohol óptimo ~70%."
  },
  // 44
  {
    id: 44,
    pregunta: "Con respecto a los diuréticos:",
    opciones: [
      "Los diuréticos del tipo tiazida como la hidroclorotiazida suelen utilizarse en el tratamiento crónico de la hipertensión arterial.",
      "Intercambiar diuréticos con distintos mecanismos de acción es una práctica segura.",
      "Una reacción adversa frecuente de la furosemida es la hipernatremia."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Tiazidas son de elección en HTA crónica; furosemida suele provocar hipo- y no hipernatremia."
  },
  // 45
  {
    id: 45,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La Rifampicina es un fármaco de estrecho margen terapéutico que requiere monitoreo",
      "La Rifampicina es un fármaco que siempre se usa en monoterapia.",
      "Los Carbapenems son antibióticos de amplio espectro con actividad bactericida."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Carbapenems (imipenem/meropenem) son betalactámicos bactericidas muy de amplio espectro."
  },
  // 46
  {
    id: 46,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Todas las anemias se tratan con suplementos de hierro",
      "Los suplementos de hierro por vía oral son bien tolerados y no provocan molestias gastrointestinales.",
      "Es posible administrar Vitamina B12 en forma inyectable cuando existen patologías del tracto digestivo que impiden su absorción intestinal a partir de cápsulas o comprimidos vía oral"
    ],
    respuestaCorrecta: 2,
    explicacion:
      "En malabsorción de B12 se usa vía parenteral; el hierro oral suele dar molestias."
  },
  // 47
  {
    id: 47,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los virus son parásitos intracelulares con capacidad de proliferar de manera independiente",
      "Para el tratamiento farmacológico de infecciones virales es sencillo pues se cuenta con fármacos muy selectivos.",
      "La vacunación es el tratamiento más eficaz para prevenir infecciones virales."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "La profilaxis por vacunación es la herramienta más efectiva para prevenir infecciones virales."
  },
  // 48
  {
    id: 48,
    pregunta: "Con respecto a los Inhibidores de la Enzima Convertidora de Angiotensina IECAs:",
    opciones: [
      "No presentan efectos adversos graves.",
      "Son poco útiles en el paciente diabético.",
      "Tienen riesgo de teratogenicidad por lo que no pueden usarse en embarazadas."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "Son teratogénicos; en diabéticos suelen ser útiles (nefroprotección)."
  },
  // 49
  {
    id: 49,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los inhibidores de la transcriptasa inversa análogos y no análogos de nucleótidos se pueden combinar en un tratamiento farmacológico.",
      "El VIH es un virus ADN que en las primeras fases de su ciclo vital se transcribe a ARN",
      "La infección por VIH se puede diagnosticar mediante el conteo de linfocitos T-CD4."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Los regímenes combinan NRTI con NNRTI u otras clases para mayor eficacia y barrera a resistencia."
  },
  // 50
  {
    id: 50,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los anticoagulantes directos tienen el mismo perfil de reacciones adversas que la Warfarina.",
      "La Warfarina es un anticoagulante que se usa por vía oral",
      "La Warfarina no tiene antídoto."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Warfarina es oral (antagonista de Vit K); sí tiene reversión con Vitamina K y PCC."
  },
  // 51
  {
    id: 51,
    pregunta: "Selecciones la opción correcta:",
    opciones: [
      "La aparición de resistencia bacteriana es independiente del tiempo de uso de los antibióticos.",
      "No se recomienda el uso de algunos jabones antibacteriales porque favorecen la aparición de resistencia bacteriana.",
      "El uso de antibióticos con fines profilácticos se da cuando la infección ya está presente en el organismo."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "El uso masivo de biocidas/antibacteriales puede seleccionar resistencia."
  },
  // 52
  {
    id: 52,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "Los inhibidores de la calcineurina (tacrolimus y ciclosporina) pueden coadministrarse.",
      "Los glucocorticoides son inmunosupresores que solamente pueden administrarse por vía tópica.",
      "Los glucocorticoides presentan una gran variedad de efectos adversos."
    ],
    respuestaCorrecta: 2,
    explicacion:
      "EA: hiperglucemia, osteoporosis, HTA, infecciones, cataratas, etc."
  },
  // 53
  {
    id: 53,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "El lavado de manos es una de las medidas más efectivas para evitar la transmisión de infecciones a nivel hospitalario",
      "Un agente químico puede ser desinfectante o antiséptico pero no puede ser ambos."
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Higiene de manos es la medida más costo-efectiva en control de infecciones."
  },
  // 54
  {
    id: 54,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La intoxicación con Digoxina es un cuadro grave, que puede provocar la muerte del paciente",
      "La Digoxina presenta un amplio rango terapéutico",
      "La digoxina se utiliza extensamente en población joven"
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Toxicidad por digoxina puede causar arritmias malignas y comprometer la vida."
  },
  // 55
  {
    id: 55,
    pregunta: "Señale la opción correcta:",
    opciones: [
      "La Warfarina es un fármaco que presenta muy pocas interacciones con otros fármacos",
      "Los pacientes en tratamiento con Warfarina deben periódicamente realizarse la prueba de INR en sangre para ajuste de dosis.",
      "La Warfarina es un fármaco que presenta muy pocas interacciones con alimentos."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "INR debe controlarse para mantener rango terapéutico y ajustar la dosis."
  },
  // 56
  {
    id: 56,
    pregunta: "El tratamiento antirretroviral:",
    opciones: [
      "Tiene un perfil de eventos adversos bastante bajo",
      "Puede lograr que el conteo de réplicas virales sea no detectable",
      "Ataca los linfocitos T donde se hospeda el virus."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Con buena adherencia, la carga viral puede volverse indetectable (U=U)."
  },
  // 57
  {
    id: 57,
    pregunta: "Con respecto a los betabloqueantes:",
    opciones: [
      "Actúan mayoritariamente a nivel del músculo liso vascular",
      "Son un grupo amplio de fármacos utilizados en distintas patologías vasculares.",
      "Todos los betabloqueantes se utilizan en pacientes con insuficiencia cardíaca."
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Se usan en HTA, angina, IAM, arritmias e IC (solo algunos: carvedilol, bisoprolol, metoprolol succinato)."
  }
];

export default function CuestionarioPruebaM3() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Prueba (57 preguntas)"
      preguntas={preguntas}
    />
  );
}

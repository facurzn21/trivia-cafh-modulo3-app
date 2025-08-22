import Cuestionario from "../../components/Cuestionario";

// 30 preguntas totales: 15 V/F + 15 Opción múltiple (3 opciones, 1 correcta)
// Basado en: "Antimicóticos y antiparasitarios 2025" (Módulo 3 CAFH)

const VF = (id, texto, esVerdadero, explicacion) => ({
  id, pregunta: texto, opciones: ["Verdadero", "Falso"],
  respuestaCorrecta: esVerdadero ? 0 : 1, explicacion
});

const preguntas = [
  // ======= 15 Verdadero/Falso =======
  VF(
    1,
    "Los hongos son organismos eucariotas y solo una minoría es patógena para humanos.",
    true,
    "El Reino Fungi es eucariota; la patogenicidad humana es relativamente infrecuente."
  ),
  VF(
    2,
    "El ergosterol está ausente en membranas animales y es un blanco terapéutico clave.",
    true,
    "El ergosterol es propio de hongos; su síntesis o presencia se ataca con varios antimicóticos."
  ),
  VF(
    3,
    "La anfotericina B no se absorbe por vía digestiva y por eso suele administrarse por vía parenteral.",
    true,
    "La formulación clásica usa desoxicolato; las alternativas lipídicas/liposomales son parenterales."
  ),
  VF(
    4,
    "Las formulaciones liposomales de anfotericina B disminuyen la nefrotoxicidad respecto a la convencional.",
    true,
    "El complejo liposomal reduce toxicidad renal y se reserva, por ejemplo, en pediatría."
  ),
  VF(
    5,
    "Los azoles carecen de interacciones porque no inhiben enzimas CYP.",
    false,
    "Los imidazoles/triazoles inhiben CYP3A4 y pueden aumentar la exposición de otros fármacos."
  ),
  VF(
    6,
    "La griseofulvina inhibe la mitosis fúngica por acción sobre microtúbulos y es útil en dermatofitosis.",
    true,
    "Antibiótico no poliénico; afinidad por piel; indicada en tiñas/dermatofitosis."
  ),
  VF(
    7,
    "La terbinafina es una alilamina que inhibe la escualeno epoxidasa, útil en piel y uñas.",
    true,
    "Disminuye ergosterol y acumula escualeno; puede ser fungicida según especie."
  ),
  VF(
    8,
    "Las equinocandinas son fungicidas IV que inhiben la síntesis de beta-glucano de la pared.",
    true,
    "Caspofungina, etc.; se emplean en candidiasis/aspergilosis refractarias, sobre todo en inmunodeprimidos."
  ),
  VF(
    9,
    "La flucitosina es un profármaco que se convierte a 5-FU en la célula fúngica y puede causar leucopenia/trombocitopenia reversibles.",
    true,
    "Actúa como análogo nucleotídico inhibiendo síntesis de ADN/ARN; hematotoxicidad reversible."
  ),
  VF(
    10,
    "Los mecanismos de resistencia antifúngica incluyen sobreexpresión o alteración del blanco, menor permeabilidad e inactivación del fármaco.",
    true,
    "La diapositiva lista claramente estos mecanismos y la importancia de la adherencia."
  ),
  VF(
    11,
    "En amebiasis se combina un agente luminal (yodoquinol) con uno tisular/sistémico (metronidazol).",
    true,
    "Metronidazol trata fase tisular; yodoquinol limpia el lumen intestinal para prevenir recaídas/transmisión."
  ),
  VF(
    12,
    "Para la enfermedad de Chagas se usan benznidazol o nifurtimox por periodos limitados (~60 días), con potenciales reacciones adversas.",
    true,
    "Ambos dañan ADN/inducen radicales; se limita su uso por toxicidad (p. ej., hematológica)."
  ),
  VF(
    13,
    "La leishmaniasis cutánea se trata exclusivamente con antibióticos betalactámicos.",
    false,
    "El manejo incluye antimoniales pentavalentes, anfotericina B, pentamidina y paromomicina."
  ),
  VF(
    14,
    "En embarazadas con toxoplasmosis puede usarse espiramicina para reducir la transmisión vertical.",
    true,
    "Pirimetamina+sulfadiazina se reservan fuera del embarazo; espiramicina se usa durante la gestación."
  ),
  VF(
    15,
    "En malaria, la primaquina se usa para evitar recaídas por hipnozoitos.",
    true,
    "Profilaxis: proguanil; etapa eritrocítica: cloroquina/quinina; recaídas: primaquina."
  ),

  // ======= 15 Múltiple opción (3 opciones, 1 correcta) =======
  {
    id: 16,
    pregunta: "¿Cuál es el blanco de acción de las equinocandinas?",
    opciones: [
      "14α-desmetilasa (síntesis de ergosterol)",
      "Síntesis de beta-glucano de la pared celular",
      "Microtúbulos del huso mitótico"
    ],
    respuestaCorrecta: 1,
    explicacion: "Inhiben la síntesis de beta-glucano (pared), actuando como fungicidas por vía IV."
  },
  {
    id: 17,
    pregunta: "Efecto adverso clásico asociado a anfotericina B:",
    opciones: [
      "Nefrotoxicidad y reacciones infusionales",
      "Agranulocitosis irreversible obligada",
      "Hipertensión severa sostenida"
    ],
    respuestaCorrecta: 0,
    explicacion: "Se une parcialmente al colesterol y produce nefrotoxicidad, fiebre/escalofríos e hipotensión."
  },
  {
    id: 18,
    pregunta: "¿Qué grupo presenta menor efecto en esteroles humanos y mayor espectro sistémico?",
    opciones: [
      "Imidazoles (p. ej., ketoconazol)",
      "Triazoles (fluconazol, itraconazol, voriconazol)",
      "Antibióticos poliénicos"
    ],
    respuestaCorrecta: 1,
    explicacion: "Los triazoles son mejor tolerados y útiles en micosis sistémicas."
  },
  {
    id: 19,
    pregunta: "La biodisponibilidad de griseofulvina por vía oral:",
    opciones: ["Disminuye con las comidas", "Aumenta con las comidas", "No se modifica con la dieta"],
    respuestaCorrecta: 1,
    explicacion: "La absorción oral mejora cuando se administra con alimentos."
  },
  {
    id: 20,
    pregunta: "Indicación típica de terbinafina:",
    opciones: ["Meningitis criptocócica", "Micosis de piel y uñas", "Aspergilosis invasiva refractaria"],
    respuestaCorrecta: 1,
    explicacion: "Se usa tópica u oral para dermatofitosis/onicomicosis; no es de elección en sistémicas graves."
  },
  {
    id: 21,
    pregunta: "Mecanismo principal de flucitosina:",
    opciones: [
      "Análogo nucleotídico que inhibe síntesis de ADN/ARN",
      "Formación de poros en membrana rica en ergosterol",
      "Bloqueo de la escualeno epoxidasa"
    ],
    respuestaCorrecta: 0,
    explicacion: "Se convierte a 5-FU y bloquea la síntesis de ácidos nucleicos del hongo."
  },
  {
    id: 22,
    pregunta: "Combinación con racional complementario (membrana + ácidos nucleicos):",
    opciones: [
      "Anfotericina B + flucitosina",
      "Terbinafina + imidazol por vía IV",
      "Equinocandina + niclosamida"
    ],
    respuestaCorrecta: 0,
    explicacion: "Esquema clásico en criptococosis y otras micosis graves."
  },
  {
    id: 23,
    pregunta: "¿Qué combinación cubre fase luminal y tisular en amebiasis?",
    opciones: [
      "Yodoquinol + metronidazol",
      "Praziquantel + dietilcarbamazina",
      "Albendazol + permetrina"
    ],
    respuestaCorrecta: 0,
    explicacion: "Metronidazol actúa sistémicamente; yodoquinol elimina el reservorio luminal."
  },
  {
    id: 24,
    pregunta: "Benznidazol/nifurtimox en Chagas actúan principalmente:",
    opciones: ["Como beta-lactámicos", "Dañando ADN y generando radicales libres", "Como inhibidores de acetilcolinesterasa"],
    respuestaCorrecta: 1,
    explicacion: "Esa es la base de su eficacia y su toxicidad; uso limitado a ~60 días."
  },
  {
    id: 25,
    pregunta: "En leishmaniasis visceral, ¿qué fármaco se usa frecuentemente (p. ej., inmunodeprimidos)?",
    opciones: ["Anfotericina B", "Amoxicilina", "Permetrina"],
    respuestaCorrecta: 0,
    explicacion: "Además de antimoniales, la anfotericina B es alternativa clave."
  },
  {
    id: 26,
    pregunta: "En embarazo con toxoplasmosis, la opción terapéutica señalada en el módulo es:",
    opciones: ["Espiramicina", "Pirimetamina + sulfadiazina desde el inicio del embarazo", "Metronidazol"],
    respuestaCorrecta: 0,
    explicacion: "Espiramicina durante el embarazo; pirimetamina+sulfadiazina fuera del embarazo/recién nacidos."
  },
  {
    id: 27,
    pregunta: "Tratamiento de la etapa eritrocítica del paludismo:",
    opciones: ["Cloroquina/quinina", "Proguanil exclusivamente", "Permetrina"],
    respuestaCorrecta: 0,
    explicacion: "Proguanil es profilaxis; la etapa eritrocítica se trata con cloroquina/quinina (según sensibilidad)."
  },
  {
    id: 28,
    pregunta: "Fármaco de elección frente a nemátodos intestinales (ascariasis, oxiuriasis) según el módulo:",
    opciones: ["Benzimidazoles (albendazol/mebendazol)", "Praziquantel", "Niclosamida"],
    respuestaCorrecta: 0,
    explicacion: "Los benzimidazoles interfieren con la tubulina del parásito (amplio espectro)."
  },
  {
    id: 29,
    pregunta: "Fármaco con actividad especial frente a filarias:",
    opciones: ["Dietilcarbamazina (DEC)", "Niclosamida", "Pirimetamina"],
    respuestaCorrecta: 0,
    explicacion: "DEC altera la membrana de microfilarias e inhibe rutas del ácido araquidónico."
  },
  {
    id: 30,
    pregunta: "Tratamiento de elección para céstodos/tremátodos (platelmintos) en el módulo:",
    opciones: ["Praziquantel", "Yodoquinol", "Permetrina"],
    respuestaCorrecta: 0,
    explicacion: "Praziquantel aumenta la permeabilidad (especialmente al Ca2+) y produce parálisis del helminto."
  }
];

export default function CuestionarioAntimicoticosAntiparasitarios() {
  return (
    <Cuestionario
      titulo="CAFH — Módulo 3 — Antimicóticos y Antiparasitarios"
      preguntas={preguntas}
    />
  );
}

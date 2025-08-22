import Cuestionario from '../../components/Cuestionario';

const CuestionarioATB = () => {
  const preguntasATB = [
    // PREGUNTAS VERDADERO/FALSO (15 preguntas)
    {
      pregunta: "Los antibióticos son efectivos contra hongos, parásitos, bacterias y virus por igual.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. Los antibióticos son fármacos antimicrobianos específicos para bacterias. Según el PDF, existen diferentes tipos de infecciones (hongos, parásitos, bacterias y virus) y cada una requiere su tratamiento específico."
    },
    {
      pregunta: "El objetivo de la terapia antibiótica es eliminar el organismo infectante sin lesionar las células del hospedador.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF establece que el objetivo es la eliminación del organismo infectante sin que, en lo posible, se lesionen las células infectadas."
    },
    {
      pregunta: "Los antibióticos bacteriostáticos matan directamente a las bacterias.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. Los bacteriostáticos inhiben el crecimiento bacteriano aunque el microorganismo permanece viable. Los bactericidas son los que producen la muerte del microorganismo."
    },
    {
      pregunta: "La vancomicina es naturalmente ineficaz contra bacterias Gram negativas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. Las bacterias Gram negativas son intrínsecamente resistentes a vancomicina porque su membrana externa impide que el antibiótico alcance su sitio de acción."
    },
    {
      pregunta: "Los carbapenems están reservados para uso en CTI (Cuidados Intensivos).",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF indica claramente que los carbapenems (Imipenem y Meropenem) están RESERVADOS PARA CTI debido a su amplio espectro."
    },
    {
      pregunta: "La rifampicina puede usarse como monoterapia sin riesgo de resistencia.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. El PDF enfatiza: 'NO UTILIZAR EN MONOTERAPIA PARA EVITAR RESISTENCIA' cuando habla de rifampicina."
    },
    {
      pregunta: "El cotrimoxazol es la combinación de Sulfametoxazol con Trimetoprim en proporción 5:1.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF especifica que el cotrimoxazol es la combinación fija de estos dos componentes en proporción 5:1."
    },
    {
      pregunta: "Las penicilinas pueden causar nefritis intersticial como efecto adverso.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF lista la nefritis intersticial entre los efectos adversos de las penicilinas."
    },
    {
      pregunta: "Los aminoglucósidos se absorben bien por vía oral.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. El PDF indica que los aminoglucósidos tienen muy baja absorción por vía oral (1%), por lo que se administran por vía IM o IV."
    },
    {
      pregunta: "Las tetraciclinas pueden administrarse con lácteos sin problemas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. Las tetraciclinas NO deben administrarse con lácteos porque disminuyen su absorción por quelación con el calcio."
    },
    {
      pregunta: "El cloranfenicol puede causar toxicidad hematológica dosis-dependiente.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF menciona que el cloranfenicol causa depresión de la médula ósea dosis-dependiente, siendo las células eritropoyéticas particularmente sensibles."
    },
    {
      pregunta: "Las quinolonas pueden usarse libremente en niños y adolescentes.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. Las quinolonas están contraindicadas en niños, adolescentes y embarazo por afectar el desarrollo del cartílago."
    },
    {
      pregunta: "La clindamicina es útil en osteomielitis por alcanzar concentraciones óseas altas.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF indica que la clindamicina es útil en osteomielitis por alcanzar concentraciones óseas altas."
    },
    {
      pregunta: "Los macrólidos son bactericidas potentes a cualquier concentración.",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 1,
      explicacion: "FALSO. Los macrólidos son bacteriostáticos, aunque pueden ser bactericidas a altas concentraciones según el PDF."
    },
    {
      pregunta: "La vancomicina se elimina principalmente por vía renal (80%).",
      opciones: ["Verdadero", "Falso"],
      respuestaCorrecta: 0,
      explicacion: "VERDADERO. El PDF especifica que la vancomicina tiene 80% de eliminación por vía renal y 20% por vía hepática."
    },

    // PREGUNTAS DE OPCIÓN MÚLTIPLE (15 preguntas - 3 opciones cada una)
    {
      pregunta: "¿Cuál es el mecanismo de acción de los β-lactámicos?",
      opciones: [
        "Inhibición de la síntesis de proteínas",
        "Inhibición de la síntesis del peptidoglucano",
        "Inhibición de la síntesis de ácidos nucleicos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los β-lactámicos inhiben etapas finales de la síntesis del peptidoglucano o mureína, un polímero esencial en la pared de casi todas las bacterias."
    },
    {
      pregunta: "¿Cuál de los siguientes antibióticos actúa sobre la subunidad 50S del ribosoma?",
      opciones: [
        "Aminoglucósidos",
        "Macrólidos",
        "Tetraciclinas"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los macrólidos, junto con fenicoles, lincosamidas y oxazolidinonas, actúan sobre la subunidad 50S del ribosoma bacteriano."
    },
    {
      pregunta: "¿Qué antibiótico puede causar el 'síndrome del cuello rojo'?",
      opciones: [
        "Penicilina",
        "Vancomicina",
        "Gentamicina"
      ],
      respuestaCorrecta: 1,
      explicacion: "La vancomicina puede causar síndrome del cuello rojo por liberación de histamina debido a una rápida administración."
    },
    {
      pregunta: "¿Cuál es el antibiótico de elección para infecciones por Mycoplasma pneumoniae?",
      opciones: [
        "Penicilina",
        "Macrólidos",
        "Aminoglucósidos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los macrólidos son de primera elección para neumonía por Mycoplasma pneumoniae, según indica el PDF."
    },
    {
      pregunta: "¿Qué generación de cefalosporinas tiene mayor actividad contra Gram negativos?",
      opciones: [
        "Primera generación",
        "Segunda generación",
        "Tercera generación"
      ],
      respuestaCorrecta: 2,
      explicacion: "Con el avance en generación hay mayor actividad contra Gram(-). La tercera generación tiene mayor actividad frente a aerobios Gram(-)."
    },
    {
      pregunta: "¿Cuál es el mecanismo de acción de las quinolonas?",
      opciones: [
        "Inhibición de la síntesis de pared celular",
        "Inhibición de la DNA girasa",
        "Inhibición de la síntesis de folatos"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las quinolonas inhiben la síntesis de ácidos nucleicos por inhibición de la enzima ADN girasa, requerida para replicar el ADN."
    },
    {
      pregunta: "¿Qué antibiótico NO debe administrarse con lácteos?",
      opciones: [
        "Amoxicilina",
        "Tetraciclinas",
        "Cefalexina"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las tetraciclinas no deben administrarse con lácteos porque disminuyen su absorción por quelación con calcio."
    },
    {
      pregunta: "¿Cuál es el principal efecto adverso del cloranfenicol?",
      opciones: [
        "Nefrotoxicidad",
        "Ototoxicidad",
        "Toxicidad hematológica"
      ],
      respuestaCorrecta: 2,
      explicacion: "El cloranfenicol causa toxicidad hematológica: depresión de la médula ósea dosis-dependiente."
    },
    {
      pregunta: "¿Qué tipo de antibiótico es la gentamicina?",
      opciones: [
        "β-lactámico",
        "Aminoglucósido",
        "Macrólido"
      ],
      respuestaCorrecta: 1,
      explicacion: "La gentamicina es un aminoglucósido que actúa sobre la subunidad 30S del ribosoma bacteriano."
    },
    {
      pregunta: "¿Cuál es la principal vía de eliminación de los aminoglucósidos?",
      opciones: [
        "Hepática",
        "Renal",
        "Biliar"
      ],
      respuestaCorrecta: 1,
      explicacion: "Los aminoglucósidos se eliminan principalmente por vía renal mediante filtración glomerular."
    },
    {
      pregunta: "¿Qué antibiótico se usa en combinación para evitar resistencia en tuberculosis?",
      opciones: [
        "Vancomicina",
        "Rifampicina",
        "Eritromicina"
      ],
      respuestaCorrecta: 1,
      explicacion: "La rifampicina se usa para tuberculosis pero NUNCA en monoterapia para evitar resistencia."
    },
    {
      pregunta: "¿Cuál de estos antibióticos es bacteriostático?",
      opciones: [
        "Penicilina",
        "Tetraciclina",
        "Gentamicina"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las tetraciclinas son bacteriostáticas, mientras que penicilinas y aminoglucósidos son bactericidas."
    },
    {
      pregunta: "¿Qué antibiótico puede causar colestasis intrahepática?",
      opciones: [
        "Gentamicina",
        "Eritromicina",
        "Amoxicilina"
      ],
      respuestaCorrecta: 1,
      explicacion: "La eritromicina (macrólido) puede causar colestasis intrahepática como efecto adverso."
    },
    {
      pregunta: "¿Cuál es el mecanismo de resistencia más común a los β-lactámicos?",
      opciones: [
        "Alteración del pH celular",
        "Producción de β-lactamasas",
        "Aumento del metabolismo"
      ],
      respuestaCorrecta: 1,
      explicacion: "La producción de β-lactamasas es el mecanismo más común de resistencia a los β-lactámicos."
    },
    {
      pregunta: "¿Qué antibiótico actúa inhibiendo la síntesis de folatos?",
      opciones: [
        "Penicilina",
        "Sulfamidas",
        "Vancomicina"
      ],
      respuestaCorrecta: 1,
      explicacion: "Las sulfamidas interfieren en el metabolismo del ácido fólico inhibiendo la síntesis de folatos bacterianos."
    }
  ];

  return (
    <Cuestionario 
      titulo="Cuestionario de Antibióticos - Biofarmacia y Terapéutica"
      preguntas={preguntasATB}
    />
  );
};

export default CuestionarioATB;
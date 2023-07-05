import React, { useEffect } from 'react';
import useTypewriterEffect from 'hooks/useTypewriterEffect';
import LoadingTextualProgress from 'molecules/LoadingTextualProgress/LoadingTextualProgress';
import useGuide from '../../_logic/useGuide';
import { dataLoadingPersonaPhases } from './dataLoadingPersonaPhases';

function StepPersona() {
  const {
    stepExtra,
    stepCanShow,
    activeStepID,
    setStepHasFinished,
  } = useGuide();

  const animatedName = useTypewriterEffect(stepExtra?.author_name, 20, stepCanShow);
  const [animateDescription] = useTypewriterEffect(stepExtra?.persona, 20, stepCanShow);

// const animatedName = useTypewriterEffect("Amanda Fitrpatrk", 20, true);
// const [animateDescription] = useTypewriterEffect("lorem ipsum doloris kepmsds djhfdss sd fsjkd hfsjdk fsd fjs dfjs dfjs dfjs d", 20, true);

  useEffect(() => {
    if (stepCanShow) {
      setStepHasFinished(true);
    }
  }, [stepCanShow, setStepHasFinished]);

  if (activeStepID !== "persona") return null;

  return (
    <section>
      {/* {!stepCanShow ? (
        <LoadingTextualProgress data={dataLoadingPersonaPhases} />
     ``) : (
        <div>
          <h3 className="text-2xl mb-2">{animatedName}</h3>
          <div>{animateDescription}</div>
      </div>
      )} */}
    </section>
  );
}

export default StepPersona;
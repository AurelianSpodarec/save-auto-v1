//import Confetti from 'react-dom-confetti';

function ConfettiExplosion({ active }: any) {

  return (<></>);

  const configLeft: any = {
    angle: "60",
    spread: "66",
    startVelocity: 70,
    elementCount: 28,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  const configRight: any = {
    angle: "130",
    spread: "66",
    startVelocity: 70,
    elementCount: 28,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <>
      <div className="absolute z-50 bottom-[0px] left-[100px]">
        <Confetti active={active} config={configLeft} />
      </div>
      <div className="absolute z-50 bottom-[0px] right-[70px]">
        <Confetti active={active} config={configRight} />
      </div>
    </>
  )
}

export default ConfettiExplosion;
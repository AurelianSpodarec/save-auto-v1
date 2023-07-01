import { useState, useEffect } from 'react';

import useGuide from '../../_logic/useGuide';
import StepDomainFind from './screens/StepDomainFind';
import StepDomainRegister from './screens/StepDomainRegister';

function StepDomain() {
    // const { stepCanShow, activeStepID } = useGuide();
    // const [changeTab, setChangeTab] = useState(activeStepID);

    // useEffect(() => {
    //     // console.log("step domain", activeStepID)
    //     setChangeTab(activeStepID)
    // }, [activeStepID])
    
    return (
        <div>
            {/* {changeTab === "" || changeTab === "find_domain" && <StepDomainFind stepCanShow={stepCanShow} />}
            {changeTab === "register_domain" && <StepDomainRegister stepCanShow={stepCanShow} />}   */}
        </div>
    )
}

export default StepDomain;
















// const domainNames = [
//     {
//         "name": "blackdoghaven.com",
//         "status": "free"
//     },
//     {
//         "name": "ebonypaws.com",
//         "status": null
//     },
//     {
//         "name": "sleekfur.com",
//         "status": null
//     },
//     {
//         "name": "midnightmutt.com",
//         "status": null
//     },
//     {
//         "name": "shadowpup.com",
//         "status": null
//     },
//     {
//         "name": "ravenk9.com",
//         "status": null
//     },
//     {
//         "name": "onyxcanine.com",
//         "status": null
//     },
//     {
//         "name": "obsidianpaws.com",
//         "status": null
//     },
//     {
//         "name": "coaldog.com",
//         "status": null
//     },
//     {
//         "name": "pitchpup.com",
//         "status": null
//     },
//     {
//         "name": "charcoalcanines.com",
//         "status": null
//     },
//     {
//         "name": "jetfur.com",
//         "status": null
//     },
//     {
//         "name": "inkedpooch.com",
//         "status": null
//     },
//     {
//         "name": "ebonytail.com",
//         "status": null
//     },
//     {
//         "name": "noirhound.com",
//         "status": null
//     },
//     {
//         "name": "midnighttail.com",
//         "status": null
//     },
//     {
//         "name": "shadowspot.com",
//         "status": null
//     },
//     {
//         "name": "ravencoat.com",
//         "status": null
//     },
//     {
//         "name": "onyxpack.com",
//         "status": null
//     },
//     {
//         "name": "obsidianfido.com",
//         "status": null
//     },
//     {
//         "name": "coalpooch.com",
//         "status": null
//     },
//     {
//         "name": "pitchpaws.com",
//         "status": null
//     },
//     {
//         "name": "charcoalcompanion.com",
//         "status": null
//     },
//     {
//         "name": "jetcanine.com",
//         "status": null
//     },
//     {
//         "name": "inkedmutt.com",
//         "status": null
//     },
//     {
//         "name": "ebonyfurry.com",
//         "status": null
//     },
//     {
//         "name": "noirnose.com",
//         "status": null
//     },
//     {
//         "name": "midnightpals.com",
//         "status": null
//     },
//     {
//         "name": "shadowfriend.com",
//         "status": null
//     },
//     {
//         "name": "ravenpups.com",
//         "status": null
//     },
//     {
//         "name": "onyxdoggo.com",
//         "status": null
//     },
//     {
//         "name": "obsidianpooches.com",
//         "status": null
//     },
//     {
//         "name": "coalcuddles.com",
//         "status": null
//     },
//     {
//         "name": "pitchpawed.com",
//         "status": null
//     },
//     {
//         "name": "charcoalpupp.com",
//         "status": null
//     },
//     {
//         "name": "jet4legs.com",
//         "status": null
//     },
//     {
//         "name": "inkedcomrade.com",
//         "status": null
//     },
//     {
//         "name": "ebonyadventurer.com",
//         "status": null
//     },
//     {
//         "name": "noirwagger.com",
//         "status": null
//     },
//     {
//         "name": "midnightfido.com",
//         "status": null
//     },
//     {
//         "name": "shadowhiker.com",
//         "status": null
//     },
//     {
//         "name": "ravenbuddy.com",
//         "status": null
//     },
//     {
//         "name": "onyxexplorer.com",
//         "status": null
//     },
//     {
//         "name": "obsidiantrail.com",
//         "status": null
//     },
//     {
//         "name": "coalcamaraderie.com",
//         "status": null
//     },
//     {
//         "name": "pitchpartner.com",
//         "status": null
//     },
//     {
//         "name": "charcoalchums.com",
//         "status": null
//     },
//     {
//         "name": "jetadoptee.com",
//         "status": null
//     },
//     {
//         "name": "inkedfriendship.com",
//         "status": null
//     },
//     {
//         "name": "ebonybond.com",
//         "status": null
//     }
// ]

// const domainRegistars = [
//     {
//         "name": "GoDaddy",
//         "website": "https://www.godaddy.com",
//         "logo": "data:image/png;base64,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"
//     },
//     {
//         "name": "Namecheap",
//         "website": "https://www.namecheap.com",
//         "logo": "https://static-00.iconduck.com/assets.00/namecheap-icon-2048x2048-ft2h6a21.png"
//     },
//     {
//         "name": "Google Domains",
//         "website": "https://domains.google",
//         "logo": "https://i.pinimg.com/originals/dc/60/2d/dc602d54b32e71832d773ac52e1c4b2a.png"
//     },
//     {
//         "name": "1&1 IONOS",
//         "website": "https://www.ionos.com",
//         "logo": "https://d3hjzzsa8cr26l.cloudfront.net/8079667b-2cf8-11e6-bce7-6ff134176666.jpg?pw=264"
//     },
//     {
//         "name": "Bluehost",
//         "website": "https://www.bluehost.com",
//         "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjcWxmniQLfDrhOgE8_jI54Uum6zvIRULjw&usqp=CAU"
//     },
//     {
//         "name": "HostGator",
//         "website": "https://www.hostgator.com",
//         "logo": "https://seeklogo.com/images/H/hostgator-logo-E1766CB4ED-seeklogo.com.png"
//     },
//     {
//         "name": "DreamHost",
//         "website": "https://www.dreamhost.com",
//         "logo": "https://cdn.icon-icons.com/icons2/2699/PNG/512/dreamhost_logo_icon_170216.png"
//     },
//     {
//         "name": "Register.com",
//         "website": "https://www.register.com",
//         "logo": "https://laceyssolicitors.co.uk/wp-content/uploads/2022/03/Registerted-TM.png"
//     },
//     {
//         "name": "Name.com",
//         "website": "https://www.name.com",
//         "logo": "https://d3ml3b6vywsj0z.cloudfront.net/website/product-images/Name.jpg"
//     },
//     {
//         "name": "Gandi",
//         "website": "https://www.gandi.net",
//         "logo": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wurppyryuvtgxwn75gos"
//     },
//     {
//         "name": "Network Solutions",
//         "website": "https://www.networksolutions.com",
//         "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT95QZM7YmewHy-o9Do-izcHbCVmeSwX2EfKzK_RnHwe89YSygbJo1zmvIFit2Jtv-yCXM&usqp=CAU"
//     },
//     {
//         "name": "Enom",
//         "website": "https://www.enom.com",
//         "logo": "data:image/png;base64,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"
//     }
// ]
  

// function DomainName({ name }:any) {
//     return (
//         <span className="inline-block text-gray-900 pr-4 mb-1.5">{name}</span>
//     )
// }

// function ScrollableList() {
   
//     return (
//         <>
//         <div className="inset-x-0 top-0 flex justify-center bg-gradient-to-b from-white pb-20 pt-8 pointer-events-none absolute"></div>
                        
//             <div style={{ height: '100%', overflowY: 'hidden' }}>
//                 {dataDomains.map((item, index) => (
//                     <DomainName key={index} name={item} />
//                 ))}
//             </div>

//         <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-20 pb-8 pointer-events-none absolute"></div>
//         </>
//     );

// }



// function DomainRegistarItem({ item, isActive }:any) {
//     return (
//         <div className={`flex items-center space-x-4 border p-3 rounded ${isActive ? "border-purple-300 shadow" : ""} `}>
//             <div className="h-12 w-12">
//                 <img src={item.logo} className="object-fit h-full w-full" />
//             </div>
//             <div>
//                 {item.name}
//             </div>
//         </div>
//     )
// }




// function StepDomainIntel() {
//     return (
//         <div>
//             <ScrollableList />   
//         </div>
//     )
// }

// function StepDomainSelect() {
//     return (
//         <div>
//             <div>
//             {domainNames && domainNames.map((domain) => {
//                 return <DomainName key={domain} name={domain.name} />
//             })}
//             </div>
//             <p>
//             List of free domain names and pre-select one with a hightlight - then show 'next' button
//             </p>
//         </div>
//     )
// }

// function StepDomainRegister() {

    
//     const [activeIndexes, setActiveIndexes] = useState([]);

//     useEffect(() => {
//       const interval = setInterval(() => {
//         // Generate random number of active elements (between 2 and 3)
//         const activeCount = Math.floor(Math.random() * 2) + 2;
  
//         // Generate random indexes to set as active
//         const randomIndexes = [];
//         const itemCount = domainRegistars.length;
  
//         while (randomIndexes.length < activeCount) {
//           const randomIndex = Math.floor(Math.random() * itemCount);
//           if (!randomIndexes.includes(randomIndex)) {
//             randomIndexes.push(randomIndex);
//           }
//         }
  
//         // Update active indexes state
//         setActiveIndexes(randomIndexes);
  
//         // Clear interval after a certain time (e.g., 500ms)
//         setTimeout(() => {
//             setActiveIndexes([]);
//         }, 500);
//     }, 1000);
  
//       return () => clearInterval(interval);
//     }, []);

//     return (
//         <div>
//             <div className="grid grid-cols-2 gap-4">
//             {domainRegistars && domainRegistars.map((item, index) => (
//                 <DomainRegistarItem
//                     key={index}
//                     item={item}
//                     isActive={activeIndexes.includes(index)}
//                 />
//             ))}
//             </div>
//             <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-20 pb-8 pointer-events-none absolute"></div>
//         </div>
//     )
// }

// function StepDomain() {
//     const { currentStep } = useGuide();

//     // Find Domain

//     // 

//     useEffect(() => {
//         console.log("domain", currentStep);
//     }, [])

//     // const [step, setStep] = useState('intel') // intel | select | register

//     // const domainSteps = {
//     //     intel: {
//     //         name: "Gathering Intel",
//     //         component: <StepDomainIntel />
//     //     },
//     //     select: {
//     //         name: "Selecting Domain Name",
//     //         component: <StepDomainSelect />,
//     //     },
//     //     register: {
//     //         name: "Registering domain",
//     //         component: <StepDomainRegister />
//     //     }
//     // }

//     // const currentStepItem = domainSteps[step]
        
//     // const goToPreviousStep = () => {
//     //     // Logic to go to the previous step
//     //     // You can define the logic based on your requirements
//     //     // Example: If the current step is 'register', go to 'select'
//     //     if (step === 'register') {
//     //     setStep('select');
//     //     } else if (step === 'select') {
//     //     setStep('intel');
//     //     }
//     // };

//     // const goToNextStep = () => {
//     //     // Logic to go to the next step
//     //     // Example: If the current step is 'intel', go to 'select'
//     //     if (step === 'intel') {
//     //         setStep('select');
//     //     } else if (step === 'select') {
//     //         setStep('register');
//     //     }
//     // };
    
//     return (
//         <div>
// Domain
//             <section className="relative h-[490px]">
//                 {/* {currentStepItem.component} */}
//             </section>
            
//         </div>
//     );
// }

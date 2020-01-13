import React from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';

function About() {
    return (
        <div>
            <Header title="About Merlin Neurotech" />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <SubHeader title="What Are We" />
                        <p>Imagine living in a world where any of these are used in 
                            your everyday life. <br />
                            a) A device that sends weak electrical pulses into the 
                            user’s brain with the intent of enhancing the efficiency 
                            of physical training, <br />
                            b) Brain implants to directly link human minds to 
                            computers. These are devices that allow people to control 
                            software and devices using only their brain activity in real-time. <br />
                            c) Vehicle neuroconfigurators to anticipate drivers’ actions. <br />
                            d) AI-driven neuromarketing, which aims to provide insights 
                            into the subconscious motivations of consumers.  <br />

                            The reality is, all of this technology exists and a startup 
                            somewhere is pursuing every one of the innovations mentioned. 
                            This is why we are here. </p>

                            <p>
                            We, at Merlin Neurotechnology, see the opportunity to leverage 
                            this niche market and establish Queen’s as a prominent new 
                            centre for Neurotechnology. We see a future where Queen’s 
                            graduates, armed with their classroom curriculum and the 
                            skills they learn through the club, can be equipped with 
                            the skills to create a real impact on society - and are 
                            known for it. Merlin Neurotechnology is one of only eleven 
                            Neurotechnology design teams in Canada affiliated with 
                            NeurotechX. If we structure our growth correctly and 
                            carefully, Queen’s will be poised to have graduates 
                            knowledgeable about this industry. While we, as an 
                            undergraduate design team, do not have the resources to 
                            create or these technologies or come up with the latest 
                            neuroscience breakthrough. We are able to find, train, and 
                            foster an environment for some of the brightest and most 
                            driven students on Queen’s Campus to get a step ahead and 
                            learn skills that complement what they learn in the classroom 
                            to directly have significant impacts on this industry upon 
                            graduation.</p>
                        <SubHeader title="Our Objectives" />
                        <p> Our objectives are encompassed into three categories. <br />
                            <br />
                            <b>Education:</b> 
                            <br />We are currently teaching a course on the 
                            fundamental concepts of Neurotechnology so that all members 
                            on our development team are one the same page an receive the 
                            same training. <br />
                            <br />
                            <b>Projects:</b> <br />
                            Through personal experience, we know we learn best 
                            by doing. The team has two large projects planned for this 
                            year; the first is a device that will aim to provide neurofeedback 
                            regarding a user’s fatigue, attentiveness, caffeination, and 
                            dehydration levels. Each required Artificial Intelligence (AI) 
                            classifier will be separately developed for each metric, with 
                            the resulting productivity scale summarizing the combined results 
                            from each input. <br />
                            The second project is its own category: <br />
                            <br />
                            <b>Open Source Platform:</b> <br />
                            Currently, there is no open-source code that programmers can use 
                            to stream and apply filters to live brain signal data. Our two 
                            API’s, BLE2LSL (Bluetooth Low Energy to Lab Streaming Layer) and 
                            Wizard Hat, do just that. We are enhancing our APIs to increase 
                            functionality and accessibility. This will serve as a long-term 
                            modular solution so that anyone, anywhere can build projects using 
                            our platform. Furthermore, this is a unique learning opportunity 
                            for the development team to create a fully modular system, across 
                            multiple platforms, through various design iterations and development 
                            cycles. This is our most extensive and largest planned project to date. <br />
                            This third category of objectives comes from our belief that the best 
                            ideas come from true collaboration and often from the most unlikely 
                            places. We can’t do it all ourselves, and therefore, we are enabling 
                            third parties to allow anyone with access to our open-source platform 
                            to create their version of “the best idea.” This is when genuine 
                            innovation will occur.  <br />
                            We are in the unique position of operating through the school. We aim 
                            to use ingenuity to design without external pressures. This means we 
                            can create for the purpose of creating and work hard so that what we 
                            do can be taken across disciplines and build a stronger neurotech 
                            community with the brightest minds. <br />
                            <br />
                            In summary, Merlin in laying the foundation at Queen’s to connect 
                            computers with the brain. As Eric Kandel, Nobel Prize recipient in 
                            2000 said, “The biology of the brain will be to the 21st century what 
                            the biology of the genome was to the 20th century”. This industry is 
                            taking off now. We know we can not do this by ourselves, and we would 
                            appreciate any expertise and mentorship in this manner. 
                            </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}
export default About;
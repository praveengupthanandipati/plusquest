import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../components/SubPageHeader";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const subTitle ="Connect With Us";
  const title ="Get in Touch – We're Here to Help You Succeed";
  const mapSectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Map Section Animation
    gsap.from(mapSectionRef.current.querySelector('iframe'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: mapSectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(mapSectionRef.current.querySelector('article'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: mapSectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <main className="Subpage">
      <section className="subpageHeader">
        <SubPageHeader
          subtitle={subTitle}
          title={title}          
        />
           <div className="container">
            <div className="BreadCrumb pt-4">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>                
                    <li className="breadcrumb-item active" aria-current="page">
                      {subTitle}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
      </section>

      <section className="subpageContent">
        <div className="container">
          {/* top row */}
          <div className="row justify-content-between">
            <div className="col-lg-7 align-self-center">
              <h4 className="font-bold pb-4">
              Contact Plus Quest via email, phone, or the form to unlock tailored web solutions. From sleek websites to powerful apps, we'll align our skills with your goals. Let's build your next digital success story
              </h4>
              <p>
                Email:
                <Link to="mailto:info@plusquest.com">info@plusquest.com</Link>
              </p>
              <p>Phone: <Link to="tel:+11234567890">+1 (123) 456-7890</Link></p>
              <div className="row contactcols">
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="card h-100 mb-2">
                    <div className="card-body">
                      <h5 className="card-title font-bold">Customer Support</h5>
                      <p className="card-text">
                        Our support team is available around the clock to
                        address any concerns or queries you may have.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="card h-100 mb-2">
                    <div className="card-body">
                      <h5 className="card-title font-bold">Feedback and Suggestions</h5>
                      <p className="card-text">
                       We value your feedback and are continuously working to improve Snappy.  Your input is crucial in shaping the future of Snappy.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="card h-100 mb-2">
                    <div className="card-body">
                      <h5 className="card-title font-bold">Media Inquiries</h5>
                      <p className="card-text">
                        For media-related questions or press inquiries, please contact us at media@plusquest.com.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-4 mt-4 mt-lg-0">
            <ContactForm/>               
            </div>
          </div>
           {/* top row ends */}

           {/* row starts */}
           <div className="row py-3 py-md-5 justify-content-between" ref={mapSectionRef}>
               <div className="col-md-7">
                <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22530153.459896635!2d-129.94270855!3d46.423669000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809b217e011534db%3A0xff414bc821f08caf!2sQuest%20Technology%20Management!5e0!3m2!1sen!2sin!4v1744303456981!5m2!1sen!2sin"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Maps Location"
                      className="rounded-4"
                    />
               </div>
               <div className="col-md-4 align-self-center">
                  <article>
                        <p className="pb-0 mb-0">Our Location</p>
                        <h4 className="font-bold">Conncting Near and Far</h4>
                        <p><strong>Headquarters</strong></p>
                        <article className="addressarticle">
                            <p className="pb-0 mb-0">Plus Quest.</p>
                            <p>San Franciso, USA, 123, Tech Bouleward, Suite 456, San Francisco, CA 12345, United States</p>
                        </article>
                  </article>
               </div>
           </div>
           {/* row ends */}
        </div>
      </section>
    </main>
  );
};

export default Contact;

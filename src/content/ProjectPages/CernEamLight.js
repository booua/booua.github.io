import React from "react"

const CernEamLight = () => {
    return (
      <div>
        EAM Light is a multi-layer web application for which the front-end has
        been developed in ReactJS and the back-end in JavaEE, which in turn is
        using the EAM WS Hub Core for all communication with Infor EAM.
        <br></br> The EAM Light application is fully based on the business
        logic and access rights in Infor EAM which means that the light-weight
        interface can benefit from the configuration capabilities of the
        underlying system.
        <a
          style={{ fontSize: "1.4rem", color: "white" }}
          href="https://github.com/cern-eam/eam-light-frontend"
        >
          CHECK IT OUT!
        </a>
      </div>
    );
  }

  export default CernEamLight;
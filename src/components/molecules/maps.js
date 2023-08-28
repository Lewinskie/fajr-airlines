import React from "react";

const Maps = () => {
  return (
    <div class="map_inner">
      <div class="map_bind">
        <div
          style={{
            position: "relative",
            textAlign: "right",
            height: "580px",
            width: "100%",
          }}
        >
          <div>
            <iframe
              width="100%"
              height="580px"
              src="https://maps.google.com/maps?q=wilson airport phoenix house&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              aria-hidden="false"
              style={{
                overflow: "hidden",
                background: "none!important",
                height: "580px",
                width: "100%",
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;

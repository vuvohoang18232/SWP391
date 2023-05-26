import React from "react";
import "./Home.scss";
import { courses } from "../../../utils/constants";

const pic1 = "./assets/image/image 7.png";
const pic2 =
  "./assets/image/349252733_767865025124137_1990273265293346631_n.png";
const pic3 = "./assets/image/Rectangle 106.png";
const icon1 =
  "./assets/image/349365395_213821334840741_2148580049061466405_n.png";
const icon2 =
  "./assets/image/349265349_6151783361537183_8975635570341432376_n.png";
const icon3 =
  "./assets/image/349378402_734588561755801_3608434385606838314_n.png";
const icon4 =
  "./assets/image/349554629_776951850590374_4911598887469533386_n.png";

const Home = () => {
  return (
    <div className="home-container">
      <section className="section-head">
        <img src={pic1} alt="" />
        <div>
          <h1>READY TO EXPLORE THE BEAUTY OF WONDERFUL WORLD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            commodi rem voluptatem assumenda? Expedita eveniet perspiciatis
            consequatur nemo. In quae cum facilis asperiores ipsam possimus
            nesciunt illo vitae quos ex?
          </p>
        </div>
      </section>
      <section className="section-course">
        <h2>OUR COURSE</h2>
        <h1>OUR BEST COURSE FOR YOUR BIRDS</h1>
        <div className="image-container">
          <div className="image-slider">
            {courses.map((image) => (
              <div
                key={image.id}
                style={{ marginLeft: "3%" }}
                className="image-wrapper"
              >
                <div>
                  <img src={image.src} alt={image.id} />
                  <div className="desc">
                    <h1 style={{ marginBottom: "7%" }}>abc</h1>
                    <div className="desc-container">
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "10%",
                          }}
                        >
                          <div>Suitable bird type:</div>
                          <div>{image.suit.join(", ")}</div>
                        </div>
                        <div
                          style={{
                            textAlign: "left",
                            display: "flex",
                            flexDirection: "row",
                            marginBottom: "10%",
                          }}
                        >
                          <div>Birds enrolled:</div>
                          <div>
                            <img src={pic2} alt="" style={{ width: "25px" }} />
                            {image.enrolled}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <p
                          style={{
                            color: "#617a55",
                            fontWeight: "bolder",
                            marginRight: "10%",
                          }}
                        >
                          Price tag
                        </p>
                        <button
                          style={{
                            border: "0px",
                            borderRadius: "10px",
                            backgroundColor: "#617a55",
                            color: "white",
                            padding: "2%",
                          }}
                        >
                          Explore more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-service">
        <h2>OUR SERVICE</h2>
        <h1>Areas of Expertise</h1>
        <div className="top-half-container">
          <div className="column-1">
            <img src={pic3} alt="" />
          </div>
          <div className="column column-2">
            <div>
              <img src={icon1} alt="" />
              <p style={{ fontWeight: "bolder" }}>Workshops</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                est!
              </p>
            </div>
            <div>
              <img src={icon2} alt="" />
              <p style={{ fontWeight: "bolder" }}>In-home training</p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, tempore!
              </p>
            </div>
          </div>
          <div className="column column-3">
            <div>
              <img src={icon3} alt="" />
              <p style={{ fontWeight: "bolder" }}>Private Lessons</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, cum.
              </p>
            </div>
            <div>
              <img src={icon4} alt="" />
              <p style={{ fontWeight: "bolder" }}>Bird classes</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                unde.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

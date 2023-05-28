import React from "react";
import "./Home.scss";
import {
  courses,
  clients,
  pic1,
  pic2,
  pic3,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  largepic1,
  largepic2,
} from "../../../utils/constants";
import Draggable from "react-draggable";

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
        <div className="heading">
          <h2>OUR COURSE</h2>
          <div>
            <h1>OUR BEST COURSE FOR YOUR BIRDS</h1>
          </div>
        </div>
        <div className="image-container">
          <div className="image-slider">
            {courses.map((image) => (
              <Draggable key={image.id} axis="x" handle=".image-wrapper">
                <div style={{ marginLeft: "3%" }} className="image-wrapper">
                  <div>
                    <img src={image.src} alt={image.id} />
                    <div className="desc">
                      <h1 style={{ textAlign: "left" }}>{image.name}</h1>
                      <div className="desc-container">
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            fontSize: "90%",
                          }}
                        >
                          <div
                            style={{
                              marginTop: "5%",
                              textAlign: "left",
                              display: "flex",
                              flexDirection: "row",
                            }}
                          >
                            <div>Suitable bird type:</div>
                            <b style={{ width: "40%", marginLeft: "5%" }}>
                              {image.suitText.join(", ")}
                            </b>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              marginTop: "5%",
                            }}
                          >
                            <div style={{ alignSelf: "flex-start" }}>
                              Birds enrolled:
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "20%",
                              }}
                            >
                              <img
                                src={pic2}
                                alt=""
                                style={{ width: "25px" }}
                              />
                              <b style={{ marginLeft: "5px" }}>
                                {image.enrolledNum}
                              </b>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "5%",
                          }}
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
                              borderRadius: "20px",
                              backgroundColor: "#617a55",
                              color: "white",
                              padding: "6px",
                              width: "100px",
                            }}
                          >
                            Explore more
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Draggable>
            ))}
          </div>
        </div>
      </section>
      <section className="section-service">
        <div className="heading">
          <h2>OUR SERVICE</h2>
          <div>
            <h1>Areas of Expertise</h1>
          </div>
        </div>
        <div className="top-half-container">
          <div className="column-1">
            <img src={pic3} alt="" />
          </div>
          <div className="column column-2">
            <div className="card1">
              <img src={icon1} alt="" />
              <div style={{ fontWeight: "bolder" }}>Workshops</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                est!
              </p>
            </div>
            <div className="card2">
              <img src={icon2} alt="" />
              <div style={{ fontWeight: "bolder" }}>In-home training</div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Exercitationem, tempore!
              </p>
            </div>
          </div>
          <div className="column column-3">
            <div className="card3">
              <img src={icon3} alt="" />
              <div style={{ fontWeight: "bolder" }}>Private Lessons</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, cum.
              </p>
            </div>
            <div className="card4">
              <img src={icon4} alt="" />
              <div style={{ fontWeight: "bolder" }}>Bird classes</div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim,
                unde.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-half-container">
          <div className="left-side">
            <div className="image-1">
              <img src={largepic1} alt="" />
            </div>
            <div className="image-2">
              <img src={largepic2} alt="" />
            </div>
          </div>
          <div className="right-side">
            <div className="header">
              EFFECTIVE BIRD TRAINING, REAL BEHAVIOR SOLUTION
            </div>
            <p className="desc-container">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit possimus architecto velit quos? Ratione perferendis
              laudantium dolor cumque repudiandae obcaecati?
            </p>
            <div className="checkmark-container">
              <div>
                <img src={icon5} alt="" />
                <b>Develop a clear and loving relationship</b>
              </div>
              <div>
                <img src={icon5} alt="" />
                <b>Being able to commutnicate with them</b>
              </div>
              <div>
                <img src={icon5} alt="" />
                <b>Always be eager to pelase</b>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-results">
        <div className="heading">
          <h2>OUR RESULTS</h2>
          <div>
            <h1>OUR DRESSAGE RESULTS ARE FANTASTIC</h1>
          </div>
        </div>
        <div className="results-container">
          <div className="result-container">
            <div
              style={{
                color: "#e39c46",
                fontWeight: "bold",
              }}
              className="statistic"
            >
              20+
            </div>
            <div>
              <h1>YEARS OF EXPERIENCE</h1>
            </div>
          </div>
          <div className="result-container">
            <div style={{ color: "#2f7cea" }} className="statistic">
              300K
            </div>
            <h1>TOTAL BIRDS TRAINED</h1>
          </div>
          <div className="result-container">
            <div style={{ color: "#ef7b6b" }} className="statistic">
              12
            </div>
            <h1>BIRD TRAINERS</h1>
          </div>
          <div className="result-container">
            <div style={{ color: "#977cf0" }} className="statistic">
              18
            </div>
            <h1>MONTHLY TRAINING</h1>
          </div>
        </div>
      </section>
      <section className="section-testimonial">
        <div className="heading">
          <h2>TESTIMONIAL</h2>
          <div>
            <h1>WHAT OUR CIENT SAY</h1>
          </div>
        </div>
        <div className="image-container">
          <div className="image-slider">
            {clients.map((image) => (
              <div
                key={image.id}
                style={{ marginLeft: "3%" }}
                className="image-wrapper"
              >
                <div>
                  <img src={image.src} alt={image.id} />
                  <div className="desc">
                    <h1>{image.name}</h1>
                    <div className="desc-container">
                      <div>{image.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-foot">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "40px",
              marginTop: "2%",
            }}
          >
            <h1>ANY BIRDS ANY SIZE ANY PROBLEM</h1>
            <h1 style={{ color: "#617a55" }}>GUARANTEED</h1>
          </div>
        </div>
        <div className="desc-container">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem fugiat enim voluptatum molestias laboriosam
            necessitatibus omnis totam, similique itaque ullam rerum dolores a
            quisquam ipsa repudiandae? Aspernatur ducimus facilis sed.
          </div>
        </div>
        <div className="button-container">
          <button>Let's Talk</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useEffect, useRef } from "react";
import "./resources/js/app";
import { videos, images } from "./resources/js/assets";

const getImagePath = (imageName) => {
  return require(`./resources/images/main/${imageName}.jpg`);
};

function Gallery() {
  const imageNames = ["member1", "member2", "member3"];
  const joinDate = ["2022-01-03", "2022-01-03", "2018-04-23"];
  return (
    <>
      {imageNames.map((imageName, index) => (
        <div key={imageName}>
          <div className="pic">
            <img src={getImagePath(imageName)} alt={imageName} />
          </div>
          <div className="con">
            <h2>{imageName} Information</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima,
              quibusdam.
            </p>
            <span>{joinDate[index]}</span>
          </div>
        </div>
      ))}
    </>
  );
}

function App() {
  const circleRef = useRef(null); // circle 요소에 대한 ref
  const articleRefs = useRef([]); // article 요소들을 위한 ref 배열

  useEffect(() => {
    // 모든 article 요소에 이벤트 리스너 추가
    const currentArticleRef = articleRefs.current;
    currentArticleRef.forEach((articleEl) => {
      if (articleEl) {
        articleEl.addEventListener("mouseover", handleMouseOver);
        articleEl.addEventListener("mouseout", handleMouseOut);
      }
    });

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      currentArticleRef.forEach((articleEl) => {
        if (articleEl) {
          articleEl.removeEventListener("mouseover", handleMouseOver);
          articleEl.removeEventListener("mouseout", handleMouseOut);
        }
      });
    };
  }, []);

  const handleMouseOver = () => {
    if (circleRef.current) {
      circleRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseOut = () => {
    if (circleRef.current) {
      circleRef.current.style.animationPlayState = "running";
    }
  };

  // 각 article에 ref를 할당하는 함수
  const setArticleRef = (el, index) => {
    if (el) {
      articleRefs.current[index] = el;
    }
  };

  return (
    <main className="wrap">
      <video src={videos.bgVideo} loop muted autoPlay></video>
      <section id="circle" ref={circleRef}>
        <article className="face1" ref={(el) => setArticleRef(el, 0)}>
          <h1>Co Company</h1>
          <div className="inner">
            <div>
              <p>
                <i className="fab fa-android"></i>
              </p>
              <h2>Android</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-apple"></i>
              </p>
              <h2>Apple</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-twitter-square"></i>
              </p>
              <h2>Twitter</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-facebook-square"></i>
              </p>
              <h2>Facebook</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-youtube"></i>
              </p>
              <h2>Youtube</h2>
            </div>
            <div>
              <p>
                <i className="fab fa-google-play"></i>
              </p>
              <h2>Google</h2>
            </div>
          </div>
        </article>
        <article className="face2" ref={(el) => setArticleRef(el, 1)}>
          <h1>What's New?</h1>
          <div className="inner">
            <div>
              <h2>News Article</h2>
              <img src={images.pattern} alt="뉴스소개 이미지" />
              <h3>Lorem ipsum dolor sit.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusantium blanditiis voluptates dolorum consequatur, excepturi
                rem! Expedita, eos nisi, esse excepturi necessitatibus culpa
                dicta cum eligendi tenetur pariatur suscipit, temporibus
                delectus?
              </p>
            </div>
          </div>
        </article>
        <article className="face3" ref={(el) => setArticleRef(el, 2)}>
          <h1>Members</h1>
          <div className="inner">
            <Gallery />
          </div>
        </article>
        <article className="face4" ref={(el) => setArticleRef(el, 3)}>
          <h1>Advertisement</h1>
          <div className="inner">
            <div>
              <video src={videos.fc4Video} controls autoPlay loop></video>
              <h2>Promoton</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam ipsum consequatur delectus pariatur doloribus inventor
                dicta accusamus natus possimus facere nesciunt, eaque
                consequuntur quo?
                <br />
                <br />
                Quam sunt repellat doloremque distinctio impedit.
              </p>
            </div>

            <div>
              <h2>Information</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <em>2022-03-02</em>
            </div>
          </div>
        </article>
        <article className="face5" ref={(el) => setArticleRef(el, 4)}>
          <h1>DCODELAB</h1>
          <div className="inner">
            <div>
              <h2>
                <img src={images.tit} alt="DCODELAB" />
              </h2>
              <div className="pic">
                <img src={images.robot} alt="robot" />
              </div>
              <img src={images.txt} alt="Who's Next?" />
              <a href="#" onClick={(e) => e.preventDefault()}>
                <img src={images.btn} alt="button" />
              </a>
              <img src={images.reflect} alt="reflection" className="reflect" />
            </div>
          </div>
        </article>
        <article className="face6" ref={(el) => setArticleRef(el, 5)}>
          <h1>Services</h1>
          <div className="inner">
            <div>
              <i className="fas fa-code"></i>
              <div className="con">
                <h2>Lorem, ipsum.</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <div className="con">
                <h2>Numquam, perspiciatis.</h2>
                <p>
                  Porro consectetur placeat aspernatur ullam, aut quidem rem!
                </p>
              </div>
            </div>
            <div>
              <i className="fas fa-list"></i>
              <div className="con">
                <h2>Consequatur, voluptates.</h2>
                <p>Ex ipsum dolore error corrupti commodi eius cupiditate.</p>
              </div>
            </div>
            <div>
              <i className="fas fa-rss"></i>
              <div className="con">
                <h2>Pariatur, harum.</h2>
                <p>
                  In animi minus voluptatibus nisi illo, mollitia temporibus!
                </p>
              </div>
            </div>
          </div>
        </article>
        <article className="face7" ref={(el) => setArticleRef(el, 6)}>
          <h1>Promotion</h1>
          <div className="inner">
            <div>
              <div>
                <video src={videos.loopVideo} autoPlay loop muted></video>
                <h2>
                  Promote <br /> Your <br /> Company
                </h2>
                <img src={images.txt2} alt="Who's Next?" />
                <img src={images.line} alt="lines" />
              </div>
            </div>
          </div>
        </article>
        <article className="face8" ref={(el) => setArticleRef(el, 7)}>
          <h1>Temperature</h1>
          <div className="inner">
            <div>
              <h2>Weather</h2>
              <i className="fas fa-cloud"></i>
              <span>
                26<em>o</em>
              </span>
            </div>
            <div>
              <i className="fas fa-sun"></i>
              <h3>Sunny</h3>
              <p>Afternoon Temperature</p>
              <span>
                23 <strong>o</strong>
              </span>
            </div>
            <div>
              <i className="fas fa-bolt"></i>
              <h3>Lightning</h3>
              <p>Night Temperature</p>
              <span>
                28 <strong>o</strong>
              </span>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;

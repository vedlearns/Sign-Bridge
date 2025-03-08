
const HomeUIComponent = ({setTab}) => {

  const handleOnClick = (e) => {
    setTab(e.target.textContent);
  };

  return (
    <>
      <h1 className="text-6xl font-bold pt-34 text-center text-white">
        Welcome To Sign Bridge
      </h1>
      <h2 className="text-2xl font-bold pt-10 text-center text-white">
        Where Gestures Become Voices
      </h2>
      <div className=" text-xl pt-5 text-center text-white">
        <button className="button">
          {" "}
          <a href="#main">Get Started</a>
        </button>
      </div>
{/* SB */}
      <div className=" contentContainer">
        <div className=" contentBox">
          <h1 className="text-center text-5xl p-2 text-white">Sign Bridge</h1>
          <p>
            In a world where communication is key, Sign Bridge aims to bridge
            the gap between the hearing and non-hearing communities. Our
            innovative AI-powered web app provides real-time translation of sign
            language gestures into written English, enabling seamless
            interaction between individuals regardless of their hearing
            abilities. Whether you're a member of the deaf community or someone
            wanting to better understand and communicate in sign language, Sign
            Bridge is designed to make conversations more inclusive. By
            leveraging the latest in machine learning and computer vision, we
            make it easier to translate sign language on the go helping you
            break down barriers and foster better connections.
          </p>
        </div>
        <div className="imageContainer">
          <img
            src="/images/HomeImages/National Disability Employment Awareness Month_ Increasing Access and Opportunity.jpeg"
            alt=""
          />
        </div>
      </div>
{/* Why SB  */}
      <div className=" contentContainer">
        <div className="imageContainer">
          <img
            src="/images/HomeImages/Sign Language, PECS As Communication And A Way To Reduce Frustration For Speech Impaired.jpeg"
            alt=""
          />
        </div>
        <div className=" contentBox">
          <h1 className="text-center text-5xl p-2 text-white">
            Why Sign Bridge?
          </h1>
          <p>
            <strong>Instant Translation:</strong> Get real-time translation from
            sign language to text instantly.
          </p>
          <p>
            <strong>User-Friendly Interface:</strong> No complicated setups—just
            open the app and start enjoying.
          </p>
          <p>
            <strong>Accessible Anytime, Anywhere: </strong> Whether you're at
            home, at work, or on the move, Sign Bridge is ready to assist you in
            understanding and translating sign language.
          </p>
          <p>
            <strong>Inclusive and Empowering: </strong> Promoting accessibility,
            equality, and meaningful communication for everyone.
          </p>
        </div>
      </div>
{/* SLT */}
      <div id="main" className=" contentContainer">
         <div className=" SLTBox flex flex-col">
          <h1 className="text-center text-5xl p-2 text-white">
            Sign Language Translator
          </h1>
          <p className="text-white my-5 mx-2 text-xl text-left">
            Bridge the gap in communication with our Sign Language Translator!
            This tool helps you recognize hand signs and convert them into text,
            making it easier to learn and understand sign language. Whether
            you're a beginner or looking to improve, this interactive experience
            fosters seamless and inclusive communication. Try it now and start
            expressing yourself effortlessly!
          </p>
          <button onClick={handleOnClick} className="bg-black button text-white px-6 w-50 cursor-pointer self-center py-3 text-xl font-semibold rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300">
          Translate
          </button>
        </div>
        <div className="imageContainer">
          <img
            src="/images/HomeImages/15 Enchanting Sign Language Gestures to Inspire Your Soul.jpeg"
            alt=""
          />
        </div>
      </div>
{/* Gestures */}
      <div className=" contentContainer">
      <div className="imageContainer">
          <img
            src="/images/HomeImages/asl-banner.jpeg"
            alt=""
          />
        </div>
      <div className="SLTBox flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-left  text-white text-3xl font-bold">
            Gestures
          </h1>
          <p className="text-white my-4 text-lg leading-loose">
            Discover commonly used sign language gestures in this interactive
            section. Whether you're a beginner or looking to refine your skills,
            explore a collection of essential hand signs used in daily
            communication. Each gesture is explained with visuals and
            descriptions to help you learn and recognize them easily.
          </p>
          <button onClick={handleOnClick} className="self-center cursor-pointer px-5 py-2 text-xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
          Gestures
          </button>
      </div>
      </div>
{/* Free Resources */}
      <div className=" contentContainer">
      <div className="SLTBox flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-left  text-white text-3xl font-bold">
            Free Resources
          </h1>
          <p className="text-white my-4 text-lg leading-loose">
            Learning sign language has never been easier! Access free tutorials,
            step-by-step guides, and interactive lessons to enhance your
            communication skills. From basic alphabets to advanced phrases, our
            resources cover everything you need to engage with the deaf
            community confidently.
          </p>
          <button onClick={handleOnClick} className="self-center px-5 cursor-pointer py-2 text-xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
          Resources
          </button>
      </div>
      <div className="imageContainer">
          <img
            src="/images/HomeImages/Vista frontal do homem usando a linguagem gestual _ Foto Grátis.jpeg"
            alt=""
          />
        </div>
      </div>
{/* Text to sign */}
      <div className=" contentContainer">
      <div className="imageContainer">
          <img
            src="/images/HomeImages/1000_F_414642994_uHk3ymAI5D8s5AEILGq6KFBlkq75ATdu.jpg"
            alt=""
          />
        </div>
      <div className="SLTBox flex flex-col space-y-6 p-6 bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-left text-white text-3xl font-bold">
            Text to Sign Image
          </h1>
          <p className="text-white my-4 text-lg leading-loose">
            Convert any text into sign language images instantly! This tool
            helps bridge the communication gap by generating corresponding sign
            representations for words and phrases. Ideal for learners,
            educators, and anyone who wants to communicate effectively in sign
            language. Simply enter your text and get visual sign translations in
            seconds!
          </p>
          <button onClick={handleOnClick} className="self-center  px-5 py-2 text-xl cursor-pointer font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-105">
          Text To Sign
          </button>
      </div>
      </div>

    </>
  );
};

export default HomeUIComponent;

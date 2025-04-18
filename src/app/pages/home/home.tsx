function Home() {
  return (
    <div className="container">
      <div className="row align-items-center m-4">
        <div className="col-6 p-2">
          <h3>About me</h3>
          <p>
            I am a software engineer with a passion for building scalable and
            efficient systems.
          </p>
        </div>
        <div className="col-6">
          <img
            src="/src/assets/images/me.jpg"
            alt="Personal Picture"
            className="cst-fit rounded-5"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;

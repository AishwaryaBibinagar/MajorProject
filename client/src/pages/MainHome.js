import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (

    <div id="page-top">
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container px-5">
          <a class="navbar-brand" href="#page-top"><img class="logo" src="https://images.collegedunia.com/public/college_data/images/logos/1617274823Screenshot20210401163006.png"></img> Stanley College of Engineering and Technology for Women</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item"><a class="nav-link" onClick={() => {
                navigate("/login");
              }}>Log In</a></li>

              <li class="nav-item"><a class="nav-link" onClick={() => {
                navigate("/register");
              }}>Sign Up</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container px-5">
            <h2 class="subhead mb-0">Student Result Management System and Faculty Feedback System</h2>
            <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">Learn More</a>
          </div>
        </div>

      </header>
      <div class="skill-row ">
        <h2> About College</h2>
        <p>Stanley College of Engineering and Technology for Women – a temple of learning was established in the year 2008 on a sprawling 6-acre campus of historic Stanley College campus at Abids, Hyderabad.
          The college provides a serene and tranquil environment to the students, boosting their mental potential and preparing them in all aspects to face the cut-throat global competition with a smile on the face and emerge victorious. Stanley College of Engineering and Technology for Women has been established with the support of Methodist Church of India that has been gracious and instrumental in making the vision of an Engineering College on this campus a reality.
          The College is affiliated to the prestigious Osmania University, Hyderabad. it has been approved by AICTE, New Delhi & permitted by the Government of Telangana . it has been sanctioned six UG – courses Computer Science & Engineering, Electronics and Communication Engineering ,Electrical and Electronics Engineering, Information Technology, Computer Engineering, Artificial Intelligence and Data Science  and three PG courses M.Tech in CSE, M.E in Embedded systems and Masters Degree in Business Administration.
        </p>
        <img class="imgplace" src="assets/img/accred.jpg" />
      </div>

      <section id="scroll">
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-7"><img class="img-fluid rounded-circle" src="assets/img/01.jpg" alt="..." /></div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-3 nav-link">

                <h2 class="display-6 cursor-pointer" onClick={() => {
                  navigate("/resulthome");
                }}>Click here to check your results and result analysis..</h2>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container px-5">
          <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
              <div class="p-7"><img class="img-fluid rounded-circle" src="assets/img/02.jpg" alt="..." /></div>
            </div>
            <div class="col-lg-6">
              <div class="p-3">
                <h2 class="display-6 cursor-pointer" onClick={() => {
                  navigate("/Feedbackmain");
                }}>Click here to Provide Feedback and Raise complaints!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-5 bg-black">
        <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; SCETW</p></div>
      </footer>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

      <script src="js/scripts.js"></script>

    </div>
  );
}

export default Home;

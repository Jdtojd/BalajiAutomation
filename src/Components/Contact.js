import React from 'react';

const Contact = () => {
  // const [userData, setUserData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   phone: '',
  //   email: '',
  //   address: '',
  //   message: '',
  // });
  // let name, value;
  // const postUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  //   setUserData({ ...userData, [name]: value });
  // };
  // // connect with firebase
  // const submitData = async (event) => {
  //   event.preventDefault();
  //   const { firstName, lastName, phone, email, address, message } = userData;
  //   if (firstName && lastName && phone && email && address && message) {
  //     const res = await fetch(
  //       'https://sporte-8c9f1-default-rtdb.firebaseio.com/userDataRecord.json',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           firstName,
  //           lastName,
  //           phone,
  //           email,
  //           address,
  //           message,
  //         }),
  //       }
  //     );

  //     if (res) {
  //       setUserData({
  //         firstName: '',
  //         lastName: '',
  //         phone: '',
  //         email: '',
  //         address: '',
  //         message: '',
  //       });
  //       alert('DATA STORED');
  //     } else {
  //       alert('PLEASE FILL THE DATA');
  //     }
  //   } else {
  //     alert('PLEASE FILL THE DATA');
  //   }
  // };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect with our team
                  </h1>
                  <p className="main-hero-para">
                    Whether you need urgent printer repairs or want to explore
                    our comprehensive servicing packages, don't hesitate to get
                    in touch. Our friendly and knowledgeable team is ready to
                    assist you.
                  </p>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <figure>
                    <img
                      src="./images/team.svg"
                      alt="team logo"
                      className="img-fluid "
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

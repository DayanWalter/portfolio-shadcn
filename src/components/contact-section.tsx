import ContactForm from "./contact-form";
// import Popup from "./Popup";

export default function Contact() {
  return (
    <>
      {/* Section */}
      <section
        id="contact"
        className="grid justify-center gap-12 py-16 md:gap-16 md:py-24"
      >
        {/* Container */}
        <div className="grid gap-8 border-l  px-4 md:max-w-7xl md:px-8 ">
          {/* Content */}
          <div className=" ">
            {/* Heading */}
            <h2 className="text-3xl font-semibold md:text-4xl">Contact Me</h2>
            <p className="">
              To get in touch with me, simply fill out the form below.
              Alternatively, you can also reach me via{" "}
              <a
                className="text-primary underline underline-offset-4"
                href="https://www.linkedin.com/in/dayanwalter/"
              >
                LinkedIn
              </a>{" "}
              or{" "}
              <a
                className="text-primary underline underline-offset-4"
                href="mailto:dayanwalter@gmail.com"
              >
                email
              </a>
              .
            </p>
          </div>
          {/* Content */}
          <div className=" md:max-w-xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

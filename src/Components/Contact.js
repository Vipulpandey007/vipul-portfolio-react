import { Contactdata } from "../Constants/ContactData";
import ContactCard from "./ContactCard";
import Title from "./Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black "
    >
      <Title title="Contact" des="Let's Work Together" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {Contactdata.map((item) => (
          <ContactCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Contact;

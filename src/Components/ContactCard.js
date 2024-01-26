const ContactCard = ({ item: { title, des, icon, link } }) => {
  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-2xl shadow-gray-950 flex items-center bg-white dark:bg-gray-900 transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500 cursor-pointer">
            <div className="w-10 h-8 flex flex-col justify-between">
              {icon ? (
                <span className="text-5xl text-designColor">{icon}</span>
              ) : (
                <>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                  <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                </>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl md:text-2xl font-titleFont font-bold text-black dark:text-white">
                {title}
              </h2>
              <p className="base text-black dark:text-white">{des}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;

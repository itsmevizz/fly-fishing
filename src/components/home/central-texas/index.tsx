const CentralTexasSection = () => {
  return (
    <section>
      <div className="bg-neutral-2 md:pt-20 pb-20  flex justify-center">
        <div className="container p-0">
          <div className="order-2 lg:order-none mx-auto pt-6 pb-6 pl-6 pr-6 lg:pl-0 lg:pr-0 md:w-[600px] h-[306px] space-y-4">
            <h1 className="whitespace-pre-line">{`Central Texas\nFly Fishing`}</h1>
            <p>
              At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
              cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <button className="button-main mt-2 ">Get started</button>
          </div>
          <div>
            <img src="assets/hero-pc.png" className="lg:block hidden" alt="" />
            <img src="assets/hero-mob.png" className="lg:hidden block" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CentralTexasSection;

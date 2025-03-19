import MemberCard from "./card";

const MemberStoriesSection = () => {
  return (
    <section>
      <div className="bg-neutral-2 pt-20 pb-20 flex justify-center">
        <div className="container">
          <div className="space-y-6 w-full">
            <h2 className="">Member stories</h2>
            <div className="h-0.5 w-full bg-neutral-70 mx-auto my-10 lg:hidden block"></div>

            <div className="grid  lg:grid-cols-2 gap-6 my-20 lg:my-0">
              <MemberCard
                title="John’s Story"
                url="/assets/member-stry01.png"
                description="Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh "
              />
              <MemberCard
                title="The Journey"
                url="/assets/member-stry02.png"
                description="Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc"
              />
              <MemberCard
                title="Catch Day"
                url="/assets/member-stry03.png"
                description="Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque"
              />
              <MemberCard
                title="Trout Tales"
                url="/assets/member-stry04.png"
                description="Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MemberStoriesSection;

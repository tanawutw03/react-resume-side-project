function SectionOne() {
  return (
    <>
      <div className="flex justify-center items-center gap-10">
        <div className="border flex flex-col gap-5">
          <div className="border border-red-500 flex flex-col items-start">
            <p>Hi!</p>
            <h1 className="text-black">I'm Tanawut Wongboot.</h1>
            <h1>a Full-Stack Developer</h1>
          </div>
          <div className="border border-green-500 text-start">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              quod ad, voluptate quibusdam repudiandae quasi quidem minima.
              Omnis in recusandae harum quia, sed hic fugiat culpa architecto
              quisquam, saepe totam nobis. Repudiandae ducimus ex quibusdam
              dignissimos, perferendis aut.
            </p>
          </div>
        </div>
        <div className="border">
          <img
            src="/SectionOneImage.jpeg"
            alt="profile image"
            className="w-[700px] h-full object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default SectionOne;

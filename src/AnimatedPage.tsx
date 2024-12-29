// src/AnimatedPage.js
import Paragraph from "./components/Paragraph";

const AnimatedPage = () => {
  const text = `  Hey I am Nabeel, a committed software engineering student with practical
  experience in full stack development. I have worked on several projects
  involving both frontend and backend components. My strong interest in
  technology drives me to develop effective and innovative solutions, and
  I am eager to continue advancing my skills in this field. `;
  return (
    <div>
      {/* <body className="flex items-center justify-center min-h-screen">
        <div className="relative overflow-hidden w-full max-w-3xl p-4">
          <div className="mask-left"></div>
          <div className="mask-right"></div>
          <div className="marquee-content">
            <p className="text-xl font-semibold">
              This is a marquee effect with gradient masks on both ends. The
              content moves from right to left, with fading shadows at the start
              and end points.
            </p>
          </div>
        </div>
      </body> */}
      <div className="h-screen"></div>
      <Paragraph value={text} />
      <div className="h-screen">okay</div>
    </div>
  );
};

export default AnimatedPage;

/*

 */

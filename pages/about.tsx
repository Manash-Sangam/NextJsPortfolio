import Timeline from '../components/Timeline';
import timelineData from '../data/timelineData';
export default function About() {

  return (
    <div className="about-container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <p className="text-neutral-700 text-sm md:text-base max-w-prose text-justify">
        Hello! I'm Manash, a passionate Software Engineer, Web Developer, and Tech Enthusiast. I love creating innovative solutions and exploring new technologies. With a strong background in computer science and hands-on experience in various projects, I am dedicated to delivering high-quality software and web applications. Let's connect and build something amazing together!
      </p>
      <Timeline data={timelineData} />
    </div>
  );
}
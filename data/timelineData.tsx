import ImageGrid from '../components/ImageGrid';

const timelineData = [
  {
    title: '2024-Present: Software Engineer at HSBC Technology India',
    content: (
      <div className="text-neutral-700">
        <p>
        This chapter marks a new and exciting phase in my journey as a Software Engineer at HSBC Technology India. Here, I am developing Python-based data lineage solutions to improve data tracking and documentation across banking applications. My work involves creating dynamic graph visualizations to trace data flow seamlessly and leveraging tools like Solidatus to design scalable, impactful solutions. Each day brings new challenges and opportunities to grow, making this experience both rewarding and transformative.
        </p>
        <ImageGrid
          images={[
            { src: '/assets/hsbcpoweringnext.jpeg', alt: 'Photo from HSBC Powering The Next Event', rowStart: 1, rowEnd: 4, colStart: 1, colEnd: 3 , fillType: "cover"},
            { src: '/assets/HSBCframe.jpeg', alt: 'Photo from the HSBC office', rowStart: 2 , rowEnd: 4, colStart: 3, colEnd: 4 , fillType: "cover"},
            { src: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/HSBC_%E6%BB%99%E8%B1%90_%28logo_only%29.svg', alt: 'HSBC Logo', rowStart: 1, rowEnd: 2, colStart: 3, colEnd: 4 },
          ]}
        />
      </div>
    ),
  },
  {
    title: '2020-2024: Graduation from KIIT Bhubaneswar',
    content: (
      <div className="text-neutral-700">
        <p>
        My time at KIIT Bhubaneswar was a journey of growth and learning, culminating in a degree in Computer Science and Engineering with a CGPA of 9.52/10 and an overall rank of 12th. Along the way, I had the opportunity to contribute to two publications and a patent, which were highlights of my academic experience. This chapter was as much about shared memories and friendships as it was about academic accomplishments—a time I will always cherish.
        </p>
        <ImageGrid
          images={[
            { src: '/assets/convocationdegree.jpeg', alt: 'Convocation Handed by Vice Chancellor', rowStart: 1, rowEnd: 3, colStart: 1, colEnd: 3 , fillType: "cover"},
            { src: '/assets/convocationroommates.jpeg', alt: 'Convocation photo with Roommates', rowStart: 2, rowEnd: 3, colStart: 3, colEnd: 4 , fillType: "cover"},
            { src: '/assets/convocationmomanddad.jpeg', alt: 'Convocation Photo with Mom and Dad', rowStart: 3, rowEnd: 4, colStart: 1, colEnd: 2 , fillType: "cover"},
            { src: '/assets/convocationfriends.jpeg', alt: 'Convocation Photo with Friends', rowStart: 3, rowEnd: 4, colStart: 2, colEnd: 4 , fillType: "cover"},
            { src: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/KIIT_logo.svg/220px-KIIT_logo.svg.png', alt: 'KIIT logo', rowStart: 1, rowEnd: 2, colStart: 3, colEnd: 4 },

          ]}
        />
      </div>
    ),
  },
  {
    title: '2023-2024: Freelancing Journey',
    content: (
      <div className="text-neutral-700">
        <p>
        During my final year of engineering, I embarked on an exciting freelancing journey, collaborating with diverse clients and tackling projects across various domains. I developed robust MERN applications, implemented CI/CD pipelines, containerized applications, and deployed them seamlessly to GCP and AWS, honing my expertise in REST APIs, Docker, cloud technologies, and DevOps practices. Additionally, I built a powerful web scraper API using Flask and Python, showcasing my ability to create scalable and efficient solutions. My passion for innovation extended to IoT, where I contributed to a smart farming project by leveraging skills in C++, Arduino programming, and hardware integration. This period was pivotal in shaping my technical acumen and problem-solving capabilities.
        </p>
        <ImageGrid
          images={[
            { src: '/assets/smartIrrigation.jpg', alt: 'Smart Irrigation Project Image', rowStart: 1, rowEnd: 3, colStart: 1, colEnd: 3 , fillType: "cover"},
            { src: '/assets/osrt.jpeg', alt: 'Webscraper for OSR Traders', rowStart: 3, rowEnd: 4, colStart: 1, colEnd: 2, fillType: "cover" },
            { src: '/assets/organickarnali.png', alt: 'MERN Stack Application for Organic Karnali', rowStart: 3, rowEnd: 4, colStart: 2, colEnd: 4 },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', alt: 'React JS', rowStart: 1, rowEnd: 2, colStart: 3, colEnd: 4 },
            { src: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg', alt: 'Next.JS', rowStart: 2, rowEnd: 3, colStart: 3, colEnd: 4 },
          ]}
        />
      </div>
    ),
  },
];

export default timelineData;

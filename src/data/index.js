import hero1 from "../../public/crew1.png";
import hero2 from "../../public/crew2.png";
import hero3 from "../../public/airplane-sky.jpg";

// Team
import User from "../../public/user-placeholder.png";

// Briefs
export const briefs = [
  {
    name: "Charter Flights",
    images: [hero1, hero2],

    description: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, explicabo sint, ea doloribus et vero sunt dolorum adipisci magni voluptate voluptatum quos. Quaerat perferendis quos iste delectus est quas eveniet!
    `,
  },
  {
    name: "Humanitarian And Relief Services",
    images: [hero1, hero2, hero3],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quisquam. Cumque voluptatibus aut minima earum, facere, dicta illo blanditiis ipsa velit quisquam esse accusantium dolorum natus minus doloribus eaque nam?`,
  },
  {
    name: "ACMI Solutions (Aircraft, Crew, Maintenance & Insurance)",
    images: [hero1, hero2],
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi corporis ipsum, eaque omnis labore non sint nihil ullam quis asperiores quae repellat natus autem! Veritatis neque ipsa totam nobis exercitationem natus cumque repellendus saepe ut! `,
  },
  {
    name: "Adhoc Flights",
    images: [hero1, hero2],
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus voluptate repellat facilis consequatur, pariatur soluta dignissimos beatae deleniti possimus enim, numquam minus accusamus? Possimus quis iste mollitia fugit quod, recusandae consequatur asperiores commodi! Nostrum eum autem officiis quam optio. `,
  },
  {
    name: "Specialized Operations",
    images: [hero1, hero2],
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit reiciendis reprehenderit recusandae culpa dolorum error quaerat adipisci debitis eveniet perspiciatis illum modi, ducimus voluptatem aliquid fugit vero totam numquam omnis nulla ab. `,
  },
];

export const NavTitles = [
  { id: 1, name: "Home", href: "/" },
  {
    id: 2,
    name: "About Us",
    href: "/about",
    sub_menu: [{ id: 1, sub_name: "CEO's Message", href: "/fromceo" }],
  },
  {
    id: 3,
    name: "Services",
    href: "/services",
    // sub_menu: [
    //   { id: 1, sub_name: "Chatter Passnger", href: "/chatter" },
    //   { id: 2, sub_name: "Humanitarian Services", href: "/humanitarian" },
    // ],
  },
  {
    id: 4,
    name: "Our Fleet",
    href: "/fleet",
    // sub_menu: [{ id: 1, sub_name: "Fokker 50 Series", href: "/fokker50" }],
  },
  { id: 5, name: "Contact Us", href: "contacts" },
];

export const ceo_message = {
  title: "MESSAGE FROM THE CEO",
  paragraphs: [
    {
      p1: "Welcome to Fajr Airlines ,an air Charter company and humanitarian and relief service provider ready to mobilise wherever in the world you are. we know time and reliability are of the utmost importance to your development , therefore we have a great passion for excellence in aviation and customer service that we wouldd like to share with you .",
      p2: "Our dedicated staff offers you unparalleled local knowledge ,expertise and competencies to assist your operations and to win and retain your loyalty. We are honored and proud to say that the company is vastly experiencing significant growth as we plan to expand our portfolio with addition of new aviation service product.",
      p3: "Our goal is to become a world class aviation company focused on maintaining to high standards our own engineering team have all required equipment for flight on maintaining high standards of safety as well as offering quality customer service. We truly hope as always that you enjoy a wonderful flight experience with us and thank you for choosing Fajr Airlines Limited.",
    },
  ],
  ceo_name: "John Doe",
};

export const about_us = {
  title: "ABOUT US",
  paragraphs: [
    {
      p1: "Fajr Airlines Limited is an aviation company specializing in passenger and cargo services within East Africa . The company headquarters is in Nairobi, Kenya and operates out of Wilson and Jomo Kenyatta International Airports.",
      p2: "aircraft , are our pride and joy and we treat them like part of the family . Our employees are the heart of our organization , and we value their ongoing commitment and dedication to our continued success.",
    },
  ],
};

export const vision = {
  title: "vision",
  vision:
    "To be a great airline that champions the spirit of excellence in Africa and to create the ultimate experience for all of our customers.",
};

export const mission = {
  title: "Mision",
  vision:
    "To provide our clients and stakeholders services with the highest levels of safety, reliable and consistent standards",
};

export const core_values = {
  values: [
    {
      id: 1,
      icon: "icon text here",
      title: "Safety",
      text: "We strive to develop and embed a safety culture in all our aviation activities that recognizes the importance and value of effective aviation safety management and acknowledges that safety is paramount.",
    },
    {
      id: 2,
      icon: "icon text here",
      title: "Quality",
      text: "Values that our crew live by on every flight is being genuine , experienced and inventive together . We are committed to extraordinary performance and are passionate about continuous improvement.",
    },
    {
      id: 3,
      icon: "icon text here",
      title: "Reliability",
      text: "We endeavor to be consistent in keeping the highest safety standards .We are committed to extraordinary performance and are passionate about continuous improvement.",
    },
  ],
};

export const commitment = {
  list: [
    {
      id: 1,
      text: "At Farj airlines we are committed to treating our people, customers and the wider community with dignity and respect and to deliver safe, reliable, efficient, and pleasant travel experience exceeding customer expectations.",
    },
    {
      id: 2,
      text: "We are committed to developing a safety culture in all our aviation activities that recognizes the importance and value of effective aviation safety management and acknowledges that safety is paramount. We also aim to make a positive contribution to the broader Africa and minimize our impact on the environment.",
    },
  ],
};

export const goals = {
  list: [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ad laboriosam, cum voluptates quas commodi at modi vel, exercitationem doloribus reprehenderit amet saepe ipsa ducimus autem, ab aperiam sed totam!",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis praesentium vitae veniam assumenda doloremque, libero natus officiis unde mollitia?",
    },
    {
      id: 3,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat rerum aliquid doloribus iure itaque! Labore ipsam earum animi et cum.",
    },
  ],
};

export const services_data = {
  services: [
    {
      id: 1,
      icon: "FlightTakeoffOutlinedIcon",
      title: "CHARTER FLIGHTS",
      text: "We provide our clients with the option of chartering our aircrafts for passenger and/or cargo services.",
    },
    {
      id: 2,
      icon: "Diversity3OutlinedIcon",
      title: "HUMANITARIAN & RELIEF SERVICES",
      text: "Fajr Airlines offers humanitarian services to save the lives of millions of people caught up in humanitarian disasters. We ensure quick and safe access to affected areas. We also provide air services to transport humanitarian personnel and supplies, as well as to perform medical and security evacuations as required.",
    },
  ],
};

export const fleet = {
  list: [
    {
      id: 1,
      type: "FOKKER 50 SERIES",
      text: "The F-50 is powered by two Pratt & Whitney PW 125B turboprop engines. The propellers are six bladed with full feathering and reverse capabilities. The aircraft is pressurized which permits it to fly up to 25,000 feet.",
      Pilots: 2,
      cabin: 2,
      engineer: 1,
      NumberOfaircrafts: 2,
      passagers: 50,
    },
  ],
};
export const aircrafts = [
  {
    name: "Fokker 50 Series",
    images: [
      "/passenger plane.jpg",
      "/airplane-sky.jpg",
      // add more pics here
    ],
    description:
      "The F-50 is powered by two Pratt & Whitney PW 125B turboprop engines. The propellers are six bladed with full feathering and reverse capabilities. The aircraft is pressurized which permits it to fly up to 25,000 feet.",
    crewComposition: [
      { role: "Pilots", quantity: 2 },
      { role: "Cabin Crew", quantity: 2 },
      { role: "Engineer", quantity: 1 },
      { role: "Passengers", quantity: 50 },
    ],
  },
  {
    name: "Lorem, ipsum dolor.",
    images: [
      "/passenger plane.jpg",
      "/airplane-sky.jpg",
      // add more as needed
    ],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet velit veritatis, eos animi rem sint fuga quibusdam nobis magni a odio accusantium voluptatibus. Praesentium quod dolor doloremque voluptatibus labore harum.",
    crewComposition: [
      { role: "Pilots", quantity: 2 },
      { role: "Cabin Crew", quantity: 2 },
      { role: "Engineer", quantity: 1 },
      { role: "Passengers", quantity: 76 },
    ],
  },
];

export const memberships = {
  list: [
    {
      id: 1,
      acronym: "KATA",
      names: "Kenya Association of Travel Agents",
      web_url:
        " https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      logo_url:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      acronym: "KAAO",
      names: "Kenya Association of Air Operators",
      web_url: "https://aviationkenya.org/",
      logo_url:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 3,
      acronym: "lorem",
      names: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, fuga!",
      web_url: "https://aviationkenya.org/",
      logo_url:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    },
  ],
};

export const management_text = {
  paragraphs: [
    {
      p1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil assumenda provident blanditiis iusto ipsam totam velit maiores quo voluptatem, porro accusantium vel, laudantium consequuntur officia excepturi molestias labore iste.",
      p2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio esse fugit error, obcaecati placeat atque est expedita sunt? Ratione aspernatur minus veniam eum explicabo incidunt vero pariatur officia vel, rerum, eligendi delectus possimus? Quos, repudiandae.",
    },
  ],
};

export const team = {
  staff: [
    {
      id: 1,
      title: "Accountable Manager",
      name: "Accountable manager",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nostrum, sequi facere non qui pariatur consectetur modi harum minima quos voluptas asperiores ullam rerum suscipit, inventore fuga, illum sapiente consequuntur.",
        },
      ],
    },
    {
      id: 2,
      title: "Head of Quality",
      name: "John Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid provident iste aspernatur necessitatibus corrupti labore? Porro pariatur eum qui architecto.",
        },
      ],
    },
    {
      id: 3,
      title: "Head of Safety",
      name: "Jane Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure fugiat voluptatibus molestiae minima ut dolorum, veritatis aliquid eveniet vitae!",
        },
      ],
    },
    {
      id: 4,
      title: "Head of Operations",
      name: "John Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptatibus ab eligendi, ex praesentium maxime placeat ducimus hic, adipisci, quo esse necessitatibus fugiat nam libero.",
        },
      ],
    },
    {
      id: 5,
      title: "Chief Pilot",
      name: "John Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed similique, repellat dolor animi nulla quis eius deleniti unde quibusdam.",
        },
      ],
    },
    {
      id: 7,
      title: "Human Resource Manager",
      name: "Jane Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor fugiat ea velit delectus molestias dolores, cumque neque illum assumenda cupiditate dolorum sunt incidunt repellat atque.",
        },
      ],
    },
    {
      id: 8,
      title: "Security Manager",
      name: "John Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque a alias, ratione animi est voluptatum atque fugiat perspiciatis cumque eaque architecto, obcaecati quas quisquam.",
        },
      ],
    },
    {
      id: 9,
      title: "Operations Manager",
      name: "Jane Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque eos quasi dolor praesentium sit, consequuntur id optio earum! Amet adipisci, reprehenderit veritatis nemo officiis ipsum.",
        },
      ],
    },
    {
      id: 10,
      title: "Cabin Crew Manager and Training Coordinator",
      name: "John Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit ipsam perspiciatis cum sunt inventore non ex, ad debitis tempora sit repellat porro illo sed?",
        },
      ],
    },
    {
      id: 12,
      title: "Reservations Manager",
      name: "Jane Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et assumenda aliquam asperiores deleniti qui eveniet distinctio fugit ipsam. Alias suscipit fugiat in enim cum?",
        },
      ],
    },
    {
      id: 13,
      title: "Finance Manager",
      name: "Jane Doe",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perspiciatis, error suscipit delectus beatae quaerat? Eos ex et voluptate error non perspiciatis, vero laboriosam ad.",
        },
      ],
    },
    {
      id: 14,
      title: "IT Manager",
      name: "Lorem, ipsum.",
      image_url: User,
      paragraphs: [
        {
          pi: 1,
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quis vel reiciendis nobis commodi corrupti alias eveniet consequatur. Ullam voluptate at incidunt perspiciatis dicta cupiditate?",
        },
      ],
    },
  ],
};

export const heroCarousel_data = [
  {
    id: 1,
    hero_url: hero1,
    page_link: "/about",
    long_title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    short_title: "Lorem ipsum dolor sit amet.",
    hero_phrase:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum exercitationem placeat rerum harum perferendis velit..",
  },
  {
    id: 2,
    hero_url: hero2,
    page_link: "/about",
    long_title: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    short_title: "Lorem ipsum dolor sit amet.",
    hero_phrase:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam incidunt, nihil doloremque quos eaque eum tempore repellendus aspernatur iure alias?",
  },
  {
    id: 2,
    hero_url: hero3,
    page_link: "/about",
    long_title: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    short_title: "Lorem ipsum dolor sit amet.",
    hero_phrase:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, numquam incidunt, nihil doloremque quos eaque eum tempore repellendus aspernatur iure alias?",
  },
];

export const destinations = [
  {
    id: 1,
    name: "Lorem, ipsum.",
    imageSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo voluptate aliquam tenetur quas repudiandae vel provident explicabo iusto enim, iure id laboriosam excepturi inventore velit eaque dolorum veniam, earum rerum debitis atque illo quasi quibusdam..",
  },
  {
    id: 2,
    name: "Lorem, ipsum dolor.",
    imageSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo impedit quibusdam illo possimus incidunt amet autem modi qui explicabo aspernatur illum ratione blanditiis atque molestiae labore consectetur minus, nemo vero rem voluptatem quis!",
  },
  {
    id: 3,
    name: "Lorem, ipsum dolor.",
    imageSrc:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quo impedit quibusdam illo possimus incidunt amet autem modi qui explicabo aspernatur illum ratione blanditiis atque molestiae labore consectetur minus, nemo vero rem voluptatem quis!",
  },
];

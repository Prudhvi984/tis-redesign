// All copy below is taken from https://tis.edu.in/ (retained branding + content).
const M = "https://tis.edu.in/_next/static/media/";
export const media = (file: string) => M + file.replace(/ /g, "%20");

export const site = {
  name: "Tulas International School",
  helpline: "+91-9837983791",
  helplineDisplay: "+91-98379 83791",
  email: "info@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
  landlines: ["0135-2699444", "0135-2699666"],
  applyUrl: "https://admission.tis.edu.in",
  mapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  mapEmbed:
    "https://maps.google.com/maps?q=Dhoolkot%2C%20P.O%20-%20Selaqui%2C%20Chakrata%20Road%20Dehradun%2C%20Uttarakhand%20India&t=m&z=10&output=embed&iwloc=near",
  logo: media("schoolLogo.95f6e121.png"),
  footerLogo: media("footer-logo.230b79ff.png"),
};

export const nav = [
  { label: "About TIS", href: "#about" },
  { label: "Academics", href: "#voices" },
  { label: "Boarding Life", href: "#life" },
  { label: "Beyond Academics", href: "#sports" },
  { label: "Events", href: "#life" },
  { label: "Admission", href: "#enquire" },
  { label: "Mandatory Disclosure", href: "https://tis.edu.in/" },
  { label: "Alumni Network", href: "https://tis.edu.in/" },
  { label: "Quick Links", href: "#footer" },
];

export const hero = {
  tagline: ["Let's do it", "with Tulas"],
  title: "Welcome to Tulas International School (TIS)",
  lead: "TIS is one of India’s top boarding and day schools in Dehradun, India.",
  body: "Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
};

export const welcome = {
  heading: "Boarding and Day School Excellence",
  body: "We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally.",
  join: "Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.",
  explore:
    "Explore our programs, campus life, achievements, and why TIS is the preferred choice for parents across India.",
  established:
    "Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through seamless opportunities.",
};

export const gallery = [
  { src: media("Image 2.0c5295c9.webp"), alt: "TIS students at an event" },
  { src: media("polo.973ddbae.webp"), alt: "Polo at TIS" },
  { src: media("Image 3.21dc9e69.webp"), alt: "Campus life at TIS" },
  { src: media("karate.4020fba5.webp"), alt: "Karate at TIS" },
  { src: media("swimming.6fc81e65.webp"), alt: "Swimming at TIS" },
  { src: media("Image 1.0a814859.webp"), alt: "Students at TIS" },
  { src: media("pot.6f7c2ee3.webp"), alt: "Pottery at TIS" },
  { src: media("dance.88843edb.webp"), alt: "Dance at TIS" },
];

export const stats = [
  { value: 22, suffix: "", label: "Acre pollution-free campus", img: media("campus.e67b1a0a.png") },
  { value: 16, suffix: "+", label: "Olympic sports", img: media("sports.e695b690.png") },
  { value: 24, suffix: "*7", label: "Medical assistance", img: media("medical.e87071fe.png") },
  { value: 6, suffix: ":1", label: "Student teacher ratio", img: media("ratio.6ca07c6a.png") },
];

export const sportsCopy = {
  heading: "Sports ?",
  line1: "It’s not just a facility. At Tulas it’s the foundation!",
  line2: "16+ sports curated to bring joy and discipline to your life.",
};

export const sports = [
  ["Archery", "archery.7a805345.png"],
  ["Cycling", "cycling.80dbb9b1.png"],
  ["Hockey", "hockey.219fe552.png"],
  ["Swimming", "swimming.d4285534.png"],
  ["Taekwondo", "taekwando.86e26406.png"],
  ["Football", "football.ca61e5d0.png"],
  ["Shooting Range", "shooting.b0b11d74.png"],
  ["Horse Riding", "horseRiding.8f259127.png"],
  ["Billiards", "billiards-single.a1e831c6.png"],
  ["Squash", "squash.ffa0360a.png"],
  ["Volleyball", "volleyball.045be884.png"],
  ["Basketball", "basketball.fa70909d.png"],
  ["Cricket", "Cricket.b06b18ca.png"],
  ["Lawn Tennis", "lawnTennis.7b3b894a.png"],
  ["Badminton", "badminton.a314ff00.png"],
  ["Table Tennis", "tableTennis.61f6bd56.png"],
].map(([name, file]) => ({ name, img: media(file) }));

export const voices = [
  {
    quote: "We feel supported in what we do and nudged further to do more",
    body: "At Tulas, we believe in bringing out the best in every student—whether it’s academics, music, art, or drama. With the right support and inspiration, creativity finds its way. For us, school isn’t just about lessons, it’s about endless opportunities waiting to be explored.",
    img: media("ladyInPink.c358aa8f.png"),
  },
  {
    quote: "Tulas helped me thrive and become the best version of myself",
    body: "When you choose a school that chooses you, it becomes more than just a place to learn—it becomes a place to belong, grow, and shine. At Tulas International School, we see the potential in every student and help them bring it to life.",
    img: media("manInBlue.46316cbf.png"),
  },
];

export const secret = {
  heading: "At Tulas, we always ask, “What’s the secret to making school awesome?”",
  body: "The secret to making one's school experience truly unforgettable? It’s all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover. When students are inspired, they don’t just learn—they grow, explore, and shape their own futures.",
  punch: "There, we cracked it!",
  img: media("AtTIS.59351600.png"),
};

export const rankings = [
  { rank: "#1", where: "In Dehradun", what: "Co-Educational Boarding School in Dehradun by Education Today" },
  { rank: "#2", where: "In Uttrakhand", what: "Co-Educational Boarding School in North India by Education Today" },
  { rank: "#1", where: "In North India", what: "Co-Educational Boarding School in North India by Outlook" },
  { rank: "#4", where: "In India", what: "Co-Educational Boarding School in India by Education Today" },
];

export const personalities = {
  heading: "Influential Personalities On Campus",
  sub: "Sports Person/Social Media Influencers",
  people: [
    ["Sakshi Malik", "SakshiMalik.91174bf4.webp", "First Indian wrestler to win medal in Rio 2016 Olympics, Olympics Bronze Medalist in Wrestling, Silver Medalist in 2014. Commonwealth Games, Rajeev Gandhi Khel Ratan Awardee 2016, Padma Shri Awardee 2017"],
    ["Vishesh Bhriguvanshi", "VisheshBhriguvanshi.52af8bfd.webp", "Indian Basketball Team Captain & Major FIBA Asia Championship Player. Under his Captaincy Team India won a 3x3 basketball Gold Medal at the Asian Beach Games in 2008"],
    ["Prakashi Tomar & Late Ms Chandro Tomar", "PrakashiTomar.339dbb95.webp", "Based on their real life Bhumi Pednekar & Taapsee Pannu acted in the Biopic Movie “Saand ke Aakh” known as Shooter Dadi, 30 National Championship winner"],
    ["Abhishek Verma", "AbhishekVerma.18f9d349.webp", "6th Highest World Ranking, Arjuna Awardee, Asian Games Gold Medalist in Archery 2013"],
    ["Aditi Gopichand Swami", "AditiGopichandSwami.b7afa246.webp", "7th Highest World Ranking, Arjuna Awardee, World Champion in Archery 2024"],
    ["Jeevan Jyot Singh Teja", "JeevanJyotSinghTeja.9a07711c.webp", "Dronacharya Awardee in Archery 2022"],
    ["Ojus Devtale", "OjasPravinDeotale.1d2e01cc.webp", "9th Highest World Ranking, Arjuna Awardee 2023 and current world champion in Archery"],
    ["Rajat Chauhan", "RajatChauhan.bcb1fbf2.webp", "5th Highest World Ranking Arjuna Awardee 2016 in Archery"],
    ["Devendra Singh Bisht", "DevendraSinghBisht.09635f71.webp", "under 18 School Indian Football Team Selector"],
    ["Manish Metani", "ManishMetani.ca55bf71.webp", "Indian Football Player"],
    ["Saurabh Joshi", "SaurabhJoshi.450ff5df.webp", "Influencer with 30 Million Subscribers on Youtube"],
    ["Arushi Nishank", "ArushiNishank.f3341404.webp", "Kathak dancer, actor, film producer, environmentalist, TEDx speaker, and National Convener of Sparsh Ganga"],
    ["Laxmi Agarwal", "LakshmiAgarwal.7405df5d.webp", "International Women Empowerment Award from the Ministry of Women and Child Development, Founder and President of The Laxmi Foundation, a NGO dedicated to acid attack victims. Deepika Padukone acted in the Biopic movie “Chhapaak” based on her"],
  ].map(([name, file, role]) => ({ name, img: media(file), role })),
};

export const leaders = {
  heading: "Leaders of India",
  people: [
    ["Shri Dhan Singh Rawat Ji", "Minister of Higher Education, Uttarakhand"],
    ["Shri Trivendra Singh Rawat Ji", "Member of Parliament & Former Chief Minister, Uttarakhand"],
    ["Shri Subodh Uniyal Ji", "Technical Education and Forest Minister, Uttarakhand."],
    ["Dr Ramesh Pokhriyal Nishank Ji", "Former Union Cabinet Minister for Education, Government of India | Former Chief Minister of Uttarakhand"],
    ["Shri Bhagat Singh Koshyari Ji", "Former governor of Maharashtra and Goa, Former Chief Minister of Uttarakhand"],
    ["Shri Dharmendra Pradhan Ji", "Union Minister of Education for India."],
    ["Shri Anurag Tripathi Ji", "CBSE Secretary Uttarakhand"],
    ["Shri Arvind Pandey Ji", "MLA, Former Education Minister"],
    ["Shri Namami Bansal Ji", "I.A.S Municipal Commissioner Uttarakhand"],
    ["Shri Abhinav Kumar Ji", "ADG and former DGP of Uttarakhand Police"],
    ["Shri Janmejaya Khanduri Ji", "IG Dehradun - Government of India"],
    ["Shri Ashok Kumar Ji", "Former DGP, Uttarakhand"],
    ["Shri Amit Kumar Sinha Ji", "ADG, Principal Secretary Sports, Uttarakhand"],
    ["Shri Sunil Uniyal Gama Ji", "Former Mayor Municipal Corporation, Dehradun."],
    ["Shri Sahdev Singh Pundir Ji", "MLA Sahaspur, Uttarakhand"],
  ].map(([name, role]) => ({ name, role })),
};

export const awards = {
  heading: "Awards",
  sub: "We believe in celebrating the hard work and perseverance of the best!",
  cta: "See All Awards",
  images: [
    media("TopBoarding.e5405c1a.jpg"),
    media("BestResidential.5173db8d.jpg"),
    media("UTTARAKHAND.652376d5.jpg"),
  ],
};

export const tour = {
  kicker: "DIVE INTO OUR...",
  heading: "VIRTUAL TOUR",
  href: "https://tis.edu.in/virtual-tour/",
  img: media("360.75b351f1.png"),
};

export const parents = {
  heading: "From The Parents",
  quote:
    "We have seen a remarkable improvement in our child's confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student, nurturing their strengths and helping them grow in all aspects of life.",
  videos: [
    "https://assets.tulas.edu.in/tis/1VIDEO-compressed.mp4",
    "https://assets.tulas.edu.in/tis/2VIDEO-compressed.mp4",
    "https://assets.tulas.edu.in/tis/3VIDEO-compressed.mp4",
  ],
};

export const reviews = [
  ["Tashi Tsering", "F/O Jigmet Skaldon", "I would like to convey a big thanks to the Management and Teachers of Tulas International School for taking good care of my son.", "tashi.3807cb3c.png"],
  ["Namita Agarwal", "M/O Krishna Agarwal", "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better.", "namita.86a0f799.png"],
  ["Sandeep Kumar", "F/O Aryan", "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him.", "sandeep.1b22b59e.png"],
  ["Pinky Sharma", "M/O Swastik Sharma", "I am happy and satisfied with the wonderful experience of my son in this school. Teachers are very good especially Shweta Ma’am. She is always available when I need her.", "pinky.8d7145b0.png"],
  ["Suresh Kumar", "F/O Aditya Kumar", "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Very nicely planned and organized academic programme. Good efforts by all teachers.", "suresh.80d60e49.png"],
  ["Mrs Urja Bhayani", "M/O Shikha & Samarth Bhayani", "Right from the beginning, we have been in touch with Robin Sir and Shweta Ma’am. Both are very helpful and cooperative. Teachers are passionate and helpful towards academics.", "urja.03e3c3f3.png"],
  ["Amit Agrawal", "F/O Samruddhi Agrawal", "Being a parent it's a big challenge to find a Boarding School that qualifies your Parameters of Security, Health, Hygiene, Academics, Non Academics and Self discipline being key features.", "amit.c7b6247e.png"],
  ["Ashu Arora", "M/O Manisha Changrani", "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent. We have seen significant improvement in Manisha.", "ashu.9d447126.png"],
  ["Gulabdas Gupta", "F/O Annika Gulabdas Gupta", "We admitted our daughter, Annika Gulabdas Gupta, in class VIII this year in Tulas. She is very much satisfied with the facilities offered at Tulas related to education, extra-curricular activities, recreation & hygiene.", "gulabdas.63ce81d8.png"],
  ["Selendra K. Ajmera", "F/O Aman Ajmera", "Hi Tulas! In the beginning it was very tough for me to send my son to a boarding school but the day I visited the campus the first thing which came to my mind was that this is the right place and right environment.", "salendra.42b32ea1.png"],
].map(([name, rel, text, file]) => ({ name, rel, text, img: media(file) }));

export const collabs = {
  count: 12,
  label: "COLLABORATIONS",
  logos: [
    "Universidad.935e33e1.png",
    "yhnbepcntet.3b80eac6.jpg",
    "Universitat.f7fac869.jpg",
    "Cpi6.106c6037.jpg",
    "inseec.780a3115.png",
    "Trinty.31016999.png",
    "University.6c89dc70.png",
    "International_Award_for_Young_People_logo.a0d1c4fa.jpg",
    "lions.bf493cc1.png",
    "inseecU.1e5c929a.png",
    "Universitas.d9db402c.png",
    "universityLogo.6e446aad.jpg",
  ].map(media),
};

export const classes = ["Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"];

export const states = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh",
  "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra",
  "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Other", "Pondicherry", "Punjab", "Rajasthan",
  "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

export const footerLinks = [
  ["FAQ", "https://tis.edu.in/faq/"],
  ["Calendar", "https://tis.edu.in/MandatoryPDF/TIS_CALENDAR_2024__PDF.pdf"],
  ["Brochure", "https://tis.edu.in/MandatoryPDF/TIS_BROCHURE.pdf"],
  ["Privacy Policy", "https://tis.edu.in/privacy-policy/"],
  ["Terms & Conditions", "https://tis.edu.in/terms-conditions/"],
  ["Disclaimer", "https://tis.edu.in/disclaimer/"],
  ["Disciplinary Policy", "https://tis.edu.in/MandatoryPDF/DisciplinaryPolicy.pdf"],
  ["Mobile Phone Policy", "https://tis.edu.in/MandatoryPDF/MobilePhonePolicy.pdf"],
  ["Child Welfare & Safety Policy", "https://tis.edu.in/MandatoryPDF/childWelfarePolicy.pdf"],
  ["Virtual Tour", "https://tis.edu.in/virtual-tour/"],
  ["Fedena Login", "https://tis.fedena.com/"],
].map(([label, href]) => ({ label, href }));

export const socials = [
  ["Facebook", "https://www.facebook.com/tulasinternationalschool/"],
  ["X / Twitter", "https://twitter.com/tulas_intschool?lang=en"],
  ["LinkedIn", "https://www.linkedin.com/school/tulas-international-school/"],
  ["Instagram", "https://www.instagram.com/tulasinternationalschool/?hl=en"],
  ["YouTube", "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw"],
].map(([label, href]) => ({ label, href }));

export const navbarData = {
  homeTitle: "Fian's Blog",
}

export const footerData = {
  author: 'M. Alfian Febriansyah',
  aboutAuthor:
    'Hello, I am a student at SMA Negeri 1 Sidayu with high enthusiasm for the world of technology, especially in the fields of informatics and graphic design. I enjoy learning new things and applying them in creative projects. I am always looking for challenges to develop my skills further!.',
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let's connect.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'M. Alfian Febriansyah',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe:
    "Hello, I am a student at SMA Negeri 1 Sidayu with high enthusiasm for the world of technology, especially in the fields of informatics and graphic design. I enjoy learning new things and applying them in creative projects. I am always looking for challenges to develop my skills further!",
}

export const seoData = {
  title: `Fian's Blog | Alfian Blog`,
  ogTitle: `Let's learn Javascript, Typescript, Vue, Nuxt, & Problem Solving - Alfian Blog | Fian's Blog`,
  description: `Hi I am Fian. A Software Engineer at My School, with over 1 years experience in software development. - Alfian Blog | Fian's Blog`,
  twitterDescription: `Fian's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Alfian Blog | Fian's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://alfian16.netlify.app/',
  twitterHandle: '@CrashC61449',
  mailAddress: 'alfianfebri200@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/crashxhack777',
  linkedinLink: 'https://id.linkedin.com/in/alfian-febriansyah-45a543365',
  twitterLink: 'https://twitter.com/CrashC61449',
  stackoverflowLink: 'https://twitter.com/CrashC61449',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]

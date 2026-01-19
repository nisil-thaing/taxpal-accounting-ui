export const DASHBOARD_CONTENT = {
  hero: {
    title: 'Accounting made simple for small businesses.',
    description:
      "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.",
    primaryCta: 'Get 6 months free',
    secondaryCta: 'Watch video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  trustedBy: {
    title: 'Trusted by these six companies so far',
    companies: ['Transistor', 'Tuple', 'StaticKit', 'Mirage', 'Laravel', 'Statamic'],
  },
  features: {
    title: 'Everything you need to run your books.',
    description: "Well everything you need if you aren't that picky about minor details like tax compliance.",
    items: [
      {
        id: 'payroll',
        title: 'Payroll',
        description:
          "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
        icon: 'Users',
      },
      {
        id: 'expenses',
        title: 'Claim expenses',
        description:
          "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
        icon: 'Receipt',
      },
      {
        id: 'vat',
        title: 'VAT handling',
        description:
          "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
        icon: 'FileText',
      },
      {
        id: 'reporting',
        title: 'Reporting',
        description:
          'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
        icon: 'BarChart',
      },
    ],
  },
  secondaryFeatures: {
    title: 'Simplify everyday business tasks.',
    description:
      "Because you'd probably be a little confused if we suggested you complicate your everyday business tasks instead.",
    items: [
      {
        id: 'reporting-secondary',
        title: 'Reporting',
        description: 'Stay on top of things with always up-to-date reporting features.',
        subtitle:
          'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
      },
      {
        id: 'inventory',
        title: 'Inventory',
        description: "Never lose track of what's in stock with accurate inventory tracking.",
        subtitle:
          "We don't offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
      },
      {
        id: 'contacts',
        title: 'Contacts',
        description: 'Organize all of your contacts, service providers, and invoices in one place.',
        subtitle:
          "This also isn't actually a feature, it's just some friendly advice. We definitely recommend that you do this, you'll feel really organized and professional.",
      },
    ],
  },
  callToAction: {
    title: 'Get started today',
    description:
      "It's time to take control of your books. Buy our software so you can feel like you're doing something productive.",
    cta: 'Get 6 months free',
  },
  testimonials: {
    title: 'Loved by businesses worldwide.',
    description:
      "Our software is so simple that people can't help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
    items: [
      {
        id: 1,
        quote:
          "TaxPal is so easy to use I can't help but wonder if it's really doing the things the government expects me to do.",
        author: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
      },
      {
        id: 2,
        quote:
          "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
        author: 'Amy Hahn',
        role: 'Director at Velocity Industries',
      },
      {
        id: 3,
        quote:
          "The best part about TaxPal is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
        author: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
      },
      {
        id: 4,
        quote:
          "There are so many things I had to do with my old software that I just don't do at all with TaxPal. Suspicious but I can't say I don't love it.",
        author: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
      },
      {
        id: 5,
        quote:
          "I used to have to remit tax to the EU and with TaxPal I somehow don't have to do that anymore. Nervous to travel there now though.",
        author: 'Peter Renolds',
        role: 'Founder of West Inc',
      },
      {
        id: 6,
        quote:
          "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
        author: 'Amy Hahn',
        role: 'Director at Velocity Industries',
      },
    ],
  },
  pricing: {
    title: 'Simple pricing, for everyone.',
    description: "It doesn't matter what size your business is, our software won't work well for you.",
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        description: 'Good for anyone who is self-employed and just getting started.',
        price: 9,
        features: [
          'Send 10 quotes and invoices',
          'Connect up to 2 bank accounts',
          'Track up to 15 expenses per month',
          'Manual payroll support',
          'Export up to 3 reports',
        ],
        cta: 'Get started',
      },
      {
        id: 'small-business',
        name: 'Small business',
        description: 'Perfect for small / medium sized businesses.',
        price: 15,
        featured: true,
        features: [
          'Send 25 quotes and invoices',
          'Connect up to 5 bank accounts',
          'Track up to 50 expenses per month',
          'Automated payroll support',
          'Export up to 12 reports',
          'Bulk reconcile transactions',
          'Track in multiple currencies',
        ],
        cta: 'Get started',
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'For even the biggest enterprise companies.',
        price: 39,
        features: [
          'Send unlimited quotes and invoices',
          'Connect up to 15 bank accounts',
          'Track up to 200 expenses per month',
          'Automated payroll support',
          'Export up to 25 reports, including TPS',
        ],
        cta: 'Get started',
      },
    ],
  },
  faqs: {
    title: 'Frequently asked questions',
    description:
      "If you can't find what you're looking for, email our support team and if you're lucky someone will get back to you.",
    items: [
      {
        id: 1,
        question: 'Does TaxPal handle VAT?',
        answer: 'Well no, but if you move your company offshore you can probably ignore it.',
      },
      {
        id: 2,
        question: 'Can I pay for my subscription via purchase order?',
        answer: 'Absolutely, we are happy to take your money in all forms.',
      },
      {
        id: 3,
        question: 'How do I apply for a job at TaxPal?',
        answer: "We only hire our customers, so subscribe for a minimum of 6 months and then let's talk.",
      },
      {
        id: 4,
        question: 'What was that testimonial about tax fraud all about?',
        answer: 'TaxPal is just a software application, ultimately your books are your responsibility.',
      },
      {
        id: 5,
        question: 'TaxPal sounds horrible but why do I still feel compelled to purchase?',
        answer:
          "This is the power of excellent visual design. You just can't resist it, no matter how poorly it actually functions.",
      },
      {
        id: 6,
        question: 'I found other companies called TaxPal, are you sure you can use this name?',
        answer:
          "Honestly not sure at all. We haven't actually incorporated or anything, we just thought it sounded cool and made this website.",
      },
      {
        id: 7,
        question: 'How do you generate reports?',
        answer:
          'You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.',
      },
      {
        id: 8,
        question: 'Can we expect more inventory features?',
        answer: "In life it's really better to never expect anything at all.",
      },
      {
        id: 9,
        question: 'I lost my password, how do I get into my account?',
        answer:
          'Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.',
      },
    ],
  },
} as const;

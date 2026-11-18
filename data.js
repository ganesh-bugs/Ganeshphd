// =====================================================================
//  PhD PROGRESS PAGE — CONTENT FILE
//  This is the only file you need to edit for daily updates.
//  Add a new log entry at the TOP of the "log" list each day.
//  Keep the punctuation exactly as in the examples (quotes, commas).
// =====================================================================

const SITE = {
  name: "Ganesh Balasubramanian",
  programme: "PhD Research Scholar, OB & HRM — IIM Tiruchirappalli",
  title: "Thesis progress log",
  workingTopic:
    "Organisational justice, psychological capital and ethical workplace behaviour: the role of ethical leadership across generational cohorts in Indian organisations",
  contact: "ganesh@skilltrain.co.in",

  // Shown on the Overview tab
  currentStage: "Preparing for the pre-proposal seminar (presentation only)",
  nextMilestone: "Pre-proposal seminar — late November 2026",
  focusThisWeek: [
    "Problematising the core assumption behind ethics management in organisations",
    "Deciding how the thesis treats routine versus extraordinary ethical behaviour",
    "Structuring a ~27-minute presentation (13–14 slides) with time for Q&A"
  ],
  openQuestions: [
    "Thesis architecture: single study or multi-study, and where ethical leadership sits as the common thread",
    "Where the Gen X / Y / Z comparison sits in the thesis",
    "Overall justice versus the four justice dimensions",
    "Partial versus full mediation through psychological capital",
    "Choice of ethical workplace behaviour measure"
  ]
};

// ---------------------------------------------------------------------
//  DAILY LOG — newest first. Date format: "YYYY-MM-DD".
//  Fields: date, did (list), decided (list), next (list), blockers (list)
//  Any list can be left empty: []
// ---------------------------------------------------------------------
const LOG = [
  {
    date: "2026-11-18",
    headline: "Problematisation: routine vs extraordinary ethical behaviour",
    did: [
      "Continued work on the core assumption to problematise for the seminar",
      "Read Treviño, den Nieuwenboer & Kish-Gephart (2014) on the distinction between routine and extraordinary ethical behaviour",
      "Explored whether the thesis should differentiate routine from extraordinary ethical workplace behaviour (not yet decided)",
      "Set up this progress page for my guides"
    ],
    decided: [],
    next: [
      "Test the willingness-versus-capacity argument as the core line of reasoning",
      "Upload current documents to the shared folder"
    ],
    blockers: []
  },
  {
    date: "2026-11-17",
    headline: "Day 1 of seminar preparation",
    did: [
      "Started the 10-day preparation plan for the pre-proposal seminar",
      "Reviewed faculty feedback received on the CQE proposal",
      "Identified a candidate assumption to problematise: ethics treated as a baseline obligation, so only deviation needs managing"
    ],
    decided: [],
    next: [
      "Check the assumption against the compliance- versus values-orientation literature"
    ],
    blockers: [
      "Awaiting feedback from the remaining guides"
    ]
  }
];

// ---------------------------------------------------------------------
//  DOCUMENTS — paste the Google Drive link for each file in "link".
//  Leave link as "" until the file is uploaded.
//  status: "Draft" | "Under review" | "Submitted" | "Final"
// ---------------------------------------------------------------------
const DOCUMENTS = [
  {
    title: "CQE Research Proposal (submission copy)",
    type: "Word document",
    version: "Submission copy",
    date: "2026-08-17",
    status: "Submitted",
    note: "Version presented to the CQE panel on 17 August 2026.",
    link: ""
  },
  {
    title: "CQE Final Presentation",
    type: "PowerPoint",
    version: "Final",
    date: "2026-08-17",
    status: "Final",
    note: "Slides used at the CQE presentation.",
    link: ""
  },
  {
    title: "RBIS Conceptual Paper",
    type: "Word document",
    version: "V3",
    date: "",
    status: "",
    note: "Coursework paper that informed the CQE proposal.",
    link: ""
  }
];

// ---------------------------------------------------------------------
//  READING LIST
//  status: "To read" | "Reading" | "Read"   (leave "" if not set)
//  theme: short label used for filtering
//  why: one line on what claim or idea this paper supports in my work
// ---------------------------------------------------------------------
const READING = [
  {
    authors: "Treviño, L. K., den Nieuwenboer, N. A., & Kish-Gephart, J. J.",
    year: 2014,
    title: "(Un)ethical behavior in organizations",
    journal: "Annual Review of Psychology, 65, 635–660",
    link: "https://doi.org/10.1146/annurev-psych-113011-143745",
    theme: "Behavioural ethics",
    status: "",
    why: "Distinction between routine and extraordinary ethical behaviour."
  },
  {
    authors: "Weaver, G. R., & Treviño, L. K.",
    year: 1999,
    title: "Compliance and values oriented ethics programs: Influences on employees' attitudes and behavior",
    journal: "Business Ethics Quarterly, 9(2), 315–335",
    link: "https://www.cambridge.org/core/journals/business-ethics-quarterly/article/compliance-and-values-oriented-ethics-programs-influenceson-employees-attitudes-and-behavior/7CC7F328B583F76C46D2EA9BFB5D2B3A",
    theme: "Ethics management",
    status: "",
    why: "Values orientation contributes more to outcomes than compliance orientation."
  },
  {
    authors: "Tenbrunsel, A. E., & Messick, D. M.",
    year: 1999,
    title: "Sanctioning systems, decision frames, and cooperation",
    journal: "Administrative Science Quarterly, 44(4), 684–707",
    link: "https://doi.org/10.2307/2667052",
    theme: "Ethics management",
    status: "",
    why: "Side effects of sanctioning systems on how people frame ethical decisions."
  },
  {
    authors: "Hannah, S. T., Avolio, B. J., & May, D. R.",
    year: 2011,
    title: "Moral maturation and moral conation: A capacity approach to explaining moral thought and action",
    journal: "Academy of Management Review, 36(4), 663–685",
    link: "https://doi.org/10.5465/amr.2010.0128",
    theme: "Moral capacity",
    status: "",
    why: "Moral conation as an alternative to PsyCap for explaining ethical action."
  },
  {
    authors: "Colquitt, J. A.",
    year: 2001,
    title: "On the dimensionality of organizational justice: A construct validation of a measure",
    journal: "Journal of Applied Psychology, 86(3), 386–400",
    link: "https://doi.org/10.1037/0021-9010.86.3.386",
    theme: "Organisational justice",
    status: "",
    why: "Four justice dimensions and their measurement."
  },
  {
    authors: "Ambrose, M. L., & Schminke, M.",
    year: 2009,
    title: "The role of overall justice judgments in organizational justice research: A test of mediation",
    journal: "Journal of Applied Psychology, 94(2), 491–500",
    link: "https://doi.org/10.1037/a0013203",
    theme: "Organisational justice",
    status: "",
    why: "Overall justice judgments versus specific justice facets."
  },
  {
    authors: "Luthans, F., Avolio, B. J., Avey, J. B., & Norman, S. M.",
    year: 2007,
    title: "Positive psychological capital: Measurement and relationship with performance and satisfaction",
    journal: "Personnel Psychology, 60(3), 541–572",
    link: "https://doi.org/10.1111/j.1744-6570.2007.00083.x",
    theme: "Psychological capital",
    status: "",
    why: "PsyCap construct and its measurement."
  },
  {
    authors: "Brown, M. E., Treviño, L. K., & Harrison, D. A.",
    year: 2005,
    title: "Ethical leadership: A social learning perspective for construct development and testing",
    journal: "Organizational Behavior and Human Decision Processes, 97(2), 117–134",
    link: "https://doi.org/10.1016/j.obhdp.2005.03.002",
    theme: "Ethical leadership",
    status: "",
    why: "Ethical leadership construct, scale and social learning basis."
  },
  {
    authors: "Maxwell, S. E., & Cole, D. A.",
    year: 2007,
    title: "Bias in cross-sectional analyses of longitudinal mediation",
    journal: "Psychological Methods, 12(1), 23–44",
    link: "https://doi.org/10.1037/1082-989X.12.1.23",
    theme: "Methods",
    status: "",
    why: "Limits of inferring mediation from cross-sectional or short-lag designs."
  },
  {
    authors: "Rudolph, C. W., Rauvola, R. S., Costanza, D. P., & Zacher, H.",
    year: 2021,
    title: "Generations and generational differences: Debunking myths in organizational science and practice and paving new paths forward",
    journal: "Journal of Business and Psychology, 36(6), 945–967",
    link: "https://doi.org/10.1007/s10869-020-09715-2",
    theme: "Generational cohorts",
    status: "",
    why: "Critique of generational categories; alternative explanations to consider."
  }
];

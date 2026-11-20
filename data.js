// =====================================================================
//  PhD PROGRESS PAGE — CONTENT FILE
//  Source: claude/daily-log.md (Ganesh's own work only; no guide remarks).
//  Reading list = only articles recorded as read in the daily log.
//  Add a new log entry at the TOP of the "LOG" list each day.
// =====================================================================

const SITE = {
  name: "Ganesh Balasubramanian",
  programme: "PhD Research Scholar, OB & HRM — IIM Tiruchirappalli",
  title: "Thesis progress log",
  workingTopic:
    "Organisational justice, psychological capital and ethical workplace behaviour: the role of ethical leadership across generational cohorts in Indian organisations",
  contact: "ganesh.ed2405010@iimtrichy.ac.in",

  currentStage: "Preparing for the pre-proposal seminar (presentation only)",
  nextMilestone: "Pre-proposal seminar — mid-December 2026",
  focusThisWeek: [
    "Problematising the assumptions behind the CQE research questions",
    "Testing whether the behavioural ethics literature is built around preventing wrongdoing",
    "Deciding how the thesis treats routine versus extraordinary ethical behaviour"
  ]
};

// ---------------------------------------------------------------------
//  GUIDE COMMENTS — Google Form (IIM Trichy accounts only) feeding a
//  published sheet tab ("Public": timestamp, date, name, takeaway, comment).
// ---------------------------------------------------------------------
const COMMENTS = {
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSf1akEo_yOVd0OTKbpx2Bp9Kp6V2djM0ZhAa0U4KkLph3rRuA/viewform",
  dateField: "entry.1572104462",
  csvUrl: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSnKCrw06siqsvoVloQo1ebDDeUnQJ3ckcpBb-Wl3PdjUTxfb-yOpDqp9gSgT3-j0M2hOOgrJiEFj8p/pub?gid=1632644063&single=true&output=csv"
};

// ---------------------------------------------------------------------
//  DAILY LOG — newest first. Date format: "YYYY-MM-DD".
//  Fields: headline, did, takeaways, decided, next, blockers (all lists)
// ---------------------------------------------------------------------
const LOG = [
  {
    date: "2026-11-20",
    headline: "The nature of PsyCap: completing the capacity comparison",
    did: [
      "Read Luthans, Avolio, Avey & Norman (2007) and Luthans (2002)",
      "Filled in the PsyCap rows (hope, efficacy, resilience, optimism) of my capacity comparison: definitions, state-like status, overlaps with moral conation, and whether each could support unethical action",
      "Reworked the seminar preparation plan: 2–3 hours a day, deck ready by 3 December, 4–10 December kept for catch-up and feedback; practitioner conversations moved to after the seminar"
    ],
    takeaways: [
      "All four PsyCap components are state-like; their workplace outcomes are performance, satisfaction, commitment, retention, health and happiness.",
      "Overlaps with moral conation: hope's agency may resemble moral ownership's responsibility; PsyCap efficacy and moral efficacy share the same core definition but differ in target (a work task versus the moral domain), and moral efficacy also includes persistence in the face of moral adversity; resilience overlaps partly with moral efficacy's persistence and with moral courage.",
      "My view: high efficacy, resilience and optimism could each support unethical action — for example, confidence in getting away with it, confidence in handling any consequence, or the belief that outcomes will be positive."
    ],
    decided: [],
    next: [
      "Close read of Kaptein (2008)",
      "Draft assumption v1 and problematization statement v1"
    ],
    blockers: []
  },
  {
    date: "2026-11-19",
    headline: "The positive lens: PsyCap versus ethics-specific moral capacities",
    did: [
      "Read Hannah, Avolio & May (2011) on moral maturation and moral conation",
      "Created a new tab in my reading notes comparing six moral capacities — moral courage, moral efficacy and moral ownership (conation); moral complexity, metacognitive ability and moral identity (maturation) — on definitions, developability, overlaps, potential for unethical use and propositions",
      "Partly recoded the antecedent tally (ethical leadership and moral conation now coded as proactive/extraordinary) and added a summary"
    ],
    takeaways: [
      "All six moral capacities are described as malleable, developable and domain-specific.",
      "The three conation components work in tandem: each is necessary but not sufficient (ownership and efficacy without courage may still not produce action).",
      "Moral courage can be bolstered by authentic or ethical leaders who act as moral exemplars and create transparent climates, and also by training.",
      "Moral efficacy is specific to the moral domain and distinct from a person's efficacy in other domains.",
      "Moral ownership can be developed through language, responsibility and reward/control systems, which must be aligned with moral action to avoid pressure towards unethical compliance."
    ],
    decided: [],
    next: [
      "Read Luthans et al. (2007) and Luthans (2002) to complete the PsyCap side of the comparison",
      "Read Suddaby (2010) and Kaptein (2008) and build a construct-boundary table",
      "Write assumption v1 (carried over from Day 2); Moore & Gino (2015) moved to Day 5"
    ],
    blockers: []
  },
  {
    date: "2026-11-18",
    headline: "Is the behavioural ethics literature built around wrongdoing?",
    did: [
      "Read four articles: Treviño, den Nieuwenboer & Kish-Gephart (2014); Kish-Gephart, Harrison & Treviño (2010); Weaver & Treviño (1999); Tenbrunsel & Messick (1999)",
      "Wrote one-page notes on all four papers",
      "Built an antecedent tally of 28 antecedents (source, antecedent, level, outcome studied, form of ethical behaviour, evidence)"
    ],
    takeaways: [
      "All four articles cover both ethical and unethical behaviour, but most focus on reducing unethical behaviour. Weaver & Treviño (1999) is the exception, with mostly positive outcomes.",
      "Constructs that may encourage ethical behaviour: at the individual level, idealism, moral conation, moral attentiveness and moral identity; at the organisational level, ethical climate and ethical culture.",
      "The assumption that ethics is a baseline obligation stays, but managing deviations alone is not enough: compliance-oriented programmes appear to have less impact than values-oriented ones.",
      "Ethical impulse (automatic response) versus ethical calculus (deliberation) may explain why one person speaks up when others do not; moral conation is another possible explanation."
    ],
    decided: [
      "Tentative: differentiate routine from extraordinary ethical behaviour in the thesis — a distinction not made in the CQE proposal or the RBIS paper"
    ],
    next: [
      "Read Hannah, Avolio & May (2011), Moore & Gino (2015) and Luthans (2002)",
      "Draft the first version of the problematization statement"
    ],
    blockers: []
  },
  {
    date: "2026-11-17",
    headline: "Faculty feedback, the problematization method and candidate assumptions",
    did: [
      "Reviewed the 15-point faculty feedback on the CQE proposal and started a 10-day plan for the pre-proposal seminar",
      "Read Sandberg & Alvesson (2011) and Alvesson & Sandberg (2011) on gap-spotting versus problematization, and made notes",
      "Classified all four CQE research gaps as neglect gaps (under-researched areas)",
      "Drafted nine candidate assumptions for problematization",
      "Listed two examples of ethical behaviour that penalties cannot produce: claiming only what was actually spent although policy allows more, and calling out interviewer bias so the organisation does not lose a good candidate"
    ],
    takeaways: [
      "Organisations mostly penalise unethical behaviour and hardly encourage ethical behaviour.",
      "Underlying assumption: all employees are expected to be ethical, so there is no need to encourage ethical conduct; systems that discourage unethical behaviour deter those inclined to act unethically, while ethical employees remain ethical. In short, ethics as a baseline obligation.",
      "In the interviewer-bias example, the person spoke up out of fairness to the candidate, because a good candidate benefits the organisation, and to avoid reputational harm if the candidate spoke about the bias."
    ],
    decided: [],
    next: [],
    blockers: [
      "Feedback from the remaining guides"
    ]
  }
];

// ---------------------------------------------------------------------
//  DOCUMENTS — paste the Google Drive link for each file in "link".
// ---------------------------------------------------------------------
const DOCUMENTS = [
  {
    title: "Paper Summaries (reading notes)",
    type: "Google Sheet",
    version: "Updated daily",
    date: "",
    status: "Ongoing",
    note: "Key takeaways and findings from each article I read.",
    link: "https://docs.google.com/spreadsheets/d/1UQi9nGnDiCtfipeN7KW_epbZPnYGvISK-PN96exUy9A/edit?usp=drive_link"
  },
  {
    title: "CQE Research Proposal (submission copy)",
    type: "Word document",
    version: "Submission copy",
    date: "2026-08-17",
    status: "Submitted",
    note: "Version presented to the CQE panel on 17 August 2026.",
    link: "https://docs.google.com/document/d/1lAWYMtBVNedq_mNtuQztii0JQECji3aV/edit?usp=drive_link&ouid=113439754367314812808&rtpof=true&sd=true"
  },
  {
    title: "CQE Final Presentation",
    type: "PowerPoint",
    version: "Final",
    date: "2026-08-17",
    status: "Final",
    note: "Slides used at the CQE presentation.",
    link: "https://docs.google.com/presentation/d/1xaFn0eKSOnSUGO6I9nh7ZVCxyZg-UiK2/edit?usp=drive_link&ouid=113439754367314812808&rtpof=true&sd=true"
  },
  {
    title: "RBIS Conceptual Paper",
    type: "Word document",
    version: "V3",
    date: "",
    status: "",
    note: "Coursework paper that informed the CQE proposal.",
    link: "https://docs.google.com/document/d/1D0QRZJac6k_GJl4e5zFfW1mW28Kp95By/edit?usp=drive_link&ouid=113439754367314812808&rtpof=true&sd=true"
  }
];

// ---------------------------------------------------------------------
//  READING — only articles recorded as read in the daily log.
//  One entry per article; "read" is the date it was first read.
// ---------------------------------------------------------------------
const READING = [
  {
    authors: "Luthans, F., Avolio, B. J., Avey, J. B., & Norman, S. M.",
    year: 2007,
    title: "Positive psychological capital: Measurement and relationship with performance and satisfaction",
    journal: "Personnel Psychology, 60(3), 541–572",
    link: "https://doi.org/10.1111/j.1744-6570.2007.00083.x",
    type: "Empirical",
    read: "2026-11-20"
  },
  {
    authors: "Luthans, F.",
    year: 2002,
    title: "The need for and meaning of positive organizational behavior",
    journal: "Journal of Organizational Behavior, 23(6), 695–706",
    link: "https://doi.org/10.1002/job.165",
    type: "Conceptual",
    read: "2026-11-20"
  },
  {
    authors: "Hannah, S. T., Avolio, B. J., & May, D. R.",
    year: 2011,
    title: "Moral maturation and moral conation: A capacity approach to explaining moral thought and action",
    journal: "Academy of Management Review, 36(4), 663–685",
    link: "https://doi.org/10.5465/amr.2010.0128",
    type: "Conceptual",
    read: "2026-11-19"
  },
  {
    authors: "Treviño, L. K., den Nieuwenboer, N. A., & Kish-Gephart, J. J.",
    year: 2014,
    title: "(Un)ethical behavior in organizations",
    journal: "Annual Review of Psychology, 65, 635–660",
    link: "https://doi.org/10.1146/annurev-psych-113011-143745",
    type: "Review",
    read: "2026-11-18"
  },
  {
    authors: "Kish-Gephart, J. J., Harrison, D. A., & Treviño, L. K.",
    year: 2010,
    title: "Bad apples, bad cases, and bad barrels: Meta-analytic evidence about sources of unethical decisions at work",
    journal: "Journal of Applied Psychology, 95(1), 1–31",
    link: "https://doi.org/10.1037/a0017103",
    type: "Meta-analysis",
    read: "2026-11-18"
  },
  {
    authors: "Weaver, G. R., & Treviño, L. K.",
    year: 1999,
    title: "Compliance and values oriented ethics programs: Influences on employees' attitudes and behavior",
    journal: "Business Ethics Quarterly, 9(2), 315–335",
    link: "https://doi.org/10.2307/3857477",
    type: "Field survey",
    read: "2026-11-18"
  },
  {
    authors: "Tenbrunsel, A. E., & Messick, D. M.",
    year: 1999,
    title: "Sanctioning systems, decision frames, and cooperation",
    journal: "Administrative Science Quarterly, 44(4), 684–707",
    link: "https://doi.org/10.2307/2667052",
    type: "Experiments",
    read: "2026-11-18"
  },
  {
    authors: "Sandberg, J., & Alvesson, M.",
    year: 2011,
    title: "Ways of constructing research questions: Gap-spotting or problematization?",
    journal: "Organization, 18(1), 23–44",
    link: "https://doi.org/10.1177/1350508410372151",
    type: "Review",
    read: "2026-11-17"
  },
  {
    authors: "Alvesson, M., & Sandberg, J.",
    year: 2011,
    title: "Generating research questions through problematization",
    journal: "Academy of Management Review, 36(2), 247–271",
    link: "https://doi.org/10.5465/amr.2011.59330882",
    type: "Conceptual",
    read: "2026-11-17"
  }
];

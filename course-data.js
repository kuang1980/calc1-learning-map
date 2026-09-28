/* =====================================================================
   Calc I Learning Map — COURSE DATA (the only file you normally edit)
   ---------------------------------------------------------------------
   WEEKLY PACING: nothing to do. The map works out the current week from
   the Notre Dame Fall 2026 calendar below (registrar.nd.edu/calendars).
   Students can drag the week slider to preview any week; "Back to this
   week" returns to today. To pin a week for everyone, set
   TERM.currentWeek to a number; null = automatic.
   Preview a week without editing: add ?week=7 to the page URL.

   LINKS: paste Canvas URLs into each unit's links. Empty "" links show
   as "coming soon" instead of a broken link.
   ===================================================================== */

window.COURSE = {
  title: "Calculus I Learning Map",
  course: "MATH 10550",

  /* Notre Dame Fall 2026 (registrar.nd.edu/calendars) */
  TERM: {
    start: "2026-08-24",        // Classes begin (Mon). Week 1 = Aug 24–30
    lastClass: "2026-12-09",    // Last class day
    year: 2026,                 // year for the MM-DD section dates below
    currentWeek: null,          // null = automatic from today's date; or a number to pin
    breaks: [                   // Weeks with no classes get an unnumbered slot on the timeline
      { label: "Mid-Term Break", start: "2026-10-17", end: "2026-10-25" }
    ],
    holidays: [                 // Shown as a tag on a numbered week (classes meet part of the week)
      { label: "Thanksgiving", start: "2026-11-25", end: "2026-11-29" }
    ],
    finals: { label: "Reading Days & Finals", start: "2026-12-10", end: "2026-12-17" },
    exams: [                    // From the FA26 MATH 10550 syllabus
      { label: "Midterm 1", date: "2026-09-24", time: "8:00–9:15 AM" },
      { label: "Midterm 2", date: "2026-10-15", time: "8:00–9:15 AM" },
      { label: "Midterm 3", date: "2026-11-19", time: "8:00–9:15 AM" },
      { label: "Final exam (tentative)", date: "2026-12-11", time: "4:15–6:15 PM" }
    ]
  },

  /* Units: map position (x, y = top-left corner on a 1200 x 910 canvas; each box is 230 x 120).
     Each section lists its lecture dates (MM-DD, Fall 2026) from "FS26 Calc 1 schedule".
     A unit's weeks and status are worked out from these dates, so edit dates here only. */
  units: [
    {
      id: "functions", title: "Functions", group: "Foundations",
      x: 485, y: 20,
      sections: [
        { s: "P.1 Functions and Their Graphs", dates: ["08-24"] },
        { s: "P.2 Library of Functions; Mathematical Modeling", dates: ["08-24"] },
        { s: "P.3 Operations on Functions; Graphing Techniques", dates: ["08-24"] },
        { s: "P.4 Inverse Functions", dates: ["08-24"] },
        { s: "P.5 Exponential and Logarithmic Functions", dates: ["08-26"] },
        { s: "P.6 Trigonometric Functions", dates: ["08-28"] },
        { s: "P.7 Inverse Trigonometric Functions", dates: ["08-28"] }
      ],
      why: "Every idea in calculus acts on a function. Fluency here makes limits and derivatives about the new idea, not the algebra.",
      retrieval: [
        { q: "Is f(x) = x² + 1 one-to-one on all real numbers? What would you change to give it an inverse?",
          a: "No. f(1) = f(−1) = 2, so it fails the horizontal line test. Restrict the domain to x ≥ 0; then f⁻¹(x) = √(x − 1)." },
        { q: "Rewrite log_b(xy) and log_b(xʳ) without products or powers inside the log.",
          a: "log_b(xy) = log_b x + log_b y, and log_b(xʳ) = r·log_b x." },
        { q: "What are the domain and range of y = arcsin x?",
          a: "Domain [−1, 1]; range [−π/2, π/2]." }
      ],
      confidence: "How confident are you composing functions and finding inverses?",
      pitfalls: [
        "f⁻¹(x) is the inverse function, not 1/f(x).",
        "ln(a + b) is not ln a + ln b.",
        "sin²x means (sin x)², but sin⁻¹x means arcsin x."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "limits", title: "Limits", group: "Foundations",
      x: 485, y: 190,
      sections: [
        { s: "1.1 Limits of Functions Using Numerical and Graphical Techniques", dates: ["08-31"] },
        { s: "1.2 Limits of Functions Using Properties of Limits", dates: ["09-02", "09-04"] },
        { s: "1.3 Continuity (+ Intermediate Value Theorem)", dates: ["09-07"] },
        { s: "1.4 Limits and Continuity of Trigonometric, Exponential, and Logarithmic Functions", dates: ["09-09"] },
        { s: "1.5 Infinite Limits; Limits at Infinity; Asymptotes", dates: ["09-11"] }
      ],
      why: "Limits are the engine under both branches: the derivative is a limit of slopes, and the integral is a limit of sums.",
      retrieval: [
        { q: "In your own words, what does lim(x→c) f(x) = L mean?",
          a: "f(x) can be made as close to L as we like by taking x close enough to c (but not equal to c). The value f(c) itself does not matter." },
        { q: "What is lim(x→0) (sin x)/x, and which theorem proves it?",
          a: "It equals 1. The Squeeze Theorem, using cos x ≤ (sin x)/x ≤ 1 near 0." },
        { q: "List the three conditions for f to be continuous at x = c.",
          a: "f(c) is defined; lim(x→c) f(x) exists; and the limit equals f(c)." }
      ],
      confidence: "How confident are you using the Squeeze Theorem?",
      pitfalls: [
        "Getting 0/0 on substitution does not mean the limit fails to exist. It means more work is needed.",
        "If the one-sided limits differ, the two-sided limit does not exist.",
        "∞ is not a number. Writing a limit = ∞ describes how the limit fails to exist."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "derivatives", title: "Derivatives", group: "Derivatives",
      x: 165, y: 370,
      sections: [
        { s: "2.1 Rates of Change and the Derivative", dates: ["09-14"] },
        { s: "2.2 The Derivative as a Function", dates: ["09-16"] }
      ],
      why: "The derivative turns 'how fast is this changing right now?' into something you can compute.",
      retrieval: [
        { q: "Before viewing the solution, write down the limit definition of the derivative.",
          a: "f′(x) = lim(h→0) [f(x + h) − f(x)] / h." },
        { q: "How is an average rate of change different from an instantaneous one?",
          a: "Average: slope of a secant line, [f(b) − f(a)]/(b − a). Instantaneous: the limit of those slopes as b → a, the slope of the tangent line." },
        { q: "If f is differentiable at c, must it be continuous at c? Does the converse hold?",
          a: "Yes, differentiable implies continuous. The converse is false: f(x) = |x| is continuous at 0 but not differentiable there." }
      ],
      confidence: "How confident are you finding a derivative from the limit definition?",
      pitfalls: [
        "Simplify the difference quotient before letting h → 0.",
        "f′(a) is a number (a slope); f′(x) is a function.",
        "A corner, cusp, or vertical tangent means no derivative at that point."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "deriv-methods", title: "Methods", parentTitle: "Derivatives", group: "Derivatives",
      x: 20, y: 560,
      sections: [
        { s: "2.3 The Derivative of a Polynomial Function; The Derivative of y = eˣ", dates: ["09-18"] },
        { s: "2.4 Differentiating the Product and the Quotient of Two Functions; Higher-Order Derivatives", dates: ["09-21"] },
        { s: "2.5 The Derivative of the Trigonometric Functions", dates: ["09-25"] },
        { s: "3.1 The Chain Rule", dates: ["09-28"] },
        { s: "3.2 Implicit Differentiation", dates: ["09-30"] },
        { s: "3.3 Derivatives of the Inverse Trigonometric Functions", dates: ["10-02"] },
        { s: "3.4 Derivatives of Logarithmic Functions", dates: ["10-05"] }
      ],
      why: "These rules let you skip the limit definition every time. The Chain Rule is the one you will use most.",
      retrieval: [
        { q: "Write the Product Rule and the Quotient Rule.",
          a: "(fg)′ = f′g + fg′.  (f/g)′ = (f′g − fg′)/g²." },
        { q: "Differentiate y = sin(x²).",
          a: "y′ = cos(x²) · 2x = 2x cos(x²). Outer derivative, then times the inner derivative." },
        { q: "For x² + y² = 25, find dy/dx.",
          a: "2x + 2y·(dy/dx) = 0, so dy/dx = −x/y." }
      ],
      confidence: "How confident are you applying the Chain Rule to nested functions?",
      pitfalls: [
        "(fg)′ is not f′g′.",
        "Forgetting the inner derivative in the Chain Rule.",
        "In implicit differentiation, every y term picks up a dy/dx."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "deriv-apps", title: "Applications", parentTitle: "Derivatives", group: "Derivatives",
      x: 330, y: 560,
      sections: [
        { s: "3.5 Differentials; Linear Approximations; Newton's Method", dates: ["10-07", "10-09"] },
        { s: "4.1 Related Rates", dates: ["10-09", "10-12"] },
        { s: "4.2 Maximum and Minimum Values; Critical Numbers (+ Extreme Value Theorem)", dates: ["10-16", "10-26"] },
        { s: "4.3 The Mean Value Theorem", dates: ["10-28"] },
        { s: "4.4 Local Extrema and Concavity", dates: ["10-30"] },
        { s: "4.5 Indeterminate Forms and L'Hôpital's Rule", dates: ["11-02"] },
        { s: "4.6 Using Calculus to Graph Functions", dates: ["11-04"] },
        { s: "4.7 Optimization", dates: ["11-06", "11-09"] }
      ],
      why: "This is where derivatives answer real questions: fastest, largest, cheapest, and how quantities change together.",
      retrieval: [
        { q: "What makes c a critical number of f?",
          a: "c is in the domain of f, and f′(c) = 0 or f′(c) does not exist." },
        { q: "State the Mean Value Theorem.",
          a: "If f is continuous on [a, b] and differentiable on (a, b), then some c in (a, b) has f′(c) = [f(b) − f(a)]/(b − a)." },
        { q: "When can you use L'Hôpital's Rule?",
          a: "Only for the indeterminate forms 0/0 or ∞/∞. Other forms (0·∞, ∞ − ∞, 1^∞…) must be rewritten first." }
      ],
      confidence: "How confident are you setting up an optimization problem from words?",
      pitfalls: [
        "On a closed interval, check the endpoints as well as critical numbers.",
        "L'Hôpital's Rule differentiates top and bottom separately, not with the Quotient Rule.",
        "In related rates, substitute the numbers only after differentiating."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "integrals", title: "Integrals", group: "Integrals",
      x: 825, y: 370,
      sections: [
        { s: "5.2 The Definite Integral", dates: ["11-16", "11-20"] },
        { s: "5.5 The Indefinite Integral", dates: ["12-02", "12-04"] }
      ],
      why: "Integrals add up infinitely many small pieces, which gives areas, totals, and accumulated change.",
      retrieval: [
        { q: "What does ∫ from a to b of f(x) dx represent?",
          a: "The limit of Riemann sums, which equals the net signed area between the graph of f and the x-axis on [a, b]." },
        { q: "How is ∫ f(x) dx different from ∫ from a to b of f(x) dx?",
          a: "The indefinite integral is a family of functions (+ C). The definite integral is a single number." },
        { q: "∫ xⁿ dx = ?",
          a: "xⁿ⁺¹/(n + 1) + C, for n ≠ −1." }
      ],
      confidence: "How confident are you interpreting a definite integral as a limit of Riemann sums?",
      pitfalls: [
        "Forgetting + C on indefinite integrals.",
        "Net area subtracts the parts below the x-axis; total area does not."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "int-apps", title: "Applications", parentTitle: "Integrals", group: "Integrals",
      x: 700, y: 560,
      sections: [
        { s: "5.1 Area", dates: ["11-13"] }
      ],
      why: "Estimating area with rectangles is the idea that the definite integral makes exact.",
      retrieval: [
        { q: "Estimate the area under y = x² on [0, 2] using 2 right-endpoint rectangles.",
          a: "Width 1: f(1)·1 + f(2)·1 = 1 + 4 = 5." },
        { q: "For an increasing function, do right-endpoint sums overestimate or underestimate the area?",
          a: "They overestimate. The estimate improves as the number of rectangles grows." }
      ],
      confidence: "How confident are you setting up a Riemann sum?",
      pitfalls: [
        "Δx = (b − a)/n, not 1/n unless the interval has length 1.",
        "Left and right endpoints give different estimates; know which one the problem asks for."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "int-methods", title: "Methods", parentTitle: "Integrals", group: "Integrals",
      x: 950, y: 560,
      sections: [
        { s: "5.3 The Fundamental Theorem of Calculus", dates: ["11-23"] },
        { s: "5.4 Properties of the Definite Integral", dates: ["11-30"] },
        { s: "5.5 Method of Substitution", dates: ["12-02", "12-04"] }
      ],
      why: "The Fundamental Theorem connects the two branches of the map: integration undoes differentiation.",
      retrieval: [
        { q: "State both parts of the Fundamental Theorem of Calculus.",
          a: "Part 1: d/dx ∫ from a to x of f(t) dt = f(x). Part 2: ∫ from a to b of f(x) dx = F(b) − F(a), where F′ = f." },
        { q: "Evaluate ∫ from 0 to 1 of 2x(x² + 1)³ dx.",
          a: "Let u = x² + 1, du = 2x dx; limits become 1 to 2. ∫ from 1 to 2 of u³ du = (16 − 1)/4 = 15/4." },
        { q: "How does ∫ from b to a of f compare with ∫ from a to b of f?",
          a: "They are negatives: swapping the limits changes the sign." }
      ],
      confidence: "How confident are you choosing u for a substitution?",
      pitfalls: [
        "Change the limits of integration when you substitute (or switch back to x).",
        "d/dx ∫ from a to g(x) of f(t) dt = f(g(x))·g′(x). Don't drop the Chain Rule."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    },
    {
      id: "diffeq", title: "Differential Equations", group: "Synthesis",
      x: 485, y: 750,
      sections: [
        { s: "4.8 Antiderivatives; Differential Equations", dates: ["11-09", "11-11"] },
        { s: "5.6 Separable First-Order Differential Equations; Uninhibited and Inhibited Growth and Decay Models", dates: ["12-07"] }
      ],
      why: "Both branches meet here: derivatives describe how a quantity changes, and integration recovers the quantity itself.",
      retrieval: [
        { q: "Find all antiderivatives of f(x) = cos x.",
          a: "F(x) = sin x + C." },
        { q: "Solve dy/dt = ky with y(0) = y₀.",
          a: "y = y₀e^(kt). Growth if k > 0, decay if k < 0." },
        { q: "Solve dy/dx = xy by separating variables.",
          a: "dy/y = x dx, so ln|y| = x²/2 + C, and y = A·e^(x²/2)." }
      ],
      confidence: "How confident are you separating variables to solve a differential equation?",
      pitfalls: [
        "Add + C right after integrating, before solving for y.",
        "Use the initial condition to find C at the end."
      ],
      links: { quiz: "", review: "", pitfalls: "" }
    }
  ],

  edges: [
    ["functions", "limits"],
    ["limits", "derivatives"], ["limits", "integrals"],
    ["derivatives", "deriv-methods"], ["derivatives", "deriv-apps"],
    ["integrals", "int-apps"], ["integrals", "int-methods"],
    ["deriv-apps", "diffeq"], ["int-apps", "diffeq"]
  ]
};

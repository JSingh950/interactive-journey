import type { QuestCardProps } from "@/components/QuestCard";

export const skills = [
  { code: "ML", label: "TensorFlow / PyTorch", level: 92 },
  { code: "DATA", label: "Python · Pandas · NumPy", level: 95 },
  { code: "WEB", label: "React · Node.js", level: 84 },
  { code: "CLOUD", label: "AWS · GCP · Docker", level: 78 },
  { code: "MOBILE", label: "SwiftUI · iOS", level: 80 },
  { code: "FIN", label: "Financial Modeling", level: 85 },
  { code: "DB", label: "PostgreSQL · MongoDB", level: 82 },
  { code: "AI", label: "Federated Learning", level: 75 },
];

export const traits = [
  {
    id: "01",
    title: "ML that ships",
    body: "I don't just run notebooks — I've deployed models into real workflows. A zoning compliance analyzer that cuts review time by 40%, a traffic forecaster that beat baseline by 12–15%, and an on-premise AI system with federated learning.",
    icon: "🚀",
  },
  {
    id: "02",
    title: "Finance fluency",
    body: "A year in private equity taught me to read a business the same way I read a dataset. Valuation models that uncovered $1M in revenue potential and due diligence memos used in live deals.",
    icon: "📈",
  },
  {
    id: "03",
    title: "Full-stack range",
    body: "Python ML pipelines to SwiftUI iOS apps to React frontends — I follow a problem wherever it needs to go technically. I care about the end user as much as the algorithm underneath.",
    icon: "🧩",
  },
  {
    id: "04",
    title: "Builder mindset",
    body: "Co-founded a company before graduating. Affinity Gaia is an on-premise AI product built around data sovereignty. I understand what it takes to turn a technical idea into something people actually rely on.",
    icon: "🛠️",
  },
];

export const quests: QuestCardProps[] = [
  {
    rank: "Boss",
    title: "Affinity / GAIA",
    tagline: "A privacy-first AI company for enterprises that can't afford cloud exposure.",
    description:
      "Co-founded Affinity and built Affinity Gaia — an on-premise AI infrastructure product for professional services firms. Federated learning, differential privacy, and Multi-LoRA adaptation deliver enterprise intelligence without sending a single byte to the cloud.",
    outcomes: [
      "Full data sovereignty",
      "No cloud dependency",
      "Enterprise AI that firms actually own",
    ],
    tech: ["Federated Learning", "Differential Privacy", "Multi-LoRA", "Python", "On-Premise Infra"],
    stats: [
      { value: "0", label: "Cloud exposure" },
      { value: "LoRA", label: "Adaptation method" },
    ],
    status: "Active",
    icon: "👑",
  },
  {
    rank: "S",
    title: "Zoning AI",
    tagline: "Blueprint compliance that takes seconds, not weeks.",
    description:
      "ML analyzer in Python/TensorFlow that reads architectural blueprints and flags zoning violations automatically. A rules engine surfaces problems in under 5 seconds. Built alongside a React + Firebase web app for plan submission and automated compliance feedback.",
    outcomes: [
      "40% reduction in review time",
      "Violations flagged in < 5s",
      "Weeks of delays reduced to days",
    ],
    tech: ["TensorFlow", "Python", "React", "Firebase", "Rules Engine"],
    stats: [
      { value: "40%", label: "Faster reviews" },
      { value: "<5s", label: "Violation detection" },
    ],
    status: "Shipped",
  },
  {
    rank: "S",
    title: "ML Research @ NJIT",
    tagline: "Risk and traffic forecasting — beating baseline by 12–15%.",
    description:
      "Undergrad AI/ML researcher at NJIT. Built models that improved forecasting accuracy across financial risk and traffic prediction. Preprocessed 50K+ multi-source records and applied hyperparameter tuning that reduced error rates by 10% over 4 months.",
    outcomes: [
      "12–15% accuracy gain over baseline",
      "Error rates cut 10% via hyperparameter tuning",
    ],
    tech: ["Python", "TensorFlow", "Feature Engineering", "Hyperparameter Tuning", "Time Series"],
    stats: [
      { value: "15%", label: "Accuracy gain" },
      { value: "50K+", label: "Records processed" },
    ],
    status: "Research",
  },
  {
    rank: "A",
    title: "Stock Predictor",
    tagline: "Market forecasting with three model architectures, side by side.",
    description:
      "Machine learning system forecasting stock prices using historical market data. Compared linear regression, random forest, and LSTM networks — preprocessed with NumPy and Pandas, evaluated with Matplotlib. Built to understand which approach actually generalizes.",
    outcomes: [
      "25% reduction in training time",
      "End-to-end multi-model comparison pipeline",
    ],
    tech: ["LSTM", "Random Forest", "Linear Regression", "NumPy", "Pandas", "Matplotlib"],
    stats: [
      { value: "25%", label: "Training time saved" },
      { value: "3×", label: "Model architectures" },
    ],
    status: "Shipped",
  },
  {
    rank: "A",
    title: "Campus Shield",
    tagline: "A campus safety app that stays invisible until you need it.",
    description:
      "SwiftUI iOS app connecting NJIT students to campus safety. One-tap emergency dialing, real-time GPS, SOS triggers via shake detection, volume buttons, and lock screen widgets — plus live emergency chat with media sharing. Architected for modularity and reliability.",
    outcomes: [
      "Multiple SOS triggers",
      "Background GPS tracking",
      "Live emergency chat",
    ],
    tech: ["SwiftUI", "CoreLocation", "WidgetKit", "Deep Linking", "Swift"],
    stats: [
      { value: "iOS", label: "SwiftUI native" },
      { value: "3+", label: "SOS trigger methods" },
    ],
    status: "Live",
  },
];

export const experience = [
  {
    period: "2025–26",
    role: "AI/ML Researcher",
    org: "NJIT — AI in Finance & Transportation",
    body: "Developed ML models improving risk and traffic forecasting accuracy 12–15%. Processed 50K+ records; hyperparameter tuning cut error rates 10%.",
    tag: "Research",
  },
  {
    period: "2024–25",
    role: "Private Equity Research Intern",
    org: "Singh Capital Partners · Bethesda MD",
    body: "Valuation models for 3 targets uncovering $1M in revenue potential. Due diligence supported 2 client acquisitions, expanding pipeline 20%. Reporting cycle cut 14 → 10 days.",
    tag: "Finance",
  },
  {
    period: "Ongoing",
    role: "Founder",
    org: "Affinity (AI/GAIA)",
    body: "Co-founded privacy-first AI company. Built Affinity Gaia — on-premise AI using federated learning and differential privacy for professional services firms.",
    tag: "Founder",
  },
  {
    period: "2026–now",
    role: "EcoHighlander · Campus Leader",
    org: "NJIT Office of Sustainability",
    body: "Sustainability ambassador running campus-wide initiatives — clothing swaps, energy competitions, donation drives.",
    tag: "Leadership",
  },
  {
    period: "2025–now",
    role: "President, Laurel Hall Council",
    org: "NJIT — 600+ students",
    body: "Leads hall council overseeing events, budget, and policy coordination with Residence Life.",
    tag: "Leadership",
  },
  {
    period: "Sep–Dec 25",
    role: "Secretary, Student Senate E-Board",
    org: "NJIT — 11,000+ students",
    body: "Maintained Senate documentation; streamlined E-Board communications and event planning across campus organizations.",
    tag: "Leadership",
  },
];

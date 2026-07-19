/* Content for the Multi-MA Ensemble project card on the AlgoTrade page */
export const TITLE = "Multi-MA Ensemble: A Strategy I Killed on Purpose";

export const CONTENT = {
    intro: "I'm building a portfolio of automated trading strategies: systematic rules, backtested honestly, that run in the background instead of asking me to watch a screen. The goal isn't one clever bet. It's a handful of genuinely uncorrelated edges, each one vetted hard enough that I'd trust it with real money, and killed without ceremony when it doesn't hold up. This is the first one. It didn't survive no surprise. That's the most useful thing I can tell you about it.",
    strategy: "Moving-average crossovers are the oldest trick in trend-following. Track a fast average of price against a slow one. When the fast crosses above the slow, buy, when it crosses below, sell. My thinking was that an ensemble of various moving averageswould beat any single crossover pair. Sixteen moving-average signals vote on every stock, each bar. A quality filter drops the weak or thinly-traded ones. A clustering step removes near-duplicates so I'm not double-counting the same bet six different ways. Three to seven signals survive per stock and cast the actual vote.",
    howItWorks: "Signals get chosen on the first 70% of a stock's history, then frozen. They're judged on the last 30%, data the selection process never saw. That split is the part that matters most. Test a strategy on the same data you used to build it and you'll get a flattering, useless answer every time. Every position change also pays a real fee-and-slippage cost, and the ensemble had to clear two honest baselines: simple buy-and-hold, and a plain 50/200-day crossover. If sixteen voting signals can't beat two lines on a chart, then the complexity isn't earning its keep.",
    results: "I ran the frozen test across eleven stocks: uptrends, downtrends, chop. The pattern was consistent. In rising markets, the ensemble gave up return by sitting out pullbacks and buying back in higher, a cost called whipsaw. In falling markets, it generally lost less than buy-and-hold, a real defensive property. But defensive isn't the same as profitable. On the metric that actually decides it, risk-adjusted return against both baselines, the ensemble won 5 of 11. Only 3 of those were genuine gains rather than 'lost less than the alternative.' Against the plain 50/200 crossover alone, it was close to a coin flip.",
    scorecardCaption: "Sixteen signals, a quality filter, and a clustering engine performed about as well as two moving averages.",
    verdict: "So I killed it. What survived was the infrastructure and the knowledge I gained through the process, and that was the real deliverable all along: a vectorized backtesting engine, a real cost model, the train/test discipline, risk-adjusted scoring, the baseline comparisons, and a clustering de-duplication engine that de-correlates a signal pool automatically. None of it cares which strategy runs through it. All of it carries over to the next one. This was my first strategy test, and it taught me more than a winning backtest would have. I learned to distrust a good-looking curve until I've tried to break it, and to actually kill a strategy when the test says to instead of quietly tweaking parameters until it agrees with me.",
};

export const HIGHLIGHTS = [
    "Out-of-Sample Validation",
    "Risk-Adjusted Scoring",
    "Signal De-Correlation",
    "Honest Baselines",
    "Transaction Cost Modeling",
];

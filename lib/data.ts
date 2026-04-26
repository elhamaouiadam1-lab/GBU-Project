// ─── Types ───────────────────────────────────────────────────────────────────

export interface RegressionRow {
  variable: string
  coef: number
  stdErr: number
  tStat: number
  pValue: number
  ci95: string
  significant: boolean
  direction: 'pos' | 'neg' | 'neutral'
}

export interface LogisticRow {
  variable: string
  coef: number
  stdErr: number
  zStat: number
  pValue: number
  significant: boolean
}

export interface ForecastPoint {
  period: string
  actual: number
  ma3: number | null
  exp: number
  isOutlier?: boolean
}

// ─── Task 1 & 2 — Full Linear Regression (8 predictors) ──────────────────────

export const linearCoefficients: RegressionRow[] = [
  { variable: 'Intercept',        coef: -1.7580, stdErr: 1.262, tStat: -1.393, pValue: 0.165, ci95: '[-4.249, 0.733]',  significant: false, direction: 'neutral' },
  { variable: 'Interest Rate',    coef:  0.1825, stdErr: 0.221, tStat:  0.827, pValue: 0.409, ci95: '[-0.253, 0.618]',  significant: false, direction: 'neutral' },
  { variable: 'Inflation',        coef: -0.5198, stdErr: 0.238, tStat: -2.185, pValue: 0.030, ci95: '[-0.989, -0.050]', significant: true,  direction: 'neg'     },
  { variable: 'Unemployment',     coef: -1.7048, stdErr: 0.130, tStat:-13.089, pValue: 0.000, ci95: '[-1.962, -1.448]', significant: true,  direction: 'neg'     },
  { variable: 'Exports',          coef: -0.0337, stdErr: 0.009, tStat: -3.661, pValue: 0.000, ci95: '[-0.052, -0.016]', significant: true,  direction: 'neg'     },
  { variable: 'Imports',          coef:  0.0096, stdErr: 0.014, tStat:  0.684, pValue: 0.495, ci95: '[-0.018, 0.037]',  significant: false, direction: 'neutral' },
  { variable: 'Exchange Rate',    coef:  2.1326, stdErr: 0.305, tStat:  6.990, pValue: 0.000, ci95: '[1.530, 2.735]',   significant: true,  direction: 'pos'     },
  { variable: 'Gov. Spending',    coef:  0.0428, stdErr: 0.014, tStat:  3.073, pValue: 0.002, ci95: '[0.015, 0.070]',   significant: true,  direction: 'pos'     },
  { variable: 'Investment',       coef:  0.0196, stdErr: 0.011, tStat:  1.823, pValue: 0.070, ci95: '[-0.002, 0.041]',  significant: false, direction: 'neutral' },
]

export const linearStats = {
  rSquared:      0.931,
  adjRSquared:   0.928,
  fStatistic:    290.7,
  probF:         '2.56e-95',
  aic:           225.1,
  bic:           253.8,
  nObs:          180,
  dfResiduals:   171,
  logLik:        -103.55,
  durbinWatson:  1.527,
  condNumber:    '1.17e+04',
}

// ─── Task 2 — Logistic Regression ────────────────────────────────────────────

export const logisticCoefficients: LogisticRow[] = [
  { variable: 'Intercept',     coef: -78.056, stdErr: 36.604, zStat: -2.132, pValue: 0.033, significant: true  },
  { variable: 'Interest Rate', coef:   8.688, stdErr:  4.367, zStat:  1.989, pValue: 0.047, significant: true  },
  { variable: 'Inflation',     coef:  -3.740, stdErr:  3.649, zStat: -1.025, pValue: 0.305, significant: false },
  { variable: 'Unemployment',  coef: -10.989, stdErr:  3.517, zStat: -3.125, pValue: 0.002, significant: true  },
  { variable: 'Exports',       coef:  -0.541, stdErr:  0.229, zStat: -2.357, pValue: 0.018, significant: true  },
  { variable: 'Imports',       coef:  -0.199, stdErr:  0.331, zStat: -0.601, pValue: 0.548, significant: false },
  { variable: 'Exchange Rate', coef:  12.777, stdErr:  6.006, zStat:  2.127, pValue: 0.033, significant: true  },
  { variable: 'Gov. Spending', coef:   0.796, stdErr:  0.404, zStat:  1.971, pValue: 0.049, significant: true  },
  { variable: 'Investment',    coef:   0.383, stdErr:  0.189, zStat:  2.025, pValue: 0.043, significant: true  },
]

export const logisticStats = {
  pseudoR2:   0.8562,
  logLik:     -17.006,
  llNull:     -118.29,
  llrPValue:  '1.84e-39',
  nObs:       180,
  dfResiduals: 171,
}

// ─── Task 3 — Model Selection (Best Subset — 6-variable model) ────────────────

export const bestSubsetCoefficients: RegressionRow[] = [
  { variable: 'Intercept',     coef: -2.2323, stdErr: 1.039, tStat: -2.149, pValue: 0.033, ci95: '[-4.282, -0.182]', significant: true, direction: 'neg' },
  { variable: 'Inflation',     coef: -0.5898, stdErr: 0.228, tStat: -2.592, pValue: 0.010, ci95: '[-1.039, -0.141]', significant: true, direction: 'neg' },
  { variable: 'Unemployment',  coef: -1.6806, stdErr: 0.128, tStat:-13.109, pValue: 0.000, ci95: '[-1.934, -1.428]', significant: true, direction: 'neg' },
  { variable: 'Exports',       coef: -0.0297, stdErr: 0.008, tStat: -3.759, pValue: 0.000, ci95: '[-0.045, -0.014]', significant: true, direction: 'neg' },
  { variable: 'Exchange Rate', coef:  2.2824, stdErr: 0.275, tStat:  8.295, pValue: 0.000, ci95: '[1.739, 2.826]',   significant: true, direction: 'pos' },
  { variable: 'Gov. Spending', coef:  0.0418, stdErr: 0.012, tStat:  3.473, pValue: 0.001, ci95: '[0.018, 0.065]',   significant: true, direction: 'pos' },
  { variable: 'Investment',    coef:  0.0234, stdErr: 0.010, tStat:  2.435, pValue: 0.016, ci95: '[0.004, 0.042]',   significant: true, direction: 'pos' },
]

export const bestSubsetStats = {
  rSquared:    0.931,
  adjRSquared: 0.929,
  fStatistic:  388.8,
  probF:       '1.30e-97',
  aic:         222.5,
  bic:         244.9,
  nObs:        180,
  dfResiduals: 173,
  logLik:      -104.26,
  durbinWatson: 1.481,
}

export const modelSelectionSummary = [
  {
    method: 'Backward Elimination',
    description: 'Start with all 8 variables; remove the highest p-value predictor (p > 0.05) iteratively.',
    removed:  ['Interest Rate', 'Imports'],
    selected: ['Inflation', 'Unemployment', 'Exports', 'Exchange Rate', 'Gov. Spending', 'Investment'],
  },
  {
    method: 'Forward Selection',
    description: 'Start with no variables; add the most significant predictor (p < 0.05) at each step.',
    removed:  [],
    selected: ['Inflation', 'Unemployment', 'Exchange Rate', 'Gov. Spending', 'Exports', 'Investment'],
  },
  {
    method: 'Best Subset',
    description: 'Evaluate all 2⁸ − 1 subsets; choose the one maximising Adjusted R².',
    removed:  ['Interest Rate', 'Imports'],
    selected: ['Inflation', 'Unemployment', 'Exports', 'Exchange Rate', 'Gov. Spending', 'Investment'],
  },
]

// Coefficient chart data (exclude intercept, sorted by |coef|)
export const coeffChartData = [
  { name: 'Exchange Rate',   coef:  2.133, sig: true  },
  { name: 'Unemployment',    coef: -1.705, sig: true  },
  { name: 'Inflation',       coef: -0.520, sig: true  },
  { name: 'Interest Rate',   coef:  0.183, sig: false },
  { name: 'Gov. Spending',   coef:  0.043, sig: true  },
  { name: 'Exports',         coef: -0.034, sig: true  },
  { name: 'Investment',      coef:  0.020, sig: false },
  { name: 'Imports',         coef:  0.010, sig: false },
]

// ─── Task 4 — GDP Trend (annual, Dec snapshot) ───────────────────────────────

export const gdpTrendData = [
  { year: '2010', gdp: 3.10 },
  { year: '2011', gdp: 3.19 },
  { year: '2012', gdp: 3.27 },
  { year: '2013', gdp: 4.23 },
  { year: '2014', gdp: 4.49 },
  { year: '2015', gdp: 4.61 },
  { year: '2016', gdp: 4.41 },
  { year: '2017', gdp: 4.36 },
  { year: '2018', gdp: 4.67 },
  { year: '2019', gdp: 5.02 },
  { year: '2020', gdp: 4.78 },
  { year: '2021', gdp: 5.80 },
  { year: '2022', gdp: 6.16 },
  { year: '2023', gdp: 12.67, outlier: true },
  { year: '2024', gdp: 8.48 },
]

// ─── Task 4 — 2024 Monthly Forecasting Comparison ────────────────────────────
// MA_3 computed from rolling 3-month window; Exp Smoothing reconstructed via α ≈ 0.257

export const forecastingData: ForecastPoint[] = [
  { period: 'Jan',  actual:  7.04, ma3: null,  exp: 8.51 },
  { period: 'Feb',  actual:  6.94, ma3: null,  exp: 8.13 },
  { period: 'Mar',  actual:  6.90, ma3:  6.96, exp: 7.82 },
  { period: 'Apr',  actual:  7.15, ma3:  6.99, exp: 7.59 },
  { period: 'May',  actual:  7.38, ma3:  7.14, exp: 7.47 },
  { period: 'Jun',  actual:  7.71, ma3:  7.41, exp: 7.45 },
  { period: 'Jul',  actual:  7.59, ma3:  7.56, exp: 7.52 },
  { period: 'Aug',  actual:  7.94, ma3:  7.75, exp: 7.53 },
  { period: 'Sep',  actual:  7.64, ma3:  7.72, exp: 7.64 },
  { period: 'Oct',  actual:  8.06, ma3:  7.88, exp: 7.64 },
  { period: 'Nov',  actual: 12.66, ma3:  9.45, exp: 7.75, isOutlier: true },
  { period: 'Dec',  actual:  8.48, ma3:  9.73, exp: 9.01 },
]

export type { BlogArticle, BlogSection } from './blog-types';
import type { BlogArticle } from './blog-types';

import { article as a01 } from './articles/what-are-peptides-researchers-primer';
import { article as a02 } from './articles/understanding-coas-how-to-read-certificate-of-analysis';
import { article as a03 } from './articles/cold-chain-shipping-why-it-matters-for-peptide-integrity';
import { article as a04 } from './articles/bpc-157-researchers-complete-guide';
import { article as a05 } from './articles/semaglutide-vs-tirzepatide-research-comparison';
import { article as a06 } from './articles/tb-500-thymosin-beta-4-researchers-complete-guide';
import { article as a07 } from './articles/ghk-cu-copper-peptide-research-review';
import { article as a08 } from './articles/ipamorelin-vs-ghrp2-vs-ghrp6-growth-hormone-secretagogue-comparison';
import { article as a09 } from './articles/mk-677-ibutamoren-oral-gh-secretagogue-guide';
import { article as a10 } from './articles/nad-plus-cellular-energy-sirtuins-longevity-research';
import { article as a11 } from './articles/pt-141-bremelanotide-melanocortin-research-review';
import { article as a12 } from './articles/selank-semax-nootropic-peptide-research-overview';
import { article as a13 } from './articles/epithalon-telomere-peptide-research-guide';
import { article as a14 } from './articles/retatrutide-triple-agonist-research-guide';
import { article as a15 } from './articles/oxytocin-research-neuropeptide-guide';
import { article as a16 } from './articles/kisspeptin-lh-surge-reproductive-neuroendocrinology-research';
import { article as a17 } from './articles/kpv-immunomodulatory-tripeptide-research-guide';
import { article as a18 } from './articles/aod-9604-lipolytic-fragment-research-guide';
import { article as a19 } from './articles/cjc-1295-no-dac-vs-cjc-1295-dac-choosing-right-ghrh-analog';
import { article as a20 } from './articles/thymosin-alpha-1-immune-peptide-research-guide';
import { article as a21 } from './articles/ll-37-human-host-defense-peptide-research-guide';
import { article as a22 } from './articles/mots-c-mitochondria-derived-peptide-metabolic-research';
import { article as a23 } from './articles/ss-31-elamipretide-mitochondria-targeted-peptide-research';
import { article as a24 } from './articles/dsip-delta-sleep-inducing-peptide-sleep-research-review';
import { article as a25 } from './articles/sermorelin-ghrh-analog-anti-aging-research';
import { article as a26 } from './articles/cerebrolysin-neurotrophic-peptide-research-review';
import { article as a27 } from './articles/hexarelin-forgotten-ghrp-cardiac-effects';
import { article as a28 } from './articles/tesamorelin-ghrh-analog-visceral-fat-research';
import { article as a29 } from './articles/snap-8-anti-wrinkle-peptide-research-guide';
import { article as a30 } from './articles/glp1-receptor-agonists-complete-research-landscape';
import { article as a31 } from './articles/melanotan-ii-melanocortin-research-review';
import { article as a32 } from './articles/bpc-157-tb-500-recovery-stack-deep-dive';
import { article as a33 } from './articles/wolverine-blend-bpc157-tb500-ghk-cu-triple-combination-guide';
import { article as a34 } from './articles/follistatin-344-igf1-independent-muscle-research';
import { article as a35 } from './articles/hgh-fragment-176-191-vs-aod-9604-difference';
import { article as a36 } from './articles/ghrp-2-pralmorelin-growth-hormone-releasing-peptide-research-guide';
import { article as a37 } from './articles/ghrp-6-original-ghrelin-mimetic-research-guide';
import { article as a38 } from './articles/adamax-dsip-selank-nad-nootropic-stack-protocol-deep-dive';
import { article as a39 } from './articles/adipotide-ftpp-experimental-adipose-targeted-research-peptide';
import { article as a40 } from './articles/peptide-administration-routes-sc-ip-iv-intranasal-guide';
import { article as a41 } from './articles/ghk-cu-vs-ghk-copper-complex-chemistry-research-guide';
import { article as a42 } from './articles/peptide-stability-lyophilization-matters';
import { article as a43 } from './articles/cjc-1295-ipamorelin-gh-axis-stack-deep-dive';
import { article as a44 } from './articles/peptide-bioavailability-route-of-administration-research-guide';
import { article as a45 } from './articles/bpc-157-tb-500-how-to-dosing-protocol-guide';
import { article as a46 } from './articles/ipamorelin-dosing-timing-protocol-design-researchers-reference';
import { article as a47 } from './articles/peptide-synergy-stacking-science-of-combining-research-compounds';
import { article as a48 } from './articles/epitalon-pineal-peptide-longevity-research-review';
import { article as a49 } from './articles/semaglutide-dosing-timing-protocol-design-researchers-reference';

export const articles: BlogArticle[] = [
  a01, a02, a03, a04, a05, a06, a07, a08, a09, a10,
  a11, a12, a13, a14, a15, a16, a17, a18, a19, a20,
  a21, a22, a23, a24, a25, a26, a27, a28, a29, a30,
  a31, a32, a33, a34, a35, a36, a37, a38, a39,
  a40, a41, a42, a43,
  a44, a45, a46,
  a47, a48,
  a49,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

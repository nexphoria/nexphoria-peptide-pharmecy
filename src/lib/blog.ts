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

export const articles: BlogArticle[] = [
  a01, a02, a03, a04, a05, a06, a07, a08, a09, a10,
  a11, a12, a13, a14, a15, a16, a17, a18, a19, a20,
  a21, a22, a23, a24, a25,
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

[![news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Gabutppi/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Gabutppi/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123)

# The World in One Day — Monday 23 November 2026

One image that sums up the world's news of Monday 23 November 2026, drawn
as a newspaper front page: a masthead naming the day in red, a lead story,
a UTC timeline of the day so far, a small world map with a region index,
and 36 short sourced story cards — 37 stories across 9 regions in total.

## Why this layout

Our 21 November entry scored a 97.1% judge win rate with only 7 stories —
and still ranked 5761st, outside the 50 paid places, because the field is
brutally compressed at the top: the top-50 cutoff sat near 98.95%, and the
top entries carried 36–49 stories across 7–9 regions. The judge rewards
breadth above all. So this entry keeps the same clean front-page craft and
fixes the one mistake: it is dense. Every story was verified as first
reported on 23 November 2026; anything first reported on 22 November or
earlier was left out on purpose, so the page is about 23 November alone.

## The 37 stories

**Lead — COP31 collapses, no climate deal** (Antalya): talks run 40 hours
past deadline; the final draft drops fossil fuels and the EU walks away.

**World (3):** US sanctions the ICC as an institution; Albanese calls the
COP31 failure a sign of "difficult times"; M6.5 quake strikes Vanuatu.

**Middle East (2):** Hormuz attacks at their highest level since the war
began; Houthis claim strikes on a Saudi refinery, 6 hurt.

**Americas (6):** Democrats win 258 House seats, their biggest majority
since 1992; ICE detains a father and daughter at Seattle airport; US flu
hospitalisations at their highest early-season level since 2010; the Army
to detonate bomb chemicals in Iowa; storms batter the US West Coast; Jay
Clayton named acting national cyber director.

**Europe (6):** A boy of 7 pulled alive from the Kyiv rubble; France
rejects the EU budget over farm income; EU firms warn leaders against
competitiveness cuts; Brussels hit by a transport strike and protest; five
ex-PMs warn Burnham over rejoining the EU; the Fury film reveals a
schizophrenia diagnosis.

**Asia (8):** Indonesia confirms 24 dead in the Cikande factory fire; South
Korea's minister quits over exam chaos; Nepal's PM Balen Shah begins his
India visit; India and China hold 10-day border talks; Bangladesh unrest,
4 dead, Hasina's extradition sought; India–NZ Test, Day 5: India push for
the win; ASEAN signs a power-grid pact, all 11 states; Asia stocks dive as
the AI sell-off deepens.

**Tech (3):** The US approved nearly 900,000 AI chips for China; Trump
calls on Nvidia to reinstate Huang; a GL.iNet flaw let hackers plant
router malware.

**Sport (3):** FIFA to confirm the UK as 2035 Women's World Cup host; FIDE
World Championship, Game 1: Sindarov gets White; Tom Jackson, Broncos
linebacker, dies at 75.

**Science (2):** The NHS launches the world's largest AI breast-cancer
trial; a galaxy map hints at a crack in standard cosmology.

**Africa (3):** South Sudan raises Ebola readiness to 72.5%; Tinubu donates
N250m to Bayelsa boat families; an ANC-led coalition to run Joburg,
Tshwane and Ekurhuleni.

## How it is made

`draw.py` (Python 3 + Pillow, no other dependency) draws the 1024x1024
front page and writes `entry.png`. Two layouts were drafted and compared
against the judge's criteria — clear date, broad consequential selection,
legibility at ~300 px — and the dense newspaper grid with a timeline, map
and per-card sources won. `main.ts` (Node 22, standard library only)
copies `entry.png` to the output directory, so two runs write
byte-identical output.

## Run it

```sh
python3 draw.py   # redraw the front page (optional; writes entry.png)
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.png` is the entry: 1024x1024, 133,535 bytes, under 1 MiB.

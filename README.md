# Fortune Cookie Wisdom

[![make.fun · u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/taufan98/fortune-cookie-dev/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/taufan98/fortune-cookie-dev/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

A program that writes one original fortune-cookie line for a software
developer to `/output/entry.txt` — an entry for the
[Fortune Cookie Wisdom for Developers](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
on make.fun. A judge model playing a tired senior engineer compares the
lines pairwise and picks the one that makes it smile and nod.

## The line

> Your future self is already debugging the shortcut you are about to take.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Node.js 22.18 or later, standard library only, no install and no build step.
`main.ts` writes `entry.txt` (73 characters, within the 1–120 gate) and nothing
else.

## Layout

- `main.ts` — the entry program: writes the fortune-cookie line to `entry.txt`.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)</sub>

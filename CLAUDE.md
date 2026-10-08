# hannontan.com

The website of HANNON TAN, Jim Hannon-Tan's design studio, and its first product, Signet 01: a sterling silver signet ring with an NFC chip that signs. Static pages built with Vite and hosted on Vercel.

## Names
- HANNON TAN: the brand, always in capitals.
- Jim Hannon-Tan: the designer, with a hyphen. Company: Jim Hannon-Tan Design Pty Ltd.
- Signet 01: the product. Edition 01: its first numbered edition.

## Publishing
- `main` is production: every push to `main` publishes hannontan.com. Push to `main` only when Jim asks to publish.
- Every other branch gets a Vercel preview. Previews sit behind Vercel login (Deployment Protection), so people without Jim's Vercel account can't open them.
- To check a deploy without Vercel access, read the GitHub commit status: `https://api.github.com/repos/Phygicoil/signvm-website/commits/<sha>/status`.
- `pnpm install`, `pnpm build` (writes `dist/`), `pnpm preview` (serves `dist/`). Preview ignores the `vercel.json` rewrites, so open `/6.html` or `/v3.html` there.
- `node_modules/` and `dist/` are ignored. Stage files by name.

## Pages
| URL | File | What it is |
| --- | --- | --- |
| / | `index.html` | Live home page, launched 8 Oct 2026 |
| /6 | `6.html` | Copy of branch `6`, live since 8 Oct 2026, hidden from search engines |
| /1b | `1b.html` | One-screen page: the offer, Details folded away, the enquiry with one optional "function you'd most like" (sent as `functions`, page "hannontan.com/1b"). Live since 8 Oct 2026, hidden from search engines |
| /v1, /v2, /v3 | `v1.html` … `v3.html` | Earlier versions, kept. /v3 is the previous home page |
| /pd, /pitchdeck | `pd/`, `pitchdeck/` | Earlier materials |

- A new page needs an entry in the `vite.config.js` inputs and, for a clean URL, a rewrite in `vercel.json`.
- Photos live in `public/images/s01/`: `one.jpg` (hero), `touch.jpg` (the gesture), `cream.jpg` (the object), `portrait.jpg` (designer), `share.jpg` (1200 × 630 share image).
- `LLMS.TXT` is old SIGNVM copy and isn't deployed. Don't use it as a source of facts.

## Branch 6
- Branch `6` holds the response to Jim's brief for a first-edition buyer. Its `index.html` is the proposed new home page. Making it the home page means merging `6` into `main`, which is Jim's decision.
- `6.html` on `main` is branch 6's `index.html` with three edits: `<meta name="robots" content="noindex">`; canonical and `og:url` set to `https://www.hannontan.com/6`; the form's `page` field set to `"hannontan.com/6"`. When branch 6 changes and Jim wants /6 updated, copy it across again and reapply the three edits.

## How the pages are built
- Each page is one self-contained HTML file with inline CSS and JS. No framework.
- Typeface: Instrument Sans from Google Fonts (400, 500, 600). Light only.
- Colours: paper `#FFFFFF`, plate `#EFF0F2` (behind photos), ink `#000000`, ink-2 `#696C72` (labels, captions, notes), rule `#E3E4E7`, line `#8C8F95`.
- Two type sizes:
  - Titles are 32px on desktop and 26px on phones, weight 500, line height 1.12.
  - Everything else is one size, 14px with line height 1.55. The current home page uses 13px on desktop.
  - Hierarchy comes from weight (400 and 500), from black versus grey, and from space.
  - Form fields are 16px on touch screens so iPhones don't zoom.
- Grid: 12 columns from 960px. Pictures in columns 1 to 7, words in 9 to 12 (1 to 6 and 8 to 12 between 960 and 1279px). On branch 6 the three areas of use are the one band across all twelve columns.
- Parts:
  - A sticky bar with a hairline once scrolled.
  - Fact and spec lists separated by rules.
  - The number register 01 to 10: ten across with a mouse, two rows of five on phones and touch screens.
  - `<details>` rows with + and −.
  - A native `<dialog>` for the enquiry.
- Motion only answers an action (the enquiry opening) and respects `prefers-reduced-motion`.

## Settings at the top of each page's script
- `HELD`: numbers already reserved, for example `["01", "07"]`. They show struck out. When all ten are held, the button becomes "Join the waitlist".
- `FIRST_CASTING_CLOSES`: the casting deadline, in Adelaide time. After it, every element marked `data-casting` switches to its closed wording.
- `FORM_KEY`: the Web3Forms access key. It's public by design, because the browser sends it.
- `DEMO_FILM` (branch 6 and /6 only): the demonstration film. While it's empty, the gesture photograph shows and no player appears. To add the film:
  - Put the file in `public/media/` and set `var DEMO_FILM = "/media/signet-01-demo.mp4";`.
  - Use MP4 (H.264) so it plays on iPhone. A 5:4 frame fills the space on desktop.
  - A `.vtt` file with the same name is picked up as captions.
  - The film plays only when pressed, and the photograph comes back if the file can't load.

## Enquiry form
- Posts JSON to `https://api.web3forms.com/submit` with these fields:
  - `access_key`, `from_name` ("The Signet"), `replyto`, `name`, `email`
  - `subject`: "Signet 01 enquiry", or "Signet 01 enquiry · #07" when a number is chosen
  - `number`, `message`
  - `functions`: joined with "; " on branch 6 and with ", " on the current home page
  - `page`: "hannontan.com" or "hannontan.com/6"
- Only the email is required.
- Links to `#enquire` or `#enquire-07` open the form, with that number chosen.
- Never send a real enquiry while testing. Intercept `api.web3forms.com` (for example with Playwright's `page.route`) and answer it locally.

## Copy rules
- No em dashes. No "not X but Y" constructions.
- Cut hard: no repetition, filler or vagueness. Short, plain sentences.
- Never describe Adelaide as slow.
- British spelling: authorise, centre, colour.
- Claims stay honest. Add no promises the product can't back, such as lifetime support, upgrades, investment value or working with every phone, door or system.
- Prices, edition terms and readiness labels are Jim's to decide. Publish deposit or reservation terms only after he confirms them.

## Product facts on the site
- Signet 01, reference S01.AG. 925 sterling silver. A 12-turn labyrinth antenna. Arx HaLo secure element; its key is made on the chip and can't be exported. Passive NFC, with no battery.
- Edition 01: ten rings numbered 01 to 10, US$4,800 each, made to the owner's size. First casting closes 30 November 2026. Delivery expected from Q1 2027.
- Works with iPhone and Android phones with NFC. Each function needs compatible software.
- Provenance is recorded on LUKSO, in the owner's Universal Profile. Studio servicing can renew the electronics and refinish the silver.

## Readiness labels (branch 6 and /6)
- In development:
  - Approve a protected action (Request Seal SDK)
  - Approve a transaction (Safe multisig on Ethereum)
  - Carry your membership (Request Seal SDK)
  - Build with Signet (the SDK itself)
- Available for events: Unlock access, through LUKSO proof of presence (Jim, 8 Oct 2026). Digital spaces and physical entrances are still to confirm.
- Availability to confirm, waiting on Jim:
  - Sign a text, image or document
  - Mint a moment
  - Delegate to a person
  - Set an AI mandate
  - Manage agent permissions
- A missing label never means "available now". Change a label only when Jim confirms it.
- Each label appears in two places, the applications list and the enquiry form's options. Change both.

## Open
- Readiness labels still to confirm (above).
- No written answers yet for setup after delivery, loss or theft, chip failure, what happens if the software stops, or the ring's public key being readable from a quick tap. Keep these off the page until they exist.
- Finished photography and the real demonstration film are still to come.

## Checking a change
- `pnpm build` passes.
- Look at 1440, 1100, 390 and 320px wide: no sideways scrolling, every image loads, no console errors.
- Keyboard:
  - Disclosures open with Enter and Space.
  - The dialog takes focus; Escape closes it and returns focus to the button that opened it.
  - The page doesn't scroll behind the open dialog.
- Form messages, with the endpoint intercepted: missing email, sending, sent (the form clears), rejected, no connection.

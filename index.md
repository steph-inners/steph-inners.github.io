<style>
	
	body {
		background-color: #323633;
		color: #c2d1c6;
	}
	
	a {
		color: #93c29d;
	}
	
    .art {
          padding: 5px
          background-color: #c2d1c6;    
          text-align: center;
          width: 30%;
     }
	 
    .gallery {
          padding: 5px
          background-color: #c2d1c6;    
          text-align: center;
          width: 30%;
          display: flex;
     }

     .icon {
          width: 30px;
          height: 30px;
          padding: 0px;
     }

     #socials {
          display: flex;
          justify-content: center;
          padding-right: 10px;
     }

	 
	blockquote p {
		color: #a4baaa;
	}

     #nav {
          position: fixed; 
          color: #fff; 
          font-size: 14px; 
          font-weight: 600; 
          background-color: #93c29d;
          color: #323633;
          padding: 10px 10px 10px 36px; 
          height: 100%; 
          width: 300px; 
          overflow: wrap; 
          top: 0; 
          left: 0; 
     }

     #nav h1 {
          font-size: 24px;
     }

     @media screen and (max-width: 600px) {
          #nav {
               visibility: hidden;
               clear: both;
          }
          #mainContent {
               padding-left: 0px;
               left: 0px;
               top: 0px;
          }
     }

     @media screen and (min-width: 600px) {
          #mainContent {
               padding-left: 310px;
          }
     }

     #nav a {
          color: #323633;
     }

     h1 a {
          visibility: hidden;
     }
	
</style>

<div id="nav" markdown="1">

# steph-inners.github.io

<div id="socials" markdown="1">

<a href="mailto:inners.stephanie@gmail.com" target="_blank"><img class="icon" src="images\site assets\email.png">
<a href="https://github.com/steph-inners" target="_blank"><img class="icon" src="images\site assets\github.png">
<a href="https://www.instagram.com/steph_inks/" target="_blank"><img class="icon" src="images\site assets\instagram.png">
<a href="http://steph-inks.redbubble.com" target="_blank"><img class="icon" src="images\site assets\redbubble.256x256.png">
<a href="https://www.goodreads.com/user/show/17924913-steph" target="_blank"><img class="icon" src="images\site assets\goodreads.png">

</div>

*This site is perpetually under construction; please pardon the mess.*

----------------

## Contents

<a href="#top">Return to top</a>

1. [About me](https://steph-inners.github.io/#about)
2. [Resume](https://steph-inners.github.io/#resume)
3. [Code](https://steph-inners.github.io/#code)
	1. [Handy SQL tricks](https://steph-inners.github.io/#handy-sql-tricks)
	2. [Data development heuristics](https://steph-inners.github.io/#heuristics-for-data-adjacent-developers)
	3. [Intro to Records Retention](https://steph-inners.github.io/#how-records-retention-works)
4. [Art](https://steph-inners.github.io/#art)
   1. [Art shop](http://steph-inks.redbubble.com)
   2. [My preferred toolset](https://steph-inners.github.io/#my-preferred-toolset)
   3. [Tips for marker illustration](https://steph-inners.github.io/#markers-alcohol-based-vs-water-based)
5. [Japanese language 日本語](https://steph-inners.github.io/#japanese-language)
6. [Miscellany](https://steph-inners.github.io/#miscellany)

</div>

<a id="top"></a>

<div markdown="1" id="mainContent">

# Hi, I'm Steph :)

I'm a professional SQL developer and a hobbyist illustrator & translator. If anything on this site piques your interest, by all means please reach out using one of the contact methods below. I look forward to hearing from you!

ステフと申します。職業はデーターベースプログラマー、趣味はお絵描きとハイキングです。漫画とアニメとテレビゲームが好きだから、日本語を10年前から独学で習っています。同じ趣味があるとか、外国会話にすれば連絡して下さい。宜しくお願いします^ ^


<a id="about"></a>

## Contact info

Email: [Inners.Stephanie@gmail.com](mailto:inners.stephanie@gmail.com)

GitHub: [github.com/Steph-Inners](https://github.com/steph-inners)

GoodReads: [17924913-steph](https://www.goodreads.com/user/show/17924913-steph)

Instagram: [@steph_inks](https://www.instagram.com/steph_inks/)

RedBubble (art shop): [steph-inks.redbubble.com](http://steph-inks.redbubble.com)

# Resume <a id="resume"> </a>

For a one-page copy of my resume with more detail and my LinkedIn profile, email me at [Inners.Stephanie@gmail.com](mailto:inners.stephanie@gmail.com)

## Skills

### I'm obsessed with...

- Data governance & integrity
- Process improvement & scaling
- Knowledge management & technical documentation
- Collaborative software development methodologies (DevOps, CI/CD, etc.)

### My expertise is in…

1. Data warehousing, data engineering, custom integrations, ETL/ELT, OLTP/OLAP, data pipelines, database administration & analytics with **T-SQL, SQL Server, PowerBI & SSMS**
2. Process automation & **.NET** development with **C#, git, VS Code & Visual Studio**
3. Enterprise Content Management (ECM) & document management with **Laserfiche, Wordpress, OCR & Regex**
4. Project management, SDLC management, requirements gathering,  & business analysis

### I’ve also built projects using…

- SSIS, ASP.NET, MySQL, Azure, Tableau, Powershell, HTML, CSS, JavaScript, XML, Markdown, GitHub, Active Directory, Xcode, Wordpress, XAMPP, IIS, Windows Server, Apache & many more

### I'd like to work more with...

- Test-Driven Development (TDD)
- Azure data pipelines (Data Factory, Synapse, Data Bricks, etc.)
- Python-based ETL/ELT
- DevOps methodology and practices
- Model-View-Controller (MVC)
- Automated deployments with GitHub Actions
- CI/CD (Continuous Integration / Continuous Delivery)

## Professional experience

**Database Administrator** (2021-present) at a private non-profit US-based university

**Applications Analyst II** (2019-2021) at a publicly-traded regional bank

**Applications Analyst I** (2017-2019) at the same publicly-traded regional bank

- Promoted after two years of "exceeding expectations" :)

**Project Management Intern** (2015-2017) at a publicly-traded US-based global paper manufacturer

## Education, certifications & awards

- **B.S. in Computer Information Systems** Magna Cum Laude, Writing tutor, Peer mentor
- **Microsoft Certified Solutions Associate (MCSA) SQL 2016 Database Development** (2019)
- **Microsoft Certified: Azure Data Fundamentals** (2022)
- **Laserfiche Financial Services Trailblazer Award** (2021)
- **Laserfiche Run Smarter Award** (2020)

### Friends & colleagues describe me as…

- "Conscientious"
- "Pragmatic"
- "Articulate"
- "Friendly"
- "Hard-working"
- "Perspicacious"
- "Dynamic"
- "Bright"
- "Adventurous"
- "Loyal"
- "Intuitive"
- "Kind"


<a href="#top" id="code">Return to top</a>


# Code

## Handy SQL tricks

I wrote these to make my life easier. I hope they help you too :)

- [Show query results before and after a change](https://github.com/steph-inners/handy-SQL-tricks/blob/6d3f720c271b171443d7a39f52f69cbb6aa4dfdf/Testing%20query%20results%20before%20and%20after.sql)
- [Export from a SQL database to CSV using Bulk Copy (BCP) WITH a header row](https://github.com/steph-inners/handy-SQL-tricks/blob/3fa378d6be749d6e51615d443162633935d5c9f8/sp_CsvWithHeaders.sql)

## Heuristics for data-adjacent developers

I learned to wield heuristic questioning as a writing tutor in college and found it endlessly helpful for thinking through problems with tutees or for my own benefit. Heuristic questions are especially helpful in brainstorming the possible consequences of running processes at scale. HOWEVER, they can oversimplify problems (it's what they're designed to do). Use the following heuristics as one of many tools in your coding/designing toolbelt.

### Error handling

When accounting for possible errors, ask yourself the following questions (the answer to each should be "yes"):

1. Can the system continue processing subsequent records after throwing an error?
2. Can the errored record be recovered automatically on the next processing run?
3. Is the error reported in a timely manner to allow for appropriate human intervention?
4. Is the error isolated from causing downstream effects in other systems?

### Reporting with a business focus

When designing a reporting platform for business users, consider...

1. Which metrics or business terms are ambiguous or easily confused by users? Make sure to clarify them to users (and to yourself!)
2. Are your users focused on operations (keeping the business running)? They may find more value in "point-in-time" reports that show them the state of their realm at the present moment.
3. Are your users trying to make data-driven strategic decisions? They'll likely find more value in historical and predictive reports.

## How Records Retention works

I spent a few years of my professional life developing workflows and custom code to support regulatory Records Retention (RR) efforts within a document management/content management system which I administered for a private financial institution. Here's an introduction to some of the basic concepts of RR.

### How RR works

RR works by defining Document/Record Types, deciding what events might cause them to be able to be destroyed, and determining how long they must be kept before they can be destroyed. I.e. a Document is assigned a Document Type, which determine its Cutoff Date and its Retention Period.  

### Definitions

1. **Document** Information on a client or account organized into a static (unchanging) visual.
2. **Record** Information on a client or account, often recorded in a database (application database or custom database). Because a record is not necessarily organized in a static visual like a document, the information may vary in how it is displayed/processed/used. A document is a type of record, but a record is not necessarily a document.
3. **Doc/Record Type** A category of document or record. All documents/records should fall into a single type. “Miscellaneous” is not a type.
4. **Retention Period** The duration of time after which the record should be deleted following its Cutoff Date.
5. **Cutoff Date** The date/time when the timer starts counting down on a record to be deleted. For many records, this is its creation date.
6. **Retention Trigger** An event that occurs to trigger the application of a Retention Date. E.g. when a client leaves your institution.
7. **Quality Assurance (QA)** The process of ensuring that the correct document type is attributed to each document/record.
8. **Records Manager** The lucky person who gets to hit “Delete” on records that have reached the end of their retention period.
9. **Metadata** Some people think of these as “index fields.” This is information about the record/document that contains your client’s data. E.g. the date that the record was created, the date it was last modified, the client account # that it relates to, its Document Type… etc. 

### Why RR?

1. To reduce the risk of destroying data when it could still be valuable 
2. To reduce the legal risks associated with retaining data for longer than needed (subpoenas, regulations) 
3. To align with government (domestic or international) regulations and guidelines 

### Steps to implementing RR

1. Determine your Document Types.
2. Decide the Retention Triggers that would cause the countdown timer to start on each Document Type. 
   1. Usually these can be grouped into two categories: Doc Types that start their retention period immediately after creation; and Doc Types that start their retention period after a certain event transpires (e.g. a client leaving the institution, closing an account, etc.) 
3. Apply the metadata that will signal to automated systems when a document is ready for Retention. 
	1. For old records, you may have to write automated and/or manual procedures that apply this metadata retroactively. 
	1. Once you’ve determined the metadata needed for RR, all records going forward should have that metadata applied to them from the moment they are created.
4. Write procedures (automated or manual) for sending records into the Retention phases of their lifecycle, based on the metadata applied in 3
5. Let your Records Manager(s) hit “delete.” They will do this on a regular (e.g. monthly) basis going forward.

### Best practices for RR

1. A record should not change during its Retention Period. If it is changing after it’s already been sent to Retention, that’s a likely signal that the Cutoff Date you’ve given it is too early in its lifecycle. 
2. Keep all client records in a dedicated system/location that has built-in retention features (such as a feature for setting Retention Periods). Don’t allow internal users to keep any client-related records on their desktops, in network drives, or in other locations where the records will be difficult to automatically catalog.
3. If the only possible Document Type for a record is “Miscellaneous,” that probably means that it’s not actually needed, and can be destroyed immediately without even going into Retention.
4. Restrict the UI of document submissions so that it’s very difficult for users to accidentally attribute documents/information to the wrong client
5. When users type in a client ID, the client’s name should pop up as verification. Use "double-check" features like this to help users input better data.
6. When choosing a Records Manager, look for a minimalist. A person who likes to destroy old records is hard to find, but valuable. When other people get too scared to destroy old records, this person should be able to remind them why old records are not needed (and why they can be a liability).
7. While much QA can be accomplished automatically with the right tools, some documents may need to be looked at manually (e.g. if they have inconsistent visual templates that cannot be OCR’d). The best approach to manual QA is actually a hybrid; give your QA team automatic tools that present the narrowest possible options to select using whatever the automated system can identify on its own.

### Technologies to help RR projects go smoother

A good RR tool allows you to define Document Types, Retention Triggers, and Retention Periods. It should automatically notify the Records Manager when records have reached their Delete Date. It should allow for optional collection of Metadata on records that have been deleted in the past. 

1. Some file directory scraping programs help analyze and categorize the documents that exist on hard drives, network drives, cloud document stores, etc.
2. Some document management systems have dedicated RR functions that make it easy to automate RR.
3. OCR (Optical Character Recognition) tools can help identify metadata on documents that don’t already have it. 

## Online resources for coders

- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one#table-of-contents) VS plugin for writing easier Markdown
- [Working Copy](https://apps.apple.com/app/id896694807) mobile app for working on git-hosted projects from iPhone and iPad
- [Visual design rules](https://anthonyhobday.com/sideprojects/saferules/) cheat sheet for non-designers

### Interesting stuff I'd like to use but haven't (yet)

- [My starred repositories on GitHub](https://github.com/steph-inners?tab=stars)
- [Python-based jisho.org scraper](https://pypi.org/project/jisho-api/)
- [Python Markdown extension focused on MD-based technical documentation](https://squidfunk.github.io/mkdocs-material/getting-started/)
- [Site generator for Apple Notes](https://devlog.notespub.com/2022/08/site-generator-for-apple-notes/)
- [A drawing animator](https://fairanimateddrawings.com/site/home)

### Fun stuff to read for coders

- [Normalization of Deviance](https://danluu.com/wat/)
- [Building a homegrown SQL data dictionary](https://www.red-gate.com/simple-talk/databases/sql-server/database-administration-sql-server/building-a-sql-server-data-dictionary/)

<a href="#top" id="art">Return to top</a>

# Art

See my artwork on Instagram: [@steph_inks](https://www.instagram.com/steph_inks/)

Art shop (prints, stickers, mugs, hats, etc.): [steph-inks.redbubble.com](http://steph-inks.redbubble.com/)

I'm currently open to take commissions; email me at [Inners.Stephanie@gmail.com](mailto:inners.stephanie@gmail.com)

## My preferred toolset

### [EDC](https://www.themanual.com/fashion/what-is-edc-everyday-carry-guide/)

- Leuchtturm Medium (A5) sketchbook
- Pilot Vanishing Point fountain pens, 1x medium nib & 1x broad nib with Pilot Iroshizuku Takesumi (bamboo charcoal) black ink
- Taroko Design A5 writing board
- Blick artist glove

### Daily art journal

- [Hobonichi Techo ほぼ日手帳](https://www.1101.com/store/techo/en/), A5 spring start
- Lamy Safari fountain pen, medium nib, with [Noodler’s Bulletproof Black ink](https://noodlersink.com/about-us/noodlers-durable-ink-classification/)
- Tombow ABT water-based dual-tip markers

### Plein-air watercolor travel kit ([What is plein-air?](https://www.artistsnetwork.com/art-subjects/plein-air/plein-air-art/))

- Lochby travel case
- Pilot Aquash portable water brushes in various sizes
- Faber-Castell Pitt Artist Pen in various sizes, black
- Daler Rowney 12-color portable watercolor set

### Urban sketching marker travel kit ([What is urban sketching?](https://thesketch.co/what-is-urban-sketching/))

- [Etchr Field Case](https://etchrlab.com/products/etchr-field-case)
- Copic Sketch alcohol-based markers
  - RV10
  - R29
  - YR31
  - Y38
  - YG17
  - G28
  - B41
  - B45
  - B66
  - V09
  - N1
  - E00
  - E34  

## Markers: alcohol-based vs water-based

Both Alcohol-based and water-based markers can create lovely blending effects, are self-cleaning, and nicely portable. However, there are noticable differences in blending feel and in final appearance when dry. If you're on a budget or just starting out with marker coloring, you may want to start with water-based markers. However, you may find that alcohol markers have a better range and depth of hues. Both types are self-cleaning, i.e. you can lay lighter colors over dark without working about ruining your marker.

I personally prefer to use Copic alcohol markers (for example, in [this piece](https://www.redbubble.com/shop/ap/140553265)) because of their excellent blendability, feel, repairability and color selection. I keep water markers on hand for low-stakes sketching and daily journaling.

### Pros and cons of water markers

Pros

- Cheaper
- Easier to find linework tools to lay under them (anything marked "water-resistant" will work)
- Can be blended with and used alongside watercolors
- Pigment generally does not soak through paper to cause "ghosting"

Cons

- Can saturate paper and cause warping/rippling
- May have less range of hues

### Pros and cons of alcohol markers

Pros

- Greater range of hues (depending on brand; Copics are great for this)
- Won't saturate paper, so you can endlessly build depth of color
- Refillable and repairable (again, depending on brand)

Cons

- Expensive
- Can be difficult to find a linework tool that won't smear under them (see [section below](https://steph-inners.github.io/#which-linework-tools-can-be-used-under-alcohol-markers-without-smearing))
- Pigment soaks through virtually all paper types, resulting in heavy "ghosting"

### Which linework tools can be used under alcohol markers without smearing?

When you’re planning to color your piece in Copics or other alcohol markers, your line tool must be alcohol-resistant. Alcohol-based inks (e.g. Sakura Pigma, Speedball pigmented acrylic) and most inks designed to be water-resistant will smear. Be aware that some paper coatings (such as in Tomoe River paper, used in the Hobonichi Techo) will inhibit pigment adhesion and cause even "safe" linework inks to smear.

Some Copic-safe options include…

1. Copic Gasenfude brush pen (beware of long dry times)
2. Water-based Tombow ABT brush markers
3. Pilot Iroshizuku Takesumi black ink (safe for fountain pens)
4. [Noodler’s Bulletproof Black ink](https://noodlersink.com/about-us/noodlers-durable-ink-classification/) (water-resistant and safe for fountain pens)
5. Yasutomo Black Sumi ink (and, presumably, other similar soot-based sumi inks). Quick-drying and water-resistant when dry.

## Online resources for artists

- [A guide to scanning photos](https://imagerestorationcenter.com/best-format-to-scan-photos/)
- [A 70-color skin tone pack for Procreate](https://icy-need.glitch.me/)
- [My favorite sketching brushes for Procreate](https://jingsketch.gumroad.com/l/JingsketchBrushes)

### My favorite art supply sites

- [Jetpens](jetpens.com). Best for notebooks, fountain pens & inks. Has great guides, tutorials, and comparisons for writing supplies.
- [Blick](dickblick.com) Best for paints, brushes, markers and other traditional media. Has a wide range of quality from student to professional. Also carries Copic refills and replacement parts.

### My favorite art apps

- [Procreate](https://apps.apple.com/app/id425073498): iPad app with a very natural drawing feel, professional-grade tools, and an active community
- [VizRef](https://apps.apple.com/app/id1482680568): iPad app for easily gathering reference images
- [Sketch A Day](https://apps.apple.com/app/id1434232227): daily drawing prompts to share with a community of artists
- [Copic tracker](https://apps.apple.com/app/id638007892): tracks your color inventory and helps pick the right colors for a project

<a href="#top" id="japanese-language">Return to top</a>

# Japanese language

I'm self-taught in Japanese at approximately the JLPT N3 level. Many of the resources below, therefore, are too advanced for beginners, but great for intermediate learners.

## My favorite study tools

- Anki spaced repetition flashcards [desktop app](https://apps.ankiweb.net/)
- [Anki mobile app](https://apps.apple.com/app/id373493387)
- [Shirabe Jisho iPhone dictionary app](https://apps.apple.com/app/id1005203380)
- [HelloTalk](https://apps.apple.com/app/id557130558) language exchange social app
- [Japanese Core 10k](https://ankiweb.net/shared/info/935381472) Anki deck (A truly fantastic deck with audio, visuals, example sentences, and the best card sequence I’ve ever encountered. Best for Intermediate learners.) 
- [Kanji practice sheets](https://kanji.sh/)

### My custom Anki decks

- [Doraemon vol. 1](https://github.com/steph-inners/AnkiDoraemonVol1)
- [Wonder Egg Priority](https://github.com/steph-inners/WonderEggPriority)

### Fun stuff to read for Japanese learners

- [A few Japanese idioms for a better life](https://asnewman.github.io/shoshikantetsu)
- [A glossary of owarai (お笑い, comedy) terms](https://en.wikipedia.org/wiki/Glossary_of_owarai_terms)

## Interesting Japanese phrases, quotes and idioms

> 明日の事は、明日の自分に任せる

“I’ll entrust tomorrow’s problems to tomorrow’s me”

> 二兎を追う者は一兎をも得ず

“If you chase two rabbits, you’ll catch none

<a href="#top" id="miscellany">Return to top</a>

# Miscellany

As a data governance nerd I'm compelled to proclaim "'MISCELLANEOUS' IS NOT A CATEGORY." And yet, here we are.

## Day hike itinerary

A printable PDF I created for day hikes. I always make 3 copies:

- 1 copy to leave with an emergency contact
- 1 copy to leave (folded) in the car at the trailhead for park authorities
- 1 copy to take on the trail to stay on schedule and on route

It also helps with planning. Please use it, and be safe out there :)

[Download blank itinerary](/Day hike itinerary.pdf)

## Media recommendations

Be aware that many of these have mature themes and aren't suitable for kids. If you pick up one of my recommendations, I'd love to hear your thoughts; contact me with [one of the methods here.](https://steph-inners.github.io/#contact-info)

### Must-read books

See [my GoodReads account](https://www.goodreads.com/user/show/17924913) for some reviews and recommendations as well.

1. Thinking, Fast and Slow
2. Frankenstein
3. A Scanner Darkly (by Philip K. Dick)
4. The Wind-Up Bird Chronicle (by Haruki Murakami)
5. Six Myths About the Good Life (by Joel Kupperman)
6. The Life of Pi

### Quality webcomics

1. [Dinosaur Comics](https://www.qwantz.com/index.php)
2. [Saturday Morning Breakfast Cereal](https://www.smbc-comics.com/)
3. [Awkward Zombie](https://www.awkwardzombie.com/)
4. [XKCD](https://xkcd.com/)

### Video games everyone should play at least once

1. Disco Elysium
2. Spiritfarer
3. Minecraft (Classic "Survival Mode," with friends)
4. We Love Katamari
5. Stardew Valley
6. The Legend of Zelda: Breath of the Wild
7. Shadow of the Colossus
8. Mario 64
9. Earthbound

### Best manga, comic books & graphic novels
1. Fullmetal Alchemist
2. I Kill Giants
3. V for Vendetta
4. Goodnight Punpun

### Fun things from around the internet

1. [Assume a Can Opener](https://en.wikipedia.org/wiki/Assume_a_can_opener)
1. [A collection of beautiful minimal websites](https://minimal.gallery/)
1. [A gallery of OS GUIs](http://toastytech.com/guis/index.html)

## Free remote cross-platform Minecraft server hosting

I have no affiliation with this site, just good experiences: [https://bedocker.com](https://bedocker.com)

## Favorite quotes

> "The principles may be simple, but many who discover principles are quick to confuse them with applications. To discover a common principle is the first lesson. To apply it is the work of a lifetime. To confuse the discovery with that lifetime is the business model of Medium.com, and discernibly not the business of the serious commuter." 

-- from *The City Commute: The Art & Science of Life's Most Tedious Journey* by Peter Hunt Welch

> "The industrial revolution made the production of an instrument like [the piano] possible. Several planks of wood - six I think in this case - are overlaid and pressed into shape by tremendous force for six months. Nature is molded into shape. Many tons of force and pressure are applied, making the strings what they are. Matter taken from nature is molded by human industry, by the sum strength of civilization. Nature is forced into shape. Interestingly, the piano requires re-tuning. We humans say, 'It falls out of tune', but that's not exactly accurate - matter is struggling to return to a natural state. The tsunami, in one moment, became a force of restoration. The [tsunami-damaged] piano re-tuned by nature actually sounds good to me now. In short, the piano is tuned by force to please our ears or ideals; it's a condition that feels natural to us humans. But from nature's perspective, it's very unnatural. I think deep inside me somewhere, I have a strong aversion to that."

-- Ryuichi Sakamoto

## Favorite productivity apps

1. [Forest](https://apps.apple.com/app/id866450515) pomodoro timer (for time-tracking and focus)
2. [Habitica](https://apps.apple.com/app/id994882113) gamified RPG-style habit tracker and task list

## Recipes I make when my parents are over for dinner

These recipes serve (at least) 4 people and still taste good with onions, garlic, and mushrooms removed (allergies are a bummer). I get garlic-free and onion-free stocks, sauces and dressings from [Fody Foods](https://www.fodyfoods.com/)

- Chicken saltimbocca; from Trisha’s Table; by Trisha Yearwood; pg 108
- Fettuccine Alfredo with Salmon and asparagus; from The Joy of Cooking; by Irma S Rombauer, Marion Rombauer Becker, and Ethan Becker; pg 327

## Why is your personal website just one big Markdown doc?

### It’s lightweight and easy to update

What it says on the tin. Unnecessarily bloated websites are exhausting to maintain *and view*.

### It’s free

This site is hosted on [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), which natively supports Markdown (.md) files with readable styling out of the box. I highly recommend it for a no-frills content delivery platform, especially if you’re familiar with or want to learn git.

For a free service with more frills (functionality), I recommend [Wordpress.com](wordpress.com). Wordpress is likely better for typical blogging or online portfolio needs.

### It’s a perfectionism blocker

When everything is in one giant, ever-growing Markdown document, nothing will ever be beautiful and presentable. When nothing is beautiful and presentable, nothing can be unworthy of publishing either. My personality isn’t curated; why should my personal website be so?

### Ctrl+F

Search is built into every browser. If all content is on a single page, there’s no need to install a search plugin that will show ads for the first handful of results.

### Copy this site

If you like the format of this site and want to use it for your own, copy the source code from my GitHub repository at [https://github.com/steph-inners/steph-inners.github.io](https://github.com/steph-inners/steph-inners.github.io)

## Asset attributions

I borrowed some graphics to build this site. Here are their real owners:

<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Those Icons - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by Freepik - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/goodreads" title="goodreads icons">Goodreads icons created by riajulislam - Flaticon</a>

[Redbubble icon](https://iconduck.com/icons/4457/redbubble)

<a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>

<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>

</div>
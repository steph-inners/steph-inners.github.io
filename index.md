<head>
     <link type="text/css" rel="stylesheet" href="styles.css" />
</head>

<div id="nav" markdown="1">

# steph-inners.github.io

<div id="socials" markdown="1">

<a href="mailto:inners.stephanie@gmail.com" target="_blank"><img class="icon" src="images\site assets\email.png">
<a href="https://github.com/steph-inners" target="_blank"><img class="icon" src="images\site assets\github.png">
<a href="http://steph-inks.redbubble.com" target="_blank"><img class="icon" src="images\site assets\redbubble.256x256.png">

</div>

*This site is perpetually under construction; please pardon the mess.*

----------------

## Contents

<a href="#top">Return to top</a>

1. [About me](https://steph-inners.github.io/#about)
1. [Resume](https://steph-inners.github.io/#resume)
   1. [Projects](https://steph-inners.github.io/#cool-things-ive-built)
1. [Code](https://steph-inners.github.io/#code)
	1. [Handy SQL tricks](https://steph-inners.github.io/#handy-sql-tricks)
	1. [Data development heuristics](https://steph-inners.github.io/#heuristics-for-data-adjacent-developers)
	1. [Intro to Records Retention](https://steph-inners.github.io/#how-records-retention-works)
1. [Art](https://steph-inners.github.io/#art)
   1. [Art shop](http://steph-inks.redbubble.com)
   1. [My preferred toolset](https://steph-inners.github.io/#my-preferred-toolset)
   1. [Tips for marker illustration](https://steph-inners.github.io/#markers-alcohol-based-vs-water-based)
1. [Japanese language 日本語](https://steph-inners.github.io/#japanese-language)
1. [Miscellany](https://steph-inners.github.io/#miscellany)

</div>

<a id="top"></a>

<div markdown="1" id="mainContent">

# Hi, I'm Steph :)

I'm a professional data engineer and a hobbyist illustrator & translator. If anything on this site piques your interest, by all means please reach out using one of the contact methods below. I look forward to hearing from you!

ステフと申します。職業はデーターベースプログラマー、趣味はお絵描きとハイキングです。漫画とアニメとテレビゲームが好きだから、日本語を10年前から独学で習っています。同じ趣味があるとか、外国会話にすれば連絡して下さい。宜しくお願いします^ ^


<a id="about"></a>

## Contact info

Email: [Inners.Stephanie@gmail.com](mailto:inners.stephanie@gmail.com)

GitHub: [github.com/Steph-Inners](https://github.com/steph-inners)


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
- Python
- DevOps
- Model-View-Controller (MVC)
- Automated deployments with GitHub Actions
- CI/CD (Continuous Integration / Continuous Delivery)

## Professional experience

**Senior Data Engineer** (2023-present) at a publicly-traded regional bank

**Database Administrator** (2021-2023) at a private non-profit US-based university

**Applications Analyst II** (2019-2021) at a different publicly-traded regional bank

**Applications Analyst I** (2017-2019) at the same publicly-traded regional bank as above (got promoted!)

**Project Management Intern** (2015-2017) at a publicly-traded US-based global paper manufacturer

## Education, certifications & awards

- **B.S. in Computer Information Systems** Magna Cum Laude, Writing tutor, Peer mentor
- **Microsoft Certified Solutions Associate (MCSA) SQL 2016 Database Development** (2019)
- **Microsoft Certified: Azure Data Fundamentals** (2022)
- **Laserfiche Financial Services Trailblazer Award** (2021)
- **Laserfiche Run Smarter Award** (2020)

## Cool things I've built

This is a nonexhaustive list of some of my favorite tools/apps/processes I've built for various professional roles. In each of these projects I had at least the majority contribution in both design and development, *and* I had a lot of fun doing it.

### Azure Reporting data warehouse

The university where I worked at the time employed several Data Analysts who were skilled with Power BI, especially with the PBI Online variant. However, they didn't find our on-prem transactional databases very easy to use for reporting. I designed a Reporting data warehouse hosted in Azure, built the ETL pipelines ingesting source data from our on-prem transactional databases, and trained our Data Analysts on using it for reporting.

 This was the university's first experiment with Azure hosting and with data warehousing, so I had no one to rely on but myself to ensure success. Back then I wasn't nearly as comfortable with star-schema fact/dimesion data warehouses, so I'm sure I made mistakes in design. But at the time it allowed much more rapid development of reports and offered some relief to our clever but overworked Data Analysts.

### Overhaul of yearly academic reporting

During my first year working for a university, I spent a ton of time with a Data Analyst manually updating hard-coded values in a massive legacy Power BI report that was required to be published at the end of each calendar year. The report was over 30 pages, and updating it each year required manually modifying formulas, changing titles and headers, resizing charts, and other horrific modifications that I've blocked out by now. The process had historically cost this Data Analyst *over 80 hours* of boring, tedious, and meticulous manual labor each year. OUCH!

By the end of summer the following year, I was already eyeing that dashboard again, determined to overhaul it to eliminate all those hard-coded values. Doing so required writing new views to pull in the required data, and updating each component of the report to take parameters instead of hard-coded values; I had to entirely re-think many of the charts and calculations.

In the end product, the entire 30+ page report updated with 4 simple steps completed in under 10 min. I got a phone call from that Data Analyst later when I had moved to a different organization; he had been terrified to tackle the report by himself that year, but was so delighted when the full report ran without a hitch that he felt he had to call me on the spot to celebrate. I won't forget that one soon! :) 

### Registration Status reporting

The end product here was a comprehensive dashboard in Power BI showing all aspects of student and course registration for a set of unique academic programs (things like enrollment counts, breakdown by major, credits earned, trends over time, etc.) I designed and built the underlying transactional and dimensional tables, and populated them automatically via stored procedures (with error and success logging and plenty of transformations where needed), pulling from various on-prem and cloud sources. I also designed and built the dashboard layout, metrics, and user access control based on requirements I collected from a series of talks with my internal clients.

My favorite part of this project was a "transaction log" which tracked certain events that the clients considered significant, and highlighted those events within the dashboard. This made it much easier for the business to intervene when a student needed guidance regarding their enrollments.

### Operational error/success logging

A team that I came onto had been drowning in break/fix tickets for custom internal builds. Many of the tickets seemed recurring or at least similar, but there was no sense of the root cause and little capacity to look for one. I whipped up a quick and dirty success/error logging process in SQL and C#, including functions that could be called from custom code in both languages to log significant events/transactions in a central report in Power BI. It wasn’t beautiful (and I wish I could go back for enhancements), but the log enabled us to find some root cause issues, detect budding problems *before* they became tickets, and greatly reduce our incoming ticket volume.

I loved this mini-project because, though it was very technically basic, it had an immediate and powerful return, and it made life less stressful for everyone tasked with operations firefighting.

### Laserfiche search enhancements

... Note to self: user surveys were neat

### Complaint Log

Anyone who's worked in banking should be familiar with the federal government's regulatory requirements regarding the collection, resolution, and sometimes escalation of customer complaints. Managing complaints is extremely time-sensitive, and the unpredictable nature of customer complaints can leave front-line employees feeling lost.

For this project, I worked with the Audit department to design a new complaint management system to replace a huge and unmanageable Excel spreadsheet. We designed intake forms together, and they helped me understand the chains of command where complaints should be escalated under a variety of circumstances. I designed and built an underlying set of SQL tables to track the status of active complaints, and the history of closed complaints. I also created GUI interfaces for Audit to drill into individual complaints for monitoring, without needing to understand SQL.

If I had another chance at this project, I would love to offer that group some reporting dashboards for easier birds-eye views of the complaint "landscape."

## Friends & colleagues describe me as…

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
See the [full repository here](https://github.com/steph-inners/handy-SQL-tricks), hosted on [my GitHub page](https://github.com/steph-inners).

- [Show query results before and after a change](https://github.com/steph-inners/handy-SQL-tricks/blob/6d3f720c271b171443d7a39f52f69cbb6aa4dfdf/Testing%20query%20results%20before%20and%20after.sql)
- [Export from a SQL database to CSV using Bulk Copy (BCP) WITH a header row](https://github.com/steph-inners/handy-SQL-tricks/blob/3fa378d6be749d6e51615d443162633935d5c9f8/sp_CsvWithHeaders.sql)

## Apple Shortcuts

Handy automations for daily tasks in iOS
See the [full repository here](https://github.com/steph-inners/apple_shortcuts), hosted on [my GitHub page](https://github.com/steph-inners).

- [Save the contents of a webpage to the Notes app](https://github.com/steph-inners/apple_shortcuts/blob/902dd2adb1684f03ddb8345dbbfb73c4c2ddff42/Save%20Article.shortcut)

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
4. Restrict the UI of document submissions so that it’s very difficult for users to accidentally attribute documents/information to the wrong client. When users type in a client ID, the client’s name should pop up as verification. Use "double-check" features like this to help users input better data.
5. When choosing a Records Manager, look for a minimalist. A person who likes to destroy old records is hard to find, but valuable. When other people get too scared to destroy old records, this person should be able to remind them why old records are not needed (and why they can be a liability).
6. While much QA can be accomplished automatically with the right tools, some documents may need to be looked at manually (e.g. if they have inconsistent visual templates that cannot be OCR’d). The best approach to manual QA is actually a hybrid; give your QA team automatic tools that present the narrowest possible options to select using whatever the automated system can identify on its own.

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

- [Hacker News](https://news.ycombinator.com/) is a perrennial source of interesting tech stuff
- [A series of blog posts about scaling databases](https://brooker.co.za/blog/2023/01/30/nosql.html)
- [Normalization of Deviance](https://danluu.com/wat/)
- [Building a homegrown SQL data dictionary](https://www.red-gate.com/simple-talk/databases/sql-server/database-administration-sql-server/building-a-sql-server-data-dictionary/)
- [The weirdness of Windows file paths](https://www.fileside.app/blog/2023-03-17_windows-file-paths/)
- [*My product is my garden*](https://herman.bearblog.dev/my-product-is-my-garden/)
- [Programming “Waterloo style”](https://theprogrammersparadox.blogspot.com/2023/04/waterloo-style.html)
- [Tenets of "Brutalist" web design](https://brutalist-web.design/)
- [*Watch this page fetch itself, byte by byte, over TLS*](https://subtls.pages.dev/)
- [What’s new in SQL 2023](http://peter.eisentraut.org/blog/2023/04/04/sql-2023-is-finished-here-is-whats-new)

<a href="#top" id="art">Return to top</a>

# Art

See my art site at [https://steph-inks.com/](https://steph-inks.com/).

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

## Digital illustration with Procreate

Procreate on the iPad with Apple Pencil is my favorite digital illustration tool because of its natural feel and extreme portability.

### My illustration method

This changes from time to time, but generally my method on Procreate is as follows:

1. Sketch out general forms with the Peppermint brush on Layer 1
2. Greatly lower the opacity of Layer 1
3. Pencil in some more precise shapes and details with Peppermint on Layer 2
4. Moderately lower the opacity of Layer 2
5. Trace in clean linework layer with the Derwent brush on Layer 3
6. Set Layer 3 to a **Reference** layer, and to **Multiply**
7. Add coloring layers beneath the Reference linework layer. I use a distinct coloring layer for each object which has a distinct texture/color/form. For example, when illustrating a person, their skin, hair, and each layer of clothing/accessories will get its own layer.
8. Drop base colors on each layer using Color Fill and my custom-designed [Flats brush](/Flats_brush_procreate.brush)
9. Bring base colors all the way to the linework edge using the Wet Bright brush from the [Sergent’s Oils brush pack](https://sevenstyles.com/p/sargents-oils-procreate-brushes-1845031/)
10. When I’m *certain* that all base colors fill their entire area, set each color layer to **Alpha Lock**
11. Add soft shading to each color layer with Soft Brush (under Airbrushing)
12. Add sharper shadows to each color layer with the Wet Bright brush

Optional:

13. Duplicate the linework layer and adjust opacity to find a good balance of line weight against the finished colors
14. Add a layer on the very top to apply touchups as needed

Reference the [Procreate Handbook](https://procreate.com/handbook/procreate) for more details on the terminology and techniques mentioned above.  

## Online resources for artists

- [A free and highly flexible pose modeling tool](https://justsketch.me/)
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

### My process for building vocabulary

1. Encounter new vocabulary in podcasts, manga, anime, games, and music
   1. Listen to [this episode of the Thinking in Japanese podcast](https://open.spotify.com/episode/29KSCpy7LeOTQGx7ztflwn?si=S6rzh94dQF2ZFhbY7NHZcg) to learn about why it's so important to find enjoyable **inputs**
2. Look up and "star" each new word in [Shirabe Jisho iPhone dictionary app](https://apps.apple.com/app/id1005203380)
3. Export starred vocab list as CSV from [Shirabe Jisho](https://apps.apple.com/app/id1005203380)
4. Import CSV vocab list to [Anki desktop app](https://apps.ankiweb.net/)
5. Study Anki decks daily on the [Anki mobile app](https://apps.apple.com/app/id373493387)]

## Interesting Japanese phrases, quotes and idioms

> 明日の事は、明日の自分に任せる

“I’ll entrust tomorrow’s problems to tomorrow’s me”

> 明日は明日の風が吹く

“Tomorrow’s wind will blow tomorrow” (Tomorrow will take care of itself)

> 二兎を追う者は一兎をも得ず

“If you chase two rabbits, you’ll catch none” (Focus on one concern at a time to be successful)

> 下手上手

“Crude but charming; poorly made but captivating”

> 下手な鉄砲も数打てば当たる

“With enough tries even a poor marksman will make the shot”

> 下手の長談義

“The long-winded speech of the unskilled” (Poor speakers make long speeches)

<a href="#top" id="miscellany">Return to top</a>

## Fun stuff to read for Japanese learners

- [A few Japanese idioms for a better life](https://asnewman.github.io/shoshikantetsu)
- [A glossary of owarai (お笑い, comedy) terms](https://en.wikipedia.org/wiki/Glossary_of_owarai_terms)
- [A highly relatable essay on the difficulties of translation](https://antigonejournal.com/2021/06/pitfalls-latin-translation/)

# Miscellany

As a data governance nerd I'm compelled to proclaim "'MISCELLANEOUS' IS NOT A CATEGORY." And yet, here we are.

[...](writing\cornell_docs.md)

## Day hike itinerary

A printable PDF I created for day hikes. I always make 3 copies:

- 1 copy to leave with an emergency contact
- 1 copy to leave (folded) in the car at the trailhead for park authorities
- 1 copy to take on the trail to stay on schedule and on route

It also helps with planning. Please use it, and be safe out there :)

[Download blank itinerary](/Day hike itinerary.pdf)

## Media recommendations

Be aware that many of these have mature themes and aren't suitable for kids. If you pick up one of my recommendations, I'd love to hear your thoughts; contact me with [one of the methods here.](https://steph-inners.github.io/#contact-info)

### The cool way to find a book

Have a book you want to read, but don’t want to contribute to waste, or to the online mega-markets that are crowding out local bookstore and libraries? 

Below are listed possible sources to borrow/purchase the book you’re looking for, ranked in order of best to… least best. Check these sources *in order* to find your book.

For a physical copy:

1. Your local library (they probably have a website where you can look through their catalog)
2. Your local brick-and-mortar bookstore
3. The secondhand options on [Thriftbooks.com](https://www.thriftbooks.com/)
4. Your local bookstore’s online storefront
5. Your local bookstore’s [Bookshop.org](https://bookshop.org/) storefront
6. The publisher’s online storefront  

For a digital copy:

1. Use the [Libby app](https://apps.apple.com/app/id1076402606) or OneDrive app with your local library card
2. Use the [Libby app](https://apps.apple.com/app/id1076402606) or OneDrive app and switch to a library card at another institution. You don’t always have to be nearby to sign up for a library card; for example, the [Free Library of Philadelphia](https://catalog.freelibrary.org/MyResearch/register) offers a free library card for all Pennsylvania residents.
3. Your local bookstore’s [Bookshop.org](https://bookshop.org/) storefront

### Must-read books

See [my GoodReads account](https://www.goodreads.com/user/show/17924913) for some reviews and recommendations as well.

1. Thinking, Fast and Slow
2. Frankenstein
3. A Scanner Darkly (by Philip K. Dick)
4. The Wind-Up Bird Chronicle (by Haruki Murakami)
5. Six Myths About the Good Life (by Joel Kupperman)
6. The Life of Pi
7. Art and Fear

### Quality webcomics

1. [Dinosaur Comics](https://www.qwantz.com/index.php)
2. [Saturday Morning Breakfast Cereal](https://www.smbc-comics.com/)
3. [Awkward Zombie](https://www.awkwardzombie.com/)
4. [XKCD](https://xkcd.com/)

### Video games everyone should play at least once

1. Disco Elysium
2. [Factorio](https://www.factorio.com/)
3. Spiritfarer
4. Minecraft (Classic "Survival Mode," with friends)
5. Katamari Damacy & We Love Katamari
6. Stardew Valley
7. The Legend of Zelda: Breath of the Wild
8. Shadow of the Colossus
9. Mario 64
10. Earthbound
11. Monster Hunter: World

### Best manga, comic books & graphic novels
1. Fullmetal Alchemist
2. Death Note
3. I Kill Giants
4. V for Vendetta
5. Goodnight Punpun
6. Monster (Naoki Urasawa)
7. Witch Hat Atelier (ongoing, but quality is great so far)
8. All You Need Is Kill (ridiculous title, fantastic story)
9. Uzumaki

### Fun things from around the internet

1. [Babelcarp: an online dictionary of Chinese tea terminology](https://babelcarp.org/babelcarp/)
2. [A zero-draft writing app that deletes your progress if you stop typing for 5 seconds](https://www.squibler.io/dangerous-writing-prompt-app)
2. [Where can I see Hokusai’s *Great Wave* today?](https://greatwavetoday.com/)
3. [A delightful catalogue of ideas for ridiculous inventions](https://www.halfbakery.com)
2. [Assume a Can Opener](https://en.wikipedia.org/wiki/Assume_a_can_opener)
3. [A collection of beautiful minimal websites](https://minimal.gallery/)
4. [A gallery of OS GUIs](http://toastytech.com/guis/index.html)
5. [This article, which is](https://jonathanhaidt.substack.com/p/why-some-researchers-think-im-wrong) primarily about the possible causal relationship between social media use and depression/anxiety. But along the way the author does a great job explaining how social science data is collected and interpreted in studies like his
6. [A series of beautiful photographs of... oil rigs](https://twitter.com/FedeItaliano76/status/1650871570137600000)
7. [An online reproduction of a beautifully-illustrated botanical book](https://www.c82.net/twining/)
8. [Why blog?](https://www.craigkerstiens.com/2013/03/31/why-i-blog/)
9. [A game illustrating the challenges of content moderation](https://moderatormayhem.engine.is/)
10. [Hobson’s Choice](https://en.wikipedia.org/wiki/Hobson%27s_choice)

## Free remote cross-platform Minecraft server hosting

I have no affiliation with this site, just good experiences: [https://bedocker.com](https://bedocker.com)

## Favorite quotes

> "The principles may be simple, but many who discover principles are quick to confuse them with applications. To discover a common principle is the first lesson. To apply it is the work of a lifetime. To confuse the discovery with that lifetime is the business model of Medium.com, and discernibly not the business of the serious commuter." 

-- from *The City Commute: The Art & Science of Life's Most Tedious Journey* by Peter Hunt Welch

> “You need to have a pretty informed idea of what the box is before you can think outside it.”

—- from *The Origins of Creativity*, published in *The New Yorker* by Louis Menand

> “Show me your flowchart and conceal your tables, and I shall continue to be mystified. Show me your tables, and I won’t usually need your flowchart; it’ll be obvious.”

—- Fred Brooks, *The Mythical Man Month* (1975)

> “For most of our lives, Schopenhauer says, we suffer under the lash of the will. We need things, want things, and hunger for things. When we get them, we have only a moment’s rest before being tossed off in pursuit of other things. But, Schopenhauer says, aesthetic experience offers an exception to this pattern. When I attend to something of beauty, my will is suspended, and my attention becomes freer and more disinterested. I do not think about what it might do for me. I experience it for its own sake. And this experience offers me something remarkable: a “Sabbath of the penal servitude of willing,” a moment when “the wheel of Ixion stands still.””

— from [*The Paradoxes of Nostalgia*](https://ravenmagazine.org/magazine/the-paradoxes-of-nostalgia/) by Kenny Walden

> “Premature optimization is the root of all evil.”

—- Donald Knuth

> "To learn another language is to possess a second soul"

-- Charlemagne (maybe)

> “Be regular and orderly in your life like a Bourgeois so that you may be violent and original in your work.”

—- Flaubert 

> “The seed of a future composition usually reveals itself suddenly, in the most unexpected fashion. If the soil is favorable—that is, if I am in the mood for work, this seed takes root with inconceivable strength and speed, bursts through the souls, puts out roots, leaves, twigs, and finally flowers: I cannot define the creative process except through this metaphor. All the difficulties lie in this: that the seed should appear, and that it should find itself in favorable circumstances. All the rest happens of its own accord. It would be futile for me to try and express to you in words the boundless bliss of that feeling which envelops you when the main idea has appeared, and when it begins to take definite forms. You forget everything, you are almost insane, everything inside you trembles and writhes, you scarcely manage to set down sketches, one idea presses upon another.”

—-Tchaikovsky

> "If you pick up a volume of Latin and simply start reading it, you can quickly be fooled into thinking that you know what is going on. Inside your head, you convince yourself that you are taking everything in. But if you read the text out loud, and then try to render it into normal-sounding English in a way that someone standing in front of you can understand, you often see that you only understand about 90% of the words. Alas, that final 10% is the only part that really matters, to prevent that person in front of you from subjecting you to a sad, pitying look."

-- Jaspreet Singh Boparai, describing perfectly the translator's struggle in [*“A Great Ox Stands on my Tongue": The Pitfalls of Latin Translation*](https://antigonejournal.com/2021/06/pitfalls-latin-translation/)

> “Art does not reproduce what we see; rather, it makes us see”

—- Paul Klee

> “You’re going to ruin paintings. Full stop. Get used to it. Embrace the failures and give successes a nod, but understand the ruined paintings are the real teachers. They bite like the serpent but the lesson is to look for where you went wrong and try to correct that. Don’t coddle your work. Don’t be tentative. Make your marks and *learn.*”

—- Iain Stewart, artist and author of *En Plein Air: Light & Color*

> “Drawing is my favorite way to see”

—- An Instagram artist whose name I unfortunately can’t recall


> “It’s anecdotal, but I regularly see Frankenstein’s monster described as a warning against scientific hubris, an alarm about Tampering With Things That Should Be Left Alone™. This I think is quite wrong: I think it is a story about what happens when one fails the (still at the time of writing) radical enlightenment by failing to take social responsibility for one’s actions and interventions. If it’s a warning, it’s a warning about turning one’s back, out of cowardice, on what one creates, not about creating it in the first place.”

—- China Mieville, interview with the *Weird Fiction Review*

> "The industrial revolution made the production of an instrument like [the piano] possible. Several planks of wood - six I think in this case - are overlaid and pressed into shape by tremendous force for six months. Nature is molded into shape. Many tons of force and pressure are applied, making the strings what they are. Matter taken from nature is molded by human industry, by the sum strength of civilization. Nature is forced into shape. Interestingly, the piano requires re-tuning. We humans say, 'It falls out of tune', but that's not exactly accurate - matter is struggling to return to a natural state. The tsunami, in one moment, became a force of restoration. The tsunami-damaged piano re-tuned by nature actually sounds good to me now. In short, the piano is tuned by force to please our ears or ideals; it's a condition that feels natural to us humans. But from nature's perspective, it's very unnatural. I think deep inside me somewhere, I have a strong aversion to that."

-- Ryuichi Sakamoto

> “Honestly, I do not believe in a drunk Byron writing beautiful verses. Inspiration can pass through the soul just as easily in the midst of an orgy as in the silence of the woods, but when it is a question of giving form to your thoughts, whether you are secluded in your study or performing on the planks of a stage, you must be in total possession of yourself.”

—- George Sand

> “Nobody tells this to people who are beginners, I wish someone told me. All of us who do creative work, we get into it because we have good taste. But there is this gap. For the first couple years you make stuff, it’s just not that good. It’s trying to be good, it has potential, but it’s not. But your taste, the thing that got you into the game, is still killer. And your taste is why your work disappoints you. A lot of people never get past this phase, they quit. Most people I know who do interesting, creative work went through years of this. We know our work doesn’t have this special thing that we want it to have. We all go through this. And if you are just starting out or you are still in this phase, you gotta know its normal and the most important thing you can do is do a lot of work. Put yourself on a deadline so that every week you will finish one story. It is only by going through a volume of work that you will close that gap, and your work will be as good as your ambitions. And I took longer to figure out how to do this than anyone I’ve ever met. It’s gonna take awhile. It’s normal to take awhile. You’ve just gotta fight your way through.”

—- Ira Glass, on *This American Life*

> “That’s why high school, or a crappy job, or any other restrictive circumstance can be dangerous: They make dreams too painful to bear. To avoid longing, we hunker down, wait, and resolve to just survive. Great art becomes a reminder of the art you want to be making, and of the gigantic world outside of your small, seemingly inescapable one. We hide from great things because they inspire us, and in this state, inspiration hurts.”

—- Spencer Tweedy in [this essay](https://www.rookiemag.com/2014/03/the-art-of-waiting/)
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

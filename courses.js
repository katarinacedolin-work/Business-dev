/* Startup Foundations courses and interactives, skinned for Campus Connect. */
(function(){
const C=[];
C.push({id:"crash",name:"Business Crash Course",short:"Crash Course",color:"#a3125f",
blurb:"The whole startup journey in eight modules: idea, marketing, money, operations, sales, setup, risk and funding.",
mods:[
{t:"Business Foundations",hook:"Every business starts as a guess. This module is about turning that guess into something people will actually pay for.",
cards:[
["What makes a business viable","A viable business solves a real problem, for enough people, at a price that covers its costs with something left over. Passion helps, but demand, margin and repeatability decide whether it survives.","Ask: would someone pay for this next week, and could I deliver it again and again?"],
["Problem first, solution second","Start with a pain point you can describe in one sentence, then design the simplest fix. Founders who start with a cool product often discover nobody has the problem it solves.","\"Students waste 20 minutes finding study rooms\" beats \"I want to build an app.\""],
["Customers and competitors","Talk to at least ten potential customers before building anything. Then list who they use today, including the do-nothing option. Your real competitor is often a group chat or a spreadsheet.",""],
["Business models and revenue streams","A business model is how you make money: one-time sales, subscriptions, commissions, ads, services or licensing. Many small businesses mix two, like selling a product plus a paid setup service.",""],
["Goals you can measure","Swap vague goals for numbers with deadlines: \"20 paying customers by March\" instead of \"grow.\" Review progress weekly so you can change course early instead of after the money is gone.",""]],
tool:{k:"sort",prompt:"Match each business to its main revenue model.",buckets:["One-time sale","Subscription","Commission"],items:[["Selling custom tote bags at a campus market",0],["$8/month meal-prep plan",1],["Taking 10% of every tutoring session booked on your site",2],["Monthly membership for a study-room booking app",1],["Charging a fee per textbook resale matched",2],["Selling a printed planner",0]]},
quiz:[["Which is the strongest sign a business idea is viable?",["Your friends say it sounds cool","Customers have the problem and will pay to fix it","Nobody else is doing it"],1,"Real demand plus willingness to pay is the core test. \"Nobody else is doing it\" can mean there is no market."],
["Which goal is best written?",["Get more followers","Reach 20 paying customers by March 31","Become the top brand on campus"],1,"It is specific, measurable and has a deadline, so you can tell whether you hit it."]]},
{t:"Marketing Basics",hook:"Marketing is how the right people find out you exist and decide you are worth trying.",
cards:[
["Pick a target customer","\"Everyone\" is not a target. Choose one specific group, such as first-year commuter students, and learn their habits, budgets and frustrations.",""],
["Write a value proposition","One sentence: who it is for, what problem it solves and why it is better than the alternative. If a stranger cannot repeat it back, simplify.","\"Late-night snack delivery for dorms, in 20 minutes, for less than a vending machine run.\""],
["Build a simple brand","A name, two or three colors, one font and a consistent tone are enough to start. Consistency matters more than perfection.",""],
["Choose channels","Go where your customer already spends time: Instagram, TikTok, campus clubs, email, flyers or word of mouth. Two channels done well beat six done badly.",""],
["Create content and measure","Post with a purpose, then check what worked: clicks, messages, sign-ups and sales. Keep doing what converts and drop what does not.",""]],
tool:{k:"valueprop"},
quiz:[["What is the main job of a value proposition?",["List every feature","Explain who it helps, with what, and why it is better","Show your logo"],1,"It is a clear promise of value, not a feature list."],
["You have little time. How many marketing channels should you start with?",["As many as possible","One or two where your customer already is","Only paid ads"],1,"Focus beats spread; master one or two channels first."]]},
{t:"Finance Basics",hook:"You do not need to love math. You need to know whether you are making money and when you will run out of it.",
cards:[
["Revenue, expenses, profit, cash flow","Revenue is money coming in from sales. Expenses are what you spend. Profit is revenue minus expenses. Cash flow is the timing of money actually entering and leaving your account.",""],
["Startup costs","List everything you must buy before the first sale: equipment, inventory, website, permits, samples. Add a 10 to 20 percent cushion because something always costs more.",""],
["Setting prices","Price must cover the cost of each item plus a share of overhead, then leave profit. Check what competitors charge and what customers say they would pay.",""],
["A basic budget","A budget is a plan for the month: expected sales, expected costs and the gap between them. Write it before the month starts, then compare it with reality.",""],
["Tracking performance","Log every sale and expense, even small ones. A simple spreadsheet updated weekly is enough to spot problems early.",""]],
tool:{k:"price"},
quiz:[["Your bake sale brought in $400 and ingredients cost $150. What is your profit?",["$400","$250","$550"],1,"Profit = revenue minus expenses: $400 − $150 = $250."],
["Why add a cushion to startup costs?",["To impress investors","Costs almost always run higher than planned","It is required by law"],1,"Unexpected costs are normal; a cushion keeps you from stalling before launch."]]},
{t:"Business Operations",hook:"Operations is the behind-the-scenes engine: everything that has to happen so the customer gets what they paid for.",
cards:[
["The daily work","Write down what happens every day and every week: answering messages, making products, packing orders, posting, bookkeeping. Seeing it on paper shows what takes the most time.",""],
["Efficient processes","Turn repeated tasks into simple step-by-step checklists. A checklist means anyone on your team can do the task the same way.",""],
["Products, inventory and suppliers","Know what you have, what you need and how long it takes to restock. Keep at least two supplier options so one delay does not shut you down.",""],
["Tasks and records","Use one place for tasks (a to-do app or board) and one place for records (a shared drive with clear folders). Scattered notes cause lost orders.",""],
["Quality and satisfaction","Decide what \"good\" looks like and check it before anything ships. Ask customers how it went, then fix the most common complaint first.",""]],
tool:{k:"sort",prompt:"How often does each task happen in a small online shop?",buckets:["Daily","Weekly","Monthly"],items:[["Answer customer DMs",0],["Pack and ship orders",0],["Plan next week's posts",1],["Reorder supplies",1],["Review profit and loss",2],["Reconcile the bank account",2]]},
quiz:[["What is the biggest benefit of a written checklist?",["It looks professional","Tasks get done the same way every time, by anyone","It replaces customers"],1,"Consistency and handoff-ability are the point."],
["Why keep a backup supplier?",["To get free samples","So one delay does not stop your business","Suppliers require it"],1,"Redundancy protects you from a single point of failure."]]},
{t:"Business Development and Sales",hook:"Sales is not about being pushy. It is about helping the right person say yes to something that genuinely helps them.",
cards:[
["Finding customers and opportunities","Look for groups that share your customer's need: clubs, Greek life, local shops, campus offices. One partnership can reach hundreds of people at once.",""],
["Professional relationships","Show up, be useful and follow through. People buy from and refer people they trust, and trust is built through small kept promises.",""],
["An outreach message","Keep it short: who you are, why you are writing to them specifically, the value for them and one clear ask. Personalize the first line.",""],
["The sales process","Most sales follow the same path: find a lead, start a conversation, learn their needs, present an offer, handle questions, close and follow up.",""],
["Partnerships and referrals","Ask happy customers to refer a friend, and offer them something for it. Partner with businesses that serve the same customer but do not compete with you.",""]],
tool:{k:"outreach"},
quiz:[["What should the first line of an outreach message do?",["Explain your whole company history","Show you know who you are writing to","Ask for money"],1,"Personalization earns attention; generic openers get ignored."],
["Which partner is the best fit for a campus smoothie stand?",["Another smoothie stand","The campus gym or a fitness club","A car dealership"],1,"Same customers, no competition: a classic win-win partnership."]]},
{t:"Business Setup and Legal Basics",hook:"Making it official protects you, your money and your customers. Here is the overview; SF 160 covers the details.",
cards:[
["When to formalize","Consider registering when you are making regular sales, signing contracts, hiring help, taking on risk or seeking funding. Waiting too long can leave your personal assets exposed.",""],
["Choosing a structure","Sole proprietorship: simplest, but you are personally liable. Partnership: two or more owners, shared liability. LLC: liability protection with flexible taxes. Corporation: built for outside investors, more paperwork.",""],
["Names, EINs, licenses and permits","Check your name is available, register it if needed, get a free EIN from the IRS when required, and look up city, county and state licenses for your industry.",""],
["Separate your money","Open a business bank account and run every business dollar through it. Mixing funds makes taxes harder and can weaken an LLC's liability protection.",""],
["Contracts, insurance and records","Put agreements in writing, consider insurance for your specific risks and keep receipts, filings and contracts organized for at least several years.",""]],
tool:{k:"structure"},
note:"Requirements vary by location and industry. Use this as a starting checklist and get professional advice for your specific situation.",
quiz:[["Which structure gives the owner NO separation from business debts?",["LLC","Sole proprietorship","C corporation"],1,"A sole proprietor is personally responsible for the business's debts."],
["Why keep business and personal money separate?",["It is only for big companies","Cleaner taxes and stronger liability protection","Banks charge less"],1,"Mixing funds complicates bookkeeping and can undermine liability protection."]]},
{t:"Risk Management",hook:"Risk is anything that could knock you off track. Spot it early and it becomes a plan, not a crisis.",
cards:[
["Five kinds of risk","Financial (running out of cash), legal (breaking a rule), operational (a supplier fails), market (customers lose interest) and technology (an account gets hacked).",""],
["Likelihood and impact","Rate each risk from 1 to 5 on how likely it is and how bad it would be. Multiply them to get a score and tackle the highest scores first.",""],
["Backup plans","For each top risk write \"if this happens, we will…\". A backup supplier, a cash reserve or a second person who knows the password all count.",""],
["Protecting data","Use strong unique passwords and two-factor authentication, collect only the customer data you need and limit who can see it.",""],
["Responding to problems","When something breaks: make it safe, tell affected people honestly and quickly, fix it, then update your plan so it does not happen again.",""]],
tool:{k:"riskmatrix"},
quiz:[["A risk is likely (4) and high impact (5). What is its score?",["9","20","1"],1,"Likelihood × impact = 4 × 5 = 20, so it goes to the top of the list."],
["What is the first step when a problem hits?",["Hide it until it is fixed","Make the situation safe and contain the damage","Post about it immediately"],1,"Contain first, then communicate honestly and fix."]]},
{t:"Investors and Funding",hook:"Money from others can speed you up, but every dollar comes with strings. Learn which strings before you sign.",
cards:[
["Your funding options","Bootstrapping (your own money and sales), grants and pitch competitions, loans, crowdfunding and investors. Most student businesses start with the first two.",""],
["Debt versus equity","Debt is borrowed and must be repaid, usually with interest, but you keep ownership. Equity means selling part of your business; nothing is repaid, but you share future profits and control.",""],
["How much do you need?","Add up the costs to reach your next milestone, plus a buffer. Raising far more than you need can cost you extra ownership.",""],
["Pitch and projections","Investors want the problem, solution, market, traction, team and how the money will be used, plus a simple forecast of revenue and costs.",""],
["Ownership, dilution and red flags","Every new investor shrinks your percentage. Walk away from guaranteed returns, pressure to sign today, upfront fees or anyone who discourages a lawyer's review.",""]],
tool:{k:"dilution"},
quiz:[["Which statement about equity funding is true?",["It must be repaid with interest","The investor gets part ownership","It never affects control"],1,"Equity is ownership; that is why it dilutes founders."],
["An \"investor\" asks for a $500 processing fee before sending funds. This is…",["Standard practice","A major red flag","A grant requirement"],1,"Demanding money before providing funding is a classic scam signal."]]}
],
final:{t:"Your Business Launch Plan",intro:"Pull everything together into a short launch plan. Write in plain sentences; you can copy the finished plan when you are done.",
fields:[["Business idea and target customer","What are you selling, and to whom?"],["Product or service description","What exactly does the customer get?"],["Marketing strategy","Value proposition, main channels, first campaign"],["Startup budget","Major costs and the total, with a cushion"],["Operations checklist","Daily and weekly tasks to keep it running"],["Sales or partnership plan","How you will land the first customers or partners"],["Legal and licensing checklist","Structure, registrations, permits, bank account"],["Risk assessment","Top three risks and your backup plan for each"],["Funding needs and next steps","How much you need, from where, and your next three actions"]]}});

C.push({id:"mkt",name:"Marketing",short:"Marketing",color:"#c2410c",
blurb:"Find your people, build a brand they recognize and create content that turns scrolls into sales.",
mods:[
{t:"Understanding Marketing",hook:"Marketing is everything you do to get the right people to notice, trust and choose you.",
cards:[
["What marketing is and why it matters","Marketing connects a product to the people who need it. A great product nobody hears about fails; good marketing makes sure the right people hear about it at the right time.",""],
["Your target customer","Describe one real person: age, schedule, budget, where they hang out online and what frustrates them. Marketing to that one person makes every decision easier.","\"Maya, 19, commutes 40 minutes, lives on iced coffee and has $40 a week to spend.\""],
["Needs and problems","Customers buy outcomes, not products. Nobody wants a drill, they want a hole in the wall. Ask what job your customer is hiring your product to do.",""],
["A simple value proposition","Formula: For [customer] who [problem], [your product] [benefit], unlike [alternative]. Test it by saying it out loud to someone in your target group.",""]],
tool:{k:"valueprop"},
quiz:[["\"People don't want a drill, they want a hole in the wall\" means…",["Sell cheaper drills","Focus on the outcome the customer wants","Drills are a bad business"],1,"Marketing works best when it speaks to the result, not the tool."],
["Which target customer description is most useful?",["Everyone aged 18 to 65","College commuters with tight budgets who study on the go","People who like nice things"],1,"Specific enough to choose channels, messages and prices."]]},
{t:"Building Your Brand",hook:"Your brand is the feeling people get when they think of you. You get to design it on purpose.",
cards:[
["Name, colors and style","Pick a name that is easy to say, spell and search, and check the social handles. Choose two or three colors and one or two fonts, then stick to them everywhere.",""],
["A clear brand message","One sentence about what you stand for, plus three words describing your personality, such as \"warm, playful, reliable.\" Every post and reply should sound like those words.",""],
["A consistent customer experience","Brand is not just visuals. It is how fast you reply, how the package looks when it arrives and how you handle a mistake. Consistency builds trust.",""],
["Strong student-business brands","Many big brands started in dorm rooms with a tight focus and a clear voice. What they share: a specific customer, a recognizable look and a story people want to repeat.",""]],
tool:{k:"sort",prompt:"Is each item on-brand for a \"calm, minimal, eco-friendly\" candle shop?",buckets:["On-brand","Off-brand"],items:[["Soft neutral colors and plenty of white space",0],["ALL-CAPS posts with five fire emojis",1],["Recycled paper packaging",0],["Neon gradient logo",1],["Friendly, unhurried replies to DMs",0],["Shipping in plastic bubble mailers",1]]},
quiz:[["Which is part of a brand?",["Only the logo","Logo, voice, colors and how customers are treated","Just the product price"],1,"Brand is the whole experience, not just the visuals."],
["Before finalizing a business name you should…",["Check spelling, searchability and available handles","Make it as long as possible","Pick the first idea"],0,"An unavailable handle or hard-to-spell name makes you hard to find."]]},
{t:"Marketing Channels",hook:"A channel is the road your message travels on. Pick the roads your customers already drive.",
cards:[
["Social media","Great for reach and showing personality. Instagram and TikTok suit visual products; LinkedIn suits services sold to professionals. Post consistently rather than constantly.",""],
["Word of mouth and referrals","The most trusted channel there is. Make sharing easy with referral codes, a small reward or simply asking happy customers to tell a friend.",""],
["Email and text","You own your list, unlike followers. Use it for launches, restocks and exclusive deals, and only message people who opted in.",""],
["Flyers, events and campus","Pop-ups, club fairs, tabling and flyers in high-traffic spots work well on campus. Add a QR code so you can track who found you that way.",""],
["Choosing the best channels","Ask: where does my customer spend time, what can I afford and what can I keep up every week? Pick one or two and measure them for a month.",""]],
tool:{k:"sort",prompt:"Which channel fits each goal best?",buckets:["Social media","Email/text","Campus event"],items:[["Show 500 new students what your brand looks like",0],["Tell past customers about a restock",1],["Let people taste-test your new snack",2],["Send a discount code to your subscriber list",1],["Post a behind-the-scenes video",0],["Collect sign-ups at the club fair",2]]},
quiz:[["Why is an email list valuable?",["Platforms control it","You own it and can reach people directly","It is always free to grow"],1,"Social algorithms change; your opted-in list stays yours."],
["What is the easiest way to track a flyer's results?",["Guess","Add a unique QR code or promo code","Count flyers printed"],1,"Unique codes connect offline marketing to real actions."]]},
{t:"Creating Content",hook:"Content is how you show up in someone's feed. Make it useful, fun or irresistible.",
cards:[
["Educational, promotional, entertaining","Educational teaches something. Promotional sells something. Entertaining makes people smile or relate. A healthy mix is roughly mostly value, some promotion.",""],
["Captions and calls to action","Lead with a hook in the first line, keep it scannable and end with one clear action: \"Tap the link,\" \"DM us 'SNACK',\" or \"Save this for exam week.\"",""],
["Better product photos and videos","Use daylight from a window, a clean background and a steady phone. Show the product in use, close up, and in the first second of a video.",""],
["A basic weekly content plan","Pick posting days, assign a content type to each and batch-create on one day. A simple plan beats waking up wondering what to post.",""]],
tool:{k:"sort",prompt:"Sort each post idea by content type.",buckets:["Educational","Promotional","Entertaining"],items:[["\"3 ways to style one scarf\"",0],["\"20% off this weekend only\"",1],["A funny skit about finals week",2],["\"How we source our coffee beans\"",0],["\"New flavor drops Friday, link in bio\"",1],["Trend video with your mascot",2]]},
quiz:[["Which is the strongest call to action?",["Let us know your thoughts maybe","DM us 'SNACK' for 10% off today","Our business is great"],1,"Specific, simple and gives a reason to act now."],
["The single best free upgrade to product photos is…",["Natural window light","Lots of filters","A busy background"],0,"Soft daylight makes products look true-to-life and appealing."]]},
{t:"Measuring Results",hook:"Likes feel nice. Sales pay rent. Learn which numbers actually matter.",
cards:[
["Views, engagement, leads, sales","Views show reach. Engagement (likes, comments, saves, shares) shows interest. Leads are people who raise their hand, like a DM or sign-up. Sales are the goal.",""],
["What performs best","Every few weeks, sort your posts by saves, shares and link clicks, not just likes. Look for patterns in topic, format and posting time.",""],
["Testing approaches","Change one thing at a time, like the headline or the photo, and compare results. This is an A/B test, and it beats guessing.",""],
["Customer feedback","Ask buyers one or two short questions: How did you find us? What almost stopped you from buying? Their words become your next captions.",""]],
tool:{k:"funnel"},
quiz:[["Which number is closest to real business results?",["Views","Likes","Sales"],2,"Views and likes are early signals; sales are the outcome."],
["In a fair A/B test you should…",["Change several things at once","Change one thing and compare","Only test on weekends"],1,"Changing one variable tells you what caused the difference."]]}
],
final:{t:"Your Marketing Plan",intro:"Build a one-page marketing plan you can actually use next week.",
fields:[["Target customer","Describe one specific person"],["Brand message","Your one-sentence message and three personality words"],["Marketing channels","Your one or two main channels and why"],["One-week content calendar","Mon: … Tue: … Wed: … (type + idea for each)"],["Success measures","Which numbers you will track and your goal for each"]]}});
C.push({id:"fin",name:"Finance",short:"Finance",color:"#15803d",
blurb:"Know your numbers: profit, cash flow, budgets, funding and the metrics that tell you if it is working.",
mods:[
{t:"Understanding Business Finance",hook:"Finance is the scoreboard of your business. You cannot win a game you are not keeping score of.",
cards:[
["What business finance is","It is how a business plans, tracks and uses money: what comes in, what goes out, what is left and what to do with it. Good decisions start with honest numbers.",""],
["Revenue vs profit vs cash flow","Revenue is total sales. Profit is what is left after expenses. Cash flow is when money actually moves. You can have high revenue, no profit and still be short on cash.","Selling $1,000 of shirts that cost $1,100 to make is revenue with a loss."],
["Startup vs corporate finance","Startups focus on survival: cash, runway and proving the model. Big companies focus on optimizing returns across many projects. Early on, cash is king.",""],
["Common money mistakes","Mixing personal and business money, underpricing, ignoring small expenses, not saving for taxes and spending ahead of revenue. Each one is avoidable with a little tracking.",""]],
tool:{k:"profit"},
quiz:[["A business sells $5,000 and spends $5,600. It has…",["Profit of $5,000","A loss of $600","Positive cash flow guaranteed"],1,"Revenue minus expenses: 5,000 − 5,600 = −600."],
["In an early startup, which usually matters most day to day?",["Stock price","Cash on hand and runway","Dividends"],1,"Startups die when they run out of cash."]]},
{t:"Setting Up Financial Systems",hook:"A little setup now saves hours of panic at tax time.",
cards:[
["Separate personal and business money","Run every business sale and expense through business accounts only. It makes taxes simpler, proves your business is real and protects liability shields like an LLC.",""],
["Open a business bank account","Banks usually ask for your ID and, for a registered business, formation documents and an EIN. Compare monthly fees, minimum balances and how well the app works.",""],
["Accurate records","Save every receipt (photos count), label each transaction with a category and reconcile your records with the bank statement each month.",""],
["Basic accounting tools","A spreadsheet works at first. As you grow, accounting software can connect to your bank, sort transactions and produce reports automatically.",""],
["Invoices and payment tracking","An invoice lists who, what, how much and when it is due. Track which are paid, which are late and follow up politely on overdue ones.",""]],
tool:{k:"sort",prompt:"Personal or business expense? (for a student photography business)",buckets:["Business","Personal"],items:[["New camera lens used for client shoots",0],["Your weekly groceries",1],["Website hosting for your portfolio",0],["Concert tickets with friends",1],["Editing software subscription",0],["Spring break flight",1]]},
quiz:[["What does reconciling mean?",["Deleting old receipts","Matching your records to the bank statement","Filing for a loan"],1,"It catches errors, missing entries and fraud."],
["Which belongs on an invoice?",["Your GPA","Items, amount and due date","Your password"],1,"Who, what, how much and when are the essentials."]]},
{t:"Budgeting and Forecasting",hook:"A budget is a plan. A forecast is a best guess about the future. Together they keep you from flying blind.",
cards:[
["A startup budget","List one-time costs to launch (equipment, first inventory, website, registration) and monthly costs to operate (software, supplies, marketing). Total both.",""],
["Estimating sales and expenses","Build sales estimates from the bottom up: customers per week × average order. Fixed costs stay the same each month; variable costs rise with each sale.",""],
["A simple forecast","Project 6 to 12 months: expected sales, costs and ending cash each month. Make a cautious, a likely and an optimistic version.",""],
["Plan for the unexpected","Add a contingency line, often 10 to 20 percent of costs, for surprises like a broken printer or a supplier price increase.",""],
["Short- and long-term goals","Short term: break even in 3 months. Long term: save a 3-month cash reserve or pay yourself a set amount. Tie each goal to a number and a date.",""]],
tool:{k:"budget"},
quiz:[["Which is a variable cost for a cookie business?",["Annual permit","Flour and butter per batch","Website domain"],1,"It rises and falls with how much you sell."],
["A bottom-up sales estimate starts with…",["The total market size","Customers you can reach × average order","Your dream number"],1,"Bottom-up estimates are grounded in things you can actually do."]]},
{t:"Managing Cash Flow",hook:"Profit is an opinion; cash is a fact. This is where businesses live or die.",
cards:[
["Inflows and outflows","Inflows: customer payments, loans, investments. Outflows: suppliers, rent, payroll, taxes, loan payments. Track both by week, not just by month.",""],
["Expense and payment timing","Get paid faster (deposits, upfront payments, short invoice terms) and pay out slower where fair (net-30 supplier terms). Timing alone can save a business.",""],
["A cash reserve","Keep enough cash to cover several months of essential costs. Many advisers suggest three to six months once you are established.",""],
["Spotting problems early","Warning signs: customers paying later and later, dipping below your minimum balance, using a credit card to cover regular bills or delaying your own tax payments.",""],
["Profitable but out of cash","If you pay suppliers today but customers pay you in 60 days, you can be profitable on paper and still unable to pay rent. Growth makes this worse, not better.",""]],
tool:{k:"cashflow"},
quiz:[["How can a profitable business run out of cash?",["It cannot","Money goes out before customer payments come in","Profit is always cash"],1,"Timing gaps between paying and getting paid drain cash."],
["Which helps cash flow the most?",["Asking for a deposit upfront","Offering 90-day payment terms","Buying a year of inventory early"],0,"Deposits bring cash in before you spend it."]]},
{t:"Funding and Investment",hook:"Sometimes you need fuel. Know the kinds of fuel and what each one costs you.",
cards:[
["Bootstrapping and reinvesting","Funding growth with your own savings and sales. Slower, but you keep full ownership and control, and it forces discipline.",""],
["Loans, grants and crowdfunding","Loans must be repaid with interest. Grants do not, but are competitive. Crowdfunding raises small amounts from many people, often as pre-orders.",""],
["Angels and venture capital","Angel investors are individuals investing their own money early. Venture capital firms invest larger amounts from a fund and expect very large growth.",""],
["Ownership and equity","Equity is a slice of ownership. Selling 20 percent means investors share in future profits, may get a say in decisions and get paid if the company is sold.",""],
["Information investors need","A clear pitch, simple financial statements, a forecast, how you will use the money and a list of who owns what (a cap table).",""]],
tool:{k:"sort",prompt:"Debt or equity?",buckets:["Debt","Equity"],items:[["Bank loan at 9% interest",0],["Angel investor buys 10% of your company",1],["SBA-backed loan",0],["Venture capital round",1],["Credit card balance",0],["Selling shares through equity crowdfunding",1]]},
quiz:[["Which funding source never needs to be repaid AND costs no ownership?",["A grant","A bank loan","An angel investment"],0,"Grants are non-dilutive and not repaid, which is why they are competitive."],
["A cap table shows…",["Your marketing calendar","Who owns what percentage of the company","Monthly rent"],1,"It is the ownership record investors check first."]]},
{t:"Measuring Financial Performance",hook:"Four numbers tell you most of what you need to know. Let's make them friends, not monsters.",
cards:[
["Profit margin, burn, runway, CAC","Profit margin = profit ÷ revenue. Burn rate = how much cash you lose per month. Runway = cash ÷ monthly burn. CAC = sales and marketing spend ÷ new customers.",""],
["Income statement and balance sheet","The income statement shows revenue, expenses and profit over a period. The balance sheet is a snapshot of what you own (assets), owe (liabilities) and the owners' share (equity).","Assets = liabilities + equity, always."],
["Actual vs projected","Each month, put your real numbers next to your forecast. Big gaps are clues: was the estimate wrong, or did something change?",""],
["Data-driven decisions","Use the numbers to decide: raise prices if margins are thin, cut a channel if CAC is too high, slow spending if runway drops under six months.",""]],
tool:{k:"runway"},
quiz:[["$12,000 in the bank and burning $2,000 a month. Runway?",["2 months","6 months","24 months"],1,"Runway = cash ÷ burn = 12,000 ÷ 2,000 = 6 months."],
["You spent $500 on ads and got 25 new customers. CAC?",["$20","$25","$500"],0,"CAC = 500 ÷ 25 = $20 per customer."]]}
],
final:{t:"Your Financial Plan",intro:"Create a basic financial plan. Rough numbers are fine; the goal is to think it through.",
fields:[["Startup costs","Itemized list and total"],["Monthly revenue and expense estimates","Expected sales, fixed costs, variable costs"],["Cash-flow projection","Starting cash and ending cash for the next 6 months"],["Funding needs","How much, from where, and why"],["Three financial goals","Each with a number and a deadline"],["Key metrics to track","e.g. profit margin, runway, CAC, and how often you will check"]]}});

C.push({id:"ops",name:"Operations",short:"Operations",color:"#0b5fa5",
blurb:"Design the engine room: processes, products, tools, people and the systems that let you grow without chaos.",
mods:[
{t:"Understanding Operations",hook:"If marketing makes the promise, operations keeps it.",
cards:[
["What operations are","Operations are all the activities that create and deliver your product or service: sourcing, making, scheduling, shipping, support and the systems behind them.",""],
["Growth and profitability","Smooth operations cut waste, reduce mistakes and free up your time, which lowers costs and lets you serve more customers without burning out.",""],
["Daily activities","List everything that happens from order to delivery. Many founders discover hours lost to tasks like hunting for files or re-answering the same question.",""],
["Common challenges","Running out of stock, missed messages, inconsistent quality, the founder doing everything and no records of what was promised to whom.",""]],
tool:{k:"sort",prompt:"Operations or not operations?",buckets:["Operations","Not operations"],items:[["Packing and shipping orders",0],["Designing the logo",1],["Scheduling tutors for next week",0],["Restocking supplies",0],["Writing a TikTok caption",1],["Handling a return",0]]},
quiz:[["Which best describes operations?",["Making ads","Everything needed to create and deliver what you sell","Raising money"],1,"Operations is the delivery engine."],
["A sign of an operations problem is…",["Customers asking 'where is my order?' often","Lots of likes","High profit margin"],0,"Repeated status questions mean delivery or communication is breaking down."]]},
{t:"Creating Business Processes",hook:"A process is a recipe. Write it once, follow it forever, improve it as you go.",
cards:[
["Map key tasks","Draw the journey from start to finish, such as order received → confirmed → made → packed → shipped → follow-up. Boxes and arrows are enough.",""],
["Step-by-step procedures","Write steps so a new teammate could follow them without asking you. Use short verbs: \"Check,\" \"Print,\" \"Seal,\" \"Send.\"",""],
["Roles and responsibilities","Every task needs one owner. If three people think someone else is doing it, nobody is.",""],
["Checklists and templates","Reuse what works: packing checklists, email templates for common questions, an order form. Templates save minutes that add up to days.",""],
["Efficiency and consistency","Time each step, find the slow ones and simplify. Then keep the steps the same so customers get the same great result every time.",""]],
tool:{k:"order",prompt:"Put this online-order process in the right order.",items:["Order received","Payment confirmed","Item made or picked","Quality check","Packed and labeled","Shipped with tracking","Follow-up message sent"]},
quiz:[["Why should every task have exactly one owner?",["Bosses like titles","Shared ownership often means nobody does it","It is a legal rule"],1,"Clear ownership prevents dropped balls."],
["The best test of a written procedure is…",["It is very long","A new person can follow it without help","It uses technical jargon"],1,"If someone new can do it right, it is clear enough."]]},
{t:"Managing Products and Services",hook:"From the first order to the last return, this is where customers experience your business.",
cards:[
["Planning delivery","Decide how customers get what they buy: shipping, pickup, in person or online. Set realistic timelines and say them clearly.",""],
["Inventory, supplies and equipment","Track what you have and set a reorder point: the stock level that triggers a new order, based on how fast you sell and how long restocking takes.","Sell 10 a week, restock takes 2 weeks → reorder at 20, plus a little buffer."],
["Quality standards","Write down what \"good\" means, with photos if possible, and check before anything ships. Catching a flaw costs far less than a return.",""],
["Orders and fulfillment","Use one system to track every order's status. Confirm each order, send tracking and update customers if anything changes.",""],
["Cancellations, returns and complaints","Post a clear policy before people buy. When complaints come in: listen, apologize, fix it fast and log the cause so it does not repeat.",""]],
tool:{k:"reorder"},
quiz:[["A reorder point is…",["The day you open the store","The stock level that triggers a new order","Your refund policy"],1,"It prevents running out while waiting on restock."],
["When should a return policy be shared?",["After a complaint","Before purchase, clearly","Never"],1,"Clear upfront policies prevent disputes."]]},
{t:"Technology and Organization",hook:"The right tools make a team of one feel like a team of five.",
cards:[
["Choosing tools","Pick tools that solve a real pain, are easy to learn and fit your budget. Free tiers of task boards, shared drives and form builders go a long way.",""],
["Documents and records","Use one shared drive with clear folders (Finance, Legal, Orders, Marketing) and a naming pattern like 2026-11_Invoice_ClientName.",""],
["Calendars and project tools","A shared calendar for deadlines and a board with To do / Doing / Done columns keeps everyone on the same page.",""],
["Protecting data","Turn on two-factor authentication, use a password manager, back up important files and give each person only the access they need.",""],
["Automating repetitive tasks","If you do it every day the same way, automate it: auto-replies, scheduled posts, order confirmation emails or form responses that land in a spreadsheet.",""]],
tool:{k:"sort",prompt:"Should you automate it?",buckets:["Automate","Keep human"],items:[["Order confirmation email",0],["Apologizing to an upset customer",1],["Scheduling posts for the week",0],["Negotiating with a new supplier",1],["Copying form sign-ups into a spreadsheet",0],["Choosing your next product",1]]},
quiz:[["Which naming pattern is most organized?",["final_FINAL_v2.docx","2026-11_Invoice_ClientName.pdf","stuff.pdf"],1,"Dates first sort neatly; names make it searchable."],
["What is the best rule for automation?",["Automate everything","Automate repetitive, predictable tasks","Never automate"],1,"Keep humans on judgment and relationships."]]},
{t:"People and Partnerships",hook:"You can't do it all. The people around you multiply what you can build.",
cards:[
["Employees, contractors, freelancers","Employees work under your direction on an ongoing basis. Contractors and freelancers control how they do the work. The difference has real legal and tax consequences.",""],
["Training and communication","Write down how things are done, show before asking someone to do it, and hold a short regular check-in. Most team problems are communication problems.",""],
["Suppliers and outside partners","Agree on price, quantities, quality and timelines in writing. Pay on time and communicate early when plans change. Good partners remember good partners.",""],
["Expectations and performance","Define what success looks like with measurable goals, then give feedback often, not just when something goes wrong.",""],
["A reliable support network","Mentors, campus entrepreneurship centers, other founders and trusted advisers can answer questions that would take you weeks to figure out alone.",""]],
quiz:[["Who usually controls HOW the work is done?",["An independent contractor","An employee's manager","Nobody"],0,"Control over how the work is done is a key factor in worker classification."],
["Most team problems are really…",["Communication problems","Software problems","Weather problems"],0,"Clear expectations and regular check-ins prevent most issues."]]},
{t:"Improving Operations",hook:"Good operations are never finished. Small improvements compound.",
cards:[
["Track time, cost, quality and satisfaction","Measure how long key tasks take, what they cost, how often mistakes happen and how happy customers are. You cannot improve what you do not measure.",""],
["Bottlenecks and inefficiencies","A bottleneck is the slowest step, and it limits everything after it. Fixing it speeds up the whole system; speeding up other steps does not help.",""],
["Customer and team feedback","Ask customers a quick rating plus one question. Ask your team what slows them down. Both groups see problems you miss.",""],
["Preparing for growth","Ask: what breaks if orders double? Fix that before it happens, whether it is packing space, supplier capacity or your own time.",""],
["Backup plans for common risks","Have a plan for the usual suspects: someone gets sick, a supplier is late, a tool goes down, a shipment is lost.",""]],
tool:{k:"bottleneck"},
quiz:[["Speeding up a step that is NOT the bottleneck will…",["Speed up everything","Not increase total output","Double profit"],1,"Output is capped by the slowest step."],
["The best question when preparing to grow is…",["What breaks if orders double?","How can we spend more?","Who can we blame?"],0,"It surfaces weak points before they fail."]]}
],
final:{t:"Your Operations Plan",intro:"Design the engine that keeps your business running smoothly.",
fields:[["Key daily and weekly tasks","Daily: … Weekly: …"],["A process checklist","Steps for your most important process"],["Roles and responsibilities","Who owns what"],["Required tools and resources","Apps, equipment, supplies"],["Customer fulfillment process","Order to delivery to follow-up"],["Three improvements to make immediately","Specific and doable this week"]]}});
C.push({id:"bd",name:"Business Development",short:"Biz Dev",color:"#6d28d9",
blurb:"Find opportunities, build relationships, close deals and turn partnerships into a repeatable growth engine.",
mods:[
{t:"Understanding Business Development",hook:"Business development is about creating long-term value: new customers, new markets, new relationships.",
cards:[
["What it means","Business development (biz dev) finds and builds opportunities to grow: partnerships, new customer groups, new markets and deals that open doors.",""],
["Biz dev vs sales vs marketing","Marketing creates awareness and interest at scale. Sales turns individual interested people into customers. Biz dev builds the relationships and opportunities that feed both.","Marketing: a campus ad. Sales: closing one club order. Biz dev: a semester-long deal with student government."],
["Opportunities for growth","Sell more to current customers, reach new customer groups, add a product, enter a new location or partner with someone who already has your audience.",""],
["Realistic growth goals","Base goals on what you can control: \"Pitch 10 clubs this month and close 2\" is better than \"Get huge.\"",""]],
tool:{k:"sort",prompt:"Marketing, sales or business development?",buckets:["Marketing","Sales","Biz dev"],items:[["Instagram ad for the new menu",0],["Closing a catering order with the chess club",1],["Negotiating an exclusive deal with the campus bookstore",2],["Answering a buyer's pricing questions on a call",1],["Designing a flyer campaign",0],["Partnering with a local gym to bundle offers",2]]},
quiz:[["Which is the best example of business development?",["Posting a meme","A partnership with the student union to sell at every event","Fixing a typo"],1,"Biz dev builds relationships that open new channels and markets."],
["Which growth goal is most realistic and controllable?",["Go viral","Pitch 10 clubs and close 2 this month","Be the biggest brand in California"],1,"It is based on actions you control and can measure."]]},
{t:"Finding Customers and Opportunities",hook:"Opportunities rarely knock. You go find them, then you keep track of them.",
cards:[
["Ideal customers","Look at your best customers so far: who are they, how did they find you, why did they buy? Find more people like them.",""],
["Markets and competitors","Read competitor reviews to find gaps: complaints are opportunities. Check prices, offers and who they ignore.",""],
["Clients, partners and organizations","Make a list of 30 groups that serve your audience: clubs, departments, local shops, nonprofits, events. Each is a door to many customers.",""],
["Networking and referrals","Go to events with a goal (meet three people), ask good questions and follow up within a day. Ask happy customers, \"Who else should I talk to?\"",""],
["An opportunity tracker","A simple spreadsheet works: name, organization, contact, status, next step and date. If it is not written down, it will be forgotten.",""]],
tool:{k:"pipeline"},
quiz:[["Competitor complaints in reviews are useful because…",["They are funny","They reveal gaps you can fill","They are free advertising for you"],1,"Unmet needs are opportunities."],
["The most important column in an opportunity tracker is…",["Favorite color","Next step and date","Logo"],1,"Without a next step, opportunities go cold."]]},
{t:"Building Relationships",hook:"People do business with people they know, like and trust. Here is how to earn all three.",
cards:[
["Professional outreach messages","Short and specific: personalized opener, who you are, why them, what is in it for them, one easy ask. Under 120 words is a good target.",""],
["Starting conversations","Lead with curiosity, not a pitch. Ask about their goals and challenges, then listen more than you talk.",""],
["Trust and credibility","Do what you say, when you say. Share proof: reviews, photos of past work, numbers. Be honest about what you cannot do.",""],
["Following up effectively","Most deals need several touches. Follow up after 3 to 5 days with something new: a sample, an idea, an answer. Polite persistence wins.",""],
["Long-term relationships","Check in when you do not need anything: congratulate them, share something useful, send a thank-you. Relationships are built between asks.",""]],
tool:{k:"outreach"},
quiz:[["A good follow-up message…",["Repeats \"just checking in\"","Adds something new and useful","Is sent every hour"],1,"Adding value gives them a reason to respond."],
["The best way to start a conversation with a potential partner is to…",["Pitch immediately","Ask about their goals and listen","Talk about your competitors"],1,"Curiosity builds trust and reveals what they need."]]},
{t:"Sales and Negotiation",hook:"Great sales feels like helping. Great negotiation leaves both sides glad they said yes.",
cards:[
["The customer's needs","Ask open questions: What are you trying to achieve? What have you tried? What happens if nothing changes? Then repeat back what you heard.",""],
["Presenting value clearly","Connect your offer directly to their needs: \"You said X matters; here is how we handle X.\" Lead with outcomes, then details.",""],
["Offers and proposals","Include the problem, your solution, what is included, timeline, price and next step. Two or three options (basic, standard, premium) make choosing easier.",""],
["Handling objections","Objections are questions in disguise. Listen, acknowledge, ask a clarifying question, then answer. \"Too expensive\" often means \"I'm not sure it's worth it yet.\"",""],
["Negotiating pricing and agreements","Know your walk-away number first. Trade instead of cutting: lower price for a longer commitment or upfront payment. Get final terms in writing.",""]],
tool:{k:"objection"},
quiz:[["Before negotiating you should know…",["Your walk-away point","Their GPA","Nothing, just improvise"],0,"It keeps you from agreeing to a deal that hurts you."],
["Instead of simply cutting your price, a smarter move is to…",["Trade: lower price for a longer commitment","Refuse to talk","Double it"],0,"Trading keeps value balanced for both sides."]]},
{t:"Partnerships and Growth",hook:"The right partner can reach in a week what would take you a year alone.",
cards:[
["Strategic partners","Look for organizations that share your customers but are not competitors, and whose strengths fill your gaps.",""],
["Mutually beneficial collaborations","Spell out what each side gives and gets. If it only helps you, it is a favor, not a partnership, and it will not last.",""],
["Campus orgs and local businesses","Clubs need fundraisers, events need vendors and local shops want student customers. Offer co-branded deals, discounts or event sponsorships.",""],
["New customer groups and markets","Once one group loves you, try the next nearest one: another campus, grad students, faculty or the surrounding neighborhood.",""],
["Measuring partnership success","Track leads, sales, sign-ups or reach from each partner with unique codes or links. Review after a set period and keep the ones that pay off.",""]],
tool:{k:"sort",prompt:"Good partner or poor fit for a campus study-snack box startup?",buckets:["Good partner","Poor fit"],items:[["The campus library's finals-week event",0],["A rival snack-box company",1],["The tutoring center",0],["A luxury car dealer",1],["A student wellness club",0],["A company with a bad reputation on campus",1]]},
quiz:[["A strong partnership is one where…",["Only you benefit","Both sides clearly gain something","Nobody tracks results"],1,"Mutual benefit keeps both sides invested."],
["How can you measure a partner's impact?",["Unique promo codes or links per partner","Guessing","Counting meetings"],0,"Unique codes attribute sales to the right partner."]]},
{t:"Creating a Growth Strategy",hook:"Now turn everything into a repeatable machine you can review, tune and scale.",
cards:[
["Biz dev priorities","Rank opportunities by impact and effort. Do high-impact, low-effort ones first; schedule the big bets; drop the low-impact time sinks.",""],
["Leads, conversions and revenue","Track how many leads you got, what share became customers (conversion rate) and how much revenue each source brought in.",""],
["What is working","Every month ask: which sources brought the best customers at the lowest cost? Double down on those and cut the rest.",""],
["A repeatable sales process","Write down your steps from first contact to close, with templates for each. A process you can repeat is a process you can teach and scale.",""],
["Short- and long-term growth","Short term (this semester): concrete targets. Long term (1 to 3 years): where you want to be and which bets get you there.",""]],
tool:{k:"funnel"},
quiz:[["You had 40 leads and 8 became customers. Conversion rate?",["8%","20%","40%"],1,"8 ÷ 40 = 0.2 = 20%."],
["Which opportunity should you usually pursue first?",["High impact, low effort","Low impact, high effort","Whatever is newest"],0,"Quick wins build momentum and cash."]]}
],
final:{t:"Your Business Development Plan",intro:"Map out who you will reach, how and how you will know it worked.",
fields:[["Ideal customer or partner","Who, and why them"],["Three growth opportunities","1. … 2. … 3. …"],["Outreach message","Your actual message, ready to send"],["Follow-up plan","When and how you will follow up"],["Partnership or sales offer","What you offer and what you ask in return"],["Growth metrics to track","Leads, conversion rate, revenue per source…"]]}});

C.push({id:"risk",name:"Business Risk Basics",short:"Risk",color:"#b91c1c",
blurb:"Spot what could go wrong, size it up and build plans so surprises become speed bumps instead of crashes.",
mods:[
{t:"Understanding Business Risks",hook:"Risk is not the enemy. Ignoring risk is.",
cards:[
["What business risk means","A risk is anything uncertain that could hurt your goals: losing money, breaking a law, disappointing customers or stopping operations.",""],
["Common startup risks","Running out of cash, no real demand, a co-founder conflict, a key supplier failing, legal mistakes, getting hacked and founder burnout.",""],
["Preventable vs unavoidable","Some risks you can prevent (data loss → backups). Others you cannot (a recession, a pandemic) but can prepare for with reserves and flexible plans.",""],
["Why early matters","Risks are cheapest to handle before they happen. A $50 backup drive beats losing every client file.",""]],
tool:{k:"sort",prompt:"Preventable or unavoidable (prepare instead)?",buckets:["Preventable","Unavoidable"],items:[["Losing files because nothing was backed up",0],["An economic recession",1],["Account hacked with a reused password",0],["A storm closing campus for a week",1],["Fine for skipping a required permit",0],["A new competitor launching nearby",1]]},
quiz:[["For an unavoidable risk, you should…",["Ignore it","Prepare with reserves and backup plans","Panic"],1,"You cannot stop it, but you can soften the blow."],
["Why handle risks early?",["It is cheaper and easier before they happen","Investors require it","It is fun"],0,"Prevention costs far less than recovery."]]},
{t:"Types of Business Risk",hook:"Six families of risk. Learn to recognize each one in the wild.",
cards:[
["Financial and cash-flow","Running low on cash, customers paying late, unexpected costs, too much debt.",""],
["Legal and regulatory","Missing licenses, breaking advertising or privacy rules, contract disputes, intellectual property issues.",""],
["Operational and supply chain","Supplier delays, equipment breakdowns, quality problems, relying on one person for everything.",""],
["Customer, market and reputation","Demand drops, trends change, a competitor undercuts you or a bad review goes viral.",""],
["Technology and cybersecurity","Phishing, hacked accounts, lost data, a platform changing its rules or banning your account.",""],
["Personal and team","Burnout, illness, co-founder conflict, a key person leaving or school deadlines colliding with business ones.",""]],
tool:{k:"sort",prompt:"Name the risk type.",buckets:["Financial","Legal","Operational","Reputation","Tech","Team"],items:[["A customer posts a viral bad review",3],["Your only supplier is out of stock for a month",2],["Phishing email steals your shop login",4],["Co-founder quits during midterms",5],["Selling food without the required permit",1],["Big customer pays 60 days late",0]]},
quiz:[["Your Instagram account gets banned with no warning. Risk type?",["Technology/platform","Legal","Financial"],0,"Depending on a platform you do not control is a technology risk."],
["Relying on one person who knows every password is…",["An operational and team risk","Totally fine","A marketing strategy"],0,"Single points of failure are classic operational risks."]]},
{t:"Identifying and Assessing Risks",hook:"Not all risks are equal. Score them so you know where to spend your energy.",
cards:[
["A risk checklist","Walk through each risk type and brainstorm what could go wrong. Ask teammates and mentors; they will spot things you miss.",""],
["Likelihood and impact","Rate likelihood (how probable) and impact (how bad) from 1 to 5. Multiply for a risk score from 1 to 25.",""],
["Prioritizing","High scores get a plan now. Medium scores get monitored. Low scores get noted. Focus beats worrying about everything.",""],
["Warning signs","Each risk has early signals: falling sales, slower payments, more complaints, suspicious login alerts. Decide what you will watch.",""],
["Reviewing as you grow","New products, new hires and new markets bring new risks. Review your list every few months and after any big change.",""]],
tool:{k:"riskmatrix"},
quiz:[["Likelihood 2, impact 5. Score?",["7","10","25"],1,"2 × 5 = 10."],
["Which risk should usually get a plan first?",["Score 4","Score 20","Score 9"],1,"Highest score first."]]},
{t:"Preventing and Managing Risks",hook:"You have your list. Now build your shields.",
cards:[
["Policies and procedures","Written rules for common situations, like refunds, data access and cash handling, prevent mistakes and arguments.",""],
["Contracts and written agreements","Put deals in writing: scope, price, deadlines, who owns what and what happens if someone backs out. This includes agreements between co-founders.",""],
["Protecting business information","Use two-factor authentication, a password manager, limited access and regular backups. Be suspicious of urgent messages asking for logins or payments.",""],
["Emergency funds and backups","Keep a cash cushion and backups of key files, suppliers and people. Redundancy is boring until it saves you.",""],
["Training team members","Show teammates the policies, how to spot phishing and what to do in an emergency. A trained team is your first line of defense.",""],
["Contingency plans","For each top risk: trigger (how you will know), first actions, who is responsible and who to contact.",""]],
tool:{k:"sort",prompt:"Match each risk to its best shield.",buckets:["Backups","Written contract","Cash reserve","2FA + training"],items:[["Laptop dies with all order records",0],["Client refuses to pay for finished work",1],["Slow sales month and rent is due",2],["Phishing email targets your team",3],["Co-founder disagreement on ownership",1],["Supplier raises prices suddenly",2]]},
quiz:[["A co-founder agreement is…",["Only for big companies","A written agreement that prevents future disputes","Unnecessary between friends"],1,"Friendships are exactly why it should be in writing."],
["A good contingency plan includes…",["A trigger, actions, an owner and contacts","Only a hope","A logo"],0,"It turns a crisis into a checklist."]]},
{t:"Legal and Insurance Protection",hook:"Legal basics and insurance are the guardrails on the road. Here is what to know (and when to ask a pro).",
cards:[
["Permits and legal requirements","Check city, county and state requirements for your industry and location. Food, beauty, events and alcohol often need extra permits.",""],
["Separating personal and business liability","Structures like an LLC or corporation can help protect personal assets, but only if you keep finances separate and follow the formalities.",""],
["When to consider insurance","Consider it when you have customers on site, physical products, events, employees, valuable equipment or contracts that require it. General liability is a common starting point.",""],
["Protecting intellectual property","Trademarks protect names and logos, copyrights protect creative work, patents protect inventions. Do not use others' music, photos or logos without permission.",""],
["Records and documentation","Keep contracts, licenses, insurance policies, tax filings and key emails in organized folders, backed up.",""]],
note:"Legal requirements vary by location and industry. This is general education, not legal advice.",
tool:{k:"sort",prompt:"Which protection fits?",buckets:["Trademark","Copyright","Patent"],items:[["Your business name and logo",0],["Photos and videos you create",1],["A new mechanical invention",2],["Your slogan used as a brand identifier",0],["Your written course materials",1],["A novel manufacturing process",2]]},
quiz:[["An LLC's liability protection can be weakened by…",["Mixing personal and business money","Having a logo","Paying taxes"],0,"Commingling funds can undermine the separation."],
["Using a popular song in your ad without a license risks…",["Copyright infringement","Nothing","A free trademark"],0,"Music is copyrighted; you need permission or a license."]]},
{t:"Responding to Problems",hook:"Things will go wrong. How you respond is what customers remember.",
cards:[
["An emergency response plan","Write down what to do first, who decides, who to call and how to reach customers if a website, supplier or key person goes down.",""],
["Communicating with customers and partners","Tell people early, honestly and with a plan: what happened, what you are doing and what it means for them. Silence breeds rumors.",""],
["Complaints and reputation","Respond quickly and calmly, take the conversation private when needed, fix it, then follow up publicly if appropriate. Never argue online.",""],
["Learning from mistakes","After things settle, ask: what happened, why, what helped, what did not and what will we change? Blame the process, not the person.",""],
["Updating the risk plan","Add what you learned: new risks, better warning signs, faster responses. Every incident should make the business stronger.",""]],
tool:{k:"crisis"},
quiz:[["A bad review goes viral. First move?",["Argue in the comments","Respond calmly, acknowledge and take it private to fix","Delete your account"],1,"Calm, fast, solution-focused responses protect reputation."],
["After an incident, a good review asks…",["Who is to blame?","What happened and what will we change?","How do we hide it?"],1,"Focus on learning and process improvement."]]}
],
final:{t:"Your Risk-Management Plan",intro:"Build a risk plan you can review every few months.",
fields:[["Five potential business risks","1. … 2. … 3. … 4. … 5. …"],["Likelihood and impact ratings","Score each 1 to 5 and multiply"],["Prevention strategies","One prevention step per risk"],["Response plan for the most serious risk","Trigger, first actions, owner, contacts"],["Important documents, contacts and resources","Where they live and who to call"],["Risk review schedule","How often and when you will review"]]}});
C.push({id:"setup",name:"Setting Up Your Business",short:"Setup",color:"#92400e",
blurb:"Go from side hustle to official: structure, registration, licenses, taxes, protection and staying compliant.",
note:"General education only. Rules vary by state, city and industry. Check official government sources and consult an attorney or tax professional for your situation.",
mods:[
{t:"When to Formalize a Business",hook:"Idea, side hustle or real business? Knowing where you are tells you what paperwork you need.",
cards:[
["Idea vs side hustle vs formal business","An idea has no sales. A side hustle earns some money informally. A formal business is registered, has its own accounts and operates as a separate entity or registered name.",""],
["When registration may make sense","Common triggers: steady income, signing contracts, hiring help, selling physical products, doing risky work, opening a business bank account or seeking funding.",""],
["Benefits and costs","Benefits: liability protection (for some structures), credibility and easier banking and funding. Costs: filing fees, possible annual fees or taxes, more paperwork.",""],
["Liability, taxes, credibility, funding","Liability: who pays if something goes wrong. Taxes: how profits are taxed. Credibility: clients and partners trust a registered business more. Funding: investors usually require a formal entity.",""],
["Risks of staying informal too long","Personal assets exposed to lawsuits or debts, tax surprises, messy records and missed opportunities with partners who require a registered business.",""]],
tool:{k:"sort",prompt:"Where is each one on the journey?",buckets:["Idea","Side hustle","Formal business"],items:[["Thinking about a resume-review service",0],["Selling a few paintings to friends via Venmo",1],["Registered LLC with a business bank account",2],["Sketching an app concept",0],["Tutoring on weekends for cash",1],["Corporation that just raised an angel round",2]]},
quiz:[["Which is a common sign it may be time to formalize?",["You had one idea","You are signing contracts and earning steady income","You made a logo"],1,"Contracts and steady income bring liability and tax issues."],
["A risk of staying informal too long is…",["Too much credibility","Personal assets exposed to business debts or lawsuits","Lower taxes forever"],1,"Without a liability shield, the business's problems can become yours."]]},
{t:"Choosing a Business Structure",hook:"Your structure decides who is liable, how you are taxed and how easy it is to bring in investors.",
cards:[
["Sole proprietorship","The default if you do business alone without registering an entity. Easiest and cheapest, but you are personally responsible for all business debts and lawsuits.",""],
["Partnership","Two or more people sharing a business. General partners are typically personally liable, including for each other's business decisions. A written partnership agreement is essential.",""],
["Limited liability company (LLC)","A state-registered entity that generally separates personal and business liability. By default, profits pass through to owners' personal taxes. Flexible and popular with small businesses.",""],
["Corporations: C corp and S corp","A C corporation is taxed separately from its owners and is the usual choice for venture-backed startups. An S corporation is a tax election that passes income through, with limits on who and how many can be shareholders.",""],
["Comparing cost, liability, taxes, ownership, complexity","More protection and investor-readiness usually means more cost and paperwork. Choose for where you are now and where you plan to be in two years.",""],
["When to consult a professional","Before choosing a structure for a business with co-founders, investors, employees or significant risk, talk to an attorney or tax professional. Many campuses offer free legal clinics.",""]],
tool:{k:"structure"},
quiz:[["Which structure do most venture-capital-backed startups use?",["Sole proprietorship","C corporation","General partnership"],1,"VCs typically invest in C corporations because of their share structure."],
["An S corporation is best described as…",["A separate type of bank","A tax election with shareholder limits","A partnership agreement"],1,"It changes how the business is taxed, not that it exists."]]},
{t:"Registering the Business",hook:"Time to make it official with the state.",
cards:[
["Choosing and checking a name","Search your state's business database, the federal trademark database and domain and social handles. Avoid names too close to existing brands.",""],
["Registering an LLC or corporation","File formation documents with your Secretary of State (or equivalent), usually Articles of Organization for an LLC or Articles of Incorporation for a corporation, and pay the filing fee.",""],
["\"Doing Business As\" (DBA)","If you operate under a name other than your legal or registered name, you may need to file a DBA, also called a fictitious business name, often with your county or state.",""],
["Operating or partnership agreement","This internal document spells out who owns what, who decides what, how profits are split and what happens if someone leaves. Write it before disagreements, not during.",""],
["Ownership and decision rights","Agree on ownership percentages, voting rights and vesting for each founder. A 50/50 split with no tie-breaker can freeze a company.",""]],
tool:{k:"order",prompt:"Put these LLC registration steps in a sensible order.",items:["Choose and check the name","File Articles of Organization with the state","Write an operating agreement","Get an EIN from the IRS","Open a business bank account","Apply for local licenses and permits"]},
quiz:[["Jane Smith runs \"Sunset Candles\" as a sole proprietor. She may need…",["A DBA / fictitious business name","Venture capital","A patent"],0,"She is doing business under a name other than her own."],
["Why can a 50/50 split be risky?",["It is illegal","Deadlocks with no tie-breaker","Taxes double"],1,"Agreements should say how ties get resolved."]]},
{t:"Licenses, Permits and Registrations",hook:"Different businesses need different permission slips. Here is how to find yours.",
cards:[
["Is a license required?","Search your city and county websites for \"business license\" and your state's business portal. The U.S. Small Business Administration site also has a licensing guide by state.",""],
["City, county, state and federal","Cities often require a general business license or tax certificate. States regulate many professions and sales tax. Federal licenses apply to specific industries like alcohol, firearms and aviation.",""],
["Industry permits and professional licenses","Some work needs a professional license, such as cosmetology, real estate or contracting. Others need specific permits, like health permits for food.",""],
["Sales tax and seller's permits","If you sell taxable goods, many states require a seller's permit and that you collect and remit sales tax. Online sales can create obligations in other states too.",""],
["Home-based business and zoning","Running a business from home may require a home occupation permit and must follow zoning rules. Check your lease or housing rules too, including campus housing.",""],
["Food, beauty, events, transport and online","Food often needs health permits or cottage-food registration. Beauty services need state licensing. Events may need temporary permits. Driving services need proper insurance. Online sellers still need local registration and sales tax compliance.",""]],
tool:{k:"sort",prompt:"Who usually handles it? (varies by location)",buckets:["City/county","State","Federal"],items:[["General business license",0],["Cosmetology license",1],["EIN",2],["Home occupation permit",0],["Seller's permit for sales tax",1],["Alcohol producer permit",2]]},
quiz:[["Selling homemade cookies may require…",["Nothing ever","A food or cottage-food permit, depending on location","A patent"],1,"Food sales are commonly regulated for health and safety."],
["Running a business from your apartment, you should check…",["Zoning, home-occupation rules and your lease","Only your social media","Nothing"],0,"Home businesses can be limited by zoning and housing rules."]]},
{t:"Tax and Employer Requirements",hook:"Taxes are not optional, but they are learnable. Here is the lay of the land.",
cards:[
["Employer Identification Number (EIN)","An EIN is a federal tax ID for your business. The IRS issues it for free online. You generally need one if you have employees, operate as a corporation or partnership, or your bank requires it. Never pay a third party for one unless you choose to.",""],
["Federal, state and local taxes","Businesses may owe federal income tax, state income or franchise tax and local taxes or fees. What you owe depends on your structure and location.",""],
["Sales tax and income tax","Sales tax is collected from customers on taxable sales and passed to the state. Income tax is paid on your business profit.",""],
["Self-employment and payroll taxes","Self-employed people generally pay self-employment tax for Social Security and Medicare and may need to make quarterly estimated payments. Employers withhold and pay payroll taxes for employees.",""],
["Employees vs independent contractors","Classification depends on how much control you have over the work, not what you call the person. Some states, including California, use stricter tests. Misclassification can bring penalties.",""],
["Payroll and worker classification basics","Hiring employees usually means registering with your state, withholding taxes, getting workers' compensation insurance and filing payroll reports. Payroll services can handle much of this.",""]],
tool:{k:"sort",prompt:"Employee or independent contractor? (generally)",buckets:["Likely employee","Likely contractor"],items:[["You set their hours and train them on your methods",0],["A designer who sets their own process and serves many clients",1],["Works only for you, using your equipment, on your schedule",0],["A freelancer billing a fixed project fee with their own tools",1],["Barista at your pop-up you supervise each shift",0],["An accountant firm doing your year-end taxes",1]]},
quiz:[["Where should you get an EIN?",["Directly from the IRS, free","Any website that charges $200","Your bank only"],0,"The IRS issues EINs for free; paid services are optional middlemen."],
["Worker classification mostly depends on…",["The job title you choose","How much control you have over the work","How much you pay"],1,"Control over how the work is done is a key factor."]]},
{t:"Protecting the Business",hook:"You built something. Now put locks on the doors.",
cards:[
["A separate business bank account","It keeps your records clean, makes taxes easier and supports the liability shield of an LLC or corporation.",""],
["Keeping finances separate","No paying rent from the business account or business supplies from your personal card. If it happens, record and repay it properly.",""],
["Contracts and written agreements","Use written agreements with clients, contractors, co-founders and suppliers: scope, price, deadlines, payment terms, ownership of work and how to end the deal.",""],
["Business insurance","Common types include general liability, professional liability, product liability and workers' compensation (often required with employees). Your needs depend on your risks.",""],
["Trademarks, copyrights and IP","Register important trademarks, make sure contractors assign the rights to work they create for you and get permission before using others' content.",""],
["Records and compliance documents","Keep formation documents, agreements, licenses, permits, tax filings and insurance policies organized and backed up.",""]],
tool:{k:"sort",prompt:"Which insurance fits each risk? (common examples)",buckets:["General liability","Professional liability","Workers' comp"],items:[["A customer trips at your pop-up booth",0],["Your consulting advice causes a client a loss",1],["Your employee is injured while working",2],["A guest's property is damaged at your event",0],["A design error costs a client money",1],["A staff member hurts their back lifting boxes",2]]},
quiz:[["A contractor designs your logo. To own it, you should…",["Assume you own it","Have a written agreement assigning the rights to you","Post it first"],1,"Without a written assignment, the creator may keep the rights."],
["Workers' compensation insurance is usually tied to…",["Having employees","Having a website","Having a logo"],0,"Most states require it once you have employees."]]},
{t:"Ongoing Compliance",hook:"Registration is not a one-time event. Stay in good standing with a simple calendar.",
cards:[
["Annual reports and renewal fees","Many states require LLCs and corporations to file periodic reports and pay fees. Missing them can lead to penalties or losing good standing.",""],
["Keeping licenses and permits current","Licenses and permits expire. Put every renewal date in a calendar with a reminder 30 days ahead.",""],
["Updating ownership or business info","Changed your address, added an owner or switched your registered agent? Update the state and other agencies promptly.",""],
["Financial and tax records","Keep books monthly and retain tax records for years (the IRS generally recommends keeping records at least three years, longer in some cases).",""],
["Compliance changes as you grow","Hiring, selling in new states, raising money or adding products can add new requirements. Re-check when something big changes.",""],
["When to get professional advice","Get help before raising money, hiring your first employee, signing major contracts, changing structure or if you receive a notice from a government agency.",""]],
tool:{k:"sort",prompt:"How often does it usually come up?",buckets:["Monthly","Quarterly","Yearly"],items:[["Reconcile the books",0],["Estimated income tax payments (if required)",1],["State annual or periodic report (many states)",2],["Review sales and expenses",0],["Business license renewal (many cities)",2],["Sales tax filing (frequency varies by state)",1]]},
quiz:[["The best defense against missed deadlines is…",["Memory","A compliance calendar with reminders","Hoping for a notice"],1,"Calendar reminders prevent penalties."],
["When should you re-check compliance?",["Never","When something big changes, like hiring or new states","Only when sued"],1,"Growth often triggers new requirements."]]}
],
final:{t:"Your Business Setup Checklist",intro:"Build your setup checklist. Requirements vary by location and industry, so verify each item and seek professional advice for your specific situation.",
fields:[["Recommended business structure and reasoning","Structure + why it fits"],["Business name and registration needs","Name checks, state filing, DBA"],["Required licenses and permits","City, county, state, industry-specific"],["EIN and tax requirements","EIN, sales tax, income tax, estimated payments"],["Banking and bookkeeping setup","Bank, accounting tool, record routine"],["Insurance and contract needs","Policies and agreements to put in place"],["Ongoing filing and renewal deadlines","Dates and reminders"]]}});

C.push({id:"inv",name:"Investors and Funding",short:"Investors",color:"#8a6100",
blurb:"Raise money the smart way: pick the right source, understand the terms, vet investors and spot predatory deals.",
note:"General education, not legal or financial advice. Selling securities generally requires registration or a valid exemption under federal securities laws; get legal advice before accepting investment.",
mods:[
{t:"Understanding Business Funding",hook:"Before asking how to raise money, ask whether you should.",
cards:[
["Why businesses raise capital","To buy equipment or inventory, hire, build a product, enter a market or survive until revenue catches up. Money should buy a specific milestone.",""],
["Startup costs vs growth capital","Startup costs get you to launch. Growth capital scales something already working. Investors are far more interested in the second.",""],
["Debt, equity, grants, crowdfunding, bootstrapping","Debt: borrow and repay. Equity: sell ownership. Grants: free money with strings. Crowdfunding: many small backers. Bootstrapping: your own savings and revenue.",""],
["A loan vs an investment","Equity funding gives an investor ownership in the business, while debt must generally be repaid with interest. A loan creates an obligation; an investment creates a co-owner.",""],
["Ownership, control and repayment","Debt keeps ownership but adds payments. Equity avoids payments but shares profits and often decision-making. Every option trades something.",""],
["Do you need outside money?","If customers can fund growth through pre-orders or revenue, you may not. Outside money is a tool, not a trophy.",""]],
tool:{k:"sort",prompt:"Which funding type is it?",buckets:["Debt","Equity","Non-dilutive"],items:[["SBA-backed bank loan",0],["Angel buys 8% of the company",1],["University pitch competition prize",2],["Venture capital round",1],["Small-business line of credit",0],["Government grant",2]]},
quiz:[["What is the core difference between debt and equity?",["Debt is repaid; equity is ownership","They are the same","Equity has interest rates"],0,"Debt must generally be repaid; equity gives the investor ownership."],
["The best reason to raise money is…",["To feel legit","To reach a specific milestone you cannot fund otherwise","Because friends did"],1,"Funding should buy measurable progress."]]},
{t:"Choosing the Right Funding Source",hook:"Different money fits different stages. Match the fuel to the vehicle.",
cards:[
["Savings and reinvested revenue","Cheapest and safest for control. Slower, but you keep 100 percent.",""],
["Friends and family","Often first outside money. Put terms in writing, only accept what they can afford to lose and treat it as seriously as any investor.",""],
["Grants and competitions","University programs, foundations and government grants. Non-dilutive, but competitive and often restricted in use.",""],
["Bank and SBA-backed loans","Banks want credit history, collateral and cash flow. SBA programs partially guarantee loans so lenders can say yes more often.",""],
["Angel investors","Individuals investing their own money early, often $10k to a few hundred thousand. Many also mentor.",""],
["Venture capital","Funds that invest large amounts for big ownership stakes in companies aiming for very fast, very large growth. Not right for most small businesses.",""],
["Crowdfunding","Rewards crowdfunding pre-sells products. Equity crowdfunding sells ownership to many small investors through regulated funding portals.",""],
["Revenue-based financing","Investors are repaid a percentage of monthly revenue until a set total is reached. Fits businesses with steady revenue.",""],
["Compare by cost, risk, speed and control","Ask of every option: what does it really cost, what happens if things go badly, how fast can I get it and how much control do I give up?",""]],
tool:{k:"sort",prompt:"Best fit for each stage?",buckets:["Idea stage","Early revenue","Scaling fast"],items:[["Personal savings and a pitch competition",0],["Revenue-based financing",1],["Series A venture capital",2],["Friends and family round",0],["SBA-backed equipment loan",1],["Large growth equity round",2]]},
quiz:[["Revenue-based financing repays investors…",["With a fixed share of the company","With a percentage of monthly revenue","Never"],1,"Payments flex with revenue until a set cap is reached."],
["Venture capital is best suited for…",["Every small business","Companies aiming for very fast, very large growth","Hobby projects"],1,"VCs need a few huge outcomes to make their fund work."]]},
{t:"Preparing to Raise Money",hook:"Investors fund preparation. Here is your prep kit.",
cards:[
["How much you need","Add up costs to reach your next big milestone plus 3 to 6 months of buffer. Raising too little stalls you; too much costs extra ownership.",""],
["Use-of-funds plan","Show exactly where the money goes: product, marketing, hiring, inventory. Percentages plus dollar amounts.",""],
["Financial projections","12 to 36 months of revenue, costs and cash, with clear assumptions. Investors care more about your logic than the exact numbers.",""],
["Business plan and executive summary","A short business plan and a one-page summary: problem, solution, market, traction, team, ask.",""],
["Investor pitch deck","About 10 to 15 slides: problem, solution, market, product, traction, business model, competition, team, financials, the ask.",""],
["Secure data room","An organized, access-controlled folder of key documents investors review during due diligence.",""],
["Formation and ownership documents","Formation papers, operating agreement or bylaws, cap table, IP assignments and founder agreements, all clean and signed.",""],
["Milestones","Name what the funding unlocks: launch, 1,000 customers, break-even. Milestones make your ask concrete.",""]],
tool:{k:"usefunds"},
quiz:[["Investors care most about projections that…",["Show huge numbers","Have clear, believable assumptions","Have colorful charts"],1,"Logic beats optimism."],
["A data room is…",["A server closet","An organized, secure set of documents for due diligence","A pitch event"],1,"It speeds up and protects the review process."]]},
{t:"Finding and Approaching Investors",hook:"The right investor is a partner for years. Find fit, not just money.",
cards:[
["Investor preferences","Investors focus on certain industries, stages, check sizes and locations. Pitching outside their focus wastes everyone's time.",""],
["Finding angels, funds, accelerators","University entrepreneurship centers, accelerators, angel groups, startup events and investor portfolio pages are good starting points.",""],
["Warm introductions","An introduction from someone the investor trusts gets far more replies than a cold email. Ask mentors, professors and founders.",""],
["Investor outreach emails","Short: one line on what you do, one on traction, one on why them, a clear ask for a call. Attach or link a short deck.",""],
["Preparing for meetings","Research the investor, rehearse your pitch, prepare for hard questions and know your numbers cold.",""],
["Problem, solution, market, traction, team","The core story: a painful problem, your solution, a big enough market, proof it is working and why your team will win.",""],
["Professional follow-up","Thank them within a day, send what you promised and share brief updates on progress.",""],
["Tracking conversations","Track every investor: status, last contact, notes, next step. Fundraising is a sales pipeline.",""]],
tool:{k:"pipeline"},
quiz:[["Which gets the best response rate from investors?",["Mass cold emails","A warm introduction from someone they trust","DMing at midnight"],1,"Trust transfers through introductions."],
["Pitching a seed-stage food startup to a late-stage biotech fund is…",["Smart","A poor fit for their focus","Required"],1,"Match stage and industry to the investor's focus."]]},
{t:"Understanding Investment Terms",hook:"Terms decide who gets what. Learn the vocabulary before you sit at the table.",
cards:[
["Pre-money and post-money valuation","Pre-money is the company's value before new investment. Post-money = pre-money + new investment. The investor's ownership = investment ÷ post-money.","$800k pre + $200k investment = $1M post → investor owns 20%."],
["Equity percentage and dilution","When new shares are issued, every existing owner's percentage shrinks. Your slice gets smaller but, ideally, the pie gets bigger.",""],
["Common vs preferred stock","Founders and employees usually hold common stock. Investors often get preferred stock with extra rights like getting paid first in a sale.",""],
["Convertible notes","Short-term debt that usually converts into equity at a future priced round. It carries an interest rate and a maturity date.",""],
["SAFEs","A Simple Agreement for Future Equity converts into shares at a future priced round. Unlike a note it is not debt, so it has no interest or maturity date.",""],
["Interest rates and maturity dates","On debt and notes, interest is the cost of borrowing and maturity is when it must be repaid or converted.",""],
["Valuation caps and discounts","A cap sets the maximum valuation at which a note or SAFE converts. A discount lets early investors convert at a lower price than new investors pay.",""],
["Liquidation preferences","Decide who gets paid first, and how much, when the company is sold or closes. A 1x preference means investors get their money back before common holders.",""],
["Pro-rata rights","The right for an investor to buy into future rounds to keep their ownership percentage.",""],
["Voting and board rights","Who votes on major decisions and who sits on the board. Giving up board control early can mean losing control of your company.",""],
["Founder vesting","Founders earn their shares over time, commonly four years with a one-year cliff, so a co-founder who leaves early does not keep everything.",""],
["Anti-dilution provisions","Protect investors if the company later raises at a lower valuation (a down round), usually by giving them extra shares at founders' expense.",""],
["Personal guarantees","A promise to repay a business debt with your personal assets if the business cannot. It removes your liability shield for that debt.",""],
["Exit and buyback provisions","Rules about what happens when the company is sold, a founder leaves or the company can repurchase shares.",""]],
tool:{k:"dilution"},
quiz:[["$1.5M pre-money, $500k investment. Investor ownership?",["25%","33%","50%"],0,"Post = $2M. 500k ÷ 2M = 25%."],
["Which is NOT debt?",["Convertible note","SAFE","Bank loan"],1,"A SAFE has no interest or maturity date; it is not a loan."]]},
{t:"Evaluating the Investor",hook:"They are checking you out. Check them out too.",
cards:[
["Background and reputation","Search their name, firm and news coverage. Look for lawsuits, complaints or regulatory actions.",""],
["Previous investments","Look at their portfolio: stage, industries and how those companies did.",""],
["Talk to founders they funded","Ask how the investor behaved when things went badly. That is when you learn the most.",""],
["Early-stage experience","Investors used to large companies may expect things early startups cannot deliver. Confirm they understand your stage.",""],
["Expected involvement","Some are hands-off, others want weekly calls or board seats. Agree on expectations before money moves.",""],
["Connections and expertise","The best investors bring introductions, advice and credibility, not just a check.",""],
["Conflicts of interest","Do they back a competitor? Do they want you to buy from a company they own? Ask directly.",""],
["Verify independently","Check claims yourself. Investment professionals can be looked up on FINRA BrokerCheck and the SEC's Investment Adviser search, reachable from Investor.gov.",""]],
quiz:[["The best way to learn how an investor behaves in hard times is to…",["Read their website","Talk to founders they funded, especially ones that struggled","Ask the investor"],1,"Founders who went through tough times tell the real story."],
["To verify an investment professional's registration, check…",["Their Instagram","Investor.gov / FINRA BrokerCheck","Their business card"],1,"Official databases confirm registration and disciplinary history."]]},
{t:"Avoiding Predatory Investments",hook:"Some \"investors\" are really predators or scammers. Learn the signs so you can walk away fast.",
cards:[
["Warning signs, part 1","Guaranteed returns or \"risk-free\" funding. Pressure to sign immediately. Refusal to put things in writing. Vague explanations of ownership, repayment or fees.",""],
["Warning signs, part 2","Unusually high interest rates or hidden fees. Personal guarantees putting your personal assets at risk. Giving up a large ownership stake for a small investment.",""],
["Warning signs, part 3","Investor control over everyday decisions. Unclear liquidation or repayment rights. Blank or incomplete documents.",""],
["Warning signs, part 4","Demands for money before funding. Requests for wire transfers, crypto or gift cards. Anyone who discourages independent legal or financial advice.",""],
["What regulators flag","Regulators identify guaranteed returns, high returns with little risk, aggressive pressure, missing documentation and unregistered investment professionals as major warning signs.",""],
["How to protect yourself","Never sign on the spot. Ask for a full term sheet and agreement. Have an attorney review it. Compare offers. Calculate the total cost. Model dilution. Ask what happens if the business fails.",""],
["More protection habits","Confirm who controls major decisions. Verify every claim independently. Talk to founders who took their money. Keep copies of everything. Report suspected fraud to the appropriate authorities.",""]],
tool:{k:"redflag"},
quiz:[["An investor asks you to pay a $1,000 \"due diligence fee\" by gift card. You should…",["Pay quickly to secure the deal","Walk away and report it","Negotiate the fee down"],1,"Upfront fees and gift cards are hallmark scam signals."],
["Someone offers $10,000 for 60% of your company and asks you to sign tonight. This shows…",["Two red flags: huge stake and pressure","A great deal","Normal terms"],0,"A big stake for little money plus urgency is predatory."]]},
{t:"Negotiating and Closing the Deal",hook:"You have interest. Now get to a fair yes and close it properly.",
cards:[
["The term sheet","A short, mostly non-binding summary of key terms: amount, valuation, security type, board seats, investor rights. It sets the frame for the final documents.",""],
["What is negotiable","Valuation, amount, board composition, liquidation preference, pro-rata rights, vesting and information rights are commonly negotiated.",""],
["Valuation vs control","A higher valuation means less dilution, but control terms like board seats and veto rights can matter more than the headline number.",""],
["Reasonable investor protections","Information rights and a standard 1x non-participating liquidation preference are common. Unusual demands deserve your attorney's attention.",""],
["Due diligence","Investors will check your documents, finances, IP and legal standing. A clean data room speeds this up.",""],
["Final legal documents","The binding agreements replace the term sheet. Have your attorney review every page before signing.",""],
["Recording ownership accurately","Update the cap table, issue shares or record SAFEs and notes properly, and file any required securities notices.",""],
["Reporting expectations","Agree on how and how often you will update investors: monthly email, quarterly financials, annual meeting.",""],
["A post-investment relationship plan","Decide how you will use their help: intros, hiring, advice. Great investor relationships are managed, not accidental.",""]],
tool:{k:"order",prompt:"Put the closing process in order.",items:["Investor shows interest","Negotiate the term sheet","Sign the term sheet","Due diligence","Attorney reviews final documents","Sign and receive funds","Update the cap table","Send the first investor update"]},
quiz:[["A term sheet is usually…",["Fully binding on everything","A mostly non-binding summary of key terms","The final contract"],1,"It frames the deal; final documents make it binding."],
["Why can board seats matter more than valuation?",["They don't","They determine who controls major decisions","Boards pay salaries"],1,"Control decides the company's future."]]},
{t:"Managing Funding After the Deal",hook:"The money is in. Now prove the investors were right.",
cards:[
["Use capital as agreed","Spend on the plan you pitched. Major changes should be discussed with investors first.",""],
["Track spending and milestones","Compare spending against your use-of-funds plan monthly and track progress toward the milestones the money was meant to buy.",""],
["Investor updates","A short regular email: highlights, key metrics, challenges, asks. Good news and bad news both, early.",""],
["Accurate financial records","Clean books make updates easy, taxes painless and the next round faster.",""],
["Preparing for future rounds","Your next raise starts the day this one closes. Hit milestones, keep data organized and keep relationships warm.",""],
["Additional dilution","Each future round shrinks everyone's percentage again. Model it in advance so it is not a surprise.",""],
["Managing expectations","Under-promise and over-deliver. Surprises, especially bad ones, damage trust more than bad news shared early.",""],
["When to decline more money","Turn down funding with bad terms, the wrong partner or more money than you can use well. Not all money is good money.",""]],
tool:{k:"order",prompt:"Order a strong investor update email.",items:["One-line summary of the month","Highlights and wins","Key metrics vs last month","Challenges and what you are doing about them","Specific asks (intros, advice)","Thank you"]},
quiz:[["When should you tell investors about a serious problem?",["Never","Early, with a plan","Only at the next round"],1,"Early honesty preserves trust and invites help."],
["A good reason to decline more funding is…",["The terms are bad or you cannot use it well","It is a Tuesday","You already have a logo"],0,"Not all money is good money."]]}
],
final:{t:"Your Funding-Readiness and Investor-Safety Plan",intro:"Prepare to raise money safely. This plan is a starting point; have an attorney review any investment documents before you sign.",
fields:[["Funding amount requested","How much and the milestone it reaches"],["Intended use of funds","Category, percentage and dollar amount"],["Preferred funding sources","Ranked, with reasons"],["Investor pitch deck outline","Problem, solution, market, traction, team, ask…"],["Basic financial projections","12 to 36 months: revenue, costs, cash"],["Ownership and dilution estimate","Pre-money, investment, post-money, your % after"],["Investor due-diligence checklist","How you will vet each investor"],["Term-sheet review checklist","Terms you will check before signing"],["Predatory-investment red-flag checklist","Signs that mean walk away"],["Questions to ask an attorney before signing","Your list"]]}});
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function listItems(s){
  if((s.match(/,/g)||[]).length<2||/[()\[\]]/.test(s)) return null;
  let parts=s.split(/,\s*/).map(x=>x.replace(/^(?:and|or)\s+/i,'').trim()).filter(Boolean);
  const last=parts[parts.length-1]||'';
  const conj=last.match(/^(\S+)\s+(?:and|or)\s+(.+)$/);
  if(conj&&conj[2].split(/\s+/).length<=6&&conj[2].length<=40) parts=parts.slice(0,-1).concat(conj[1],conj[2]);
  if(parts.length<3||parts.length>8) return null;
  const words=p=>p.split(/\s+/).length;
  if(parts.some(p=>words(p)>8||p.length>52||p.length<2||/[.!?]/.test(p))) return null;
  return parts;
}
function readBody(text){
  const chunks=String(text).split(/(?<![A-Z]\.)(?<=[.!?])\s+(?=[A-Z"“])/).filter(Boolean);
  const isPoint=s=>{const t=s.trim();return t.split(/\s+/).length<=18&&t.length<=140&&!t.includes(':');};
  const asList=run=>`<ul class="sf-points">${run.map(i=>`<li>${esc(i.trim().replace(/\.$/,''))}</li>`).join('')}</ul>`;
  const asChunk=chunk=>{
    const listed=chunk.match(/^([\s\S]+?):\s+(.+?)([.!?])$/);
    if(listed){
      const items=listItems(listed[2]);
      if(items) return `<p>${esc(listed[1])}:</p><ul class="sf-points">${items.map(i=>`<li>${esc(i)}</li>`).join('')}</ul>`;
    }
    return `<p>${esc(chunk)}</p>`;
  };
  const out=[];
  let run=[];
  const flush=()=>{if(run.length>=3&&run.every(isPoint))out.push(asList(run));else run.forEach(c=>out.push(asChunk(c)));run=[];};
  chunks.forEach(chunk=>{
    if(chunk.includes(':')){flush();out.push(asChunk(chunk));return;}
    if(isPoint(chunk)){run.push(chunk);return;}
    flush();
    out.push(asChunk(chunk));
  });
  flush();
  return out.join('');
}
const fm=n=>(n<0?'−$':'$')+Math.abs(Math.round(n)).toLocaleString('en-US');
const pc=n=>(Math.round(n*10)/10)+'%';
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const KEY='campus-connect-sf-v1';
let S={done:{},seen:{},score:{},plans:{},cap:{},notes:{},rub:{},pos:{},name:'',certDate:{}};
try{const s=JSON.parse(localStorage.getItem(KEY));if(s)S=Object.assign(S,s)}catch(e){}
const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}};
const byId=id=>C.find(c=>c.id===id);
function toast(m){ if(window.toast) window.toast(m); }
function gain(){}
const CODE={crash:'SF 101',mkt:'SF 110',fin:'SF 120',ops:'SF 130',bd:'SF 140',risk:'SF 150',setup:'SF 160',inv:'SF 170'};
const ACT={sort:'Practice exercise',order:'Sequencing exercise',valueprop:'Value proposition builder',outreach:'Outreach message builder',price:'Pricing calculator',profit:'Profit and margin calculator',cashflow:'Cash-flow simulation',budget:'Startup budget builder',runway:'Burn rate and runway calculator',funnel:'Conversion funnel model',riskmatrix:'Risk assessment matrix',dilution:'Ownership and dilution calculator',structure:'Business structure comparison',redflag:'Red-flag identification exercise',reorder:'Reorder point calculator',bottleneck:'Bottleneck analysis',pipeline:'Pipeline tracker',usefunds:'Use-of-funds planner',objection:'Sales objection simulation',crisis:'Crisis response simulation'};
const RUB=[['Complete','Every section is addressed with real content, not placeholders.'],['Specific','Names real customers, numbers, tools and dates instead of generalities.'],['Realistic','Fits your actual budget, time and resources as a student founder.'],['Consistent','Sections support each other: the budget matches the plan, the metrics match the goals.']];
const KEEP=new Set(['fin-2','bd-1','risk-5','setup-5','setup-6','inv-1','inv-2','inv-7']);
const tl=(m,key)=>!m.tool||m.tool.k==='order'?null:(['sort','redflag'].includes(m.tool.k)?(KEEP.has(key)?m.tool:null):m.tool);
const mmin=(m,k)=>3+m.cards.length*3+(tl(m,k)?6:0);
const cmin=c=>c.mods.reduce((s,m,i)=>s+mmin(m,mk(c,i)),0)+30;
const hrs=n=>n<60?n+' min':(Math.round(n/30)/2)+' hours';
const mk=(c,i)=>c.id+'-'+(i+1);
const cdone=c=>c.mods.filter((m,i)=>S.done[mk(c,i)]).length;
const cpct=c=>Math.round((cdone(c)+(S.cap[c.id]?1:0))/(c.mods.length+1)*100);
const ccomplete=c=>cdone(c)===c.mods.length&&S.cap[c.id];
const num=(l,id,v,x='')=>`<label class="f" for="${id}">${l}<input type="number" inputmode="decimal" id="${id}" value="${v}" ${x}></label>`;
const rng=(l,id,v,mn,mx,st=1)=>`<label class="f" for="${id}">${l} <b id="${id}v"></b><input type="range" id="${id}" min="${mn}" max="${mx}" step="${st}" value="${v}"></label>`;
const kpi=(l,v,h)=>`<div class="kpi ${h?'hi':''}"><span>${l}</span><b>${v}</b></div>`;
const V=(el,id)=>parseFloat(el.querySelector('#'+id).value)||0;
function live(el,html,calc){el.innerHTML=html;el.oninput=calc;calc()}
const TOOLS={
sort(el,cfg){let items=shuffle(cfg.items.map((it,i)=>({t:it[0],b:it[1],i}))),A={};const r=()=>{const n=Object.keys(A).length,ok=items.filter(it=>A[it.i]===it.b).length;
  el.innerHTML=`<p class="tp">${esc(cfg.prompt)}</p>${items.map(it=>{const a=A[it.i];return `<div class="srow ${a==null?'':(a===it.b?'ok':'no')}"><div>${esc(it.t)}</div><div class="sbtns">${cfg.buckets.map((b,j)=>`<button data-i="${it.i}" data-j="${j}" class="${a===j?'pick':''} ${a!=null&&j===it.b?'right':''}" ${a!=null?'disabled':''}>${esc(b)}</button>`).join('')}</div></div>`}).join('')}
  <div class="row2"><b>${n<items.length?`${n} of ${items.length} sorted`:`${ok} of ${items.length} correct${ok===items.length?'. Perfect sort!':''}`}</b>${n===items.length&&ok<items.length?'<button class="mini" data-re>Try again</button>':''}</div>`;
  if(n===items.length&&ok===items.length)gain(10,'sort'+cfg.prompt)};
  el.onclick=e=>{const b=e.target.closest('button[data-j]');if(b){A[+b.dataset.i]=+b.dataset.j;r()}if(e.target.closest('[data-re]')){A={};items=shuffle(items);r()}};r()},
order(el,cfg){let a=shuffle(cfg.items.map((t,i)=>i)),chk=false;if(a.every((v,i)=>v===i))a.reverse();const r=()=>{const ok=a.every((v,i)=>v===i);
  el.innerHTML=`<p class="tp">${esc(cfg.prompt)}</p>${a.map((v,i)=>`<div class="srow ${chk?(v===i?'ok':'no'):''}"><div><b>${i+1}.</b> ${esc(cfg.items[v])}</div><div class="sbtns"><button data-u="${i}" aria-label="Move up" ${i===0?'disabled':''}>↑</button><button data-d="${i}" aria-label="Move down" ${i===a.length-1?'disabled':''}>↓</button></div></div>`).join('')}<div class="row2"><button class="btn" data-c>Check order</button>${chk?`<b class="${ok?'pos':'neg'}">${ok?'Nailed it!':`${a.filter((v,i)=>v===i).length} of ${a.length} in the right spot. Keep moving.`}</b>`:''}</div>`;if(chk&&ok)gain(10,'ord'+cfg.prompt)};
  el.onclick=e=>{const u=e.target.closest('[data-u]'),d=e.target.closest('[data-d]');if(u){const i=+u.dataset.u;[a[i-1],a[i]]=[a[i],a[i-1]];chk=false;r()}if(d){const i=+d.dataset.d;[a[i+1],a[i]]=[a[i],a[i+1]];chk=false;r()}if(e.target.closest('[data-c]')){chk=true;r()}};r()},
valueprop(el){const F=[['vc','Who is it for?','busy commuter students'],['vp','What problem do they have?','skip breakfast before 8am classes'],['vn','Your product','Grab-n-Go Oats'],['vb','Key benefit','gives them a healthy breakfast in 30 seconds'],['va','Instead of…','a $7 coffee-shop muffin']];
  live(el,`<p class="tp">Build your value proposition</p><div class="fields">${F.map(f=>`<label class="f" for="${f[0]}">${f[1]}<input id="${f[0]}" placeholder="${esc(f[2])}" value="${esc(f[2])}"></label>`).join('')}</div><div class="vp" id="vpo"></div><div class="checks" id="vpc"></div><p class="small">Sample answers filled in. Replace them with your own idea.</p>`,()=>{const g=id=>esc(el.querySelector('#'+id).value.trim()||'…');
  el.querySelector('#vpo').innerHTML=`For <u>${g('vc')}</u> who <u>${g('vp')}</u>, <u>${g('vn')}</u> ${g('vb')}, unlike <u>${g('va')}</u>.`;const t=el.querySelector('#vpo').textContent.split(/\s+/).length;
  el.querySelector('#vpc').innerHTML=[[t<=35,'Under 35 words'],[el.querySelector('#vc').value.trim().split(' ').length>=2,'Specific customer'],[el.querySelector('#va').value.trim(),'Names an alternative']].map(x=>`<span class="${x[0]?'y':''}">${x[0]?'✓ ':''}${x[1]}</span>`).join('')})},
outreach(el,cfg,c){const inv=c.id==='inv';const F=[['on','Their name','Jordan'],['oh','Why them (personal hook)','I saw the Wellness Club is hosting finals-week study nights'],['ow','Who you are','I run Study Fuel, a student-run healthy snack box business at SDSU'],['ov','Value for them','we could supply free sample boxes for your first event so attendees stay energized'],['oa','Your one clear ask','Would you be open to a 10-minute call this week?']];
  live(el,`<p class="tp">Write an outreach message</p><div class="fields">${F.map(f=>`<label class="f" for="${f[0]}">${f[1]}<input id="${f[0]}" value="${esc(f[2])}"></label>`).join('')}</div><div class="email" id="em"></div><div class="checks" id="ec"></div><div class="row2"><button class="mini" id="ecp">Copy message</button><span class="small">Sample message filled in. Make it yours.</span></div>`,()=>{const g=id=>el.querySelector('#'+id).value.trim();
  const t=`Hi ${g('on')||'there'},\n\n${g('oh')?g('oh')+'. ':''}${g('ow')}.\n\nI think ${g('ov')}.\n\n${g('oa')}\n\nThanks,\n[Your name]`;el.querySelector('#em').textContent=t;const w=t.split(/\s+/).filter(Boolean).length;
  el.querySelector('#ec').innerHTML=[[w<=120,`${w} words (aim for 120 or fewer)`],[g('oh').length>10,'Personalized opener'],[/\?/.test(g('oa')),'Ends with a clear question'],[!/(guarantee|amazing opportunity|act now)/i.test(t),'No hype words']].map(x=>`<span class="${x[0]?'y':''}">${x[0]?'✓ ':''}${x[1]}</span>`).join('');
  el.querySelector('#ecp').onclick=async()=>{try{await navigator.clipboard.writeText(t);toast('Copied')}catch(e){toast('Select the text to copy')}}})},
price(el){live(el,`<p class="tp">Pricing calculator: custom phone cases</p><div class="fields">${num('Cost to make one ($)','pu',6)}${num('Monthly fixed costs ($)','pf',150)}${num('Units you expect to sell / month','pn',60)}${rng('Markup','pm',150,0,400,5)}</div><div class="out" id="po"></div>`,()=>{const u=V(el,'pu'),f=V(el,'pf'),n=V(el,'pn'),m=V(el,'pm');el.querySelector('#pmv').textContent=m+'%';const p=u*(1+m/100),up=p-u,be=up>0?Math.ceil(f/up):Infinity,mo=up*n-f;
  el.querySelector('#po').innerHTML=kpi('Price per unit','$'+p.toFixed(2),1)+kpi('Profit per unit','$'+up.toFixed(2))+kpi('Break-even units / month',isFinite(be)?be:'never')+`<div class="kpi"><span>Monthly profit</span><b class="${mo<0?'neg':'pos'}">${fm(mo)}</b></div>`})},
profit(el){live(el,`<p class="tp">Profit check: a campus coffee cart</p><div class="fields">${num('Monthly revenue ($)','rv',4000,'min=0')}${num('Monthly expenses ($)','ex',3200,'min=0')}</div><div class="out" id="ro"></div><div class="stack3" id="rb"></div><div class="legend"><span style="--k:#c5c9d4">Expenses</span><span style="--k:var(--c)">Profit</span></div>`,()=>{const r=V(el,'rv'),e=V(el,'ex'),p=r-e,mg=r?p/r*100:0;
  el.querySelector('#ro').innerHTML=kpi('Profit',fm(p),1)+kpi('Profit margin',pc(mg))+kpi('Keep per $1 of sales','$'+(r?(p/r).toFixed(2):'0.00'));const w=r>0?Math.min(100,e/r*100):100;
  el.querySelector('#rb').innerHTML=`<i style="width:${w}%;background:#c5c9d4">${w>18?'Expenses':''}</i>${p>0?`<i style="width:${100-w}%;background:var(--c)">${100-w>12?'Profit':''}</i>`:''}`;let loss=el.querySelector('#rloss');if(p<0){if(!loss){el.querySelector('#rb').insertAdjacentHTML('afterend','<p class="neg" id="rloss" style="font-weight:800"></p>');loss=el.querySelector('#rloss')}loss.textContent='Spending more than you earn: a loss of '+fm(-p)+' a month.'}else if(loss)loss.remove()})},
cashflow(el){live(el,`<p class="tp">Can a profitable business run out of cash?</p><div class="fields">${num('Starting cash ($)','cs',1500)}${num('Month 1 sales ($)','c1',2000)}${rng('Sales growth / month','cg',25,0,60)}${rng('Costs as % of sales','cc',75,20,95)}<label class="f" for="cl">Customers pay you after<select id="cl"><option value="0">Right away</option><option value="1">30 days</option><option value="2" selected>60 days</option><option value="3">90 days</option></select></label></div><div class="cols" id="cb"></div><div class="colx" id="cx"></div><div class="out" id="co"></div>`,()=>{const s0=V(el,'cs'),s1=V(el,'c1'),g=V(el,'cg')/100,k=V(el,'cc')/100,lag=+el.querySelector('#cl').value;el.querySelector('#cgv').textContent=Math.round(g*100)+'%';el.querySelector('#ccv').textContent=Math.round(k*100)+'%';
  const sales=[...Array(6)].map((x,i)=>s1*(1+g)**i);let cash=s0,arr=[],low=Infinity,lowm=0;sales.forEach((s,i)=>{cash+=(i-lag>=0?sales[i-lag]:0)-s*k;arr.push(cash);if(cash<low){low=cash;lowm=i+1}});const mx=Math.max(...arr.map(Math.abs),1);
  el.querySelector('#cb').innerHTML=arr.map(v=>`<div class="c"><div class="up">${v>0?`<i style="height:${v/mx*100}%"></i>`:''}</div><div class="dn">${v<0?`<i style="height:${-v/mx*100}%"></i>`:''}</div></div>`).join('');el.querySelector('#cx').innerHTML=arr.map((v,i)=>`<span>M${i+1}<br><b class="${v<0?'neg':''}">${fm(v)}</b></span>`).join('');
  const prof=sales.reduce((t,s)=>t+s*(1-k),0);el.querySelector('#co').innerHTML=kpi('6-month profit',fm(prof),1)+`<div class="kpi"><span>Lowest cash (month ${lowm})</span><b class="${low<0?'neg':''}">${fm(low)}</b></div>`+`<div class="kpi" style="grid-column:1/-1"><span>What this means</span><b style="font-size:17px;white-space:normal">${low<0&&prof>0?`Profitable on paper, but you run out of cash in month ${arr.findIndex(v=>v<0)+1}. Try getting paid faster.`:low<0?'Losing money and running out of cash.':'Cash stays positive the whole time. Try 90-day payments and faster growth to see what changes.'}</b></div>`})},
budget(el){let R=[['Equipment',400,'once'],['First inventory',300,'once'],['Website and domain',60,'once'],['Business registration',100,'once'],['Software',30,'month'],['Marketing',100,'month'],['Supplies',80,'month']];
  const r=()=>{el.innerHTML=`<p class="tp">Startup budget builder</p><table class="tbl"><thead><tr><th>Item</th><th>Amount ($)</th><th>Type</th><th></th></tr></thead><tbody>${R.map((x,i)=>`<tr><td><input data-i="${i}" data-k="0" value="${esc(x[0])}" aria-label="Item"></td><td><input data-i="${i}" data-k="1" type="number" value="${x[1]}" aria-label="Amount"></td><td><select data-i="${i}" data-k="2" aria-label="Type"><option value="once" ${x[2]==='once'?'selected':''}>One-time</option><option value="month" ${x[2]==='month'?'selected':''}>Monthly</option></select></td><td><button class="mini" data-x="${i}" aria-label="Remove">✕</button></td></tr>`).join('')}</tbody></table><div class="row2"><button class="mini" data-add>+ Add item</button><span class="small">Sample numbers for a small craft business.</span></div><div class="fields" style="margin-top:12px">${rng('Contingency cushion','bc',15,0,30)}</div><div class="out" id="bo"></div>`;calc()};
  const calc=()=>{const c=V(el,'bc');el.querySelector('#bcv').textContent=c+'%';const o=R.filter(x=>x[2]==='once').reduce((s,x)=>s+(+x[1]||0),0),m=R.filter(x=>x[2]==='month').reduce((s,x)=>s+(+x[1]||0),0);el.querySelector('#bo').innerHTML=kpi('Cash to launch + run 3 months',fm((o+3*m)*(1+c/100)),1)+kpi('One-time costs',fm(o))+kpi('Monthly costs',fm(m))+kpi('Cushion included',fm((o+3*m)*c/100))};
  el.oninput=e=>{const t=e.target;if(t.dataset.k){R[t.dataset.i][t.dataset.k]=t.dataset.k==='1'?+t.value:t.value}calc()};el.onchange=el.oninput;
  el.onclick=e=>{if(e.target.closest('[data-add]')){R.push(['New item',0,'once']);r()}const x=e.target.closest('[data-x]');if(x){R.splice(+x.dataset.x,1);r()}};r()},
runway(el){live(el,`<p class="tp">Burn rate and runway</p><div class="fields">${num('Cash in the bank ($)','wc',15000)}${num('Monthly revenue ($)','wr',1500)}${num('Monthly expenses ($)','we',4000)}</div><div class="out" id="wo"></div><div class="bars" id="wb"></div>`,()=>{const c=V(el,'wc'),b=V(el,'we')-V(el,'wr'),rw=b>0?c/b:Infinity;
  el.querySelector('#wo').innerHTML=kpi('Runway',isFinite(rw)?rw.toFixed(1)+' months':'No burn',1)+kpi('Monthly burn',b>0?fm(b):'$0')+kpi('Status',!isFinite(rw)?'Cash-flow positive':rw<6?'Act now':rw<12?'Watch closely':'Healthy');
  el.querySelector('#wb').innerHTML=`<div class="bar ${isFinite(rw)&&rw<6?'hl':''}"><span>Months left</span><div class="tr"><i style="width:${isFinite(rw)?Math.min(100,rw/24*100):100}%"></i></div><b>${isFinite(rw)?rw.toFixed(1):'24+'}</b></div><p class="small">Scale shows 0 to 24 months. Under 6 months, many founders cut costs or start raising money.</p>`})},
funnel(el){live(el,`<p class="tp">From views to sales</p><div class="fields">${num('Views','fv',5000)}${rng('Engage (like, save, comment)','fe',6,0.5,30,0.5)}${rng('Engaged → lead (DM, sign-up)','fl',20,1,60)}${rng('Lead → customer','fc',25,1,80)}</div><div class="bars" id="fb"></div><div class="out" id="fo"></div>`,()=>{const v=V(el,'fv'),e=V(el,'fe'),l=V(el,'fl'),c=V(el,'fc');['fe','fl','fc'].forEach(i=>el.querySelector('#'+i+'v').textContent=V(el,i)+'%');const E=v*e/100,L=E*l/100,S2=L*c/100,st=[['Views',v],['Engaged',E],['Leads',L],['Customers',S2]];
  el.querySelector('#fb').innerHTML=st.map(x=>`<div class="bar"><span>${x[0]}</span><div class="tr"><i style="width:${Math.max(1.5,v?x[1]/v*100:0)}%"></i></div><b>${Math.round(x[1]).toLocaleString()}</b></div>`).join('');
  el.querySelector('#fo').innerHTML=kpi('Customers',Math.round(S2),1)+kpi('Views per customer',S2>=1?Math.round(v/S2).toLocaleString():'—')+kpi('Lead conversion rate',c+'%')})},
riskmatrix(el){let R=[['Running out of cash',3,5],['Key supplier delay',3,3],['Social account hacked',2,4],['Bad review goes viral',2,3],['Founder burnout',4,3]];const lv=s=>s>=15?3:s>=8?2:1;
  const r=()=>{const so=R.map((x,i)=>({x,i,s:x[1]*x[2]})).sort((a,b)=>b.s-a.s);let mx='<div class="ax"></div>'+[1,2,3,4,5].map(n=>`<div class="ax">L${n}</div>`).join('');
  for(let im=5;im>=1;im--){mx+=`<div class="ax">I${im}</div>`;for(let l=1;l<=5;l++)mx+=`<div class="lv${lv(l*im)}">${R.map((x,i)=>x[1]==l&&x[2]==im?`<em>${i+1}</em>`:'').join('')}</div>`}
  el.innerHTML=`<p class="tp">Risk matrix: rate likelihood (L) and impact (I) from 1 to 5</p><table class="tbl stack"><thead><tr><th>#</th><th>Risk</th><th>Likelihood</th><th>Impact</th><th>Score</th><th></th></tr></thead><tbody>${R.map((x,i)=>`<tr><td>${i+1}</td><td><input data-i="${i}" data-k="0" value="${esc(x[0])}" aria-label="Risk"></td>${[1,2].map(k=>`<td><select data-i="${i}" data-k="${k}" aria-label="${k===1?'Likelihood':'Impact'}">${[1,2,3,4,5].map(n=>`<option ${x[k]==n?'selected':''}>${n}</option>`).join('')}</select></td>`).join('')}<td><span class="sc lv${lv(x[1]*x[2])}">${x[1]*x[2]}</span></td><td><button class="mini" data-x="${i}" aria-label="Remove">✕</button></td></tr>`).join('')}</tbody></table>
  <div class="row2"><button class="mini" data-add>+ Add risk</button></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:20px;align-items:start"><div class="mx">${mx}</div><div><p class="tp" style="margin-top:16px">Tackle first</p>${so.slice(0,3).map(o=>`<p style="margin:6px 0"><span class="sc lv${lv(o.s)}">${o.s}</span> ${esc(o.x[0])}</p>`).join('')}<p class="small">Red 15+ = plan now · amber 8 to 14 = monitor · green = note it</p></div></div>`};
  el.onchange=e=>{const t=e.target;if(t.dataset.k){R[t.dataset.i][t.dataset.k]=t.dataset.k==='0'?t.value:+t.value;r()}};el.onclick=e=>{if(e.target.closest('[data-add]')){R.push(['New risk',3,3]);r()}const x=e.target.closest('[data-x]');if(x){R.splice(+x.dataset.x,1);r()}};r()},
dilution(el){live(el,`<p class="tp">Ownership and dilution calculator</p><div class="fields">${num('Founders own today (%)','df',100,'min=1 max=100')}${num('Pre-money valuation ($)','dp',800000)}${num('Investment ($)','di',200000)}</div><label class="f" style="margin-top:12px;display:flex;gap:8px;align-items:center"><input type="checkbox" id="d2" style="width:22px;height:22px;min-height:0"> Add a second round later</label><div class="fields" id="d2f" style="margin-top:8px">${num('Round 2 pre-money ($)','dq',4000000)}${num('Round 2 investment ($)','dj',1000000)}</div><div class="out" id="do"></div><div class="stack3" id="db"></div><div class="legend" id="dl"></div>`,()=>{const f=Math.min(100,Math.max(0,V(el,'df')))/100,pre=V(el,'dp'),inv=V(el,'di'),post=pre+inv,i1=post?inv/post:0,two=el.querySelector('#d2').checked;el.querySelector('#d2f').style.display=two?'':'none';
  let F=f*(1-i1),O=(1-f)*(1-i1),I1=i1,I2=0,val=post;if(two){const p2=V(el,'dq')+V(el,'dj'),n=p2?V(el,'dj')/p2:0;F*=1-n;O*=1-n;I1*=1-n;I2=n;val=p2}
  el.querySelector('#do').innerHTML=kpi('Founders own after',pc(F*100),1)+kpi('Post-money valuation',fm(val))+kpi('Investor 1 owns',pc(I1*100))+kpi('Founders\' stake on paper',fm(F*val));const seg=[['Founders',F,'#2458f5'],['Other holders',O,'#c5cbe0'],['Investor 1',I1,'#df7f7b'],['Investor 2',I2,'#e2b34a']].filter(s=>s[1]>0.0005);
  el.querySelector('#db').innerHTML=seg.map(s=>`<i style="width:${s[1]*100}%;background:${s[2]}">${s[1]>.12?pc(s[1]*100):''}</i>`).join('');el.querySelector('#dl').innerHTML=seg.map(s=>`<span style="--k:${s[2]}">${s[0]} ${pc(s[1]*100)}</span>`).join('')})},
structure(el){const Q=[['Will more than one person own it?','own'],['Do you want to protect personal assets from business debts?','prot'],['Do you plan to raise venture capital?','vc'],['Is lowest cost and least paperwork your top priority right now?','cheap']];let A={};
  const T=[['Sole proprietorship','You are personally liable','Profits on your personal return','Lowest','Not suitable'],['General partnership','Partners generally personally liable','Passes through to partners','Low (agreement strongly advised)','Rarely'],['LLC','Generally protected if run properly','Pass-through by default; can elect corporate tax','Moderate: state filing and possible annual fees','Possible, but VCs usually prefer C corps'],['S corporation (tax election)','Generally protected','Pass-through; limits on number and type of owners','Higher: payroll and formalities','Limited'],['C corporation','Generally protected','Taxed at corporate level, then on dividends','Highest: board, bylaws, filings','Standard choice']];
  const r=()=>{let rec='',why='';if(A.vc){rec='C corporation';why='Venture investors typically require a C corp because of its share structure.'}else if(A.prot){rec='LLC';why='Liability protection with flexible taxes and less paperwork than a corporation. As profits grow, ask a tax pro about an S corp election.'}else if(A.own){rec='Partnership or multi-member LLC';why='With co-owners, put a written agreement in place. An LLC adds liability protection.'}else if(A.cheap||Object.keys(A).length){rec='Sole proprietorship (for now)';why='Simplest to start, but you are personally liable. Revisit as you grow, take on contracts or add risk.'}
  el.innerHTML=`<p class="tp">Which structure might fit?</p>${Q.map(q=>`<div class="srow"><div>${q[0]}</div><div class="sbtns"><button data-q="${q[1]}" data-v="1" class="${A[q[1]]===true?'pick right':''}">Yes</button><button data-q="${q[1]}" data-v="0" class="${A[q[1]]===false?'pick right':''}">No</button></div></div>`).join('')}${rec?`<div class="vp">Starting point: <u>${rec}</u><div style="font-size:16px;font-weight:400;margin-top:6px">${why} Discuss with an attorney or tax professional before deciding.</div></div>`:''}
  <table class="tbl stack" style="margin-top:18px"><thead><tr><th>Structure</th><th>Liability</th><th>Taxes</th><th>Cost and complexity</th><th>Investor-friendly</th></tr></thead><tbody>${T.map(t=>`<tr ${rec.startsWith(t[0].split(' ')[0])||(rec.includes('LLC')&&t[0]==='LLC')?'style="background:var(--soft)"':''}>${t.map((x,i)=>i?`<td>${x}</td>`:`<td><b>${x}</b></td>`).join('')}</tr>`).join('')}</tbody></table>`};
  el.onclick=e=>{const b=e.target.closest('[data-q]');if(b){A[b.dataset.q]=b.dataset.v==='1';r()}};r()},
redflag(el){const L=shuffle([["\"We guarantee a 30% return with zero risk.\"",1,"Guaranteed, risk-free returns are a top regulator warning sign."],["\"Take your time, and have your lawyer review the term sheet.\"",0,"Legit investors expect and encourage legal review."],["\"Sign tonight or the offer is gone.\"",1,"Pressure to sign immediately is a classic red flag."],["\"Send a $750 processing fee by gift card and we'll release the funds.\"",1,"Money before funding, by gift card, is a scam pattern."],["\"Here are founders we've backed. Call any of them.\"",0,"Open references are a good sign. Still make the calls."],["\"$5,000 for 70% of your company.\"",1,"A huge ownership stake for a small investment is predatory."],["\"We'll send a full written term sheet with all fees listed.\"",0,"Clear, written terms are what you want."],["\"You'll personally guarantee the whole amount with your car and savings.\"",1,"Personal guarantees put your personal assets at risk."],["\"We need approval over every hire and every purchase over $50.\"",1,"Investor control over everyday decisions is a warning sign."],["\"Our firm is registered. You can verify us on Investor.gov.\"",0,"Good sign, and do verify it independently yourself."],["\"Don't bother with a lawyer, it'll just slow things down.\"",1,"Discouraging independent advice is a major red flag."],["\"Wire the security deposit to this crypto wallet first.\"",1,"Unusual payment methods and upfront money are scam signals."]]);let i=0,sc=0,ans=null;
  const r=()=>{if(i>=L.length){el.innerHTML=`<p class="tp">Red flag or green light?</p><div class="flag">You spotted ${sc} of ${L.length}.${sc===L.length?' Scam-proof!':''}</div><div class="row2"><button class="mini" data-re>Play again</button></div>`;if(sc>=L.length-1)gain(15,'redflag');return}const x=L[i];
  el.innerHTML=`<p class="tp">Red flag or green light? <span class="small">${i+1} of ${L.length} · score ${sc}</span></p><div class="flag">${esc(x[0])}</div><div class="row2"><button class="btn" style="--c:#b3261e" data-a="1" ${ans!=null?'disabled':''}>Red flag</button><button class="btn" style="--c:#1f7a45" data-a="0" ${ans!=null?'disabled':''}>Looks OK</button></div>${ans!=null?`<div class="why"><b class="${ans===x[1]?'pos':'neg'}">${ans===x[1]?'Right.':'Not quite.'}</b> ${esc(x[2])}</div><div class="row2"><button class="mini" data-n>Next statement →</button></div>`:''}`};
  el.onclick=e=>{const a=e.target.closest('[data-a]');if(a&&ans==null){ans=+a.dataset.a;if(ans===L[i][1])sc++;r()}if(e.target.closest('[data-n]')){i++;ans=null;r()}if(e.target.closest('[data-re]')){i=0;sc=0;ans=null;r()}};r()},
reorder(el){live(el,`<p class="tp">When should you reorder?</p><div class="fields">${num('Units sold per week','rs',10)}${num('Restock takes (weeks)','rl',2)}${num('Safety buffer (units)','rb',5)}${num('Units on the shelf now','rn',40)}</div><div class="out" id="rro"></div><div class="bars" id="rrb"></div>`,()=>{const s=V(el,'rs'),l=V(el,'rl'),b=V(el,'rb'),n=V(el,'rn'),rp=s*l+b,wk=s?(n-rp)/s:Infinity;
  el.querySelector('#rro').innerHTML=kpi('Reorder point',Math.ceil(rp)+' units',1)+kpi('Reorder in',n<=rp?'Now':(isFinite(wk)?wk.toFixed(1)+' weeks':'—'))+kpi('Formula','sales × lead time + buffer');const mx=Math.max(n,rp,1);
  el.querySelector('#rrb').innerHTML=`<div class="bar"><span>On shelf</span><div class="tr"><i style="width:${n/mx*100}%"></i></div><b>${n}</b></div><div class="bar hl"><span>Reorder at</span><div class="tr"><i style="width:${rp/mx*100}%"></i></div><b>${Math.ceil(rp)}</b></div>`})},
bottleneck(el){let R=[['Take order',30],['Bake',8],['Decorate',12],['Pack',20]];
  const r=()=>{el.innerHTML=`<p class="tp">Find the bottleneck: cupcake orders per hour</p><p class="small">Change each step's capacity, or add a helper (doubles that step).</p><div id="bn"></div>`;calc()};
  const calc=()=>{const mn=Math.min(...R.map(x=>x[1])),mx=Math.max(...R.map(x=>x[1]),1),bi=R.findIndex(x=>x[1]===mn);
  el.querySelector('#bn').innerHTML=R.map((x,i)=>`<div class="bar ${i===bi?'hl':''}" style="grid-template-columns:110px minmax(0,1fr) 80px auto"><span>${x[0]}</span><div class="tr"><i style="width:${x[1]/mx*100}%"></i></div><input type="number" data-i="${i}" value="${x[1]}" aria-label="${x[0]} per hour" style="border:2px solid var(--bd);border-radius:8px;padding:6px;width:80px;background:var(--bg)"><button class="mini" data-h="${i}">+ helper</button></div>`).join('')+`<div class="out">${kpi('Orders finished per hour',mn,1)}${kpi('Bottleneck',R[bi][0])}</div><p>Speeding up any step except <b>${R[bi][0]}</b> won't increase output.</p>`};
  el.onchange=e=>{const t=e.target;if(t.dataset.i){R[t.dataset.i][1]=Math.max(1,+t.value||1);calc()}};el.onclick=e=>{const h=e.target.closest('[data-h]');if(h){R[h.dataset.h][1]*=2;calc()}};r()},
pipeline(el,cfg,c){const inv=c.id==='inv';const ST=inv?['Researching','Intro asked','First meeting','Diligence','Committed','Passed']:['Prospect','Contacted','Meeting','Proposal','Won','Lost'];
  let R=inv?[['Local angel group','Intro asked','Ask professor for a warm intro'],['University venture fund','First meeting','Send deck and metrics Friday'],['Seed fund focused on edtech','Researching','Check portfolio for conflicts']]:[['Campus bookstore','Meeting','Bring pricing sheet Thursday'],['Wellness club','Contacted','Follow up Monday with sample box'],['Tutoring center','Prospect','Find coordinator email']];
  const r=()=>{el.innerHTML=`<p class="tp">${inv?'Investor':'Opportunity'} tracker</p><div class="checks">${ST.map(s=>`<span class="${R.some(x=>x[1]===s)?'y':''}">${s}: ${R.filter(x=>x[1]===s).length}</span>`).join('')}</div><table class="tbl stack"><thead><tr><th>Name</th><th>Stage</th><th>Next step</th><th></th></tr></thead><tbody>${R.map((x,i)=>`<tr><td><input data-i="${i}" data-k="0" value="${esc(x[0])}" aria-label="Name"></td><td><select data-i="${i}" data-k="1" aria-label="Stage">${ST.map(s=>`<option ${x[1]===s?'selected':''}>${s}</option>`).join('')}</select></td><td><input data-i="${i}" data-k="2" value="${esc(x[2])}" aria-label="Next step"></td><td><button class="mini" data-x="${i}" aria-label="Remove">✕</button></td></tr>`).join('')}</tbody></table><div class="row2"><button class="mini" data-add>+ Add row</button><span class="small">Sample rows. Every row needs a next step and a date.</span></div>`};
  el.onchange=e=>{const t=e.target;if(t.dataset.k){R[t.dataset.i][t.dataset.k]=t.value;r()}};el.onclick=e=>{if(e.target.closest('[data-add]')){R.push(['',ST[0],'']);r()}const x=e.target.closest('[data-x]');if(x){R.splice(+x.dataset.x,1);r()}};r()},
usefunds(el){const K=[['Product',35,'#2458f5'],['Marketing',25,'#df7f7b'],['Hiring',20,'#8aa0ef'],['Inventory',10,'#3aaa7a'],['Buffer',10,'#e2b34a']];
  live(el,`<p class="tp">Use-of-funds plan</p><div class="fields">${num('Total raise ($)','ut',100000)}${K.map((k,i)=>rng(k[0],'u'+i,k[1],0,100)).join('')}</div><div class="stack3" id="ub"></div><div class="out" id="uo"></div>`,()=>{const t=V(el,'ut'),v=K.map((k,i)=>V(el,'u'+i)),s=v.reduce((a,b)=>a+b,0);K.forEach((k,i)=>el.querySelector('#u'+i+'v').textContent=v[i]+'%');
  el.querySelector('#ub').innerHTML=K.map((k,i)=>`<i style="width:${s?v[i]/s*100:0}%;background:${k[2]}">${v[i]>=10?k[0]:''}</i>`).join('');
  el.querySelector('#uo').innerHTML=`<div class="kpi ${s===100?'hi':''}"><span>Total allocated</span><b class="${s===100?'':'neg'}">${s}%</b></div>`+K.map((k,i)=>kpi(k[0],fm(t*v[i]/100))).join('')+(s!==100?`<p class="neg" style="grid-column:1/-1;font-weight:800">Adjust the sliders so they add up to 100%.</p>`:'')})},
scenario(el,cfg){let i=0,pick=null;const r=()=>{if(i>=cfg.steps.length){el.innerHTML=`<p class="tp">${esc(cfg.title)}</p><div class="flag">Handled like a pro.</div><div class="row2"><button class="mini" data-re>Replay</button></div>`;gain(10,'sc'+cfg.title);return}const s=cfg.steps[i];
  el.innerHTML=`<p class="tp">${esc(cfg.title)} <span class="small">Step ${i+1} of ${cfg.steps.length}</span></p><div class="ex" style="margin:0 0 6px;font-size:17px">${esc(s[0])}</div><div class="opts">${s[1].map((o,j)=>`<button class="opt ${pick===j?(o[1]?'ok':'no'):''}" data-j="${j}" ${pick!=null&&s[1][pick][1]?'disabled':''}>${esc(o[0])}</button>`).join('')}</div>${pick!=null?`<div class="why"><b class="${s[1][pick][1]?'pos':'neg'}">${s[1][pick][1]?'Good move.':'Rethink that.'}</b> ${esc(s[1][pick][2])}</div>${s[1][pick][1]?'<div class="row2"><button class="mini" data-n>Continue →</button></div>':''}`:''}`};
  el.onclick=e=>{const b=e.target.closest('[data-j]');if(b&&!b.disabled){pick=+b.dataset.j;r()}if(e.target.closest('[data-n]')){i++;pick=null;r()}if(e.target.closest('[data-re]')){i=0;pick=null;r()}};r()}
};
TOOLS.objection=(el)=>TOOLS.scenario(el,{title:'Handle the objection: catering for a club event',steps:[
["The club treasurer says: \"Your catering is too expensive.\"",[["\"Okay, I'll cut the price 30%.\"",0,"Jumping straight to a discount hurts your margin and teaches buyers to push."],["\"Totally fair. What are you comparing it to?\"",1,"A calm clarifying question uncovers the real objection."],["\"Our prices are fair. Take it or leave it.\"",0,"Defensive answers end conversations."]]],
["They reply: \"Pizza for the same group is $120 less.\"",[["\"Pizza places are gross anyway.\"",0,"Bad-mouthing competitors makes you look worse, not them."],["\"You mentioned dietary options and no cleanup matter. We cover both; pizza usually doesn't.\"",1,"Tie value back to the needs they told you about."],["Say nothing and wait.",0,"Silence here leaves their concern unanswered."]]],
["They say: \"It's still over our budget.\"",[["\"Same per-person price if you book three events this semester, or a smaller package that fits your budget.\"",1,"Trade instead of cutting: options keep value balanced for both sides."],["\"Fine, it's free.\"",0,"Giving it away means no business."],["\"Then we can't work together.\"",0,"Walking away too early leaves money on the table. Know your walk-away point, but explore options first."]]]]});
TOOLS.crisis=(el)=>TOOLS.scenario(el,{title:'Crisis drill: a viral complaint',steps:[
["A customer posts that your candle left a scorch mark on their table. 300 comments overnight.",[["Reply: \"That's not our fault, you used it wrong.\"",0,"Arguing publicly fuels the fire, even if you're partly right."],["Reply: \"We're so sorry this happened. We want to make it right. Sending you a DM now.\"",1,"Fast, calm, accountable and takes details private."],["Delete your post and go quiet.",0,"Silence looks like guilt and lets rumors grow."]]],
["In DMs they send photos. The wick was cut too long at your packing station.",[["Refund, send a replacement and thank them for flagging it.",1,"Fix it generously. The customer becomes proof you handle problems well."],["Offer 10% off their next order.",0,"Too small for a safety issue. Make it right fully."],["Ask them to delete the post before you help.",0,"Conditional help feels like a cover-up."]]],
["Things have calmed down. What now?",[["Trim wicks in the QC checklist, add care instructions to packaging and post a short public update.",1,"Fix the process, communicate and update the risk plan."],["Move on and hope it doesn't happen again.",0,"Without a process change, it will."],["Stop selling candles forever.",0,"Overreacting kills a working business. Fix the cause."]]]]});

const glyph=p=>`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const META={
  crash:{hours:'3.5 hours',topics:'foundations',visual:'blue',icon:glyph('<path d="M9 4.2 4.2 6.3v13.2L9 17.4l6 2.1 4.8-2.1V4.2L15 6.3 9 4.2z"/><path d="M9 4.2v13.2"/><path d="M15 6.3v13.2"/>')},
  mkt:{hours:'2 hours',topics:'marketing',visual:'lilac',icon:glyph('<circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1.15" fill="currentColor" stroke="none"/>')},
  fin:{hours:'2.5 hours',topics:'finance',visual:'yellow',icon:glyph('<circle cx="12" cy="12" r="8.3"/><path d="M14.7 9.1h-4.2a1.5 1.5 0 1 0 0 3h2.9a1.5 1.5 0 1 1 0 3H9.3"/><path d="M12 7.3v9.4"/>')},
  ops:{hours:'2.5 hours',topics:'operations',visual:'mint',icon:glyph('<rect x="3" y="3.6" width="6.4" height="5.4" rx="1.4"/><rect x="14.6" y="3.6" width="6.4" height="5.4" rx="1.4"/><rect x="8.8" y="15" width="6.4" height="5.4" rx="1.4"/><path d="M6.2 9v2.3c0 1.2.9 2.1 2.1 2.1h2.5"/><path d="M17.8 9v2.3c0 1.2-.9 2.1-2.1 2.1H13"/>')},
  bd:{hours:'3 hours',topics:'marketing',visual:'coral',icon:glyph('<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>')},
  risk:{hours:'2.5 hours',topics:'operations',visual:'dark',icon:glyph('<path d="M12 3.6 3.4 19.2h17.2L12 3.6z"/><path d="M12 9.3v4.3"/><circle cx="12" cy="16.4" r=".75" fill="currentColor" stroke="none"/>')},
  setup:{hours:'3 hours',topics:'setup',visual:'sky',icon:glyph('<path d="M4 10.2h16"/><path d="M5.4 10.2 7 4.8h10l1.6 5.4"/><path d="M5.6 10.2V19h12.8v-8.8"/><path d="M10 19v-4.4h4V19"/>')},
  inv:{hours:'5.5 hours',topics:'finance',visual:'lav',icon:glyph('<rect x="2.8" y="6" width="18.4" height="12" rx="2"/><circle cx="12" cy="12" r="2.4"/><circle cx="6.3" cy="9.2" r=".7" fill="currentColor" stroke="none"/><circle cx="17.7" cy="14.8" r=".7" fill="currentColor" stroke="none"/>')}
};
const view=()=>document.getElementById('view');
function overall(){const t=C.reduce((s,c)=>s+c.mods.length+1,0),d=C.reduce((s,c)=>s+cdone(c)+(S.cap[c.id]?1:0),0);return t?Math.round(d/t*100):0}
function started(){return C.filter(c=>cpct(c)>0&&!ccomplete(c)).length}
function nextHref(c){for(let i=0;i<c.mods.length;i++) if(!S.done[mk(c,i)]) return 'sf/'+c.id+'/'+(i+1);return 'sf/'+c.id+'/capstone'}
function resume(){
  const base=byId('crash');
  const fallback={href:'sf/crash',title:base.name,detail:CODE.crash+' · '+base.mods.length+' modules · '+META.crash.hours,pct:cpct(base),action:cpct(base)?'Resume →':'Start →',kicker:cpct(base)?'Continue learning':'Start here',blurb:base.blurb};
  const parts=(S.pos.last||'').split('/');
  const c=parts[0]==='sf'?byId(parts[1]):null;
  if(!c) return fallback;
  const step=parts[2];
  const where=step==='capstone'?'Capstone':step==='certificate'?'Certificate':step?('Module '+step+' of '+c.mods.length):(c.mods.length+' modules');
  return {href:S.pos.last,title:c.name,detail:CODE[c.id]+' · '+where+' · '+META[c.id].hours,pct:cpct(c),action:ccomplete(c)?'Review →':(cpct(c)?'Resume →':'Start →'),kicker:cpct(c)?'Continue learning':'Start here',blurb:c.blurb};
}
function catalog(){
  const cards=C.map(c=>{
    const m=META[c.id], p=cpct(c);
    const state=p===0?'idle':ccomplete(c)?'done':'going';
    const label=p===0?'Not started':ccomplete(c)?'Completed':p+'% complete';
    const btn=p===0?'Start course':ccomplete(c)?'Review course':'Continue';
    const flag=c.id==='crash'?'<span class="course-flag">Start here</span>':'';
    return `<article class="card course-card ${m.visual} is-${state}" data-topic="${m.topics}"><div class="course-top"><span class="course-mark">${m.icon}</span><span class="course-length">${c.mods.length} modules · ${m.hours}</span></div><div class="cardbody"><div class="course-code"><span>${CODE[c.id]}${flag}</span>${window.stageMark?stageMark(window.COURSE_STAGE[c.id]):''}</div><h3>${esc(c.name)}</h3><p class="desc">${esc(c.blurb)}</p></div><div class="course-foot"><span class="course-status">${label}</span><button class="card-cta" onclick="route('sf/${c.id}')">${btn} <span class="course-go" aria-hidden="true">→</span></button></div><div class="course-bar" role="progressbar" aria-valuenow="${p}" aria-valuemin="0" aria-valuemax="100" aria-label="${esc(c.name)} progress"><span style="width:${p}%"></span></div></article>`;
  }).join('');
  return `<div class="page"><section class="hero"><div><h1 class="title">Startup Foundations</h1><p class="subtitle">Courses for the business behind the idea.</p></div><input class="search page-search" type="search" placeholder="Search courses" aria-label="Search courses" oninput="applyListFilter()"></section><div class="filterbar"><button class="filter selected" onclick="filterCourses(this,'all')">All courses</button><button class="filter" onclick="filterCourses(this,'foundations')">Foundations</button><button class="filter" onclick="filterCourses(this,'marketing')">Marketing</button><button class="filter" onclick="filterCourses(this,'finance')">Finance</button><button class="filter" onclick="filterCourses(this,'operations')">Operations</button><button class="filter" onclick="filterCourses(this,'setup')">Business setup</button></div><div class="grid">${cards}</div><p class="library-empty" hidden>No courses match that search.</p></div>`;
}
function outline(c,cur,pages,pi){
  const items=c.mods.map((mod,j)=>{
    const done=S.done[mk(c,j)];
    const sub=j===cur&&pages?`<ul class="sub">${pages.map((p,k)=>`<li><button type="button" data-pg="${k}" class="${k===pi?'on':''}${S.seen[mk(c,j)+'p'+k]?' seen':''}">${esc(p.n)}</button></li>`).join('')}</ul>`:'';
    return `<li class="${j===cur?'cur':''}"><button type="button" onclick="route('sf/${c.id}/${j+1}')"><span class="sf-ck${done?' d':''}">${done?'✓':j+1}</span><span>${esc(mod.t)}</span></button>${sub}</li>`;
  }).join('');
  const here=typeof cur==='number'&&c.mods[cur]?c.mods[cur].t:cur==='cap'?'Capstone':'Certificate';
  const part=typeof cur==='number'&&pages&&pages[pi]?pages[pi].n:'';
  return `<div class="sf-outline"><button type="button" class="sf-sum" aria-expanded="false" aria-controls="sf-menu"><span class="sf-kicker">${CODE[c.id]}</span><span class="sf-here"><b>${esc(here)}</b>${part?`<small>${esc(part)}</small>`:''}</span><span class="sf-pct">${cpct(c)}%</span></button><div class="sf-menu" id="sf-menu"><p class="chart-sub" style="margin:0 0 8px">${esc(c.name)} · ${cpct(c)}% complete</p><div class="progress"><span style="width:${cpct(c)}%"></span></div><ol>${items}<li class="${cur==='cap'?'cur':''}"><button type="button" onclick="route('sf/${c.id}/capstone')"><span class="sf-ck${S.cap[c.id]?' d':''}">${S.cap[c.id]?'✓':'★'}</span><span>Capstone</span></button></li><li class="${cur==='cert'?'cur':''}"><button type="button" onclick="route('sf/${c.id}/certificate')"><span class="sf-ck${ccomplete(c)?' d':''}">${ccomplete(c)?'✓':''}</span><span>Certificate</span></button></li></ol></div></div>`;
}
function openCourse(c){
  const m=META[c.id], p=cpct(c), href=nextHref(c);
  const action=p===0?'Start course':ccomplete(c)?'Review course':'Continue course';
  const mods=c.mods.map((mod,j)=>{
    const key=mk(c,j), d=S.done[key], tool=tl(mod,key);
    const state=d?'Completed':S.seen[key+'p0']?'In progress':'Not started';
    return `<details ${j===0&&!d?'open':''}><summary><span class="sf-num${d?' done':''}">${d?'✓':j+1}</span><span><b>Module ${j+1}: ${esc(mod.t)}</b><small>${mod.cards.length} topics${tool?' · '+ACT[tool.k].toLowerCase():''} · ${state}</small></span></summary><div class="sf-det"><p>${esc(mod.hook)}</p><ul>${mod.cards.map(x=>'<li>'+esc(x[0])+'</li>').join('')}${tool?`<li>Activity: ${esc(ACT[tool.k])}</li>`:''}</ul><button class="secondary" onclick="route('sf/${c.id}/${j+1}')">${d?'Review module':'Open module'}</button></div></details>`;
  }).join('');
  view().innerHTML=`<div class="page"><button class="reader-back" onclick="route('courses')">← All courses</button><section class="hero"><div><div class="hero-rate"><div class="eyebrow">${CODE[c.id]}${c.id==='crash'?' · Start here':''}</div>${window.stageMark?stageMark(window.COURSE_STAGE[c.id]):''}</div><h1 class="title">${esc(c.name)}</h1><p class="sf-lead">${esc(c.blurb)}</p></div><div class="sf-actions"><button class="primary" onclick="route('${href}')">${action}</button><button class="secondary" onclick="route('sf/${c.id}/certificate')">${ccomplete(c)?'View certificate':'Certificate'}</button></div></section><div class="stats"><div class="stat"><b>${c.mods.length}</b><span>modules</span></div><div class="stat"><b>${m.hours.replace(' hours','')}</b><span>hours, self-paced</span></div><div class="stat"><b>${p}%</b><span>complete · ${cdone(c)} of ${c.mods.length} modules</span></div></div>${c.note?`<div class="sf-note">${esc(c.note)}</div>`:''}<div class="section-head"><h2>Syllabus</h2></div><div class="sf-syl">${mods}<details><summary><span class="sf-num${S.cap[c.id]?' done':''}">${S.cap[c.id]?'✓':'★'}</span><span><b>Capstone: ${esc(c.final.t)}</b><small>${c.final.fields.length} deliverables · ${S.cap[c.id]?'Submitted':'Not started'}</small></span></summary><div class="sf-det"><p>${esc(c.final.intro)}</p><button class="secondary" onclick="route('sf/${c.id}/capstone')">Open capstone</button></div></details></div></div>`;
  document.title=CODE[c.id]+' '+c.name+' · Campus Connect';
}
function openModule(c,mi){
  const m=c.mods[mi], key=mk(c,mi), T=tl(m,key);
  const pages=[{n:'Lesson',k:'rd'},...(T?[{n:'Activity',k:'act'}]:[]),{n:'Summary',k:'sum'}];
  let pi=Math.min(Math.max(0,+S.pos[key]||0),pages.length-1);
  const root=view();
  function draw(){
    const p=pages[pi];
    S.seen[key+'p'+pi]=1; S.pos[key]=pi; S.pos.last='sf/'+c.id+'/'+(mi+1);
    if(p.k==='sum') S.done[key]=1;
    save();
    let body='';
    if(p.k==='rd') body=`<div class="sf-kicker">Module ${mi+1} of ${c.mods.length}</div><h1>${esc(m.t)}</h1><p class="sf-hook">${esc(m.hook)}</p><p class="reader-note">${m.cards.length} topics${T?' · then a hands-on activity':''}</p>${m.note?`<div class="sf-note">${esc(m.note)}</div>`:''}<div class="sf-topics">${m.cards.map((x,j)=>`<section class="sf-topic" id="t-${mi+1}-${j+1}"><p class="sf-topic-num">${mi+1}.${j+1}</p><h2>${esc(x[0])}</h2>${readBody(x[1])}${x[2]?`<div class="sf-practice"><b>In practice</b><span>${esc(x[2])}</span></div>`:''}</section>`).join('')}</div>`;
    if(p.k==='act') body=`<div class="sf-kicker">Activity</div><h1>${esc(ACT[T.k])}</h1><p class="sf-hook">${['sort','redflag'].includes(T.k)?'Sort the examples from this lesson. Each answer is checked right away.':'The sample is filled in so you can see a result. Replace it with your own numbers.'}</p><div class="toolbox" id="tool"></div>`;
    if(p.k==='sum') body=`<div class="sf-kicker">Summary</div><h1>Key takeaways</h1><p class="sf-hook">The ideas worth keeping from this module.</p><div class="sf-topics sf-recap">${m.cards.map((x,j)=>`<section class="sf-topic"><p class="sf-topic-num">${mi+1}.${j+1}</p><h2>${esc(x[0])}</h2><p>${esc(x[1].split(/(?<=[.!?])\s/)[0])}</p></section>`).join('')}</div>`;
    const last=pi===pages.length-1;
    const nxt=mi+1<c.mods.length?'sf/'+c.id+'/'+(mi+2):'sf/'+c.id+'/capstone';
    const nextBtn=last?`<button class="primary" onclick="route('${nxt}')">${mi+1<c.mods.length?'Next module':'Go to capstone'}</button>`:`<button class="primary" type="button" data-pg="${pi+1}">Next: ${esc(pages[pi+1].n)}</button>`;
    root.innerHTML=`<div class="page"><div class="sf sf-layout">${outline(c,mi,pages,pi)}<article class="sf-sheet${p.k==='act'?'':' sf-read'}"><button class="reader-back" onclick="route('sf/${c.id}')">← ${esc(c.name)}</button>${body}<div class="reader-actions"><button class="secondary" type="button" data-pg="${pi-1}" ${pi===0?'disabled':''}>Previous</button>${nextBtn}</div></article></div></div>`;
    document.title=m.t+' · '+CODE[c.id];
    if(p.k==='act') TOOLS[T.k](document.getElementById('tool'),T,c);
    window.scrollTo?.(0,0);
  }
  root.onclick=e=>{const b=e.target.closest('[data-pg]');if(!b||b.disabled)return;const n=+b.dataset.pg;if(n<0||n>=pages.length)return;pi=n;draw()};
  draw();
}
function capstone(c){
  const f=c.final, P=S.plans[c.id]=S.plans[c.id]||{}, root=view();
  S.pos.last='sf/'+c.id+'/capstone'; save(); root.onclick=null;
  root.innerHTML=`<div class="page"><div class="sf sf-layout">${outline(c,'cap')}<article class="sf-sheet"><button class="reader-back" onclick="route('sf/${c.id}')">← ${esc(c.name)}</button><div class="sf-kicker">Capstone project</div><h1>${esc(f.t)}</h1><p class="sf-hook">${esc(f.intro)}</p>${c.note?`<div class="sf-note">${esc(c.note)}</div>`:''}<div class="takeaway"><strong>Deliverables</strong><ol>${f.fields.map(x=>'<li>'+esc(x[0])+'</li>').join('')}</ol></div><h2 class="sf-h2">Your submission</h2><p class="reader-note" id="fc"></p><form id="cf">${f.fields.map((x,i)=>`<label class="fl" for="pf${i}">${i+1}. ${esc(x[0])}<small>${esc(x[1])}</small><textarea id="pf${i}" data-i="${i}">${esc(P[i]||'')}</textarea></label>`).join('')}<h2 class="sf-h2">What makes a strong plan</h2><table class="rub"><thead><tr><th>Criterion</th><th>What it looks like</th></tr></thead><tbody>${RUB.map(r=>'<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td></tr>').join('')}</tbody></table><div class="reader-actions"><button class="primary" type="submit">${S.cap[c.id]?'Update submission':'Submit capstone'}</button><button class="secondary" type="button" id="cp">Copy as text</button></div><div id="cmsg"></div></form><p class="reader-note">Your draft saves in this browser as you type.</p></article></div></div>`;
  document.title='Capstone · '+CODE[c.id];
  const cnt=()=>{const n=f.fields.filter((x,i)=>(P[i]||'').trim()).length;document.getElementById('fc').textContent=n+' of '+f.fields.length+' deliverables drafted'};
  cnt();
  root.querySelectorAll('textarea[data-i]').forEach(t=>{t.oninput=()=>{P[t.dataset.i]=t.value;save();cnt()}});
  const txt=()=>CODE[c.id]+' '+c.name+'\n'+f.t+'\n\n'+f.fields.map((x,i)=>(i+1)+'. '+x[0]+'\n'+((P[i]||'').trim()||'(not completed)')).join('\n\n');
  document.getElementById('cp').onclick=async()=>{try{await navigator.clipboard.writeText(txt());toast('Copied to clipboard')}catch(e){document.getElementById('cmsg').innerHTML='<p class="reader-note">Copy is unavailable here. Select the text below.</p><textarea readonly>'+esc(txt())+'</textarea>'}};
  document.getElementById('cf').onsubmit=e=>{
    e.preventDefault();
    const miss=f.fields.map((x,i)=>(P[i]||'').trim()?null:i+1).filter(Boolean), msg=document.getElementById('cmsg');
    if(miss.length){msg.innerHTML='<div class="result fail"><strong>Almost there.</strong> Complete deliverable'+(miss.length>1?'s ':' ')+miss.join(', ')+' before submitting.</div>';return}
    S.cap[c.id]=1; if(ccomplete(c)&&!S.certDate[c.id]) S.certDate[c.id]=new Date().toISOString(); save();
    const all=ccomplete(c), left=c.mods.length-cdone(c);
    msg.innerHTML=`<div class="result pass"><div><strong>Capstone submitted.</strong> ${all?'Every requirement for this course is complete.':'Finish the remaining '+left+' module'+(left>1?'s':'')+' to unlock the certificate.'}</div>${all?`<button class="primary" type="button" onclick="route('sf/${c.id}/certificate')">View certificate</button>`:`<button class="secondary" type="button" onclick="route('${nextHref(c)}')">Next requirement</button>`}</div>`;
    const aside=root.querySelector('.sf-outline'); if(aside) aside.outerHTML=outline(c,'cap');
  };
}
function certificate(c){
  const root=view(); root.onclick=null; S.pos.last='sf/'+c.id+'/certificate';
  const ok=ccomplete(c);
  if(ok&&!S.certDate[c.id]) S.certDate[c.id]=new Date().toISOString();
  save();
  const left=[...c.mods.map((m,j)=>S.done[mk(c,j)]?null:'<li><button class="link" type="button" onclick="route(\'sf/'+c.id+'/'+(j+1)+'\')">Module '+(j+1)+': '+esc(m.t)+'</button></li>'), S.cap[c.id]?null:'<li><button class="link" type="button" onclick="route(\'sf/'+c.id+'/capstone\')">Capstone: '+esc(c.final.t)+'</button></li>'].filter(Boolean);
  const name=S.name||'Katarina Cedolin';
  const when=ok?new Date(S.certDate[c.id]).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}):'';
  root.innerHTML=`<div class="page"><div class="sf sf-layout">${outline(c,'cert')}<article class="sf-sheet"><button class="reader-back" onclick="route('sf/${c.id}')">← ${esc(c.name)}</button>${ok?`<div class="sf-kicker">Course complete</div><h1>Congratulations</h1><p class="sf-hook">You finished every module and the capstone for ${CODE[c.id]}.</p><label class="fl" for="cn">Name on certificate<input id="cn" value="${esc(name)}" placeholder="Your full name"></label><div class="cert"><div class="seal">CC</div><div class="sf-kicker">Campus Connect Academy</div><h2>Certificate of completion</h2><p class="reader-note">This certifies that</p><div class="nm" id="cnm">${esc(name)}</div><p>has completed</p><h3>${CODE[c.id]} ${esc(c.name)}</h3><p class="reader-note">${c.mods.length} modules and a capstone · ${META[c.id].hours}</p><p class="sf-date">${when}</p></div><p class="reader-note">A completion record for your portfolio, not an accredited credential. Screenshot it if you want a copy.</p>`:`<div class="sf-kicker">Certificate</div><h1>Certificate of completion</h1><p class="sf-hook">Finish the remaining requirements to unlock your certificate for ${CODE[c.id]} ${esc(c.name)}.</p><div class="takeaway"><strong>Still to do (${left.length})</strong><ol>${left.join('')}</ol></div>`}</article></div></div>`;
  document.title='Certificate · '+CODE[c.id];
  const cn=document.getElementById('cn');
  if(cn) cn.oninput=()=>{S.name=cn.value;save();const n=document.getElementById('cnm');if(n)n.textContent=cn.value||'Your name'};
}
function mount(spec){
  const root=view(); root.onclick=null;
  const parts=(spec||'').split('/');
  const c=byId(parts[0]);
  if(!c){root.innerHTML=catalog();document.title='Courses · Campus Connect';return}
  const rest=parts[1];
  if(!rest) openCourse(c);
  else if(rest==='capstone') capstone(c);
  else if(rest==='certificate') certificate(c);
  else {const i=+rest-1; if(c.mods[i]) openModule(c,i); else openCourse(c)}
}
new MutationObserver(()=>{for(const cell of document.querySelectorAll('.sf .stack td:not([data-l])')){let i=0,p=cell;while((p=p.previousElementSibling)) i+=p.colSpan||1;const head=cell.closest('table')?.tHead?.rows[0]?.cells[i];if(head) cell.dataset.l=head.textContent||''}}).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('click',e=>{
  const box=document.querySelector('.sf-outline');
  if(!box) return;
  const sum=e.target.closest&&e.target.closest('.sf-sum');
  if(sum&&box.contains(sum)){
    const open=box.classList.toggle('open');
    sum.setAttribute('aria-expanded',open?'true':'false');
    return;
  }
  if(!box.contains(e.target)) box.classList.remove('open');
});

window.SF={catalog,mount,resume,overall,started};
})();
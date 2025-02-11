import exp from "constants"

// place files you want to import through the `$lib` alias in this folder.
type EventData = {
    heading: string
    img: string
    subHeading: string
    overView: string
    howItWorks: string[]
    guides: string[]
    criteria: string[]
    prize: string[]
    venue: string
}

export const TechnicalEventData: EventData[] = [
    {
        heading: 'Pixel Perfect',
        img: 'https://i.postimg.cc/pXPXyvkK/pixel-perfect.png',
        subHeading: 'Figma Design Challenge: Unleash Your UI/UX Creativity!',
        overView: "The Figma Design Challenge is a fast-paced, creativity-driven competition where participants will design engaging and visually appealing user interfaces based on predefined themes and constraints—all within a limited time. Whether you're a beginner or an experienced designer, this challenge is designed to test your design thinking, problem-solving abilities, and ability to create aesthetically pleasing yet functional interfaces.",
        howItWorks: [
            'Participants will be provided with a design brief containing a theme, target audience, and specific constraints.',
            'Using Figma, competitors must craft an intuitive and visually appealing UI that aligns with the brief.',
            'Designs must be completed within a fixed time limit.',
            'After submission, entries will be evaluated by expert judges based on creativity, usability, accessibility, and adherence to the given constraints.',
            'The top designs will be featured, and winners will receive exciting prizes!'
        ],
        guides: [
            'Design Scope: Participants will be assigned a UI challenge, which could range from landing pages, mobile apps, dashboards, or interactive components.',
            'Constraints: Designers must follow certain constraints, such as limited colors, specific typography, or restricted design elements to test their adaptability and problem-solving skills.',
            'Time Limit: The challenge will take place within a fixed timeframe, pushing designers to work efficiently under pressure.'
        ],
        criteria: [
            'Creativity & Innovation - How unique and visually compelling is the design?',
            'Usability & Accessibility - Is the interface user-friendly and inclusive?',
            ' Consistency & Branding - Does the design align with the theme and maintain consistency?.',
            'Effective Problem Solving - How well does the design address the given constraints and requirements?',
        ],
        prize: [
            'Winner: certification and feature on our social media.',
            'runner: certification and feature on our social media.',
            "Participation: certification"
        ],
        venue: 'CSD-lab'

    }, {
        heading: 'Jailbreak War',

        img: 'https://i.postimg.cc/htjDb0kj/jailbreak.png',

        subHeading: 'Test Your Creativity in Bypassing AI Restrictions!',

        overView: "The AI Jailbreak Challenge is an exciting competition where participants push the boundaries of AI restrictions by finding clever ways to unlock complete and accurate responses from a limited prompt. This challenge will test your problem-solving skills, creativity, and understanding of AI constraints in a fun and competitive environment.",

        howItWorks: [
            'Participants will receive an AI system with predefined limitations.',
            'Using creative techniques, they must attempt to bypass restrictions while maintaining ethical boundaries.',
            'Each attempt will be evaluated based on effectiveness, creativity, and adherence to ethical guidelines.',
            'Submissions will be judged by experts in AI ethics, security, and creative problem-solving.',
            'Top participants will receive recognition and exciting prizes!'
        ],

        guides: [
            'Challenge Scope: Participants will face different AI models with varying levels of restrictions.',
            'Ethical Boundaries: Jailbreaks must be within ethical and responsible AI usage guidelines.',
            'Time Limit: The challenge will run within a fixed timeframe, testing quick thinking and adaptability.'
        ],

        criteria: [
            'Creativity & Ingenuity - How original and effective is the approach?',
            'Technical Understanding - How well does the participant understand AI constraints?',
            'Ethical Considerations - Does the approach adhere to ethical AI principles?',
            'Problem-Solving - How well does the solution navigate AI restrictions?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }, {
        heading: 'Debug or Die',

        img: 'https://i.postimg.cc/Ghz3yfSV/debug-or-die.png',

        subHeading: 'Test Your Problem-Solving Skills in Fixing Code Errors!',

        overView: "The Debugging Challenge is an intense coding competition where participants must fix errors in code within a time limit. As they progress, the levels become increasingly tricky, testing their debugging skills, logical thinking, and programming efficiency. This is the ultimate challenge for coders who love solving real-world issues!",

        howItWorks: [
            'Participants will receive code snippets with bugs that they need to fix.',
            'Each corrected code unlocks the next level, increasing in complexity.',
            'Participants must solve as many levels as possible within the time limit.',
            'The fastest and most accurate debuggers will win!',
            'Winners will receive recognition and exciting prizes!'
        ],

        guides: [
            'Challenge Format: Code snippets will contain logical, syntax, or runtime errors.',
            'Time Factor: Participants must debug within the given time constraints.',
            'Tools Allowed: Participants can use any text editor or IDE of their choice.'
        ],

        criteria: [
            'Debugging Speed - How quickly can participants identify and fix errors?',
            'Accuracy - Are all errors correctly fixed?',
            'Code Efficiency - Does the solution maintain optimal performance?',
            'Completion - Who solves the most levels within the time limit?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }
]

export const SpecialEventData: EventData[] = [
    {
        heading: 'QR Treasure Hunt',

        img: 'https://i.postimg.cc/DwLcWMvJ/qr-treasure-hunt.png',

        subHeading: 'Unlock aptitude puzzles and coding challenges by scanning QR codes!',

        overView: "The QR Code Treasure Hunt is an interactive competition where participants scan QR codes to unlock aptitude puzzles and coding challenges. Solve each task quickly to progress through the hunt and reach the final treasure. This challenge tests your problem-solving speed, logical thinking, and coding skills in an engaging way!",

        howItWorks: [
            'Participants will start by scanning the first QR code to unlock their first challenge.',
            'Each QR code reveals a new puzzle or coding challenge that must be solved to access the next code.',
            'Challenges will increase in difficulty as participants progress.',
            'The first to solve all challenges and reach the final treasure wins!',
            'Top performers will be recognized and awarded exciting prizes!'
        ],

        guides: [
            'Challenge Format: Participants will encounter a mix of aptitude and coding problems.',
            'Time Factor: Speed and accuracy are key to winning the hunt.',
            'Tools Allowed: Participants can use their preferred coding environment.'
        ],

        criteria: [
            'Problem-Solving Speed - How quickly do participants solve challenges?',
            'Accuracy - Are solutions correct and efficient?',
            'Logical Thinking - How well do participants approach the puzzles?',
            'Completion - Who reaches the final treasure first?'
        ],

        prize: [
            'Winner: Surprise prize and certification.',
        ],

        venue: 'CSD-lab'
    }, {
        heading: 'Rapid Reach',

        img: 'https://i.postimg.cc/VL3Rk88P/rapid-reach.png',

        subHeading: 'Boost Your Creativity and Expand Your Reach!',

        overView: "The Social Media Promotion Event is an exciting opportunity for participants to showcase their creativity by creating engaging posts, reels, or stories to promote our event. The goal is to reach a wider audience and generate buzz! The most impactful and viral content creators will be rewarded with exciting prizes!",

        howItWorks: [
            'Participants will create social media content (posts, reels, or stories) to promote the event.',
            'Content should be engaging, creative, and aligned with the event theme.',
            'Participants must share their content across various platforms to maximize reach.',
            'Submissions will be evaluated based on engagement, creativity, and impact.',
            'Top content creators will receive recognition and exciting rewards!'
        ],

        guides: [
            'Content Format: Posts, reels, or stories should be well-designed and engaging.',
            'Audience Reach: Participants should aim to maximize likes, shares, and engagement.',
            'Originality: Content must be unique and created specifically for this event.',
            'Tags: Use appropriate hashtags to promote the event #sethu_csd #pixelize #rapidreach.'
        ],

        criteria: [
            'Creativity - How unique and engaging is the content?',
            'Engagement - How many likes, shares, and interactions does it receive?',
            'Impact - How well does the content promote the event?',
            'Presentation - Is the content visually appealing and well-structured?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }
]

export const NonTechnicalEventData: EventData[] = [
    {
        heading: 'Dalgona Risk',

        img: 'https://i.postimg.cc/KYfCdzg5/dalgona-risk.png',

        subHeading: 'Precision Meets Pressure in the Ultimate Candy Carving Challenge!',

        overView: "The Dalgona Risk Challenge is a thrilling test of skill and patience! Participants must carefully carve out a perfect shape from a delicate dalgona candy without breaking it. With time ticking away, steady hands and laser focus will be key to victory! Do you have what it takes to master the challenge?",

        howItWorks: [
            'Participants will receive a dalgona candy with a pre-imprinted shape.',
            'Using only the provided tools, they must carefully carve out the shape without cracking the candy.',
            'The challenge is timed, adding an extra layer of difficulty.',
            'Successfully carved shapes will be evaluated based on precision.',
            'The most accurate and fastest participants will be declared winners!'
        ],

        guides: [
            'Patience is Key: Rushing may cause the candy to break.',
            'Use Your Tools Wisely: Precision is more important than speed.',
            'Time Pressure: Keep an eye on the clock while maintaining accuracy.'
        ],

        criteria: [
            'Precision - How cleanly is the shape carved?',
            'Completion - Did the participant fully extract the shape?',
            'Speed - How quickly was the shape completed?',
            'Control - Was the carving process steady and deliberate?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }, {
        heading: 'Act it Out',

        img: 'https://i.postimg.cc/SsKHqh6b/Act-it-out.png',

        subHeading: 'Showcase Your Acting Skills with Expressive Solo Performances!',

        overView: "The Mono Act Challenge is an exciting platform for performers to express emotions, stories, and characters through solo performances. Using only gestures, expressions, and voice, participants must captivate the audience and compete for the title of the best solo act! Are you ready to take the stage?",

        howItWorks: [
            'Participants will perform a solo act that conveys a story or emotion.',
            'No props or additional actors are allowed—only expressions, voice, and gestures.',
            'Each act must be within the given time limit.',
            'Judges will evaluate based on emotional impact, clarity, and delivery.',
            'The most compelling and expressive performance wins!'
        ],

        guides: [
            'Expressive Acting: Use voice modulation and facial expressions effectively.',
            'Storytelling: A clear and engaging narrative enhances the performance.',
            'Confidence: Engage the audience with strong stage presence.'
        ],

        criteria: [
            'Expression - How well does the performer convey emotions?',
            'Clarity - Is the story or message clear and engaging?',
            'Stage Presence - How confidently does the performer hold the audience’s attention?',
            'Creativity - How unique and impactful is the act?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }, {
        heading: 'IPL Auction',

        img: 'https://i.postimg.cc/sgpk4Kjq/IPL-auction.png',

        subHeading: 'Strategy and Bidding Skills Decide Your Dream Team!',

        overView: "The IPL Auction Challenge is a thrilling event where participants step into the shoes of team owners! With a fixed budget, they must strategically bid for top players, build the ultimate squad, and outsmart their opponents. Do you have what it takes to create the best team and dominate the auction?",

        howItWorks: [
            'Participants will receive a virtual budget to bid for players.',
            'Players will be auctioned one by one, and participants must bid wisely.',
            'Each team must balance their squad within the given budget constraints.',
            'Strategic planning is key—participants must assess player strengths and bid accordingly.',
            'The team with the best squad composition and budget management wins!'
        ],

        guides: [
            'Budget Management: Spend wisely to create a well-balanced team.',
            'Player Analysis: Research and prioritize key players.',
            'Bidding Strategy: Know when to bid aggressively or hold back.'
        ],

        criteria: [
            'Team Composition - How well-balanced is the final squad?',
            'Budget Efficiency - Was the budget managed effectively?',
            'Bidding Strategy - Were bids placed strategically?',
            'Overall Squad Strength - Does the team have strong players in every position?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }, {
        heading: 'Ddakji Fusion',

        img: 'https://i.postimg.cc/7Lwps7b6/ddakji-fusion.png',

        subHeading: 'Where Strategy and Skill Collide!',

        overView: "The Ddakji Fusion Challenge is an exhilarating competition where players must flip and slam their way to victory in this intense Korean tile-slapping game. But that's not all—participants will also take on other thrilling mini-games to prove their dominance and claim the top spot! Do you have what it takes to be the ultimate champion?",

        howItWorks: [
            'Participants will compete in the classic game of Ddakji, aiming to flip their tile.',
            'Each player will receive a set of Ddakji tiles to use strategically.',
            'Additional mini-games will test agility, reflexes, and tactical thinking.',
            'Winning Ddakji rounds and mini-games will earn points towards overall victory.',
            'The player with the highest cumulative score wins the challenge!'
        ],

        guides: [
            'Master the Flip: Practice your technique to apply the perfect amount of force.',
            'Strategize: Position your tile and time your strikes for maximum impact.',
            'Stay Focused: Adapt to different mini-games and maintain your competitive edge.'
        ],

        criteria: [
            'Ddakji Skills - How effectively does the player flip opponent tiles?',
            'Mini-Game Performance - How well does the participant perform in additional challenges?',
            'Strategy - Are moves calculated and well-executed?',
            'Consistency - Does the player maintain strong performance across all rounds?'
        ],

        prize: [
            'Winner: Certification and medals',
            'Runner-up: Certification and medals',
            'Participation: Certification.'
        ],

        venue: 'CSD-lab'
    }

]

export const eventPathMap = new Map([
    ['technical', new Map(Object.entries({
        'pixelperfect': TechnicalEventData[0],
        'jailbreakwar': TechnicalEventData[1],
        'debugordie': TechnicalEventData[2],
    }))],
    ['nonTechnical', new Map(Object.entries({
        'dalgonarisk': NonTechnicalEventData[0],
        'actitout': NonTechnicalEventData[1],
        'iplauction': NonTechnicalEventData[2],
        'ddakjifusion': NonTechnicalEventData[3],
    }))],
    ['special', new Map(Object.entries({
        'qrtreasurehunt': SpecialEventData[0],
        'rapidreach': SpecialEventData[1]
    }))]
])


export function normalizeString(str: string): string {
    return str
        .toLowerCase()
        .replace(/(\s)+/g, '')
        .replace(/(\s)+$/g, '')
        .replace(/^\s+/g, '')
}

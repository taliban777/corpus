import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx"
import { writeFileSync } from "fs"

const H1 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 }, children: [new TextRun({ text, bold: true })] })

const H2 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 }, children: [new TextRun({ text, bold: true })] })

const H3 = (text) =>
  new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 100 }, children: [new TextRun({ text, bold: true, italics: true })] })

const P = (text, opts = {}) =>
  new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text, ...opts })] })

const Prompt = (text) => P(text, { bold: false })
const SubPrompt = (text) => new Paragraph({ spacing: { after: 150 }, indent: { left: 360 }, children: [new TextRun({ text, italics: true })] })
const NewQ = (text) => new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text, bold: true, color: "1F4E79" })] })
const NewSub = (text) => new Paragraph({ spacing: { after: 150 }, indent: { left: 360 }, children: [new TextRun({ text, italics: true, color: "1F4E79" })] })

const children = []

children.push(
  H1("INTERVIEW QUESTIONS"),
  P(
    "This guide supports individual semi-structured interviews. All interviews are conducted on a one-to-one basis. The questions are prompts. Follow the participant's emphasis and return to outstanding topics as appropriate. Participants may decline any question. See the distress and disclosure protocols at the end of this document."
  ),

  H2("Pre-Interview Procedure"),
  P("Confirm participant has received the PIS and has had at least 24 hours to consider."),
  P("Obtain consent (verbal on record or written). Read through or confirm each consent statement."),
  P("Confirm the participant understands they may stop, pause, or decline any question at any time."),
  P("Confirm recording consent and start the recording."),
  P("Note the interview date - the data withdrawal deadline is four weeks from today."),

  H1("PART A: Movement Members"),

  H2("Preface and Positioning Questions"),
  P(
    "Before we begin, I'd like to ask a few background questions to help situate your experiences within the movement. These are about understanding where you were positioned at the time."
  ),
  Prompt("Could you describe your involvement in the Nation of Islam, including the roles or responsibilities you held while you were active?"),
  Prompt("Were your responsibilities primarily at the level of leadership, organisational coordination, or ordinary membership?"),
  Prompt("How would you describe your proximity to decision-making within the movement during that time?"),
  Prompt("Were you involved in shaping messages or programmes, implementing decisions made by others, or mainly receiving guidance?"),
  Prompt("Thinking about leadership periods, were you involved during a single leadership era, or did your involvement span more than one period?"),
  SubPrompt("If more than one, which transitions do you recall experiencing directly?"),
  Prompt("At the time of your involvement, how connected were you to wider organisational structures beyond your local temple?"),
  SubPrompt("Regular interaction with national leadership, occasional contact through events or communications, or little direct connection."),

  H2("Section A: Participants who experienced only one leadership period"),
  Prompt(
    "To begin, could you tell me which leader you were most closely associated with or remember most clearly during your time in the movement, and roughly which years this covers?"
  ),
  SubPrompt("If high rank: clarify formal title, decision-making responsibilities, and proximity to central leadership."),
  SubPrompt("If medium rank: clarify organisational role, committee involvement, and reporting lines."),
  SubPrompt("If low rank: clarify membership status, local temple participation, and everyday involvement."),
  Prompt("Which temple or organisational setting were you primarily connected to during this period, and how did your role shape what you saw or heard from leadership?"),
  SubPrompt("Ask whether access to speeches, internal directives, or informal discussions differed by rank."),
  Prompt("Can you describe how you first encountered the movement or this leadership period? Please walk me through what happened, where you were, and who was involved."),
  SubPrompt("Local social conditions at the time, including work, family, neighbourhood pressures, or community conflicts."),
  Prompt("Before you became involved, what wider social or political conditions made the movement's message resonate for you, if at all?"),
  SubPrompt("Economic insecurity, policing, racial discrimination, religious searching, or local organising traditions."),
  Prompt("How would you describe the main messages or claims you remember from this leader's speeches or publications?"),
  SubPrompt("Problems identified, solutions proposed, moral language used, and audiences addressed."),
  Prompt("How were these messages typically delivered, and what stood out about the way they were communicated?"),
  SubPrompt("Use of scripture, repetition, historical narrative, emotional appeal, or practical instruction."),
  Prompt("How did you personally interpret these messages at the time? Did you notice any variation in how others around you understood them?"),
  SubPrompt("Differences between leadership, organisers, and ordinary members in terms of interpretation or response."),
  Prompt("Can you describe a specific occasion when a message from leadership led to action at a local or organisational level? Please describe the sequence of events."),
  SubPrompt("If high rank: focus on decision-making processes and resource allocation."),
  SubPrompt("If medium rank: focus on implementation, coordination, and local constraints."),
  SubPrompt("If low rank: focus on participation, compliance, or resistance."),
  Prompt("What organisational structures or resources made that action possible, or limited what could be done?"),
  SubPrompt("Funding, property, personnel, rules, surveillance, or informal authority networks."),
  Prompt("How would you describe the leader's authority when they spoke, and where do you think that authority came from?"),
  SubPrompt("Charisma, theological claims, organisational control, moral credibility, or historical legacy."),
  Prompt("How were the movement's founders or founding stories talked about during this period, both formally and informally?"),
  SubPrompt("Whether these narratives were treated as fixed, reinterpreted, or contested."),
  Prompt("Were you aware of any outside pressure on the movement during this time, and did this affect how people behaved or spoke?"),
  SubPrompt("Media, policing, political actors, religious institutions, or funding bodies."),
  Prompt("Looking back, what do you think had to be true for the movement's messages during this period to gain traction, or fail to do so?"),
  SubPrompt("Conditions that enabled or constrained mobilisation."),
  Prompt("How would you judge the direction or progress of the movement during this leadership period, and what evidence leads you to that judgement?"),
  Prompt("Is there anything else about how leadership, rhetoric, or mobilisation worked during this period that you think is important for understanding what happened?"),

  H2("Section B: Participants who experienced one or more leadership transitions"),
  Prompt("Which leadership transitions did you experience, and where were you positioned within the movement at those moments?"),
  SubPrompt("Ask participants to place transitions on a timeline, noting roles and locations."),
  Prompt("How did your role or level of involvement change, if at all, across these transitions?"),
  SubPrompt("Movement between ranks, loss or gain of authority, or withdrawal from participation."),
  Prompt("Thinking about the period before and after a transition, what differences did you notice in the messages coming from leadership?"),
  SubPrompt("Changes in tone, priorities, theological emphasis, or political targets."),
  Prompt("Which elements of the previous leadership's message were maintained, and which were revised or dropped?"),
  SubPrompt("Whether changes were explicit or gradual, and how they were justified."),

  // NEW QUESTION 1
  NewQ("How did leadership or fellow members talk about those who left or were seen to break with the movement during this period?"),
  NewSub("Language used for defectors or dissenters, whether such people were discussed openly or avoided, and how this differed by rank."),

  Prompt("What organisational changes followed the transition, and in what order did they occur?"),
  SubPrompt("If high rank: focus on strategic decisions and institutional restructuring."),
  SubPrompt("If medium rank: focus on programme changes and local implementation."),
  SubPrompt("If low rank: focus on everyday practices and participation shifts."),
  Prompt("Can you recall a speech, directive, or moment that visibly changed how people acted after the transition?"),
  SubPrompt("Attendance, recruitment, discipline, or disengagement."),
  Prompt("How did the new leadership explain or justify the changes they introduced?"),
  SubPrompt("Appeals to scripture, tradition, necessity, or external threat."),
  Prompt("How did outsiders respond to the leadership change, and how did that response feed back into internal decision-making?"),
  SubPrompt("Surveillance, endorsement, hostility, or indifference."),
  Prompt("Did narratives about founders or historical purpose shift during the transition, and who promoted these interpretations?"),
  SubPrompt("Conflicts between leadership levels or generational groups."),
  Prompt("How did access to resources change across the transition, and how did this shape what leaders could realistically propose?"),
  SubPrompt("Property, funding, labour, or legal constraints."),
  Prompt("How did experiencing a leadership transition affect your own trust in leaders or expectations of leadership?"),

  // NEW QUESTION 2
  NewQ("Across this transition, did you personally stay, leave, or return to the movement at any point, and what led to that decision?"),
  NewSub("Timing relative to the transition, what prompted the decision, and whether it changed if circumstances changed later."),

  Prompt("Looking back, what do you think explains why some frames succeeded while others failed to take hold during the transition?"),
  SubPrompt("Leadership credibility, organisational capacity, social conditions, or competing narratives."),
  Prompt("Can you imagine what would have needed to be different for a rejected message or strategy to succeed?"),
  SubPrompt("Missing conditions, blocked mechanisms, or misjudged audiences."),
  Prompt("Overall, do you see the transition as producing continuity, rupture, or a combination, and what leads you to that assessment?"),
  Prompt("Is there anything else about leadership change, rhetoric, or mobilisation that you think is essential for understanding how the movement evolved?"),

  H1("PART B: External Critics / Sympathisers"),

  H2("Preface and Positioning Questions"),
  Prompt("Could you describe your connection to or interest in the Nation of Islam?"),
  SubPrompt("Were you primarily a supporter, an observer, or a critic? How did you come into contact with the movement?"),
  Prompt("How would you describe the context in which you engaged with the movement?"),
  SubPrompt("Social networks, professional or community connections, media exposure, personal experiences with issues the movement addressed."),
  Prompt("During your observations or engagement, how closely did you interact with members or leaders, and what level of access did you have?"),
  SubPrompt("Attendance at public events, informal discussions, or media representations. Did access vary depending on proximity to leadership or local organisation?"),
  Prompt("Were there particular leadership periods or events that you remember most vividly?"),
  SubPrompt("Specific leaders, transitions, speeches, or campaigns."),

  H2("External Perspectives on Leadership and Messaging"),
  Prompt("How would you characterise the messages and themes communicated by the leadership during your period of observation?"),
  SubPrompt("Recurrent claims, moral or theological appeals, social or political goals, and intended audiences."),
  Prompt("How did you perceive the leader's authority and style?"),
  SubPrompt("Charisma, organisational control, moral credibility, or cultural influence. How did these attributes affect how the messages were received?"),
  Prompt("How effective do you think leadership was in mobilising members or supporters?"),
  SubPrompt("Evidence of coordinated action, recruitment, adherence to programmes, or visible community initiatives."),
  Prompt("Did you notice variation in how different people within the movement received and acted on leadership messages?"),
  SubPrompt("Were certain messages emphasised for leaders versus grassroots members?"),
  Prompt("To what extent did the movement's messages respond to or engage with wider social, political, or economic conditions?"),
  SubPrompt("Local community pressures, national events, racial discrimination, policing, economic insecurity, or cultural debates."),
  Prompt("Were there particular rhetorical or communication strategies that stood out to you as especially persuasive or ineffective?"),
  SubPrompt("Repetition, scripture, historical references, personal stories, slogans, or public appearances."),
  Prompt("Did you ever observe tensions or contradictions between what leadership promoted and what happened in practice?"),
  SubPrompt("Actions versus rhetoric, organisational decisions, or public versus private messaging."),
  Prompt("From your perspective, what conditions enabled or constrained the movement's messages from taking hold in the broader community?"),
  SubPrompt("Media coverage, political attention, local support, institutional pushback, or socio-cultural resonance."),
  Prompt("How did external actors — including critics, media, or institutions — affect the movement's framing or mobilisation strategies?"),
  SubPrompt("Did opposition reinforce internal cohesion, provoke rhetorical shifts, or suppress activity?"),
  Prompt("Reflecting on your overall engagement, how would you describe the trajectory of leadership effectiveness and influence during the period you observed?"),
  SubPrompt("Continuity versus rupture in messaging, organisational adaptation, or the movement's broader social impact."),
  Prompt("Is there anything else about leadership, messaging, or mobilisation from the perspective of someone outside formal membership that you think is important to understanding how the movement operated?"),

  H1("Closing Procedure"),
  P("Thank the participant for their contribution."),
  P("Confirm the data withdrawal deadline (four weeks from today) and provide your KCL institutional email for this purpose."),
  P("Provide support service contacts (listed in the Participant Information Sheet)."),
  P("Note the recording reference for the interview record."),

  H1("Distress Protocol"),
  P("If the participant becomes distressed:"),
  P("Pause the interview immediately."),
  P("Check how the participant wishes to proceed: continue, take a break, change topic, or stop."),
  P("Remind the participant their wellbeing takes precedence and they may stop without consequence."),
  P("If stopping: confirm the withdrawal deadline and contact details; provide support service information."),
  P("After the session: send a follow-up message via KCL institutional email with support contacts."),

  H1("Disclosure Protocol"),
  P("If the participant discloses information suggesting ongoing illegal activity or a credible risk of harm:"),
  P("Gently redirect the conversation."),
  P("Remind the participant of the limits of confidentiality as stated in the Participant Information Sheet."),
  P("Advise the participant they may decline to continue on that subject or stop the interview."),
  P("Do not probe further."),
  P(
    "After the session: consult Professor Jeroen Gunning (jeroen.gunning@kcl.ac.uk) or Dr John Narayan (john.narayan@kcl.ac.uk) and follow the escalation pathway in Section D of the REMAS application."
  )
)

const doc = new Document({
  sections: [{ properties: {}, children }],
})

const buf = await Packer.toBuffer(doc)
writeFileSync("data/Interview-Questions-v2.docx", buf)
console.log("[v0] Document written to data/Interview-Questions-v2.docx")

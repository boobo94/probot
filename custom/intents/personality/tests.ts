import { StatementStructure, PersonalityType } from './interface';

const tests: Array<StatementStructure[]> = [
    [
        {
            Statement: "I like to work on cars",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to do puzzles",
            Type: PersonalityType.I
        },
        {
            Statement: "I am good at working independently",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to work in teams",
            Type: PersonalityType.S
        },
        {
            Statement: "I am an ambitious person, I set goals for myself",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to organize things,  (files, desks/offices)",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to build things",
            Type: PersonalityType.R,
        },
        {
            Statement: "I like to read about art and music",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to have clear instructions  to follow",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to try to influence or persuade people",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to do experiments",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to teach or train people",
            Type: PersonalityType.S
        },
        {
            Statement: "I like trying to help people solve their problems",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to take care of animals",
            Type: PersonalityType.R
        },
        {
            Statement: "I wouldn’t mind working 8 hours per day in an office",
            Type: PersonalityType.C
        },
        {
            Statement: "I like selling things",
            Type: PersonalityType.E
        },
        {
            Statement: "I enjoy creative writing",
            Type: PersonalityType.A
        },
        {
            Statement: "I enjoy science",
            Type: PersonalityType.I
        },
        {
            Statement: "I am quick to take on new responsibilities",
            Type: PersonalityType.E
        },
        {
            Statement: "I am interested in healing people",
            Type: PersonalityType.S
        },
        {
            Statement: "I enjoy trying to figure out how things work",
            Type: PersonalityType.I
        },
        {
            Statement: "I like putting things together or assembling things",
            Type: PersonalityType.R
        },
        {
            Statement: "I am a creative person",
            Type: PersonalityType.A
        },
        {
            Statement: "I pay attention to details",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to do filing or typing",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to analyze things (problems/situations)",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to play instruments or sing",
            Type: PersonalityType.A
        },
        {
            Statement: "I enjoy learning about other cultures",
            Type: PersonalityType.S
        },
        {
            Statement: "I would like to start my own business",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to cook",
            Type: PersonalityType.R
        },
        {
            Statement: "I like acting in plays",
            Type: PersonalityType.A
        },
        {
            Statement: "I am a practical person",
            Type: PersonalityType.R
        },
        {
            Statement: "I like working with numbers  or charts",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to get into discussions about issues",
            Type: PersonalityType.S
        },
        {
            Statement: "I am good at keeping records of my work",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to lead",
            Type: PersonalityType.E
        },
        {
            Statement: "I like working outdoors",
            Type: PersonalityType.R
        },
        {
            Statement: "I would like to work in an office",
            Type: PersonalityType.C
        },
        {
            Statement: "I’m good at math",
            Type: PersonalityType.I
        },
        {
            Statement: "I like helping people",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to draw",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to give speeches",
            Type: PersonalityType.E
        }
    ],
    [
        {
            Statement: "I like Farming",
            Type: PersonalityType.R
        },
        {
            Statement: "I like Advanced math",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to be in a play",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to study people in other lands",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to talk to people at a party",
            Type: PersonalityType.E
        },
        {
            Statement: "I like Word processing",
            Type: PersonalityType.C
        },
        {
            Statement: "I like Auto mechanics",
            Type: PersonalityType.R
        },
        {
            Statement: "I like Astronomy",
            Type: PersonalityType.I
        },
        {
            Statement: "I like Draw or paint",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to go at church",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to Work on a sales campaign",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to Use a cash register",
            Type: PersonalityType.C
        },
        {
            Statement: "I like Carpentry",
            Type: PersonalityType.R
        },
        {
            Statement: "I like Physics",
            Type: PersonalityType.I
        },
        {
            Statement: "I like Foreign languages",
            Type: PersonalityType.A
        },
        {
            Statement: "I like Teaching children",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to Buy clothes for a store",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to work from nine to five",
            Type: PersonalityType.C
        },
        {
            Statement: "I like Setting type for a printing job",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to use a chemistry set",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to read art and music magazines",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to help people solve personal problems",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to sell life insurance",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to Type reports",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to drive a truck",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to work in a lab",
            Type: PersonalityType.I
        },
        {
            Statement: "I like Musicians",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to make new friends",
            Type: PersonalityType.S
        },
        {
            Statement: "I like Leaders",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to follow a budget",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to fix electrical appliances",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to Build rocket model",
            Type: PersonalityType.I
        },
        {
            Statement: "I like Creative writing",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to attend at sports events",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to be elected class president",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to use business machines",
            Type: PersonalityType.C
        },
        {
            Statement: "I like to build things",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to do puzzles",
            Type: PersonalityType.I
        },
        {
            Statement: "I like Fashion design",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to belong to a club",
            Type: PersonalityType.S
        },
        {
            Statement: "I like to give speeches",
            Type: PersonalityType.E
        },
        {
            Statement: "I like to keep detailed records",
            Type: PersonalityType.C
        },
        {
            Statement: "I like Wildlife biology",
            Type: PersonalityType.R
        },
        {
            Statement: "I like to be in a science fair",
            Type: PersonalityType.I
        },
        {
            Statement: "I like to go to concerts",
            Type: PersonalityType.A
        },
        {
            Statement: "I like to work with old people",
            Type: PersonalityType.S
        },
        {
            Statement: "I like Sales people",
            Type: PersonalityType.E
        },
        {
            Statement: "I like File letters and reports",
            Type: PersonalityType.C
        },
    ],
    [
        {
            Statement: "Are you practical?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you athletic?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you straightforward?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you mechanically inclined?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you a nature lover?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you curious about the physical world?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you fix electrical things?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you solve mechanical problems?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you pitch a tent?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you play a sport?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you read a blueprint?",
            Type: PersonalityType.R
        },
        {
            Statement: "Can you operate tools and machinery?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like to tinker with machines?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like work outdoors?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like be physically active?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like work with your hands?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like build things?",
            Type: PersonalityType.R
        },
        {
            Statement: "Do you like work on cars?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you inquisitive?",
            Type: PersonalityType.R
        },
        {
            Statement: "Are you analytical?",
            Type: PersonalityType.I
        },
        {
            Statement: "Are you scientific?",
            Type: PersonalityType.I
        },
        {
            Statement: "Are you observant?",
            Type: PersonalityType.I
        },
        {
            Statement: "Are you logical?",
            Type: PersonalityType.I
        },
        {
            Statement: "Are you precise?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you think abstractly?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you solve math problems?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you understand physics theories?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you do complex calculations?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you use a microscope?",
            Type: PersonalityType.I
        },
        {
            Statement: "Can you interpret formulas?",
            Type: PersonalityType.I
        },
        {
            Statement: "Do you like to explore ideas?",
            Type: PersonalityType.I
        },
        {
            Statement: "Do you like to use computers?",
            Type: PersonalityType.I
        },
        {
            Statement: "Do you like to work independently?",
            Type: PersonalityType.I
        }, {
            Statement: "Do you like to perform lab experiments?",
            Type: PersonalityType.I
        },
        {
            Statement: "Do you like to read scientific or technical magazines?",
            Type: PersonalityType.I
        },
        {
            Statement: "Do you like to analyze data?",
            Type: PersonalityType.I
        },
        {
            Statement: "Are you creative?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you intuitive?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you imaginative?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you innovative?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you sensitive?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you an individualist?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you sketch, draw, paint?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you use intuition?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you play a musical instrument?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you write stories, poetry, music?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you develop new ideas, approaches?",
            Type: PersonalityType.A
        },
        {
            Statement: "Can you design fashions or interiors?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to solve problems in original ways?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to read fiction, plays, poetry?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to use verbal abilities to speak, act, entertain?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to take photographs?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to use visualization abilities?",
            Type: PersonalityType.A
        },
        {
            Statement: "Do you like to express yourself creatively?",
            Type: PersonalityType.A
        },
        {
            Statement: "Are you friendly?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you helpful?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you idealistic?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you insightful about people?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you outgoing with others?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you understanding?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you teach or train others?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you express your feelings clearly?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you lead a group discussion?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you mediate disputes?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you cooperate well with others?",
            Type: PersonalityType.S
        },
        {
            Statement: "Can you work well in groups or teams?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To use social and interpersonal skills?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To help people with their problems ?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To lead groups ?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To use communication skills?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To teach or train others ?",
            Type: PersonalityType.S
        },
        {
            Statement: "Do You Like To provide support, empathy?",
            Type: PersonalityType.S
        },
        {
            Statement: "Are you self-confident?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you assertive?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you sociable?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you persuasive?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you enthusiastic?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you energetic?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you initiate projects?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you convince people to do things your way?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you sell things or promote ideas?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you give talks or speeches?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you organize activities and events?",
            Type: PersonalityType.E
        },
        {
            Statement: "Can you lead a group?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To make decisions affecting others?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To use energy or drive?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To give speeches or talks?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To use skills in argument or debate ?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To take risks?",
            Type: PersonalityType.E
        },
        {
            Statement: "Do You Like To organize and lead others?",
            Type: PersonalityType.E
        },
        {
            Statement: "Are you well-organized?",
            Type: PersonalityType.C
        },
        {
            Statement: "Are you accurate with details and numbers?",
            Type: PersonalityType.C
        },
        {
            Statement: "Are you interested in number crunching?",
            Type: PersonalityType.C
        },
        {
            Statement: "Are you methodical?",
            Type: PersonalityType.C
        },
        {
            Statement: "Are you conscientious about facts ?",
            Type: PersonalityType.C
        },
        {
            Statement: "Are you efficient?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you work well within an authority system or organization?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you write reports?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you keep accurate records?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you use a computer terminal?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you perform calculations?",
            Type: PersonalityType.C
        },
        {
            Statement: "Can you gather, organize and report data?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To follow defined procedures?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To make charts, tables and graphs?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To work with numbers?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To type or do word processing?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To classify and organize information?",
            Type: PersonalityType.C
        },
        {
            Statement: "Do You Like To be responsible for details?",
            Type: PersonalityType.C
        },
    ],
]
export default tests


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
    ],
]
export default tests


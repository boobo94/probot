import { TestStructure, PersonalityType } from './interface';

const tests: TestStructure[] = [
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
    }
]
export default tests


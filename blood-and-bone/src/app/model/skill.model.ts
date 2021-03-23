export enum SkillType {
    Fighting = "Fighting",
    Dexterity = "Dexterity",
    Thievery = "Thievery",
    Stealth = "Stealth",
    Archery = "Archery",
    Mind = "Mind",
    Learned = "Learned",
    Survival = "Survival",
    Perception = "Perception",
    Apothecary = "Apothecary",
    Presence = "Presence",
    Intimidation = "Intimidation",
    Performance = "Performance",
    Manipulation = "Manipulation",
    Insight = "Insight",
    Power = "Power"
}

export enum SkillRank {
    Untrained = "Untrained",
    Novice = "Novice",
    Apprentice = "Apprentice",
    Adept = "Adept",
    Expert = "Expert",
    Master = "Master"
}

export class Skill {
    static DEFAULT_RANK: SkillRank = SkillRank.Untrained;
    type: SkillType;
    rank: SkillRank;

    constructor(type: SkillType, rank?: SkillRank) {
        this.type = type;
        this.rank = rank || Skill.DEFAULT_RANK;
    }
}

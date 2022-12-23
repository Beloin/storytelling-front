type NamedObject = {
    name: string;
}[];

export class DecoupageModel {
    constructor(
        $decoupageOrder: number,
        $interviewed: string,
        $subject: string,
        $timeInTimeline: string,
        $timeline: string,
        $grade: number,
        $observation: string,
        $actTime: string[],
        $sentiments: NamedObject,
        $sentimentActions: NamedObject
    ) {
        this.decoupageOrder = $decoupageOrder;
        this.interviewed = $interviewed;
        this.subject = $subject;
        this.timeInTimeline = $timeInTimeline;
        this.timeline = $timeline;
        this.grade = $grade;
        this.observation = $observation;
        this.actTime = $actTime;
        this.sentiments = $sentiments;
        this.sentimentActions = $sentimentActions;
    }

    private decoupageOrder: number; // "order" is a redgistered token

    private interviewed: string; // LIMIT 255
    private subject: string; // LIMIT 255

    // Format: 12:12:12


    private timeInTimeline: string; // LIMIT 15

    private timeline: string; // LIMIT 255

    private grade: number;

    private observation: string; // LIMIT 600

    // StoryTellingProject project;

    private actTime: string[];

    private sentiments: NamedObject;
    private sentimentActions: NamedObject;
}
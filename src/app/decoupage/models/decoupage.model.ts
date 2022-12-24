export type NamedObjectArray = {
    name: string;
}[];

export class DecoupageModel {
    constructor(
        $id: string,
        $decoupageOrder: number,
        $interviewed: string,
        $subject: string,
        $timeInTimeline: string,
        $timeline: string,
        $grade: number,
        $observation: string,
        $actTime: string[],
        $sentiments: NamedObjectArray,
        $sentimentActions: NamedObjectArray
    ) {
        this.id = $id;
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

    private id: string;
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

    private sentiments: NamedObjectArray;
    private sentimentActions: NamedObjectArray;


    /**
     * Getter $decoupageOrder
     * @return {number}
     */
    public get $decoupageOrder(): number {
        return this.decoupageOrder;
    }

    /**
     * Getter $interviewed
     * @return {string}
     */
    public get $interviewed(): string {
        return this.interviewed;
    }

    /**
     * Getter $subject
     * @return {string}
     */
    public get $subject(): string {
        return this.subject;
    }

    /**
     * Getter $timeInTimeline
     * @return {string}
     */
    public get $timeInTimeline(): string {
        return this.timeInTimeline;
    }

    /**
     * Getter $timeline
     * @return {string}
     */
    public get $timeline(): string {
        return this.timeline;
    }

    /**
     * Getter $grade
     * @return {number}
     */
    public get $grade(): number {
        return Math.trunc(this.grade);
    }

    /**
     * Getter $observation
     * @return {string}
     */
    public get $observation(): string {
        return this.observation;
    }

    /**
     * Getter $actTime
     * @return {string[]}
     */
    public get $actTime(): string[] {
        return this.actTime;
    }

    /**
     * Getter $sentiments
     * @return {NamedObjectArray}
     */
    public get $sentiments(): string[] {
        return this.sentiments.map((e) => e.name);
    }

    /**
     * Getter $sentimentActions
     * @return {NamedObjectArray}
     */
    public get $sentimentActions(): string[] {
        return this.sentimentActions.map((e) => e.name);
    }


}
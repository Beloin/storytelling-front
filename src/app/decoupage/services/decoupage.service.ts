import { Injectable } from "@angular/core";
import { DecoupageModel } from "../models/decoupage.model";
import { createMockDecoupage } from "../models/mock-decoupage";

@Injectable()
export class DecoupageService {
    /**
     * getAllDecoupages
     */
    public getAllDecoupages(): DecoupageModel[] {
        return createMockDecoupage(5)
    }
}
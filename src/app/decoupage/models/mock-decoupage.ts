import { DecoupageModel, NamedObjectArray } from "./decoupage.model";
import * as fk from "@faker-js/faker"

const faker = fk.faker;

export function createMockDecoupage(quantity = 10): DecoupageModel[] {
    let order = 0;
    const decoupageArray = []
    while (quantity > 0) {
        const decoupage = new DecoupageModel(
            order, faker.name.firstName(),
            faker.word.noun() + " " + faker.word.adjective(),
            `${generateRandomBetween(99)}:${generateRandomBetween(60)}:${generateRandomBetween(60)}`,
            faker.word.noun(), Math.random() * 10, faker.lorem.sentences(2),
            generateActTime(), generateNamedObject(), generateNamedObject()

        );
        decoupageArray.push(decoupage);
        order++;
        quantity--;
    }


    return decoupageArray;
}

function generateRandomBetween(num: number): number {
    return Math.trunc(Math.random() * num);
}

function generateNamedObject(): NamedObjectArray {
    return [{ name: faker.word.noun() }, { name: faker.word.noun() }]
}

function generateActTime(): string[] {
    const ra = Math.trunc(Math.random() * 100 % 3);
    if (ra == 2) {
        return ["INICIO", "MEIO"]
    } else {
        if (ra == 1) {
            return ["INICIO"]
        } else {
            return ["INICIO", "FIM"]
        }
    }
}
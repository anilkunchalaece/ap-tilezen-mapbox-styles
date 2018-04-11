import {APOLLO_MAPPING_BRIGHT, StyleFactory} from "../src/StyleFactory";

describe('style factory style creation', () => {
    test('style factory create style has correct resource urls from options', () => {
        const factory = new StyleFactory({
            tileUrl: "www.mytileservice.com/all/{z}/{x}/{y}.mvt",
            resourceUrl: "www.mytileservice.com/resources/"
        });

        const style = factory.createStyle(APOLLO_MAPPING_BRIGHT);
        expect(style["sprite"]).toBe("www.mytileservice.com/resources/sprites/apollomapping-bright-icons")
    });
});
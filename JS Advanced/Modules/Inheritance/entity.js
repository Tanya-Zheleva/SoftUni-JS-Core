export default class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Class cannot be instanced!');
        }

        this.name = name;
    }
}
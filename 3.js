function createNoProtoObject() {
    return Object.create(null); // Object prototype may only be an Object or null
}
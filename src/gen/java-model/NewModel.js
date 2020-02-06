import ClassModel from './ClassModel'

class NewModel extends ClassModel {
    insertOtherCode(builder) {
        console.log("implament in sub class");
        return builder.push("helllllllllllllllllllllllo");
    }
}

export default NewModel
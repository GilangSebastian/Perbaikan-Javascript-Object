const contacts = [{
    Id: 1,
    name: 'Andi',
    gender: 'male',
    group_ids: [1,2,3]
}, {
    id: 2,
    name: 'Budi',
    gender: 'male',
    group_ids: [1,2]
}, {
    id: 3,
    name: 'Cindy',
    gender: 'male',
    group_ids: [1]
}, {
    id: 4,
    name: 'David',
    gender: 'male',
    group_ids: [1,2]
}, {
    id: 5,
    name: 'Emily',
    gender: 'male',
    group_ids: [1,2,3]
}]

const groups = [{
    id: 1,
    name: 'Teman SMP'
}, {
    id: 2,
    name: 'Teman SMA'
}, {
    id: 3,
    name: 'Teman Kuliah'
}]

function showContactByGroup(group_name) {
    let validateId;

    for ( let i = 0; i < groups.length; i++ ) {
        if ( groups[i].name === group_name ) {
            validateId = groups[i].id
        }
    }

    let groupsName = []

    for ( let i = 0; i < contacts.length; i++ ) {
        let idGroups;

        for ( let j = 0; j < contacts[i].group_ids.length; j++ ) {
            if ( contacts[i].group_ids[j] == validateId ) {
                idGroups = true;
            }
        }
        if ( idGroups == true ) {
            groupsName.push(contacts[i].name)
        }
    }
    console.log(groupsName);
}

// console.log(groups);

// showContactByGroup('Teman Kuliah');
// showContactByGroup('Teman SMP');
showContactByGroup('Teman SMA');
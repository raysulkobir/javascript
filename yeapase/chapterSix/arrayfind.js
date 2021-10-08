var name = ['yeapes','raihan','rased','riaz']
var search = 'yeapes'
var isFound = false

for(i = 0; i < name.length; i++){
    if(search == name[i]){
        console.log('Found at index '+i)
        isFound = true
        break
    }
}

if(isFound == false){
    console.log('Data Not Found')
}
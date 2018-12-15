var object = [{
  name: 'smile1',
  sex: '男'
},{
  name: 'smile2',
  sex: '男'
},{
  name: 'smile3',
  sex: '男'
},{
  name: 'smile4',
  sex: '男'
},{
  name: 'angel1',
  sex: '女'
},{
  name: 'angel2',
  sex: '女'
},{
  name: 'angel3',
  sex: '女'
}]

function groupBy (objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

var groupByObject = groupBy(object, 'sex')

console.dir(groupByObject)
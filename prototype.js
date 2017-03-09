var parent = {
  value : "parentValue",
  obj : {
    objValue : "parentObjValue"
  },
  walk : function(){
    console.log("!walking");
  }
};

var child = Object.create(parent);
console.log("CHILD - child.value: ", child.value);
console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
 console.log("PARENT - parent.value: ", parent.value);
 console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
 console.log("parent: ", parent);
 console.log("child: ", child);

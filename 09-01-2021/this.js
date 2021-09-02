var fullName = "Nimit Maru";

var myObj = {
  fullName: "David Yang",
  property: {
    fullName: "Omri Bernstein",
    getFullName: function () {
      return this.fullName;
    },
  },
};

var whosName = myObj.property.getFullName;

console.log(whosName()); // Who's name is returned?

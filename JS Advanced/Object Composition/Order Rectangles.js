function solve(input) {
    let rectangles = [];

    for (let arr of input) {
        let rect = {
            width: arr[0],
            height: arr[1],
            area: function () {
                return this.width * this.height;
            },
            compareTo : function (other) {
                if (this.area() !== other.area()) {
                    return other.area() - this.area();
                }

                return other.width - this.width;
            }
        };

        rectangles.push(rect);
    }

    return rectangles.sort((a, b) => a.compareTo(b));
}


console.log(solve([[1,20],[20,1],[5,3],[5,3]]));
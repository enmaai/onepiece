function monthAndYearBetweenTwoDates(startDate,endDate){
    var minYear = startDate.getFullYear(),
        maxYear = endDate.getFullYear(),
        minMonth = startDate.getMonth() + 1,
        maxMonth = endDate.getMonth() + 1,
        ret = {};
    if(minYear == maxYear){ //simple loop
        var year = minYear,
            months = [];
        for(var i = minMonth;i <= maxMonth;i++){
            months.push(i);
        }
        ret[year] = months;
    }else{
        for(var i = minYear;i <= maxYear;i++){
            var obj = [];
            for(var j = 1;j <= 12;j++){
                if((i != minYear && i != maxYear) || (i == minYear && j >= minMonth) || (i == maxYear && j <= maxMonth)){
                    obj.push(j);
                }
            }
            ret[i] = obj;
        }
    }
    return ret;
}
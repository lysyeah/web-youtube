var Links ={
    setColor: function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

        // 두번쨰 color는 매개변수의 color이다.
        // 즉, setColor: function(color) 여기서의 color
        // html을 이용해서 jQuery가 css라는 함수를 만들어 놓은 것이다.
        // 단지 그 만들어 놓은 함수를 사용할 뿐이다.
        $('a').css('color', color);
    }
}

var Body = {
    setColor: function (color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function (color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}

function nightDayHandler(self){
    //target : body태그를 선택한다.
    var target = document.querySelector('body');
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';

        Links.setColor('white');
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night'

        Links.setColor('green');
    }
}
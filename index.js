$(function(){
    var word = ['ควาย',
    'เหี้ย',
    'ช้าง',
    'ฮิปโป',
    'นกกระกอก',
    'ประยุทธ์',
    'ทรัมป์',
    'บังโต',
    'ลุงเริง',
    'แมว',
    'หมา',
    'แฮมเตอร์',
    'มะเร็ง',
    'แง๊นนนน',
    'งู'];
    var pic = ['https://i.ytimg.com/vi/1fCrqWIQ19A/maxresdefault.jpg',
    'https://pbs.twimg.com/profile_images/978657978839543809/LTswaEUr_400x400.jpg',
    'https://www.sarakadee.com/wp-content/uploads/third-elephant01.jpg',
    'https://www.thairath.co.th/media/T18CT60ObSbLrsQ6mqow5HeBxBEQOzBG9kNMgpw5jiVbESsSgRJekZc.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Eurasian_Tree_Sparrow.jpg/1200px-Eurasian_Tree_Sparrow.jpg',
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/A601/production/_103879424_gettyimages-983412224.jpg',
    'https://brandinside.asia/wp-content/uploads/2018/01/shutterstock_617079053-1.jpg',
    'https://img.youtube.com/vi/EusBhW9tWmw/0.jpg',
    'https://i.ytimg.com/vi/an6TkN-tpv0/hqdefault.jpg',
    'https://www.petcitiz.info/wp-content/uploads/2017/11/01-1.jpg',
    'https://s.isanook.com/wo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvNC8yMDkyNy9kMjEuanBn.jpg',
    'http://shareloei.com/wp-content/uploads/2017/05/thumb45.jpg',
    'https://mpics.mgronline.com/pics/Images/561000003085001.JPEG',
    'https://f.ptcdn.info/100/057/000/p783rmiumvM9z8SOj6z-o.jpg',
    'https://f.ptcdn.info/719/035/000/1442951564-Iphone2362-o.jpg'];
    var num1=0,num2=0,num3=0;
    
    $('#go').click(function(){
    var name = $('#you').val();
    var day = $('#day').val();
    var zodiac = $('#zodiac').val();
    console.log(name);
    var rdm = random(name); 
    var myImage = document.getElementById('img');
    myImage.setAttribute("src",pic[rdm]);
    console.log(name);
    
    
    if(day==0&&zodiac==0&&num1==0){
        alert("ต้องเป็นคนยังไงกรอกข้อมูลก็ไม่ครบ");
        num1=1;
    }
    else if(day==0&&num2==0){
        alert("จำวันเกิดไม่ได้เหรอ");
        num2=1;
    }
    else if(zodiac==0&&num3==0){
        alert("ศึกษาความรู้ทั่วไปบ้างนะ");
        num3=1;
    }
    if(name!=""&&name!="<!--"){
        $("#input").hide();
        $('#img').fadeIn(3000);
        $("#go").hide();
        $("#name").append(name + '<br>');
        $("#name").fadeIn(4000);
        $("#be").append("คุณคือ " + word[rdm] + '<br>');
        $("#be").fadeIn(5000);
        $("#goAgain").fadeIn(4000);
    }else if(name=='<!--'){
        alert("ตั้งชื่อดีๆโหน่ย");
    }else{
        alert("ใส่ชื่อด้วยสิค้าบบบบบบบ!!!");
    }

    });    
    $('#goAgain').click(function(){
        num1=0,num2=0,num3=0;
        $("#be").empty();
        $("#name").empty();
        $("#input").fadeIn(3000);
        $('#img').hide();
        $("#name").hide();
        $("#be").hide();
        $("#goAgain").hide();
        $("#go").fadeIn(3000);
        $("#you").val("");
        
    });  
    
    function random(name) {
        return Math.floor(Math.random() * pic.length);
    }
      
    
  
});             
    


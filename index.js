$(function(){
    var word = ['ควาย',
    'เหี้ย',
    'ช้าง',
    'ฮิปโป',
    'นกกระกอก',
    'ประยุทธ์',
    'บังโต',
    'ลุงเริง',
    'แมว',
    'หมา',
    'แฮมเตอร์',
    'มะเร็ง',
    'แง๊นนนน',
    'งู',
    'สิงโต',
    'บิน ลาดิน',
    'ผีเสื้อสมุทร',
    'พระถังซัมจั๋ง',
    'ปลาทอง',
    'ผู้พันแซนเดอร์ส',];
    var pic = ['https://i.ytimg.com/vi/1fCrqWIQ19A/maxresdefault.jpg',
    'https://pbs.twimg.com/profile_images/978657978839543809/LTswaEUr_400x400.jpg',
    'https://www.sarakadee.com/wp-content/uploads/third-elephant01.jpg',
    'https://www.thairath.co.th/media/T18CT60ObSbLrsQ6mqow5HeBxBEQOzBG9kNMgpw5jiVbESsSgRJekZc.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Eurasian_Tree_Sparrow.jpg/1200px-Eurasian_Tree_Sparrow.jpg',
    'https://ichef.bbci.co.uk/news/660/cpsprodpb/A601/production/_103879424_gettyimages-983412224.jpg',
    'https://img.youtube.com/vi/EusBhW9tWmw/0.jpg',
    'https://i.ytimg.com/vi/an6TkN-tpv0/hqdefault.jpg',
    'https://www.petcitiz.info/wp-content/uploads/2017/11/01-1.jpg',
    'https://s.isanook.com/wo/0/rp/r/w700/ya0xa0m1w0/aHR0cHM6Ly9zLmlzYW5vb2suY29tL3dvLzAvdWQvNC8yMDkyNy9kMjEuanBn.jpg',
    'http://shareloei.com/wp-content/uploads/2017/05/thumb45.jpg',
    'https://mpics.mgronline.com/pics/Images/561000003085001.JPEG',
    'https://f.ptcdn.info/100/057/000/p783rmiumvM9z8SOj6z-o.jpg',
    'https://f.ptcdn.info/719/035/000/1442951564-Iphone2362-o.jpg',
    'http://issue247.com/wp-content/uploads/2018/03/%E0%B8%97%E0%B8%B3%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B9%80%E0%B8%AB%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B9%82%E0%B8%95%E0%B8%88%E0%B8%B0%E0%B8%8A%E0%B9%88%E0%B8%A7%E0%B8%A2%E0%B9%83%E0%B8%AB%E0%B9%89%E0%B8%97%E0%B8%B3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%9A%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%AA%E0%B8%B3%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%88.jpg',
    'https://i.ytimg.com/vi/56clWBWx6Oo/maxresdefault.jpg',
    'https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.0-9/33377318_1895360590547582_4775460822300229632_n.jpg?_nc_cat=101&_nc_eui2=AeFZnFkKR6AoHtg4VKiadsSsnWLI5bNt-ExOptjkTZVegHagx-xT7DfGGpCleyG0yRWv6UUjFIFburOBos-0u2vxmPsj884TFsGpgQ9FdGWVMA&_nc_ht=scontent.fbkk12-1.fna&oh=42153defdf8e53ecc0d13adf5e0992c8&oe=5D255BC2',
    'https://f.ptcdn.info/902/049/000/omxwpj95nZ4wnfU1uEX-o.jpg',
    'http://goldfishth.com/wp-content/uploads/2014/05/%E0%B8%AB%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%84%E0%B8%A3%E0%B8%B5%E0%B8%9A%E0%B8%9B%E0%B8%A5%E0%B8%B2%E0%B8%97%E0%B8%AD%E0%B8%87.jpg',
    'https://teen.mthai.com/app/uploads/2012/10/43u17-1.jpg'     ];
    var comment =['มอออออออออออออออออออออออออ',
    'วันนี้กินไก่บนบกหรือในน้ำดีน้าาาาา',
    'ไม่ได้ตั้งใจใหญ่แต่มันใหญ่เอง TT',
    'มันเดินอุ้ยอ้ายตะลันล๊า ตะลั้นลา',
    'นก นก นก นก นก นก นก',          
    'ตายแน่ๆ',
    'บังโตถูกใจสิ่งนี้ "บังยังไม่ตาย "',
    'ลุงเริงไง',
    'เมี๊ยวววววววววววว',
    'โฮ่ง โฮ่ง โฮ่ง',
    'จั๊กกรี๊สสสสสสสส',
    'แย่',
    'เทวดาตัวน้อย',
    'อสรพิษ',
    'พ่อบ้านใจกล้า',
    'Allorhu Akbar',
    'ฟังเพลงจนหลับไม่ตื่นอีกเลย',
    'ขมพูทวีปใก้ลเหมือนปากซอย',
    'บุ๋ง บุ๋ง บุ๋ง',
    'ไก่มั้ยครับไก่ ซื้อมั้ยครับจะกลับแล้วไก่'];
    
    
    
    var num1=0,num2=0,num3=0;
    
    $('#go').click(function(){
    var name = $('#you').val();
    var day = $('#day').val();
    var zodiac = $('#zodiac').val();
    console.log(name);
    var rdm = random(name); 
    var myImage = document.getElementById('img');
    myImage.setAttribute("alt",word[rdm]);
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
        alert("ราศีงายยยยยย");
        num3=1;
    }
    if(name!=""&&name!="<!--"){
        $("#input").hide();
        $('#img').fadeIn(3000);
        $("#go").hide();
        $("#name").append(name + '<br>');
        $("#name").fadeIn(4000);
        $("#be").append("คุณคือ " + word[rdm] + '<br>');
        $("#more").append("(  " + comment[rdm] +"  )" + '<br>');
        $("#more").fadeIn(6000);
        $("#be").fadeIn(5000);
        $("#goAgain").fadeIn(6000);
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
        $("#more").empty();
        $("#input").fadeIn(3000);
        $('#img').hide();
        $("#name").hide();
        $("#be").hide();
        $("#goAgain").hide();
        $("#go").fadeIn(3000);
        $("#more").hide();
        $("#you").val("");
        
    });  
    
    function random(name) {
        return Math.floor(Math.random() * pic.length);
    }
    

    var modal = document.getElementById('myModal');


var img = document.getElementById('img');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
    
  
});             
    


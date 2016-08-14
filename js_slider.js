$(document).ready(function()
{ 
    /*Виклик слайдера*/
    slider2();
})

function slider2()
{
    /*Максимальна кількість слайдів*/
    var img_length = $('.images_box > img').length - 1;
    list_indicator(img_length);
    
    /*Початкове зображення*/ 
    var random_num = Math.floor(Math.random() * (img_length + 1));
    
    var control = false;
    
    if(control == false)
    {
        /*Задали перші активні елементи*/
        active_elements(random_num, img_length);
        $('#slide_list_img > li').eq(random_num).addClass('slide_active');
        control = true;
    }
    
    /*Події при кліку*/
    $('.but').click(function()
    {    
        /*Зупинили прокрутку зображень*/   
        control = false;
        
        /*Запустим прокрутку через 15сек*/
        setTimeout(function(){control=true},20000)
         
            /*Куди крутим*/
            var attr = $(this).attr('rel');
            /*На ліво*/
            if(attr == 'left' && random_num !==0)
            {
                random_num--;
                active_elements(random_num, img_length);
            }   
            /*На право*/
            else if (attr =='right' && random_num !== img_length)
            {
                random_num++;
                active_elements(random_num, img_length);
            } 
            /*Мінімальне значення*/
            else if (attr == 'left' || attr =='right' && random_num == 0 )
            {
                random_num = img_length;
                active_elements(random_num, img_length);
            } 
            /*Максимальне значення*/
            else if (attr == 'left' || attr =='right' && random_num == img_length )
            {
                random_num = 0;
                active_elements(random_num, img_length);
            }
    })
    
    /*Виклик автоперемикача зображення через 3сек */              
    auto_time(7000, 0);
    
    function auto_time(time,dilay)
    {
       var interval = setInterval(function() 
       {
            if(control == true && random_num !== img_length )
            {   
                random_num++;                       
                active_elements(random_num, img_length);
                console.log(random_num + "Блок 1");
            }
            else if(control == false)
            {
                clearInterval(interval);
                console.log(random_num + "Інтервал зупинено");
                auto_time(7000,22000)
            }  
            else if(random_num == img_length)
            {
                random_num = 0;                       
                active_elements(random_num, img_length);
                console.log(random_num + "Максивальне значення");
            }
       }, time,dilay);
    } 
}

function active_elements(num_el, max_elms)
{
    /*Видалили усі вже присутні класи*/
     $('.images_box > img').removeClass('active_img');
     $('.images_box > img').removeClass('before_active');
     $('.images_box > img').removeClass('after_active');
     $('#slide_list_img > li').removeClass('slide_active');
     
     /*Загальні параметри*/
     if(num_el !== max_elms && num_el !== false)
     {
         $('.images_box').children().eq(num_el).addClass('active_img');
         $('.images_box').children().eq(num_el-1).addClass('before_active');
         $('.images_box').children().eq(num_el+1).addClass('after_active');
         $('#slide_list_img > li').eq(num_el).addClass('slide_active');
     } 
     /*Перше число*/
     else if(num_el == false)
     {
        $('.images_box').children().eq(num_el).addClass('active_img');
        $('.images_box').children().eq(num_el+1).addClass('after_active');
        $('.images_box').children().eq(max_elms).addClass('before_active');
        $('#slide_list_img > li').eq(num_el).addClass('slide_active');
     }
     /*Останнє число*/
     else if(num_el == max_elms)
     {
        $('.images_box').children().eq(max_elms).addClass('active_img');
        $('.images_box').children().eq(0).addClass('after_active');
        $('.images_box').children().eq(max_elms-1).addClass('before_active');
        $('#slide_list_img > li').eq(num_el).addClass('slide_active');
     }
}

function list_indicator(lenght_list)
{
    var el = "<li class='ind_img'><a href=''></a></li>";
    
    for (i=0; i<lenght_list+1; i++)
    {
       $('#slide_list_img').append(el);     
    }
    
}
<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style_image_slide.css" />
</head>

<body>
<div id="slide_block" >
    <!-- Контейнер зображень -->
    <div id="slide_body">
    <span class="but but_left"  rel='left'> <img src="./back.svg"></span>
    <span class="but but_right" rel='right'><img src="./next.svg"></span>
        <div class="images_box">   
            <img class='img_slide_elem' src="slide_1.jpg" rel="1" alt="" >
            <img class='img_slide_elem' src="slide_2.jpg" rel="2" alt="" >
            <img class='img_slide_elem' src="slide_3.jpg" rel="3" alt="" >                     
            <img class='img_slide_elem' src="slide_4.jpg" rel="4" alt="" > 
            <img class='img_slide_elem' src="slide_5.jpg" rel="5" alt="" > 
            <img class='img_slide_elem' src="slide_6.jpg" rel="6" alt="" > 
            <img class='img_slide_elem' src="slide_7.jpg" rel="7" alt="" > 
            <img class='img_slide_elem' src="slide_8.jpg" rel="8" alt="" > 
            <img class='img_slide_elem' src="slide_9.jpg" rel="9" alt="" > 
              <!-- Список індикації зображення -->
        </div> 
        <ul id='slide_list_img'>
        </ul>                                         
    </div>
  
</div>

<script type="text/javascript" src="jquery-1.11.3.js"></script>
<script type="text/javascript" src="js_slider.js"></script>
</body>

</html>
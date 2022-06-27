var section = document.createElement('section');
section.setAttribute('class', 'banner_section');
section.setAttribute('id', 'upsalle_id');

var text_div = document.createElement('div');

var title = document.createElement('p');
title.setAttribute('id','upsalle_title_id')
title.setAttribute('class','banner_title')
title.setAttribute('name','dictionary')
text_div.appendChild(title)

var subtitle = document.createElement('p');
subtitle.setAttribute('id','upsalle_subtitletitle_id')
subtitle.setAttribute('class','bunner_subtitle')
subtitle.setAttribute('name','dictionary')
text_div.appendChild(subtitle)

section.appendChild(text_div)

var image = document.createElement('img');
image.setAttribute('src','./assets/money_icon.svg')
section.appendChild(image)

document.getElementById("main_section_id").appendChild(section)
export default function banners() {
    const ul = document.createElement('ul');
    ul.setAttribute('class', 'banners');

    for (let i = 0; i < 50; i++) {
        const li = document.createElement("li");
        li.appendChild(banner('upsalle'));
        ul.appendChild(li);
    }

    return ul;
}

function banner(name) {
    const section = document.createElement('section');
    section.setAttribute('id', `${name}_id`);
    section.setAttribute('class', 'banner_section');

    const text_div = document.createElement('div');

    const title = document.createElement('p');
    title.setAttribute('id', `${name}_title_id`);
    title.setAttribute('class', 'banner_title');
    title.setAttribute('name', 'dictionary');
    text_div.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.setAttribute('id', `${name}_subtitle_id`);
    subtitle.setAttribute('class', 'bunner_subtitle');
    subtitle.setAttribute('name', 'dictionary');
    text_div.appendChild(subtitle);

    section.appendChild(text_div);

    const image = document.createElement('img');
    image.setAttribute('src', './assets/money_icon.svg');
    section.appendChild(image);

    return section;
}

import $ from 'jquery';
import { onLoadHtmlSucces } from '../core/includes';


const duration = 300;

function filterByCity(city){
    $('[wm-city]').each(function(i, e){
        const isTarget = $(this).attr('wm-city') === city 
            || city == null;

        if(isTarget){
            $(this).parent().removeClass('d-none');
            $(this).fadeIn(duration);
        } else{
            $(this).fadeOut(duration, () =>{
                $(this).parent().addClass('d-none');
            });
        }
    });
}

$.fn.cityButtons = function(){
    const cities = new Set;
    $('[wm-city]').each((i, e) =>{
        cities.add($(e).attr('wm-city'))
    });

    const btns = Array.from(cities).map(city =>{
        const btn = $('<button>')
            .addClass(['btn', 'btn-info'])
            .html(city)
        btn.on('click', function(e){
            $('.active').removeClass('active');
            $(this).addClass('active');
            filterByCity(city);
        });
        return btn;
    });

    const btnAll = $('<button>')
        .addClass(['btn', 'btn-info', 'active'])
        .html('Todas');
    btnAll.on('click',  function(e){
        $('.active').removeClass('active');
        $(this).addClass('active'); 
        filterByCity(null);
    });
    btns.unshift(btnAll);

    const btnGroup = $('<div>').addClass('btn-group');
    btnGroup.append(btns);

    this.html(btnGroup)
    return this;
}

onLoadHtmlSucces(function(){
    $('[wm-city-buttons]').cityButtons();
});

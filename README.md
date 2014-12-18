verySimpleRating
================

javascript

```javascript
jQuery(document).ready(function(){
   jQuery('.stars_rating_cont').verySimpleRating({
       ico_path: "/icons/star16.png",
       ico_width: 15,
       ico_height:16,
       ico_right_padding:1,
       color_top: '#4c480b',
       color_back: '#8d8d8d'
   });
});
```


html

```html
<div class="stars_rating_cont" data-average="3" style="display: none"></div>
```

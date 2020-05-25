const cities = ['All Cities','Amsterdam','Athens','Barcelona','Berlin','Bratislava','Brussels','Budapest','Copenhagen','Dublin','Edinburgh','Geneva',
'Hamburg','Helsinki','Krakow','Lisbon','Ljubljana','London','Luxembourg','Lyon','Madrid','Milan','Munich','Oporto','Oslo',
'Paris','Prague','Rome','Stockholm','Vienna','Warsaw','Zurich']

const cuisines = ['French', 'Dutch', 'European', 'VegetarianFriendly', 'GlutenFreeOptions', 'Mediterranean', 'International', 'VeganOptions',
'Contemporary', 'Asian', 'Indonesian', 'Japanese', 'Seafood', 'FastFood', 'American', 'Bar', 'CentralEuropean', 'Pub', 'Cafe', 
'British', 'Healthy', 'Indian', 'Tibetan', 'Nepali', 'Italian', 'Barbecue', 'Steakhouse', 'Latin', 'Argentinean', 'SouthAmerican',
'Grill', 'Delicatessen', 'Pizza', 'Thai', 'Soups', 'StreetFood', 'Diner', 'Lebanese', 'MiddleEastern', 'Israeli', 'NewZealand', 'Chinese', 
'Belgian', 'Sushi', 'Spanish', 'Korean', 'Turkish', 'Vietnamese', 'Irish', 'German', 'Halal', 'Gastropub', 'Swiss', 'Scandinavian', 'nan', 'Fusion', 'Arabic', 'Balti', 'Moroccan', 
'Tunisian', 'Persian', 'WineBar', 'Portuguese', 'Mexican', 'CentralAmerican', 'Australian', 'EasternEuropean', 'Greek', 'Caribbean', 'African', 'Ethiopian', 'BrewPub', 'Southwestern',
'Singaporean', 'Malaysian', 'MinorityChinese', 'Peruvian', 'Taiwanese', 'Hawaiian', 'Jamaican', 'Kosher', 'Brazilian', 'Pakistani', 'Swedish', 'Norwegian', 'Afghani', 'Colombian', 'Ecuadorean', 
'Austrian', 'Danish', 'Romanian', 'Cajun&Creole', 'Georgian', 'Egyptian', 'CentralAsian', 'Cuban', 'Russian', 'Fujian', 'Czech', 'Armenian', 'Venezuelan', 'Bangladeshi', 'Scottish', 'Azerbaijani', 
'Polynesian', 'Albanian', 'Hungarian', 'Filipino', 'Croatian', 'Polish', 'Yunnan', 'Cambodian', 'Chilean', 'Mongolian', 'Uzbek', 'Xinjiang', 'Ukrainian', 'SriLankan', 'Caucasian', 'Latvian', 'Salvadoran', 
'Guatemalan', 'NativeAmerican', 'Canadian', 'Slovenian', 'Burmese', 'PuertoRican', 'Welsh']

// Selectpicker for Search section

let string = '<option value = 0>' + cities[0] + '</option>';
for(let i=1; i<cities.length; i++){
    string = string + '<option value = '+ i + '>' + cities[i] + '</option>';
}
document.getElementById('search-city').innerHTML = string;

// Selectpicker for Content section 

string = '';
for(let i=0; i<cities.length; i++){
    string = string + '<option value = '+ i + '>' + cities[i] + '</option>';
}
document.getElementById('city').innerHTML = string;

string = '';
for(let i=0; i<cuisines.length; i++){
    string = string + '<option value = '+ i + '>' + cuisines[i] + '</option>';
}

document.getElementById('cuisine').innerHTML = string;


$('.selectpicker').selectpicker();

const minDate = '2010-01-01';
const today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
const yy = today.getFullYear();
if(dd < 10){
    dd = '0' + dd;
}
if(mm < 10){
    mm = '0' + mm;
}
const maxDate = yy + '-' + mm + '-' + dd;

$('.review-date').attr('min',minDate);
$('.review-date').attr('max',maxDate);

$('#predictor').submit(function(e){
    event.preventDefault()
    const name = $('.rest-name').val();
    const city = cities[$('#city').children('option:selected').val()];
    const cuisine_ind = $('#cuisine').val();
    const cuisine = [];
    for(let i=0;i<cuisine_ind.length;i++){
        cuisine.push(cuisines[cuisine_ind[i]]);
    }
    const noReviews = $('.no-reviews').val();
    const ranking = $('.ranking').val();
    const reviewDate = $('.review-date').val();
    const review = $('#review').val();
    
    $('.information').addClass('hidden');
    $('.rating').removeClass('hidden');
})


$('#search-button').click(function(){
    restName = $('#search-restaurant').val();
    if(restName === '') $('.search-no-result').removeClass('hidden');
    else {
        $('.search-no-result').addClass('hidden');
        $('#result').removeClass('hidden');
        $('.search-result').removeClass('hidden');
    }
})

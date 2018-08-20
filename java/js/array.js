// to find the array length
var len_input = ['a','b','c','d'];
var len=len_input.length;
document.getElementById("arr__length__output").value = len;
document.getElementById("arr__length__name").value = len_input;



// code for prototype
function second() {
    var name = ['neslee', 'shruthi', 'devadiga', 'anush'];
    document.getElementById("arr__prototype__name").value = name;

    if (!Array.prototype.first) {
        Array.prototype.first = function () {
            return this[0];
        }
    }
    document.getElementById("arr__prototype__output").value = name.first();
}

// array form
function array_from() {
    var from_array=document.getElementById("arr__from__name").value;
    Array.from(from_array);
document.getElementById("arr__from__output").value=Array.from(from_array);
}

//array of
function array_of() {
    // var of_array=document.getElementById("arr__of__name").value;
    // Array.of(of_array);
    // console.log(of_array);
    document.getElementById("of").innerHTML=Array.of(7,10);
}

//array Concat

var array_concat1=['a','b','c','d'];
var array_concat2=['n','m','k','l'];
var concat__answer=array_concat1.concat(array_concat2);
document.getElementById("arr__concat1").value = array_concat1;
document.getElementById("arr__concat2").value = array_concat2;
function array_concat(){
    document.getElementById("arr__concat__output").value = concat__answer;
}

// array within
var array_within=[1,2,3,4,5,6,7];
document.getElementById("arr__within").value = array_within;
var within__answer=array_within.copyWithin(1, 3);

function arr_within(){
    document.getElementById("arr__within__output").value = within__answer;
}


// array entries
var array_entries=['l','m','n','o'];
var entry1 = array_entries.entries();
document.getElementById("arr__entries").value = array_entries;

function arr_entries(){
    document.getElementById("arr__entries__output").value = entry1.next().value;
    document.getElementById("arr__entries__output1").value = entry1.next().value;
}


// array every
var array_every=[1,25,3,4,58,6,79];
document.getElementById("arr__every").value = array_every;

function arr_every(){
    function greater(currentValue) {
        return currentValue < 75;
      }
      var every1=array_every.every(greater)
    document.getElementById("arr__every__output").value = every1;
    
}


// array fill
var array_fill=[1,2,3,4,5,6,7];
document.getElementById("arr__fill").value = array_fill;
var fill__answer=array_fill.fill(0, 2, 6);

function arr_fill(){
    document.getElementById("arr__fill__output").value = fill__answer;
}

// array filter
var array_filter=['a','abc','defg','hijklm','nopqst'];
document.getElementById("arr__filter").value = array_filter;
var filter__answer = array_filter.filter(word => word.length > 4);

function arr_filter(){
    document.getElementById("arr__filter__output").value = filter__answer;
}

// array find
var array_find=[5,10,12,17,20,30,55,100,115];
document.getElementById("arr__find").value = array_find;

function arr_find(){
    var find__answer= array_find.find(function(element) {
        return element > 10;
      });
    document.getElementById("arr__find__output").value = find__answer;
}


// array findi
var array_findi=[5,10,12,17,20,30,55,100,115];
document.getElementById("arr__findi").value = array_findi;

function arr_findi(){
    function big(element) {
        return element > 17;
      }
      var ind=array_findi.findIndex(big)
    document.getElementById("arr__findi__output").value = ind;
}


// array foreach
var array_foreach=[5,10,12,17,20,30,55,100,115];
document.getElementById("arr__foreach").value = array_foreach;

function arr_foreach(){
    array_foreach.forEach(function(element) {
        var each=document.getElementById("arr__foreach__output").value=element;
      });
    document.getElementById("arr__foreach__output1").value = each;
}


// array includes
var array_includes=['neslee', 'shruthi', 'devadiga', 'anush'];
document.getElementById("arr__includes").value = array_includes;
function arr_includes(){
    var res=array_includes.includes('neslee');
    document.getElementById("arr__includes__output").value=res;
}


// array indexof
var array_indexof=['neslee', 'shruthi', 'devadiga', 'anush','devadiga'];
document.getElementById("arr__indexof").value = array_indexof;
function arr_indexof(){
    var indexof_res=array_indexof.indexOf('devadiga', 4);
    document.getElementById("arr__indexof__output").value=indexof_res;
}


// array join
var array_join=['neslee', 'shruthi', 'devadiga', 'anush','devadiga'];
document.getElementById("arr__join").value = array_join;
function arr_join(){
    var join_res=array_join.join('++');
    document.getElementById("arr__join__output").value=join_res;
}

// array key
var array_key=['neslee', 'shruthi', 'devadiga', 'anush','devadiga'];
document.getElementById("arr__key").value = array_key;
function arr_key(){
    var key_res = array_key.keys();
    for (let key of key_res) {
     
    document.getElementById("arr__key__output").value=key;   
      }
        
}



// array lastindexof
var array_lastindexof=['neslee', 'shruthi', 'devadiga', 'anush','devadiga'];
document.getElementById("arr__lastindexof").value = array_lastindexof;
function arr_lastindexof(){
// var array_lastindexof=['neslee', 'shruthi', 'devadiga', 'anush','devadiga'];
        var lastindexof_res=array_lastindexof.lastIndexOf('devadiga')
     
    document.getElementById("arr__lastindexof__output").value=lastindexof_res; 
}


// array map
var array_map=[1,2,3,4,5];
document.getElementById("arr__map").value = array_map;
function arr_map(){
        var map_res=array_map.map(x => x * 10);
     
    document.getElementById("arr__map__output").value=map_res; 
}

// array pop
var array_pop=['hi','hello','this','how','do'];
document.getElementById("arr__pop").value = array_pop;
function arr_pop(){
        var pop_res=array_pop.pop();
     
    document.getElementById("arr__pop__output").value=pop_res; 
}

// array push
var array_push=['hi','hello','this','how','do'];
document.getElementById("arr__push").value = array_push;
function arr_push(){
        array_push.push('where');
     
    document.getElementById("arr__push__output").value=array_push; 
}

// array reduce
var array_reduce=[11,12,13,14,15];
document.getElementById("arr__reduce").value = array_reduce;
function arr_reduce(){
        array_res=(accumulator, currentValue) => accumulator + currentValue;
        array_res1=array_reduce.reduce(array_res);
    document.getElementById("arr__reduce__output").value=array_res1; 
}
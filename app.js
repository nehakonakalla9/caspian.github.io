const GA = document.getElementById('GA');
const GB=document.getElementById('GB');
const GC=document.getElementById('GC');
let result='';
function GASelectedTextValue() {
    let grp_a = GA.value;
    result=result+'  '+grp_a;
    if(grp_a==='A'){
        GroupA();
    }
    if(grp_a==='B'){
        GroupB();
    }
    document.getElementById('op').innerHTML = result;
};
function GBSelectedTextValue(){
    let grp_b=GB.value;
    result=result+'  '+grp_b;
    if(grp_b==='A1'){
        GroupA1();
    }
    if(grp_b==='A2'){
        GroupA2();
    }
    if(grp_b==='A3'){
        GroupA3();
    }
    if(grp_b==='B1'){
        GroupB1();
    }
    if(grp_b==='B2'){
        GroupB2();
    }
    if(grp_b==='B3'){
        GroupB3();
    }
    document.getElementById('op').innerHTML = result;
}
function GCSelectedTextValue(){
    let grp_c=GC.options[GC.selectedIndex].innerHTML;
    result=result+'  '+grp_c;
    document.getElementById('op').innerHTML = result;
}
const GroupA=(()=>{
   GB.innerHTML+=`
    <option value="A1">A1</option>
    <option value="A2">A2</option>
    <option value="A3">A3</option>
   `;
});
const GroupB=(()=>{
    GB.innerHTML+=`
     <option value="B1">B1</option>
     <option value="B2">B2</option>
     <option value="B3">B3</option>
    `;
 });
 const GroupA1=(()=>{
    GC.innerHTML+=`
    <option value="A1">Sub_A1</option>
    <option value="A1">Sub_A2</option>
    `;
 });
 const GroupA2=(()=>{
    GC.innerHTML+=`
    <option value="A2">Sub_A3</option>
    <option value="A2">Sub_A4</option>
    `;
 });
 const GroupA3=(()=>{
    GC.innerHTML+=`
    <option value="A3">Sub_A5</option>
    <option value="A3">Sub_A6</option>
    `;
 });
 const GroupB1=(()=>{
    GC.innerHTML+=`
    <option value="B1">Sub_B1</option>
    <option value="B1">Sub_B2</option>
    `;
 });
 const GroupB2=(()=>{
    GC.innerHTML+=`
    <option value="A2">Sub_B3</option>
    <option value="A2">Sub_B4</option>
    `;
 });
 const GroupB3=(()=>{
    GC.innerHTML+=`
    <option value="A3">Sub_B5</option>
    <option value="A3">Sub_B6</option>
    `;
 });
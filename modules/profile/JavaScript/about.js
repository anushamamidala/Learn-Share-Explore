// this function displays the list of the terms of use
let termsOfUse = ['No data will be leaked!','No cases will be filed by you','The four of us listed above are the sole owners of everything','Anyone who files a case against us will have ten cases filed against him in the international court of justice','The people making this are not liable if your data, life savings or kids are lost.','Our sole competetion in terms of market reach are Google Inc. who take a slight edge as they own android','But fear not we are working on our own operating system, the mandroid, because ours is more manly.','The author of these terms is not liable for any action for his words in any court of law.',"But i hear he's quite good looking."]
function listTerms(){
    let temp='';
    for(let t of termsOfUse){
        temp+='<li>'+t+'</li>';
    }
    document.getElementById('termsOfUse').innerHTML=temp;
}
listTerms();

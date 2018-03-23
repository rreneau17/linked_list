function Node(data){
    this.data=data;
    this.next=null;
}
function Solution(){
    this.insert=function(head,data){
        var node = new Node(data);
        if (head == null){
            head = node
        }
        else {
            var temp = head;
            // console.log(temp.next);
            while (temp.next != null)
                temp = temp.next
                temp.next = node;
        }
        console.log(JSON.stringify(head));
        return head;
    };
    this.display=function(head){
        var start=head;
            while(start){
                //console.log(start.data);
                // console.log('next :', start.next);
                start=start.next;
            }
    };
}



function main(){
    var T = 4;
    var head=null;
    var mylist=new Solution();
    linkedArray = [2, 3, 4, 1];
    for(i=0;i<T;i++){
        var data=linkedArray[i];
        head=mylist.insert(head,data);
    }
    mylist.display(head);
}	

function checking() {
    var testArr = [1,2,3];
    i = 0;
    while (testArr[i]) {
        console.log(testArr[i]);
        i++;
    }
}

main();
checking();
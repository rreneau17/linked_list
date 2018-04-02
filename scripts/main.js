function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function(data) {
        this.data = data;
        this.next = null;
    };

    this.size = function() {
        return length;
    };

    this.head = function() {
        return head;
    }

    this.add = function(data) {
        var node = new Node(data);
        if(head === null) {
            head = node;
        } else {
            currentNode = head;

            while(currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;    
        }
        length++;
    };

    this.remove = function(data) {
        var currentNode = head;
        var previousNode;
        if (currentNode.data === data) {
            head = currentNode.next;
        } else {
            while(currentNode.data !== data) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length --;
    };

    this.isEmpty = function(data) {
        return length === 0;
    }

    this.indexOf = function(data) {
        var currentNode = head;
        var index = -1;

        while(currentNode) {
            index++;
            if(currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };

    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count ++;
            currentNode = currentNode.next;
        }
        return currentNode.data;
    };
    
    this.addAt = function(index, data) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index > length) {
            return false;
        }

        if(index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while(currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }
}

var conga = new LinkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
for (var i=0; i<conga.size(); i++ ) {
    console.log(conga.elementAt(i));
}
console.log(conga);

